import coverageTask from "@cypress/code-coverage/task"
import installVite from "./setupCTServer"

/// <reference types="cypress" />
// ***********************************************************
// Read more about the pluginsFile here:
// https://on.cypress.io/plugins-guide
// ***********************************************************
// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
export default (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  installVite(on, config)

  coverageTask(on, config)

  return config
};
