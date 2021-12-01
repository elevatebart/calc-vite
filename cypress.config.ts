import coverageTask from "@cypress/code-coverage/task"
import { startDevServer } from "@cypress/vite-dev-server"

export default {
  fixturesFolder: false,
  componentFolder: "src",
  testFiles: "**/*.spec.{tsx,js}",
  component: {
    testFiles: "**/*.spec.{tsx,js}",
    async devServer(options) {
      return startDevServer({ options })
    },
    setupNodeEvents(on, config){
      coverageTask(on, config)

      return config
    }
  }
}
