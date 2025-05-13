import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/jenkins-CI-CD/", // repo adıyla aynı olmalı
  server: {
    host: true, // 0.0.0.0'ı dinlemesi için
    port: 5173,
  },
});
