import { PlaywrightTestConfig } from "@playwright/test";
const config: PlaywrightTestConfig = {
  use: {
    headless: true,
    baseURL: "http://localhost:8080/",
    screenshot: "only-on-failure",
    video: "on",
    trace: "retain-on-failure"
  },
  //   reporter: "allure-playwright",
  testDir: "../tests",
  testMatch: "tests/**/*.ts",
};
export default config;
