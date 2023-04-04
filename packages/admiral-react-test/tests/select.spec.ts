import { test, expect } from '@playwright/test';
test.describe('select', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://magstrong07.github.io/admiral-react-test/#/select');
  });
  test('select click options', async ({ page }) => {
    await page.waitForTimeout(200);
    await page.locator('input >> nth=1').click();
    await page.locator('div[role="option"]:has-text("Option three")>> nth=0').click();
    await page.locator('input >> nth=1').click();
    await page.locator('div[role="option"]:has-text("Option five")').click();
    await page.locator('input >> nth=1').click();
    await page.locator('text=Номер Карты /****22 Дополнительный текст').click();
    await page.locator('input >> nth=1').click();
    await page
      .locator(
        'div[role="option"]:has-text("Option eight long text long text long text long text long text long text long te")',
      )
      .click();

    await page.locator('input >> nth=2').click();
    await page.locator('div[role="option"]:has-text("Option six")').click();
    await page.locator('input >> nth=6').click();
    await page
      .locator(
        'div[role="option"]:has-text("Option eight long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text")',
      )
      .click();

    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });

  /*==============Dark mode=================*/

  test('select click options Dark', async ({ page }) => {
    await page.locator('label[role="switch"] span').click();

    await page.waitForTimeout(200);
    await page.locator('input >> nth=1').click();
    await page.locator('div[role="option"]:has-text("Option three")>> nth=0').click();
    await page.locator('input >> nth=1').click();
    await page.locator('div[role="option"]:has-text("Option five")').click();
    await page.locator('input >> nth=1').click();
    await page.locator('text=Номер Карты /****22 Дополнительный текст').click();
    await page.locator('input >> nth=1').click();
    await page
      .locator(
        'div[role="option"]:has-text("Option four long text long text long text long text long text long text long tex")',
      )
      .click();

    await page.locator('input >> nth=2').click();
    await page.locator('div[role="option"]:has-text("Option six")').click();
    await page.locator('input >> nth=6').click();
    await page
      .locator(
        'div[role="option"]:has-text("Option eight long text long text long text long text long text long text long te")',
      )
      .click();

    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
});
