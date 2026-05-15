import {test,expect} from '@playwright/test'

test ('radio button test',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')
await page.locator('#male').check() //selecting the male radio button using check() method

await expect(page.locator('#male')).toBeChecked() //to check if the radio button is checked or not
// console.log("male radio button is checked")
// await expect(page.locator('#female')).not.toBeChecked() //negative assertion to check if the radio button is not checked
console.log("female radio button is not checked")

})
