import { test, expect, type Page } from '@playwright/test';
import { HomePage } from '../../pages/home-page';

const URL = 'https://playwright.dev/';
let homePage: HomePage;

test.beforeEach(async ({ page }) => {
  await page.goto(URL);
  homePage = new HomePage(page);
});
test.describe('Playwright website', () => {
  test('check Java page', async () => {
    await homePage.assertPageTitle();
    await homePage.assertPageUrl(URL);
    await homePage.clickGetStarted();
    await homePage.hoverNode();
    await homePage.clickJava();
    await homePage.assertNodeDescriptionNotVisible();
    await homePage.assertJavaIntroPageURL();
  })
})