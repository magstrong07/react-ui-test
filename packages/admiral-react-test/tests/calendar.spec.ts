import { test } from '@playwright/test';

test('calendar click', async ({ page }) => {
  await page.goto('https://magstrong07.github.io/admiral-react-test/#/calendar');

  await page.locator('[data-test-id="calendar1"] svg').nth(1).click();
});
