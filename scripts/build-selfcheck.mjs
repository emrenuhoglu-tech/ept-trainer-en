// selfcheck.mjs'yi selfcheck.entry.ts'ten yeniden uretir.
// Bu adim olmadan paket bayatliyordu: entry.ts duzenlenip paket yeniden uretilmeyince
// `npm run prebuild` DUNKU kodu dogrulayip "ALL PASS" diyordu (uc kez isirdi).
// prebuild artik once bunu calistiriyor, yani kapi her zaman guncel kaynagi test eder.
import esbuild from "esbuild";
import fs from "fs";
import path from "path";

// Vite'in `?raw` ice aktarimi (kitap markdown'i) esbuild'de eklenti ister.
const rawPlugin = {
  name: "raw",
  setup(b) {
    b.onResolve({ filter: /\?raw$/ }, (args) => ({
      path: path.resolve(args.resolveDir, args.path.replace(/\?raw$/, "")),
      namespace: "raw",
    }));
    b.onLoad({ filter: /.*/, namespace: "raw" }, (args) => ({
      contents: fs.readFileSync(args.path, "utf8"),
      loader: "text",
    }));
  },
};

await esbuild.build({
  entryPoints: ["scripts/selfcheck.entry.ts"],
  outfile: "scripts/selfcheck.mjs",
  bundle: true,
  platform: "node",
  format: "esm",
  target: "node18",
  plugins: [rawPlugin],
  logLevel: "warning",
});
