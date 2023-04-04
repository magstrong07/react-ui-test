import { test, expect } from '@playwright/test';
test.describe('Content Switcher', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://magstrong07.github.io/admiral-react-test/#/tree');
  });
  test('Tree click text', async ({ page }) => {
    await page.locator('text=Текст заголовка, первый уровень компонента, размер M 40 1').first().click();

    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
});
