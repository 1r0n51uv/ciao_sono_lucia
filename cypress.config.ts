import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    codeCoverage: {
      exclude: "cypress/**/*.*",
    },
  },
  e2e: {
    setupNodeEvents(_, config) {
      // registerCodeCoverageTasks(on, config);

      return config;
    },
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
    setupNodeEvents(_, config) {
      // registerCodeCoverageTasks(on, config);

      return config;
    },
  },
});
