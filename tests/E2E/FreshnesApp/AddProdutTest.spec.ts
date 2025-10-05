import { test, expect } from '@playwright/test';
import {DashboardPage} from "../../../pages/FreshnesAppPages/DashboardPage";
import {AddProductPage} from "../../../pages/FreshnesAppPages/AddProductPage";
import * as data from "../../../testData/E2E/productData.json"

test('Add Product and Verify', async ({ page }) => {
    const dashboardPage : DashboardPage= new DashboardPage(page);
    await page.goto(data.appUrl);
    await dashboardPage.clickOnAddProduct();

    // await page.pause();
    const addProductPage : AddProductPage= new AddProductPage(page);
    await addProductPage.enterTitle(data.validData.title);
    await addProductPage.enterDescription(data.validData.description);
    await addProductPage.enterPrice(data.validData.price);
    await addProductPage.clickOnCreatBtn();

    await dashboardPage.search(data.validData.title);


    const count =await dashboardPage.productTitles.count();
    for (let i=0; i<count; i++) {
        const element = dashboardPage.productTitles.nth(i);
        await expect(element).toBeVisible();

        const text = await element.textContent();
        if ( text === data.validData.title ) {
            await expect(element).toHaveText(data.validData.title);
        }
    }

});