import { test, expect } from '@playwright/test';
import { links } from '../src/components/Welcome/links';
links.sort();
test.describe('Coomponents', () => {
  for (const index in links) {
    const url = links[index];

    test(links[index], async ({ page }) => {
      await page.goto(`https://magstrong07.github.io/admiral-react-test/#${url}`);
      await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
    });
    test(links[index] + ' Dark', async ({ page }) => {
      await page.goto(`https://magstrong07.github.io/admiral-react-test/#${url}`);
      // Dark-mode switch
      await page.locator('label[role="switch"] span').first().click();
      await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
    });
  }
});
