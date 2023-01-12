const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'hq8sxu',
  e2e: {
    baseUrl: 'https://todomvc.com/examples/jquery/#/all',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
