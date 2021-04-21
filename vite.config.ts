import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  plugins: [vue(), vueJsx()],
  // avoid infinite loop on cypress
  server: {
    watch: {
      ignored: "cypress/screenshots/**/*.png",
    },
  },
});
