import { test, expect } from '@playwright/test';
test.describe('Chips', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://magstrong07.github.io/admiral-react-test/#/chips');
  });
  test('Chips close', async ({ page }) => {
    await page.locator(`data-test-id=chipClose >>svg >> nth=0`).click();
    await page.locator(`data-test-id=chipClose >>svg >> nth=0`).click();
    await page.locator(`data-test-id=chipClose >>svg >> nth=2`).click();
    await page.locator(`data-test-id=chipClose >>svg >> nth=2`).click();
    await page.locator(`data-test-id=chipClose >>svg >> nth=4`).click();
    await page.locator(`data-test-id=chipClose >>svg >> nth=4`).click();
    await page.locator(`data-test-id=chipClose >>svg >> nth=6`).click();
    await page.locator(`data-test-id=chipClose >>svg >> nth=6`).click();

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('chips_close.png');
  });
  test('Chips select', async ({ page }) => {
    await page.locator(`text=Выбрать >> nth=0`).click();
    await page.locator(`text=Выбрать >> nth=1`).click();
    await page.locator(`text=Выбрать >> nth=4`).click();
    await page.locator(`text=Выбрать >> nth=5`).click();
    await page.locator(`text=Выбрать >> nth=8`).click();
    await page.locator(`text=Выбрать >> nth=9`).click();
    await page.locator(`text=Выбрать >> nth=12`).click();
    await page.locator(`text=Выбрать >> nth=13`).click();

    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });

  test('Chips select with badge', async ({ page }) => {
    await page.locator(`text=with badge >> nth=0`).click();
    await page.locator(`text=with badge >> nth=1`).click();
    await page.locator(`text=with badge >> nth=4`).click();
    await page.locator(`text=with badge >> nth=5`).click();
    await page.locator(`text=with badge >> nth=8`).click();
    await page.locator(`text=with badge >> nth=9`).click();
    await page.locator(`text=with badge >> nth=12`).click();
    await page.locator(`text=with badge >> nth=13`).click();

    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });

  /*==============Dark mode=================*/

  test('Chips close Dark', async ({ page }) => {
    await page.locator('label[role="switch"] span').click();

    await page.locator(`data-test-id=chipClose >>svg >> nth=0`).click();
    await page.locator(`data-test-id=chipClose >>svg >> nth=0`).click();
    await page.locator(`data-test-id=chipClose >>svg >> nth=2`).click();
    await page.locator(`data-test-id=chipClose >>svg >> nth=2`).click();
    await page.locator(`data-test-id=chipClose >>svg >> nth=4`).click();
    await page.locator(`data-test-id=chipClose >>svg >> nth=4`).click();
    await page.locator(`data-test-id=chipClose >>svg >> nth=6`).click();
    await page.locator(`data-test-id=chipClose >>svg >> nth=6`).click();

    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('Chips select Dark', async ({ page }) => {
    await page.locator('label[role="switch"] span').click();

    await page.locator(`text=Выбрать >> nth=0`).click();
    await page.locator(`text=Выбрать >> nth=1`).click();
    await page.locator(`text=Выбрать >> nth=4`).click();
    await page.locator(`text=Выбрать >> nth=5`).click();
    await page.locator(`text=Выбрать >> nth=8`).click();
    await page.locator(`text=Выбрать >> nth=9`).click();
    await page.locator(`text=Выбрать >> nth=12`).click();
    await page.locator(`text=Выбрать >> nth=13`).click();

    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });

  test('Chips select with badge Dark', async ({ page }) => {
    await page.locator('label[role="switch"] span').click();

    await page.locator(`text=with badge >> nth=0`).click();
    await page.locator(`text=with badge >> nth=1`).click();
    await page.locator(`text=with badge >> nth=4`).click();
    await page.locator(`text=with badge >> nth=5`).click();
    await page.locator(`text=with badge >> nth=8`).click();
    await page.locator(`text=with badge >> nth=9`).click();
    await page.locator(`text=with badge >> nth=12`).click();
    await page.locator(`text=with badge >> nth=13`).click();

    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
});
