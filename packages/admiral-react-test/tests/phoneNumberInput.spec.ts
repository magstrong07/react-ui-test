import { test, expect } from '@playwright/test';
test.describe('phone input', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://magstrong07.github.io/admiral-react-test/#/phone_number_input');
  });
  test('phone click s', async ({ page }) => {
    await page.click(`input >> nth=1`);
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('phone input number s', async ({ page }) => {
    await page.locator(`input >> nth=1`).click();
    await page.waitForTimeout(250);
    await page.locator(`input >> nth=1`).fill('+79875565432');
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('phone click flag s', async ({ page }) => {
    await page.locator('path').first().click();
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('phone flag and key up', async ({ page }) => {
    await page.locator('path').first().click();
    await page.waitForTimeout(750);
    await page.locator('body').press('ArrowUp');
    await page.locator('body').press('ArrowUp');
    await page.locator('body').press('ArrowUp');
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('phone input click and key down', async ({ page }) => {
    await page.locator(`input >> nth=1`).click();
    await page.waitForTimeout(750);
    await page.locator('body').press('ArrowDown');
    await page.waitForTimeout(750);
    await page.locator('body').press('ArrowDown');
    await page.locator('body').press('ArrowDown');
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('phone click m', async ({ page }) => {
    await page.locator(`input >> nth=3`).click();
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('phone click l', async ({ page }) => {
    await page.locator(`input >> nth=3`).click();
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });

  /*==============Dark mode=================*/

  test('phone s dark', async ({ page }) => {
    await page.locator('label[role="switch"] span').click();
    await page.locator(`input >> nth=1`).click();
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('phone click m dark', async ({ page }) => {
    await page.locator('label[role="switch"] span').click();
    await page.locator(`input >> nth=3`).click();
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('phone click l dark', async ({ page }) => {
    await page.locator('label[role="switch"] span').click();
    await page.locator(`input >> nth=3`).click();
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
});
