import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.figma.com/');

  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Log in' }).click({ force: true });

  await page.waitForTimeout(1000);

  await page.frameLocator('role=dialog[name="Sign up"] >> iframe').getByPlaceholder('Email').click();

  await page.frameLocator('role=dialog[name="Sign up"] >> iframe').getByPlaceholder('Email').fill('moskowkach@mail.ru');

  await page.frameLocator('role=dialog[name="Sign up"] >> iframe').getByPlaceholder('Password').fill('2580852Mag');

  await page.frameLocator('role=dialog[name="Sign up"] >> iframe').getByPlaceholder('Password').press('Enter');
  await page.waitForTimeout(5000);

  await page.goto('https://www.figma.com/file/5odtWlemnkqASEAym30whq/12-team-library?t=RdxwnLTTM1ZrXd74-0');
  await page.waitForTimeout(5000);

  await page.locator('input').nth(1).press('Control+/');

  await page.getByPlaceholder('Search menus, commands, and plugins').fill('save');

  const [download] = await Promise.all([
    // Start waiting for the download
    page.waitForEvent('download'),
    // Perform the action that initiates download
    page.getByText('Save local copy…').click(),
  ]);
  // Save downloaded file somewhere
  await download.saveAs('./maket');
});
