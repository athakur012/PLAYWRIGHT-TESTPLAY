//importing playwright annotation from node jars
const {test, expect, selectors} = require('@playwright/test');

//test(test  case title , body )
// function() is same as ()=> as its an empty function
//default fixture - browser, globally available to all tests also called global fixture
// without curly braces fixture are considered as normal string 
//browser fixture example
test('Test scenario name', async ({page})=>
{


 //await will only work when the function is marked async

//explicitly tell js to wait till the first step is completed before moving on the next step - statement not true as js is synchronous 
//step 1 open browser
// crestes a new instance of a browser
// by default PW runs on headless mode, so explicitly mention if you want to run the test in head mode
//test in the same file runs sequentially but different spec files runs parallely

//const context = await browser.newContext();
//const page = await context.newPage();

    await page.goto("https://www.youtubekids.com/");
    const title = await page.title();
    console.log("Title on google website is: "+title); 
    //expect is an existing assertion in playwright
   //await expect(page).toHaveTitle("Google");
   await page.locator("#kid-button").click();

}); 

//page fixture example
test('Basic login form internet herokuapp test', async ({page})=>
{
     //if you don't have any browser configuration then pass page as a global variable
    await page.goto("https://the-internet.herokuapp.com/");
    //once the execution is done, we don't need to mention browser.close\
    await page.locator("#content > ul > li:nth-child(21) > a").click();
    const form = await page.locator("#login")
    await expect(form).toHaveAttribute("name", "login");
    await expect(form).toHaveAttribute("id", "login");
    await expect(form).toHaveAttribute("action", "/authenticate");
    await expect(form).toHaveAttribute("method", "post");
    await form.locator("#username").fill("tomsmith");
    await form.locator("#password").fill("SuperSecretPassword");
    await page.locator("#login > button").click();
}
   
);