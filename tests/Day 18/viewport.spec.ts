import {test, expect} from '@playwright/test';

test('Viewport Testing', async ({page}) => {

await page.goto('https://www.amazon.com/');

// const width = await page.evaluate(() => {return window.screen.width}); //window.screen.width is a js code which will give the width of the screen
// const height = await page.evaluate(() => {return window.screen.height});

// console.log("screen width is : " + width);
// console.log("screen height is : " + height);


await page.setViewportSize({width :900, height : 400}) //changing the viewport size to 900*400

})