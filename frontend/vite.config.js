import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // src: "/src",
      "@": path.resolve(__dirname, "./"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
});
