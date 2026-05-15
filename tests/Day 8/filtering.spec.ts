import {test, expect} from '@playwright/test'
test.describe.serial('Filtering tests',()=>{
test('filtering test',async({page})=>{
    await page.goto('https://www.saucedemo.com/') //navigate to the URL
    await page.locator("#user-name").fill("standard_user") //fill the username input field
    await page.locator("#password").fill("secret_sauce") //fill the password input field
    await page.locator("#login-button").click() //click the login button
    await page.locator('.inventory_item')
    .filter({hasText :'Sauce Labs Backpack'})
    .getByRole('button',{name: 'Add to cart'})
    .click();
     await page.waitForTimeout(7000);
    console.log("product added to cart");
})

test('filtering test by child/descendent',async({page})=>{
    await page.goto('https://www.saucedemo.com/') //navigate to the URL
    await page.locator("#user-name").fill("standard_user") //fill the username input field
    await page.locator("#password").fill("secret_sauce") //fill the password input field
    await page.locator("#login-button").click() //click the login button
    await page.locator('.inventory_item')
    .filter({has:page.getByRole('link',{name: 'Sauce Labs Bike Light'})})
    .getByRole('button',{name: 'Add to cart'})
    .click();
    await page.waitForTimeout(7000);
    console.log("product added to cart");

    
})})