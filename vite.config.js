import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  server: { host: true, port: 5177 },
  preview: { host: true, port: 4177 },
  build: { target: "es2020" },
});
