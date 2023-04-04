import { test, expect } from '@playwright/test';
test.describe('modal', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://magstrong07.github.io/admiral-react-test/#/modal');
  });
  test('modal click 1 button', async ({ page }) => {
    await page.click('button:has-text("Open modal with 1 button")');
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
    await page.click('button:has-text("Yes button")');
  });
  test('modal click  without buttons ', async ({ page }) => {
    await page.click('button:has-text("Open modal without buttons")');
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
    await page.click('[aria-label="Закрыть модальное окно"]');
  });
  test('modal click with scrollable content', async ({ page }) => {
    await page.click('button:has-text("Open modal with scrollable content")');
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
    await page.click('button:has-text("Yes button")');
  });
  test('modal click with custom content', async ({ page }) => {
    await page.click('button:has-text("Open modal with custom content")');
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
    await page.click('button:has-text("First button")');
  });

  /*==============Dark mode=================*/

  test('modal click 1 button Dark', async ({ page }) => {
    await page.locator('label[role="switch"] span').click();

    await page.click('button:has-text("Open modal with 1 button")');
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
    await page.click('button:has-text("Yes button")');
  });
  test('modal click  without buttons Dark', async ({ page }) => {
    await page.locator('label[role="switch"] span').click();

    await page.click('button:has-text("Open modal without buttons")');
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
    await page.click('[aria-label="Закрыть модальное окно"]');
  });
  test('modal click with scrollable content Dark', async ({ page }) => {
    await page.locator('label[role="switch"] span').click();

    await page.click('button:has-text("Open modal with scrollable content")');
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
    await page.click('button:has-text("Yes button")');
  });
  test('modal click with custom content Dark', async ({ page }) => {
    await page.locator('label[role="switch"] span').click();

    await page.click('button:has-text("Open modal with custom content")');
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
    await page.click('button:has-text("First button")');
  });
});
