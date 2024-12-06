const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

Given('I am on the login page', async ({page}) => {
     //if you don't have any browser configuration then pass page as a global variable
     await page.goto("https://the-internet.herokuapp.com/");
     //once the execution is done, we don't need to mention browser.close\
     await page.locator("#content > ul > li:nth-child(21) > a").click();
     const form = await page.locator("#login")
     await expect(form).toHaveAttribute("name", "login");
     await expect(form).toHaveAttribute("id", "login");
     await expect(form).toHaveAttribute("action", "/authenticate");
     await expect(form).toHaveAttribute("method", "post");
});

When('I enter valid credentials', async ({page}) => {
    const form = await page.locator("#login")
    await form.locator("#username").fill("tomsmith");
    await form.locator("#password").fill("SuperSecretPassword");
    await page.locator("#login > button").click();
});

Then('I should be logged in successfully', async ({page}) => {
  await expect(page).toHaveAttribute("class","flash success")
});
