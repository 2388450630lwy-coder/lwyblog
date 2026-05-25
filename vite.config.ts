import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  base: "/lwyblog/",
  server: {
    host: "127.0.0.1",
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
