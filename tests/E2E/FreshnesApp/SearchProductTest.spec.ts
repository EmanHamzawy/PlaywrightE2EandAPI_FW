import { test, expect } from '@playwright/test';
import {DashboardPage} from "../../../pages/FreshnesAppPages/DashboardPage";
import {AddProductPage} from "../../../pages/FreshnesAppPages/AddProductPage";
import * as data from "../../../testData/E2E/productData.json"

test("Search Product And Verify Result", async ({page}) => {
    const dashboardPage : DashboardPage= new DashboardPage(page);
    await page.goto(data.appUrl);
    await dashboardPage.search(data.search.keyword)
    await dashboardPage.loadingText.waitFor({ state: 'hidden', timeout: 10000 });
    await expect(dashboardPage.loadingText).toBeHidden();

    const count = await dashboardPage.productTitles.count();
    console.log(`count: ${count}`);
    for (let i = 0; i < count; i++) {
        const title = dashboardPage.productTitles.nth(i);
        const text = await title.textContent();
        await expect(title).toContainText(data.search.keyword, { ignoreCase: true });
        if (!text?.toLowerCase().includes(data.search.keyword.toLowerCase())) {
            console.log(`result: ${text} does not include the keyword`);
        }
    }
})