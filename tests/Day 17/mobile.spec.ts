import {test,expect,devices, chromium} from '@playwright/test';

test('Mobile', async () => {
const iPad  = devices['iPad Pro 11']
const browser = await chromium.launch()
const context = await browser.newContext({...iPad})//conerting the desktop to mobile
const page = await context.newPage()

    await page.goto('https://www.amazon.com/')
 
    await page.waitForTimeout(6000);

})