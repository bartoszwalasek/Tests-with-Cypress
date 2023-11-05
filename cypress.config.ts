import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://automationteststore.com/",
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    env:{
      dev: "https://automationteststore.com/",
      stage: "https://google.com"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
