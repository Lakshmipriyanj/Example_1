import {test } from "../Day 20/customfixture"

test ('Test with fixture1', async ({customfix,page})=>{
  //product adding to the cart
    await page.locator('.inventory_item')
    .filter({has:page.getByRole('link',{name: 'Sauce Labs Bike Light'})})
    .getByRole('button',{name: 'Add to cart'})
    .click();
  console.log(customfix)

})