import { test, expect } from '@playwright/test';

test('Visual Testing', async ({ page }) => {

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await page.getByPlaceholder('Username').fill('Admin')  


await page.waitForTimeout(5000)

// expect(await page.screenshot()).toMatchSnapshot('login.png')

// await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
// expect(await page.screenshot()).toMatchSnapshot('dashboard.png')

})