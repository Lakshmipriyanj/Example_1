import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests', //directory where the test files are located
  
  timeout : 60000, //default timeout for all the tests
   expect: { timeout: 10000 }, //default timeout for all the expect assertions
  /* Run tests in files in parallel */
  fullyParallel: true, //set to false to run the tests sequentially
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI, //if CI environment variable is set, forbid test.only
  /* Retry on CI only */
  retries: process.env.CI ? 0 : 1,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  //reporter : "dot", 
  reporter : [ ['html',{open : "always"}]],
  //reporter : './tests/Day 20/reporter.ts',  //  reporter: [['junit',{outputFile: 'mytestresults.xml'}]], //open the html report on failure and li
  //reporter: [['json',{outputFile: 'mytestreport.json'}]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
    screenshot : 'only-on-failure',
    video : "on",
    headless : true,
    // httpCredentials : {
    //   username : 'admin',
    //   password : 'admin'
    // }
  //  viewport : {width : 1280, height : 720},
  
    // browserName : 'firefox'
    // geolocation : {latitude : 46.2276, longitude : 2.2137},
    // permissions : ['geolocation']
  
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
