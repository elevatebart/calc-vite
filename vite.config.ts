import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import istanbulPlugin from "vite-plugin-istanbul";

export default defineConfig({
  plugins: [vue(), vueJsx(), istanbulPlugin({})],
});
