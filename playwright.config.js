// @ts-check
const { defineConfig, devices, chromium } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  // max timeout one test can run for.
  timeout: 30 * 1000,
  expect:{
    timeout: 5000
  }, 
  reporter: 'html', 

  /* shared settings for all projects, this property is used for declaring browsers, logging, screenshots, retry mechanism etc*/
  use: {
    browserName : 'chromium',
    headless: false
  },  
});

