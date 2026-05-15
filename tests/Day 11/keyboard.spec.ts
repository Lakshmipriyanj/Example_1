import {test,expect} from '@playwright/test';

test('keyboardactions',async({page})=>{
await page.goto('https://gotranscript.com/text-compare')
await page.getByPlaceholder('Paste one version of the text here.').pressSequentially('Hello World',{delay:500}) // Type "Hello World" with a delay of 100ms between each keystroke
await page.keyboard.press('Control+A') // Select all text
await page.keyboard.press('Control+C') // Copy the selected text
await page.waitForTimeout(2000) // Wait for 2 seconds
await page.keyboard.down('Tab') //lock the tab key
await page.keyboard.up('Tab') //unlock the tab key
await page.waitForTimeout(2000) // Wait for 2 seconds
await page.keyboard.press('Control+V') // Paste the copied text
await page.waitForTimeout(4000)
})

// test('keyboardactions2',async({page})=>{
//     await page.goto('https://textbox.johnjago.com/')

//     await page.locator('//textarea').pressSequentially("welcome you all",{delay:100}) //
//     await page.locator('//textarea').press("Control+A")
//     await page.locator('//textarea').press("Control+C")
//     await page.keyboard.press("ArrowDown")
//     await page.locator('//textarea').press("Control+V")
// })