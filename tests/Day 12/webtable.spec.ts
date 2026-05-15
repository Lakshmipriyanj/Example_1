import {test,expect, Locator} from '@playwright/test';

test('webtable',async({page})=>{ 
await page.goto('https://testautomationpractice.blogspot.com/')
const table:Locator = page.locator("#productTable") //locating the webtable using its id and storing it in a variable
await table.scrollIntoViewIfNeeded() //scrolling the table into view if it's not visible on the screen
const column = table.locator('thead tr th') //locating the column headers in the table
console.log("Total number of columns: " + await column.count()) //printing the total number of columns in the table

const row = table.locator('tbody tr') //locating the rows in the table
console.log("Total number of rows: " + await row.count()) //printing the total number of rows in the table

const Smartwatch = row.filter({has: page.locator('td'),
                               hasText : 'Smartwatch'})

Smartwatch.locator('input').check() //checking the checkbox in the row which has the text 'Smartwatch'
await page.waitForTimeout(6000)
 console.log("Checkbox for Smartwatch is checked") //printing a message to the console after checking the checkbox
// printing all the data in the table
// for (let i = 0; i < await row.count(); i++) 
// //loop through each row in the table
// {const cells = row.locator('td') //locating the cells in the current row
// for (let j = 0; j < await cells.count(); j++)
// {
//     console.log(await cells.nth(j).textContent())
// }

// }


const pages =page.locator('.pagination li a')
console.log("number of pages:",await pages.count()) //printing the total number of pages in the table

for (let p=0;p< await pages.count(); p++) {
    await pages.nth(p).click()
    for (let i = 0; i < await row.count(); i++) 
        //loop through each row in the table
        {const cells = row.locator('td') //locating the cells in the current row
        for (let j = 0; j < await cells.count(); j++)
        {
            console.log(await cells.nth(j).textContent())
        }
        
        }
   
}
})