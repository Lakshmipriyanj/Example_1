import {test, expect} from '@playwright/test'
 
test('orange HRM',async({page})=>{
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await page.waitForLoadState('networkidle')
await page.getByPlaceholder('Username').fill('Admin')
await page.getByPlaceholder('Password').fill('admin123')
await page.locator('//button[@type="submit"]').click()
 
await page.locator('.oxd-main-menu a span').nth(11).click()
await page.getByRole('button',{name:' Most Liked Posts '}).click()
await page.locator('.orangehrm-buzz-post-header-config li i').nth(0).click()
await page.locator('.oxd-dropdown-menu li ').nth(0).click()
 
await page.getByRole('button',{name: 'Yes, Delete' }).click()
await expect(page.locator('#oxd-toaster_1')).toHaveText('Success Successfully Deleted')
})
 