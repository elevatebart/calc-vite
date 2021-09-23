/// <reference types="cypress" />
import coverageTask from "@cypress/code-coverage/task"
import installVite from "./setupCTServer"

// ***********************************************************
// Read more about the pluginsFile here:
// https://on.cypress.io/plugins-guide
// ***********************************************************
// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

 const pluginConfigHook: Cypress.PluginConfig = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  installVite(on)

  coverageTask(on, config)

  return config
};

export default pluginConfigHook