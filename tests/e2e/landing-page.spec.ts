import { expect, test } from '@playwright/test';

test('landing page has correct title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Next Boilerplate/i);
});
