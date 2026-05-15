import {test, expect} from '@playwright/test';

test('locators ', async ({page}) => {
   await page.goto('https://www.saucedemo.com/'); //Navigate to the page

   await page.getByPlaceholder('Username').fill('standard'); //Fill the username field
   await page.getByPlaceholder('Password').fill('secret_sauce'); //Fill the password field
   await page.getByRole('button',{name: 'Login'}).click(); //Click the login button
//  await page.waitForTimeout(6000); //Wait for 6 seconds to see the result 
 console.log('Login successful'); //Log a message to the console

});
 
test.fail('locators 2', async ({page}) => {
   await page.goto('https://www.saucedemo.com/'); //Navigate to the page

   await page.getByPlaceholder('Username').fill('standard_user'); //Fill the username field
   await page.getByPlaceholder('Password').fill; //Fill the password field
   await page.getByRole('button',{name: 'Login'}).click(); //Click the login button
//  await page.waitForTimeout(6000); //Wait for 6 seconds to see the result 
 console.log('Login successful'); //Log a message to the console
})
test('locators 3', async ({page}) => {
   await page.goto('https://www.saucedemo.com/'); //Navigate to the page

   await page.getByPlaceholder('Username').fill('standard_user'); //Fill the username field
   await page.getByPlaceholder('Password').fill('secret_sauce'); //Fill the password field
   await page.getByRole('button',{name: 'Login'}).click(); //Click the login button
//  await page.waitForTimeout(6000); //Wait for 6 seconds to see the result 
 console.log('Login successful'); //Log a message to the console
})