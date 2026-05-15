import {test,expect,chromium} from '@playwright/test';
test.beforeAll('before all test',async()=>{
  
    console.log("This is before all test");})
test.beforeEach('before each test',async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    console.log("This is before each test")})

    test.describe('This is my test suite',()=>{ //grouping the tests
       
test('first test',async({page})=>{
    await page.locator('//*[@class="inventory_item"]').filter({hasText :'Sauce Labs Bike Light'})
    .getByRole('button', {name :'Add to cart'}).click();
    console.log("This is first test");})
test ('second test',async({page})=>{
    await page.locator('//*[@class="inventory_item"]').filter({hasText :'Sauce Labs Backpack'})
    .getByRole('button', {name :'Add to cart'}).click();
    console.log("This is second test")})
})
//logout after each test
test.afterEach('after each test',async({page})=>{
    await page.click('#react-burger-menu-btn');
    await page.click('#logout_sidebar_link');
    console.log("This is after each test")})
test.afterAll('after all test',async()=>{
   
    console.log("This is after all test")})