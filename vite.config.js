// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "./",
  preview: {
    host: true,
  },
  publicDir: resolve("public"),
  build: {
    outDir: resolve("dist"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        events: resolve(__dirname, "src/events.html"),
        forstillinger: resolve(__dirname, "src/forstillinger.html"),
        omvildskud: resolve(__dirname, "src/omvildskud.html"),
        opencall: resolve(__dirname, "src/opencall.html"),
        sitemap: resolve(__dirname, "src/sitemap.html"),
        spilletider: resolve(__dirname, "src/spilletider.html"),
        teametbag: resolve(__dirname, "src/teametbag.html"),
        frivillig: resolve(__dirname, "src/frivillig.html"),
        // about: resolve(__dirname, "src/about.html"),
      },
    },
  },
});
