import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
<<<<<<< HEAD
  base: "/", // <-- ADD THIS LINE
=======
>>>>>>> 43f3b37a312358e8752da063f351641c4d669169
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
<<<<<<< HEAD

=======
>>>>>>> 43f3b37a312358e8752da063f351641c4d669169
