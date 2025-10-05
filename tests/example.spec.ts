import { test, expect } from '@playwright/test';
import {AngularFlutterPage} from "../pages/AngularFlutterAppPages/AngularFlutterPage";


test('verify count increased', async ({ page }) => {
  const angularFlutterPage = new AngularFlutterPage(page);
  await angularFlutterPage.goToPage('https://flutter-angular.web.app/');
  await page.pause();
  await angularFlutterPage.enableAccessibility();
  await page.pause();
  await angularFlutterPage.clickOnIncrement();
  await page.pause();

    // const accessbilityEnabled = await flutter.enableAccessibility();
    // expect(accessbilityEnabled).toBe(true);
    // Wait for any semantic node to confirm (adjust ID if known)
    // await page.waitForSelector('flt-semantics', { state: 'attached', timeout: 10000 });
    await expect(page.locator('[id="flt-semantic-node-5"]')).toHaveAttribute('aria-label', "1");

});
