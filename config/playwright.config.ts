import { PlaywrightTestConfig } from "@playwright/test";
const config: PlaywrightTestConfig = {

  // Forbid test.only on CI
  forbidOnly: !!process.env.CI,

  // Limit the number of workers on CI, use default locally
  workers: process.env.CI ? 2 : undefined,

  use: {
    headless: true,
    baseURL: "http://localhost:8080/",
    screenshot: "only-on-failure",
    video: "on",
    trace: 'retain-on-failure',
  },
  //   reporter: "allure-playwright",
  testDir: "tests",
  testMatch: "tests/**/*.ts",
};
export default config;