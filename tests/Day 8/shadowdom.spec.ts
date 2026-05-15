import {test, expect} from '@playwright/test'

test ('shadow DOM test', async ({page}) => {
await page.goto('https://books-pwakit.appspot.com/')
await page.locator('#input').fill("playwright training")
await page.waitForTimeout(7000);
console.log("test completed")



})