import {test,expect} from '@playwright/test';
test.use({storageState :'./loginstore.json'}) //to use the login state from the json file
//test.use
test('Login with storage', async ({page}) => {
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

await page.waitForTimeout(6000);
console.log("Login with storage state")



})