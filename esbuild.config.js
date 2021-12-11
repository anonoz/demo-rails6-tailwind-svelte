#!/usr/bin/env node
// require esbuild from "esbuild";
// require sveltePlugin from "esbuild-svelte";

var watch = process.argv.includes("--watch");

require('esbuild').build({
    entryPoints: ["app/javascript/application.js"],
    bundle: true,
    outfile: "app/assets/builds/application.js",
    plugins: [require('esbuild-svelte')()],
    logLevel: "info",
    watch: watch
}).catch(() => process.exit(1));
