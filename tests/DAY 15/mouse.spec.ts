import{test,expect} from '@playwright/test';

test.only('mouse actions', async ({page}) => {
//drag and drop
await page.goto('https://testautomationpractice.blogspot.com/')
const source = page.locator("#draggable") //locator of the element to be dragged
const target = page.locator("#droppable") //locator of the element where the source element will be dropped
await expect.soft(source).toBeVisible() //

await source.dragTo(target); //dragging the source element and dropping it on the target element



const pointme = page.getByRole('button',{name: 'Point me'}) //locator of the button to be clicked
await pointme.hover() //hovering over the button

const clickme = page.getByRole('button',{name: 'Click me'}) //locator of the button to be clicked
await clickme.dblclick() //double clicking on the button
await clickme.click({button: 'right'}) //right clicking on the button
//click()
//dragto()
//hover()
//dblclick()
//click({button: 'right'})

await page.mouse.wheel(0, 400) //scrolling down the page by 400 pixels


})