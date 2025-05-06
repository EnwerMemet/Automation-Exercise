import { type Locator, type Page, expect } from '@playwright/test';
// it says that it is a good practice to use POM than selectors + functions
export class HomePage {
  readonly page: Page;
  readonly getStartedButton: Locator;
  readonly pageTitle: RegExp;
  readonly nodeLink: Locator;
  readonly javaLink: Locator;
  readonly nodeLabel: Locator;
  readonly javaLabel: Locator;
  readonly nodeDescription: Locator;
  readonly javaDescription: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getStartedButton = page.getByRole('link', { name: 'Get started' });
    this.pageTitle = /Playwright/;
    this.nodeLink = page.getByRole('button', { name: 'Node.js' });
    this.javaLink = page.getByText('Java', { exact: true });
    this.nodeLabel = page.getByRole('heading', { name: 'Installation' });
    this.javaLabel = page.getByText('Installing Playwright', { exact: true });
    this.nodeDescription = page.getByText('Installing Playwright', { exact: true });
    this.javaDescription = page.getByText(
      'Playwright is distributed as a set of Maven modules.',
      { exact: true }
    );
  }

  async clickGetStarted() {
    await this.getStartedButton.click();
  }

  async assertPageTitle() {
    await expect(this.page).toHaveTitle(this.pageTitle);
  }

  async hoverNode() {
    await this.nodeLink.hover();
  }

  async clickJava() {
    await this.javaLink.click();
  }

  async assertNodeLabelVisible() {
    await expect(this.nodeLabel).toBeVisible();
  }

  async assertPageUrl(url: string) {
    await expect(this.page).toHaveURL(url);
  }

  async assertNodeDescriptionNotVisible() {
    await expect(this.nodeDescription).not.toBeVisible();
  }

  async assertJavaIntroPageURL() {
    await expect(this.page).toHaveURL('https://playwright.dev/java/docs/intro');
  }
}
