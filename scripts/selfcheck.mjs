// İçerik selfcheck (runner) — kitabı parse eden gerçek TS modüllerini Vite'ın `?raw`
// import'uyla birlikte esbuild ile bundle edip Node'da çalıştırır. build'den ÖNCE koşar
// (package.json "prebuild") → parser regresyonu build'i durdurur.
import { build } from "esbuild";
import path from "node:path";
import os from "node:os";
import fs from "node:fs";
import zlib from "node:zlib";
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

// D8-81: if run after build (dist exists) scan for leaked secrets + a bundle budget. In prebuild
// dist doesn't exist → no-op. To gate deploys, run `npm run selfcheck` AFTER build.
const distAssets = path.join(here, "..", "dist", "assets");
if (fs.existsSync(distAssets)) {
  const secretRe = /sk-ant-|sk-[A-Za-z0-9]{20,}|xi-api-|AKIA[0-9A-Z]{16}|eyJhbGciOi/;
  const leaked = [];
  let maxGz = 0;
  for (const f of fs.readdirSync(distAssets)) {
    if (!f.endsWith(".js")) continue;
    const buf = fs.readFileSync(path.join(distAssets, f));
    if (secretRe.test(buf.toString("utf8"))) leaked.push(f);
    maxGz = Math.max(maxGz, zlib.gzipSync(buf).length);
  }
  if (leaked.length) {
    console.error("FAIL  dist secret scan: key pattern found → " + leaked.join(", "));
    process.exit(1);
  }
  const BUDGET = 200 * 1024; // largest-chunk gzip budget (~150KB expected after lazy-split)
  console.log(`PASS  dist secret scan clean; largest chunk ${Math.round(maxGz / 1024)}KB gzip`);
  if (maxGz > BUDGET) console.warn(`WARN  main chunk ${Math.round(maxGz / 1024)}KB > ${BUDGET / 1024}KB budget (review lazy-split)`);
}
