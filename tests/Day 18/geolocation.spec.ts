import {test , expect,chromium} from '@playwright/test'

test('Geolocation Testing', async () => {

const browser = await chromium.launch();
const context = await browser.newContext({
geolocation: {

    latitude : 46.2276,
    longitude : 2.2137
},
permissions :['geolocation']

})
const page = await context.newPage();
await page.goto('https://www.google.com/maps');

})