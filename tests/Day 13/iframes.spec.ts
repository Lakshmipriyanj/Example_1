import { test, expect } from '@playwright/test';

test('iframes', async ({ page }) => {
await page.goto ('https://ui.vision/demo/webtest/frames/')


const frame3 = page.frameLocator('frame[src="frame_3.html"]') //locating the third frame using its source attribute and storing it in a variable


const childFrames =  frame3.frameLocator('iframe') //locating the child frames inside the third frame and storing them in a variable
 
 
 await childFrames.locator("#i6").check() //checking the checkbox in the child frame of the third frame

 
})