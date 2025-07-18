import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/lixapi": {
        target: "https://api.lix-it.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/lixapi/, ""),
      },
    },
  },
});
