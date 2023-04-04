import { test, expect } from '@playwright/test';
test.describe('Content Switcher', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://magstrong07.github.io/admiral-react-test/#/contentSwitcher');
  });
  test('Content Switcher click', async ({ page }) => {
    await page.locator('"Default button">> nth=0').click();
    await page.locator('"Default button">> nth=1').click();
    await page.locator('"Default button">> nth=2').click();
    await page.locator('"Default button">> nth=3').click();
    await page.locator('"Default button">> nth=4').click();
    await page.locator('"Default button">> nth=5').click();
    await page.locator('"Default button">> nth=6').click();
    await page.locator('"Default button">> nth=7').click();
    await page.locator('"Default button">> nth=8').click();
    await page.locator('"Default button">> nth=9').click();
    await page.locator('"Default button">> nth=10').click();
    await page.locator('"Default button">> nth=11').click();
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('Content Switcher click Dark', async ({ page }) => {
    await page.locator('label[role="switch"] span').click();

    await page.locator('"Default button">> nth=0').click();
    await page.locator('"Default button">> nth=1').click();
    await page.locator('"Default button">> nth=2').click();
    await page.locator('"Default button">> nth=3').click();
    await page.locator('"Default button">> nth=4').click();
    await page.locator('"Default button">> nth=5').click();
    await page.locator('"Default button">> nth=6').click();
    await page.locator('"Default button">> nth=7').click();
    await page.locator('"Default button">> nth=8').click();
    await page.locator('"Default button">> nth=9').click();
    await page.locator('"Default button">> nth=10').click();
    await page.locator('"Default button">> nth=11').click();
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
});
