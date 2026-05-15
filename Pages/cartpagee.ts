import {Locator, Page} from "@playwright/test";

export class CartPagess {
readonly page3 : Page;
readonly checkoutButton : Locator

constructor(page: Page){
this.page3 = page
this.checkoutButton = page.locator('#checkout')

}

async ClickcheckoutButton(){

await this.checkoutButton.click()

}













}