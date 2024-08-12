import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import istanbul from "vite-plugin-istanbul";

export default defineConfig({
  plugins: [
    // istanbul({
    //   cypress: true,
    //   requireEnv: false,
    // }),
    vue(),
    vueJsx(),
  ],
});
