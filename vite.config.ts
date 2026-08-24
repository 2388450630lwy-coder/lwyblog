import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  base: "/",
  server: {
    host: "127.0.0.1",
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          const normalized = id.replace(/\\/g, "/");
          if (normalized.includes("/src/data/posts.ts")) return "posts-data";
          if (normalized.includes("/node_modules/marked/") || normalized.includes("/node_modules/highlight.js/")) {
            return "markdown-runtime";
          }
          if (normalized.includes("/node_modules/animal-island-ui/")) return "animal-ui";
        },
      },
    },
  },
  plugins: [
    react(),
    svgr({
      include: ["**/*.svg"],
      svgrOptions: { exportType: "default" },
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
