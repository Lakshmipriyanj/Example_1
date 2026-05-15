import{test,expect} from '@playwright/test'

test.fail('alert test',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')
page.on('dialog',async(dialog)=>{
await dialog.accept() //to accept the alert
//await dialog.accept('welcome to playwright') //to accept the alert with a message for prompt alert
//await dialog.dismiss() //to cancel the alert for confirmation alert
// console.log(dialog.type()) //to get the type of the alert
// console.log(dialog.message())   //to get the message of the alert
})

await page.locator('#alertBtn').click() //click the button to trigger the alert
await page.waitForTimeout(5000) //wait for 5 seconds after accepting the alert
})

