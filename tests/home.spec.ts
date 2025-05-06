import { test, expect } from '@playwright/test';


test('Automation Exercise homepage ', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Automation Exercise/);
});