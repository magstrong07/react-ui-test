import { test, expect } from '@playwright/test';
test.describe('avatarGroup', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://magstrong07.github.io/admiral-react-test/#/avatar_group');
  });
  test('avatarGroup hover', async ({ page }) => {
    await page.hover('[id="6"]');
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('avatarGroup hover Dark', async ({ page }) => {
    await page.locator('label[role="switch"] span').click();
    await page.hover('[id="6"]');
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
});