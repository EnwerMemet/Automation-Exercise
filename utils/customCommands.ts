import { expect, type Page } from '@playwright/test';
import baseURL from '../envBaseUrl';

export const commands = {
  visitHomePage: async (page: Page) => {
    await page.goto(baseURL.tau.home);
     await expect(page).toHaveTitle(/Playwright/);
  },

  checkJavaPage: async (page: Page) => {
    await page.getByRole('button', { name: 'Node.js' }).hover();
    await page.getByText('Java', { exact: true }).click();
    await expect(page).toHaveURL('https://playwright.dev/java/docs/intro');
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
    await expect(page.getByText('Installing Playwright', { exact: true })).not.toBeVisible();
    const javaDescription = page.getByText('Playwright was created specifically to accommodate the needs of end-to-end testing. Playwright supports all modern rendering engines including Chromium, WebKit, and Firefox. Test on Windows, Linux, and macOS, locally or on CI, headless or headed with native mobile emulation.');
    await expect(javaDescription).toBeVisible();
  }
};
