import {test, expect} from '@playwright/test';

test('DEMO TEST @Smoke', async ({ page }) => {
    console.log('This is a smoke test');

})
 test('DEMO TEST @UI', async ({ page }) => {
    console.log('This is a UI test');
})

test.describe('Test suite with tags @Regression', () => {
TEST 1
TEST 2
TEST 3
//multiple tags
// test('login test',{ tag:["@Smoke", "@API"]}, async ({ page }) => {
//     console.log('This is a smoke test for login functionality');

// })

// test('add to cart test@API', async ({ page }) => {
//     console.log('This is a regression test for add to cart functionality');
// })

})

// To run tests with specific tags, use the command:
// npx playwright test --grep @smoke
// npx playwright test --grep @UI
// npx playwright test --grep @Sanity
//npx playwright test --grep-invert @tag // to run all tests except those with the specified tag(s)
//eitheror - npx playwright test --grep "@tag1|@tag2" // to run tests that have either @tag1 or @tag2 tag
//logical AND - npx playwright test --grep "(?=.*@tag1)(?=.*@tag2)" // to run tests that have both @tag1 and @tag2 tags





test.describe.serial('E commerce test suite ', () => {

test.describe('Login tests @Login', () => {
test 1
test2

})
 test.describe('Product tests @Product', () => {

    
 })
 test.describe('Cart tests @Cart', () => {

 })

})