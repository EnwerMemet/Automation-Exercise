import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByRole('button', { name: 'Node.js' }).hover();
  await page.getByText('Java', {exact:true}).click();
  await expect(page).toHaveURL('https://playwright.dev/java/docs/intro');
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  await expect(page.getByText('Installing Playwright', {exact:true})).not.toBeVisible();
  const javaDescription = page.getByText('Playwright was created specifically to accommodate the needs of end-to-end testing. Playwright supports all modern rendering engines including Chromium, WebKit, and Firefox. Test on Windows, Linux, and macOS, locally or on CI, headless or headed with native mobile emulation.');
  await expect(javaDescription).toBeVisible();
});
