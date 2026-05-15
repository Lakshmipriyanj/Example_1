import {Locator, Page} from "@playwright/test";
export class LoginPage {
    //declare the locators and page object
readonly page1 : Page;
readonly username1 : Locator
readonly password1 : Locator
readonly loginButton : Locator

constructor(page: Page){
//initialize the page and locators
this.page1 = page; //store page object in the class variable
this.username1 = page.getByPlaceholder('Username')
this.password1= page.locator('#password')
this.loginButton =page.locator('#login-button')
}
async openApplication(){
await this.page1.goto('https://www.saucedemo.com/');
}
async logintoapplication( username: string, password: string){
await this.username1.fill(username);
await this.password1.fill(password);
await this.loginButton.click();
}
}