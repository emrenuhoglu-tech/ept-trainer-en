import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// host:true -> so the phone on the same Wi-Fi can reach http://<pc-ip>:5173.
// /api -> Drill proxy (server/proxy.mjs, port 8787).
export default defineConfig({
  base: "/ept-trainer-en/",
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    proxy: {
      "/api": { target: "http://localhost:8787", changeOrigin: true },
    },
  },
});
