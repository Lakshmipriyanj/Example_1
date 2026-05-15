import { test, expect } from '@playwright/test';
import data from './multidata.json'


for( const user of data){
test(`Login test for email: ${user.email}`, async({page})=>{
await page.goto('https://freelance-learn-automation.vercel.app/login')
await page.locator("#email1").fill(user.email);
await page.locator("#password1").fill(user.password)
await page.waitForTimeout(5000);
    
})
}