import { test as basetest} from '@playwright/test'

type customfix = { customfix : string}


export const test = basetest.extend<customfix>({
customfix : async ({page}, use) =>{
    await page.goto("https://saucedemo.com/")
    await page.fill("#user-name", "standard_user")
    await page.fill("#password", "secret_sauce")
    await page.click("#login-button")
    console.log("Logged in successfully")


 await use(" Added product to the cart")

 //use 

        await page.locator('#react-burger-menu-btn').click()
        await page.locator('#logout_sidebar_link').click()
        console.log("Logged out successfully")
}})
