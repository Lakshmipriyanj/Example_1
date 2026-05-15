import {test, expect,chromium} from '@playwright/test';


test('http Testing', async () => {

const browser = await chromium.launch();
const context = await browser.newContext({
httpCredentials : {
username : 'admin',
password : 'admin'
}
})
const page = await context.newPage();
await page.goto('https://the-internet.herokuapp.com/digest_auth');
    await page.waitForTimeout(5000)
console.log("Page title is : " + await page.title())

})