import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fsafe%3Dactive%26q%3Dflipkart%26oq%3Dflipkart%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOdIBCDI0MjFqMGoyqAIAsAIB%26sourceid%3Dchrome%26ie%3DUTF-8%26sei%3D_zXCabvmAb2h5OUP74aXkAU%26safe%3Dactive&q=EgSnZzddGIDsiM4GIjCsKgBVYpKNqCiLoiC241KympCypMFAosAZnKkDXRLoZM6h3IydzMBR0zRw0rDvWO4yAVJaAUM');
  await page.locator('iframe[name="a-n6ej728i3okb"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.locator('iframe[name="a-n6ej728i3okb"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.locator('iframe[name="c-n6ej728i3okb"]').contentFrame().locator('[id="0"]').click();
  await page.locator('iframe[name="c-n6ej728i3okb"]').contentFrame().locator('[id="3"]').click();
  await page.locator('iframe[name="c-n6ej728i3okb"]').contentFrame().locator('[id="1"]').click();
  await page.locator('iframe[name="c-n6ej728i3okb"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
  await page.locator('iframe[name="c-n6ej728i3okb"]').contentFrame().locator('[id="3"]').click();
  await page.locator('iframe[name="c-n6ej728i3okb"]').contentFrame().locator('[id="1"]').click();
  await page.locator('iframe[name="c-n6ej728i3okb"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
  await page.locator('iframe[name="c-n6ej728i3okb"]').contentFrame().locator('[id="5"]').click();
  await page.locator('iframe[name="c-n6ej728i3okb"]').contentFrame().locator('[id="4"]').click();
  await page.locator('iframe[name="c-n6ej728i3okb"]').contentFrame().locator('[id="7"]').click();
  await page.locator('iframe[name="c-n6ej728i3okb"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
  await page.locator('iframe[name="c-n6ej728i3okb"]').contentFrame().locator('[id="7"]').click();
  await page.locator('iframe[name="c-n6ej728i3okb"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
  await page.goto('https://www.google.com/search?safe=active&safe=active&q=flipkart&oq=flipkart&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDI0MjFqMGoyqAIAsAIB&sourceid=chrome&ie=UTF-8&safe=active&sei=IDbCadbiLMKO4-EPnqmNsAk&safe=active');
  await page.getByRole('link', { name: 'Flipkart Flipkart https://www' }).click();
});