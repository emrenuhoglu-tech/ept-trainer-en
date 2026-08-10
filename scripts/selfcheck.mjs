// İçerik selfcheck (runner) — kitabı parse eden gerçek TS modüllerini Vite'ın `?raw`
// import'uyla birlikte esbuild ile bundle edip Node'da çalıştırır. build'den ÖNCE koşar
// (package.json "prebuild") → parser regresyonu build'i durdurur.
import { build } from "esbuild";
import path from "node:path";
import os from "node:os";
import fs from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));

const rawLoader = {
  name: "vite-raw",
  setup(b) {
    b.onResolve({ filter: /\?raw$/ }, (a) => ({
      path: path.join(a.resolveDir, a.path.replace(/\?raw$/, "")),
      namespace: "raw",
    }));
    b.onLoad({ filter: /.*/, namespace: "raw" }, (a) => ({
      contents: `export default ${JSON.stringify(fs.readFileSync(a.path, "utf8"))}`,
      loader: "js",
    }));
  },
};

const out = path.join(os.tmpdir(), `ept-selfcheck-${process.pid}.mjs`);
await build({
  entryPoints: [path.join(here, "selfcheck.entry.ts")],
  bundle: true,
  format: "esm",
  platform: "node",
  outfile: out,
  plugins: [rawLoader],
  logLevel: "warning",
});

try {
  await import(pathToFileURL(out).href); // hata → process.exit(1)
} finally {
  try {
    fs.unlinkSync(out);
  } catch {
    /* yoksa geç */
  }
}
