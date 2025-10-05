import { test, expect } from '@playwright/test';
import {AngularFlutterPage} from "../../../pages/AngularFlutterAppPages/AngularFlutterPage";


test('verify count increased', async ({ page }) => {
    const angularFlutterPage = new AngularFlutterPage(page);

    await angularFlutterPage.goToPage('https://flutter-angular.web.app/');
    await angularFlutterPage.glassPaneLoc.waitFor({ state: 'attached', timeout: 10000 });
    await angularFlutterPage.enableAccessibility();
    await angularFlutterPage.clickOnIncrement();
    await expect(angularFlutterPage.count).toHaveAttribute('aria-label', "1");

});
