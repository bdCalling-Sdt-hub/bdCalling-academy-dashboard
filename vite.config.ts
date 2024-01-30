import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    host: "68.183.224.38",
    port: 3001,
  },
});
