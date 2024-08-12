import { defineConfig } from "cypress";

export default defineConfig({
  fixturesFolder: false,

  e2e: {
    setupNodeEvents(on, config) {
      require("@cypress/code-coverage/task")(on, config);

      return config;
    },
    specPattern: "cypress/e2e/**/*.spec.{tsx,js}",
  },

  component: {
    specPattern: "src/components/**/*.spec.{tsx,js}",
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
    setupNodeEvents(on, config) {
      require("@cypress/code-coverage/task")(on, config);

      return config;
    },
  },
});
