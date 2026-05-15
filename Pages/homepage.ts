import {Locator,Page } from "@playwright/test";

export class HomePage {
    //declare the locators and page object
    readonly page2 : Page;
    readonly backpackAddToCartbutton : Locator
    readonly gotoCartButton : Locator

constructor(page: Page)
{
//initialize the page and locators
this.page2 = page
this.backpackAddToCartbutton = page.locator('//li[contains(@class,"inventory_item")][1]//button')
this.gotoCartButton = page.locator('.shopping_cart_link')
}

getBackpackAddToCartbutton(name: string){
return this.backpackAddToCartbutton.locator(`//li[contains(@class,"inventory_item")][1]//button[contains(text(),"${name}")]`)

}
async addBackpackToCart(name: string){
    await this.getBackpackAddToCartbutton(name).click();
}

}

//async goToCart(){

//await this.gotoCartButton.click()
//}





