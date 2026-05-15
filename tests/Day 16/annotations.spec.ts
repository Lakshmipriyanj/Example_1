// Playwright Test Annotations
// skip   - skips the test entirely
// slow   - triples the timeout for this test
// fail   - marks the test as expected to fail; if it fails => passed, if it passes => failed
// fixme  - marks a test as broken and temporarily ignores it
// only   - runs only this test, ignoring all others (used for debugging)

import { test, expect } from '@playwright/test';

// 1. skip - conditionally skip based on browser (skips only on firefox)
test('skip annotation', async ({ page, browserName }) => {
    test.skip(browserName === 'firefox');
    await page.goto('https://www.saucedemo.com');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    console.log('Logged in successfully - skip annotation test');
});

// 2. slow - triples the default timeout for this test
test('slow annotation', async ({ page }) => {
    test.slow();
    await page.goto('https://www.saucedemo.com');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    const title = await page.title();
    console.log('Page title:', title);
    expect(title).toBeTruthy();
});

// 3. fail - test is expected to fail; if it fails it is reported as passed
test('fail annotation', async ({ page }) => {
    test.fail();
    await page.goto('https://www.saucedemo.com');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    // Intentionally wrong assertion to demonstrate fail annotation
    // expect(await page.title()).toBe('This title does not exist');
});

// 4. fixme - marks a broken test to be fixed later; test is skipped
test.only('fixme annotation', async ({ page }) => {
    test.fixme();
    await page.goto('https://www.saucedemo.com');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    console.log('This line will never be reached'); // The test is skipped, so this code will not execute
});

// 5. only - runs only this test (comment out when not debugging)
// test.only('only annotation', async ({ page }) => {
//     await page.goto('https://www.saucedemo.com');
//     await page.locator('#user-name').fill('standard_user');
//     await page.locator('#password').fill('secret_sauce');
//     await page.locator('#login-button').click();
//     const title = await page.title();
//     console.log('Page title:', title);
//     expect(title).toBeTruthy();
// });

