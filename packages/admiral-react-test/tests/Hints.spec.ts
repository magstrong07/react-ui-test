import { test, expect } from '@playwright/test';
test.describe('Hint', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://magstrong07.github.io/admiral-react-test/#/hint');
  });
  test('Hint click', async ({ page }) => {
    await page.click('[aria-label="Additional information"]');
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
    await page.waitForTimeout(250);
    await page.click('[aria-label="Закрыть подсказку"]');
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('Hint hover', async ({ page }) => {
    await page.hover(':nth-match([aria-label="Additional information"], 2)');
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });

  /*==============Dark mode=================*/

  test('Hint click Dark', async ({ page }) => {
    await page.locator('label[role="switch"] span').click();

    await page.click('[aria-label="Additional information"]');
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
    await page.waitForTimeout(250);
    await page.click('[aria-label="Закрыть подсказку"]');
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('Hint hover Dark', async ({ page }) => {
    await page.locator('label[role="switch"] span').click();

    await page.hover(':nth-match([aria-label="Additional information"], 2)');
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
});
