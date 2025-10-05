import {PageBase} from "./PageBase";

export class DashboardPage extends PageBase{

    addProductBtn = this.page.locator('//*[@href="/add"]');
    searchBox = this.page.locator('//input[@placeholder="Search for products ..."]');
    loadingText = this.page.locator('//p[@class="text-xs text-center" and text()="Loading ..."]');
    productTitles = this.page.locator('//div[@class="sc-kpDqfm hfQJgD mt-4 cursor-pointer"]');


    async clickOnAddProduct() {
        await this.addProductBtn.click();
    }
    async search(searchText: string) {
        await this.searchBox.pressSequentially(searchText);
    }
}