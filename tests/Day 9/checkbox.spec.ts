import {test,expect} from '@playwright/test'

test ('checkbox',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')

const  checkboxes = ['#sunday', '#monday', '#tuesday'] //array of checkbox locators

//checking multiple checkboxes using a loop
for(const local of checkboxes){ //iterating through the array of checkbox locators
    await page.locator(local).check()
    await page.waitForTimeout(3000)//wait for 3 seconds after checking each checkbox
}

//unchecking multiple checkboxes using a loop
for (const local of checkboxes){
  if(await page.locator(local).isChecked()){ //checking if the checkbox is checked or not
    await page.locator(local).uncheck() //unchecking the checkbox if it is checked
    await page.waitForTimeout(3000) //wait for 3 seconds after unchecking each checkbox
  }
}
})