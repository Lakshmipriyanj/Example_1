import {test,expect} from '@playwright/test';
import data from './login.json';
test('Login with JSON data', async ({page}) => {
await page.goto('https://freelance-learn-automation.vercel.app/login')
await page.locator("#email1").fill(data.email);
await page.locator("#password1").fill(data.password)
await  page.waitForTimeout(5000);
console.log("Login successful with JSON data");

})

//playwright + CSV
//playwright +JSON 
//playwright +Excel
