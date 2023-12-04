import { defineConfig } from "cypress";

export default defineConfig({
  // video: true,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "custom-name",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    // videoOnFailOnly: true,
  },
  e2e: {
    experimentalRunAllSpecs: true,
    baseUrl: "https://automationteststore.com/",
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    env: {
      dev: "https://automationteststore.com/",
      stage: "https://google.com",
    },
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});
