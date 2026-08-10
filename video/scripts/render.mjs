// npm run render:module -- M5   →   out/M5.mp4
import { spawnSync } from "node:child_process";
import { mkdirSync } from "node:fs";

const id = process.argv[2];
if (!id) {
  console.error("Kullanım: npm run render:module -- M5");
  process.exit(1);
}
mkdirSync("out", { recursive: true });
const out = `out/${id}.mp4`;
console.log(`[render] ${id} → ${out}`);
const r = spawnSync(
  process.platform === "win32" ? "npx.cmd" : "npx",
  ["remotion", "render", id, out],
  { stdio: "inherit" },
);
process.exit(r.status ?? 0);
