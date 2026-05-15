import {test, expect} from '@playwright/test';

test ('waits in playwright', async ({page}) => {
await page.goto("http.example.com",{waitUntil : 'domcontentloaded'})
await page.waitForLoadState('load')
await page.waitForLoadState('networkidle') //waits for the network to be idle




//wait for navigation -
//wait for loadstate



})