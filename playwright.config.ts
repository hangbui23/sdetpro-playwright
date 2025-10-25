import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 60 * 1000,
  workers:2,
  use: {
    headless: false,
    baseURL: "https://the-internet.herokuapp.com/",
    actionTimeout:3*1000
  },
  projects: [
    {
      name: "chromium",
      use: { browserName: "chromium" },
    },
    {
      name: "firefox",
      use: { browserName: "firefox" },
    }
  ]
});