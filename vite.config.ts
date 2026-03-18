import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANT: Change "eden-pipeline" to your actual GitHub repo name before deploying
export default defineConfig({
  plugins: [react()],
  base: "/eden-pipeline/",
});
