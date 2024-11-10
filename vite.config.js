import { defineConfig } from "vite";

export default defineConfig({
  base: "/FEM_Newsletter_sign-up_-form_with_success_message/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `@import "./src/styles/tailwind.css";`, // Update this path if necessary
      },
    },
  },
});
