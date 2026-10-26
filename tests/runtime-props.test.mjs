import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { createRequire } from "node:module";
import test from "node:test";

const require = createRequire(import.meta.url);
const compilerSource = await readFile(
	require.resolve("@vue/compiler-sfc/dist/compiler-sfc.esm-browser.js"),
	"utf8",
);
const { parse, compileScript } = await import(
	`data:text/javascript;base64,${Buffer.from(compilerSource).toString("base64")}`
);
const componentsDirectory = new URL("../components/", import.meta.url);
const components = (await readdir(componentsDirectory)).filter((name) =>
	name.endsWith(".vue"),
);

assert.ok(components.length > 0, "No components found");

for (const filename of components) {
	test(`${filename} compiles without a file system adapter`, async () => {
		const source = await readFile(new URL(filename, componentsDirectory), "utf8");
		const { descriptor, errors } = parse(source, { filename });
		assert.deepEqual(errors, []);
		compileScript(descriptor, {
			id: filename,
			inlineTemplate: true,
		});
	});
}
