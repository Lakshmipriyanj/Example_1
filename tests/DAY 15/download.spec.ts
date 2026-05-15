//wait for download event
//click on the download link
//capture the download
//save file to the desired location


import {test, expect} from '@playwright/test';
import path  from 'path';

test('downloading file', async ({page}) => {

await page.goto('https://commitquality.com/practice-file-download') //navigating to the webpage where the file download link is present

const waitfordownloadevent  = page.waitForEvent('download') //waiting for the download event to occur
await page.getByRole('button',{name: 'Download File'}).click() //clicking on the download link

const download = await waitfordownloadevent //capturing the download event
const filepath = path.join('tests',download.suggestedFilename())
await download.saveAs(filepath)
//await download.saveAs("tests/files/" + download.suggestedFilename) //saving the downloaded file to the desired location
console.log("File downloaded successfully")
// expect(download.endsWith('.txt')).toBeTruthy() //asserting that the downloaded file has the correct extension
})
