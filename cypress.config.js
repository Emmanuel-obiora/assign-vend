const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 20000,
  watchForFileChanges: false,
  pageLoadTimeout: 300000,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'https://www.amazon.in',
    supportFile: false,
    screenshotsFolder: 'my-custom-folder/screenshots',
  },
})
