import {test, expect} from '@playwright/test';

test('datepicker',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')
const datepicker = page.locator('#datepicker')//filling the datepicker input field with the date '12/12/2024'
await datepicker.scrollIntoViewIfNeeded()

await datepicker.click()

const targetyear = '2026'
const targetmonth = 'May'
const targetdate = '12'

while(true)
{
const currentmonth = (await page.locator('.ui-datepicker-month').textContent())
const currentyear = (await page.locator('.ui-datepicker-year').textContent())
if(currentmonth === targetmonth && currentyear === targetyear)
{break}
else
await page.locator('.ui-datepicker-next').click() //clicking the next button to navigate to the next month and year in the datepicker
await page.waitForTimeout(1000) //waiting for 1 second to see the changes in the datepicker
}
const alldates =await page.locator('.ui-datepicker-calendar').all()


for (let date of alldates) //looping through all the dates in the datepicker
{const datetext= await date.innerText()
if (datetext === targetdate)
{await date.click()
    break;
}
}
await page.waitForTimeout(6000)
})

