import { test, expect, chromium } from '@playwright/test';

test ('handling multiple pages', async ({page,context}) => {
// const browser= await chromium.launch();
// const context = await browser.newContext();
// const page = await context.newPage();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    

    const [newPage] = await Promise.all([ //wait till the new page opens
    context.waitForEvent('page'), // Wait for the new page to open
    page.click('[href="http://www.orangehrm.com"]') // Click the link that opens a new page
    ])
// const newPagePromise = context.waitForEvent('page'); // Wait for the new page to open
// await page.click('[href="http://www.orangehrm.com"]') // Click the link that opens a new page
// const newPage = await newPagePromise; // Get the new page object


await newPage.waitForLoadState() // Wait for the new page to load completely

    await newPage.getByPlaceholder("Your email address").fill("xyz@gmail.com")
await newPage.waitForTimeout(6000)
console.log("Email address entered successfully in the new page")

}
)