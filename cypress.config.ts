import { defineConfig } from "cypress"
import coverageTask from "@cypress/code-coverage/task"
import { devServer } from "@cypress/vite-dev-server"

export default defineConfig({
  fixturesFolder: false,
  component: {
    specPattern: "src/**/*.spec.{tsx,js}",
    devServer,
    setupNodeEvents(on, config){
      coverageTask(on, config)

      return config
    }
  }
})
