const esbuild = require("esbuild");
var pbjs = require("protobufjs-cli/pbjs");
var pbts = require('protobufjs-cli/pbts')
const { readdir } = require('node:fs/promises')
const {promisify} = require("util");

const pbjsMain = promisify(pbjs.main);
const pbtsMain = promisify(pbts.main);

const options = {
  entryPoints: ["src/index.ts"],
  bundle: true,
  allowOverwrite: true,
  minify: true,
  sourcemap: true,
  loader: { '.ts': 'ts' },
  external: ["fs", "path"], // Exclude node built-in modules
};

(async () => {

  let files = await readdir("proto");
  files = files.map(file => "proto/" + file)

  // Generate the JavaScript file
  await pbjsMain(["-t", "static-module", "-o", "src/proto.js", ...files]);

  // Generate the TypeScript declarations 
  await pbtsMain(["-o", "src/proto.d.ts", "src/proto.js"]);

  // Build for ESM
  await esbuild.build({
    ...options,
    format: "esm",
    outfile: "dist/index.esm.js",
  });

  // Build for CJS
  await esbuild.build({
    ...options,
    format: "cjs",
    outfile: "dist/index.cjs.js",
  });

  console.log("Build complete!");
})();