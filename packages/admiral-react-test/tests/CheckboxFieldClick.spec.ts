import { test, expect } from '@playwright/test';
test.describe('Checkbox Field group', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://magstrong07.github.io/admiral-react-test/#/checkbox_field');
  });
  test('Checkbox Field group click 3', async ({ page }) => {
    await page.getByRole('checkbox', { name: 'Управляемый чекбокс' }).check();
    await page.getByRole('checkbox', { name: 'Не управляемый маленький чекбокс' }).check();
    await page.getByLabel('Error не управляемый чекбоксВариация с дополнительно декорированным текстом').check();
    await page.getByLabel('Не управляемый маленький чекбокс indeterminateВариация с дополнительным текстом').check();
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('Checkbox Field group click 3 Dark', async ({ page }) => {
    await page.locator('label[role="switch"] span').first().click();
    await page.getByRole('checkbox', { name: 'Управляемый чекбокс' }).check();
    await page.getByRole('checkbox', { name: 'Не управляемый маленький чекбокс' }).check();
    await page.getByLabel('Error не управляемый чекбоксВариация с дополнительно декорированным текстом').check();
    await page.getByLabel('Не управляемый маленький чекбокс indeterminateВариация с дополнительным текстом').check();
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
});
