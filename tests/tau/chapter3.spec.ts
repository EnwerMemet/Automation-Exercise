import { test, expect } from '@playwright/test';
import baseURL from '../../envBaseUrl';
import { commands } from '../../utils/customCommands';


test.describe('two tests', () => {
  test.beforeAll(async ({ }) => {
    test.skip(!!process.env.PROD, 'Skipping test on production');
  });
  async function clickGetStarted(page) {
    await page.getByRole('link', { name: 'Get started' }).click();
  }
  test.beforeEach(async ({ page }) => {
    await commands.visitHomePage(page);
  });


  test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status === 'failed') {
      console.log(`Test failed: ${testInfo.title}, with status: ${testInfo.status}, ended up at ${page.url()}`);
    }
    if (testInfo.status === 'passed') {
      console.log(`Test passed: ${testInfo.title}`);
    }
    if (testInfo.status === 'skipped') {
      console.log(`Test skipped: ${testInfo.title}`);
    }
    if (testInfo.status === 'timedOut') {
      console.log(`Test timed out: ${testInfo.title}`);
    }
  });

  test.afterAll(async ({ }) => {
    console.log('All tests completed');
  });
  test.skip('Automation Exercise homepage ', async ({ page }) => { })

  test('check Java page', async ({ page }) => {
    await clickGetStarted(page);
    await commands.checkJavaPage(page);
  });
});


