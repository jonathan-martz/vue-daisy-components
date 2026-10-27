import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createRequire, stripTypeScriptTypes } from "node:module";
import { pathToFileURL } from "node:url";
import test from "node:test";
import { parse, compileScript } from "@vue/compiler-sfc";
import { createSSRApp } from "vue";
import { renderToString } from "vue/server-renderer";
import { compile } from "tailwindcss";

const require = createRequire(import.meta.url);

function moduleUrl(source) {
	return `data:text/javascript;base64,${Buffer.from(source).toString("base64")}`;
}

async function loadComponent(name) {
	const filename = new URL(`../components/Daisy${name}.vue`, import.meta.url);
	const source = await readFile(filename, "utf8");
	const { descriptor } = parse(source, { filename: filename.pathname });
	const compiled = compileScript(descriptor, { id: name, inlineTemplate: true });
	let javascript = stripTypeScriptTypes(compiled.content);
	const imports = [...javascript.matchAll(/from ["']([^"']+)["']/g)];
	for (const [, specifier] of imports) {
		let resolved;
		if (specifier.startsWith(".")) {
			const utility = await readFile(new URL(`${specifier}.ts`, filename), "utf8");
			resolved = moduleUrl(stripTypeScriptTypes(utility));
		} else {
			resolved = pathToFileURL(require.resolve(specifier)).href;
		}
		javascript = javascript.replace(`from "${specifier}"`, `from "${resolved}"`);
		javascript = javascript.replace(`from '${specifier}'`, `from "${resolved}"`);
	}
	return (await import(moduleUrl(javascript))).default;
}

const cases = {
	Alert: {
		base: "alert",
		variants: ["info", "success", "warning", "error"],
	},
	Button: {
		base: "btn",
		variants: ["primary", "secondary", "accent", "neutral", "ghost", "link", "info", "success", "warning", "error"],
	},
	Badge: {
		base: "badge",
		variants: ["primary", "secondary", "accent", "neutral", "info", "success", "warning", "error"],
	},
};

for (const [name, { base, variants }] of Object.entries(cases)) {
	test(`Daisy${name} renders its base class and every color variant`, async () => {
		const component = await loadComponent(name);
		for (const variant of variants) {
			const html = await renderToString(createSSRApp(component, { variant }));
			const classes = html.match(/class="([^"]+)"/)[1].split(/\s+/);
			assert.ok(classes.includes(base), html);
			assert.ok(classes.includes(`${base}-${variant}`), html);
		}
	});
}

test("Hero and Card use the same color classes for their controls", async () => {
	const hero = await loadComponent("Hero");
	const heroHtml = await renderToString(createSSRApp(hero, { variant: "warning" }));
	assert.match(heroHtml, /class="[^"]*\bbtn\b[^"]*\bbtn-warning\b/);
	const card = await loadComponent("Card");
	const cardHtml = await renderToString(createSSRApp(card, {
		badge: "New",
		badgeVariant: "success",
		actions: [{ label: "Continue", variant: "primary" }],
	}));
	assert.match(cardHtml, /class="[^"]*\bbadge\b[^"]*\bbadge-success\b/);
	assert.match(cardHtml, /class="[^"]*\bbtn\b[^"]*\bbtn-primary\b/);
});

test("Tailwind generates CSS for all statically declared color variants", async () => {
	const source = await readFile(new URL("../utils/variantClasses.ts", import.meta.url), "utf8");
	const candidates = [...source.matchAll(/"(?:alert|btn|badge)-[\w-]+"/g)]
		.map(([match]) => match.slice(1, -1));
	const compiler = await compile('@tailwind utilities;\n@plugin "daisyui";', {
		base: new URL("..", import.meta.url).pathname,
		loadModule: async (id) => ({
			base: new URL("..", import.meta.url).pathname,
			module: (await import(pathToFileURL(require.resolve(id)).href)).default,
		}),
	});
	const css = compiler.build(["alert", "btn", "badge", ...candidates]);
	for (const candidate of ["alert", "btn", "badge", ...candidates]) {
		assert.match(css, new RegExp(`\\.${candidate}(?=[\\s{,:])`), `Missing CSS for ${candidate}`);
	}
	const stylesheet = await readFile(new URL("../styles.css", import.meta.url), "utf8");
	assert.ok(stylesheet.includes('@source "./utils";'));
});
