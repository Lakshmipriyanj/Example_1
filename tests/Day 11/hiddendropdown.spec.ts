import {test, expect} from '@playwright/test';
test('hiddendropdown', async ({ page }) => {
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await page.getByPlaceholder('Username').fill('Admin')
await page.getByPlaceholder('Password').fill('admin123')
await page.getByRole('button', { name: 'Login' }).click()
await page.getByText('PIM').click()
//click on job title dropdown
await page.locator('form i').nth(3).click()
//capture all the options in the dropdown
const options =  page.locator("div[role='listbox'] span")
await page.waitForLoadState('networkidle') //waiting for the dropdown options to load completely
const count = await options.count(); 
console.log("Total options in dropdown: " + count)
//printing all the options in the dropdown
for (let i = 0; i < count; i++) {
console.log(await options.nth(i).innerText())
}
//for loop for selecting the option from dropdown
for(let i = 0;i<count;i++){ //iterating through the options in dropdown //i<count because the index starts from 0 and ends at count-1

    const text = await options.nth(i).innerText();
if(text ==='Administration'){
    await options.nth(i).click()
    break; //breaking the loop after selecting the required option
    }}
await page.waitForTimeout(4000)
})