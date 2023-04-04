import { test, expect } from '@playwright/test';
test.describe('avatar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://magstrong07.github.io/admiral-react-test/#/avatar');
  });
  test('avatar hover', async ({ page }) => {
    await page.hover('button:nth-child(6)');
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('avatar hover Dark', async ({ page }) => {
    await page.locator('label[role="switch"] span').click();
    await page.hover('button:nth-child(6)');
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
});
