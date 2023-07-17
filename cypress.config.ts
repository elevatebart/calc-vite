import { defineConfig } from "cypress";

export default defineConfig({
  fixturesFolder: false,
  projectId: "z4jb27",
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.ts").default(on, config);
    },
    specPattern: "cypress/e2e/**/*.spec.{tsx,js}",
  },

  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },
});
