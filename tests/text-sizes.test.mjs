import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { stripTypeScriptTypes } from "node:module";
import test from "node:test";
import { parse, compileScript } from "@vue/compiler-sfc";

test("text sizes map to complete, statically detectable Tailwind classes", async () => {
	const source = await readFile(new URL("../utils/textSizeClasses.ts", import.meta.url), "utf8");
	const javascript = stripTypeScriptTypes(source);
	const { textSizeClasses } = await import(
		`data:text/javascript;base64,${Buffer.from(javascript).toString("base64")}`
	);
	const sizes = ["xs", "sm", "base", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl"];
	assert.deepEqual(Object.keys(textSizeClasses), sizes);
	for (const size of sizes) {
		assert.equal(textSizeClasses[size], `text-${size}`);
	}
	const css = await readFile(new URL("../styles.css", import.meta.url), "utf8");
	assert.ok(css.includes('@source "./utils";'));
});

const components = {
	Hero: ["titleSize", "descriptionSize", "actionSize"],
	Card: ["titleSize", "descriptionSize", "actionSize"],
	Accordion: ["titleSize", "descriptionSize"],
	Collapse: ["titleSize", "descriptionSize"],
	Alert: ["titleSize", "messageSize", "closeSize"],
	Headline: ["titleSize"],
	Label: ["labelSize"],
	Divider: ["labelSize"],
	Badge: ["labelSize"],
	Modal: ["closeSize"],
	Button: ["textSize"],
};

for (const [name, props] of Object.entries(components)) {
	test(`Daisy${name} exposes and applies its text size props`, async () => {
		const filename = `Daisy${name}.vue`;
		const source = await readFile(new URL(`../components/${filename}`, import.meta.url), "utf8");
		const { descriptor } = parse(source, { filename });
		const compiled = compileScript(descriptor, { id: name });
		for (const prop of props) {
			assert.equal(compiled.bindings[prop], "props");
			assert.ok(source.includes(`props.${prop}`));
		}
	});
}
