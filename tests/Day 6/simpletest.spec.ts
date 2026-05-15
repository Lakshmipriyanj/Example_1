import {test,expect, chromium} from '@playwright/test' 

test('demotest',async({page})=>{
// const browser = await chromium.launch();
// const context = await browser.newContext(); //create a new incognito browser context
// const page = await context.newPage(); //create a new page in the incognito browser context

await page.goto('https://www.facebook.com/'); //promise to navigate to the URL
// await page.locator("#_R_1h6kqsqppb6amH1_").fill("kousi"); //promise to fill the input field with the specified valu
await page.waitForTimeout(6000);
console.log("test completed")
})