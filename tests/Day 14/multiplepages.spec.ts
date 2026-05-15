import {test, expect,chromium,firefox,webkit} from '@playwright/test';

// test('handling multiple pages',async()=>{
// const browser= await chromium.launch();
// const context = await browser.newContext();
// const page1 = await context.newPage();
// const page2 = await context.newPage();


// await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

// await page2.goto('https://ui.vision/demo/webtest/frames/');

// await page1.bringToFront(); //to bring the page1 to the front //not required if we are performing actions on page1
// await page1.waitForTimeout(4000)
//})  



test('handling multiple browser',async()=>{

const browser1= await chromium.launch();
const context1 = await browser1.newContext();
const page1 = await context1.newPage();

const browser2= await firefox.launch();
const context2 = await browser2.newContext();
const page2 = await context2.newPage();

const browser3= await webkit.launch();
const context3 = await browser3.newContext();
const page3 = await context3.newPage();


 await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
 await page2.goto('https://ui.vision/demo/webtest/frames/');


//navigating pages 
await page1.goBack();
await page1.goForward();
await page1.close();
await page1.reload();
await browser1.close();

await page2.close();
await page2.reload();
await browser2.close();



})
