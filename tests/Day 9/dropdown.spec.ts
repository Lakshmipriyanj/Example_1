import {test,expect} from '@playwright/test'

test('dropdown test',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')

//selecting an option from the dropdown using selectOption method
await page.locator("#country").selectOption('India'); //visible text of the option to be selected
await page.locator("#country").selectOption({value :'france'}) //value attribute of the option to be selected
await page.locator("#country").selectOption({index: 3}) //index of the option to be selected

//multiple selection from the dropdown using selectOption method



})