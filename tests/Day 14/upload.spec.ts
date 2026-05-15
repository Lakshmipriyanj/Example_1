import {test, expect} from '@playwright/test';

test ('uploading file', async ({page}) => {
await page.goto('https://testautomationpractice.blogspot.com/')
//await page.setInputFiles('locator', 'path of the file to be uploaded') //locator of the file input element and the path of the file to be uploaded
// const upload = page.locator('#singleFileInput') //locator of the file input element
// await upload.scrollIntoViewIfNeeded() //scroll to the file input element if it is not visible
await page.setInputFiles('#singleFileInput', './tests/files/hi.txt')
await page.waitForTimeout(6000) //waiting for 6 seconds to see the changes after the file is uploaded
await page.setInputFiles('#singleFileInput', [])

await page.waitForTimeout(6000)

//multiple file upload

// await page.setInputFiles('#multipleFilesInput',['./tests/files/hi.txt','./tests/files/hello.txt']) //locator of the file input element and the paths of the files to be uploaded
// await page.setInputFiles('#multipleFilesInput', []) //to clear the file input element after uploading the files
// await page.setInputFiles('#multipleFilesInput', './tests/files/hi.txt')

// await page.waitForTimeout(6000)

console.log("Files removed successfully")

})