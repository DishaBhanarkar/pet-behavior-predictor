import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  root: "client",

  plugins: [react()],

  server: {
    host: "localhost",
    port: 8080,
  },

  build: {
    outDir: "../dist/spa",
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
});