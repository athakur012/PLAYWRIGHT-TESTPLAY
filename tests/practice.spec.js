/** import playwright dependencies and extract test, expect dependencies to a constant */
const{test,expect} = require('@playwright/test');

/** Define playwright test, fixture -> pass single borswer context to the test*/
test.only('demo test', async({page}) => {

    /** navigate to www.google.com */
    await page.goto('https://www.google.com/');
    console.log('Navigating to google website');
  
     
})

