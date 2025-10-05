import {PageBase} from "./PageBase";

export class AddProductPage extends PageBase {
    title = this.page.locator('//input[@name="title"]');
    description = this.page.locator('//input[@name="description"]');
    price = this.page.locator('//input[@name="price"]');
    creatBtn = this.page.locator('//button[@type="submit" and text()="Create Product"]');

    async enterTitle(title: string) {
        await this.title.fill(title);
    }
    async enterDescription(description: string) {
        await this.description.fill(description);
    }
    async enterPrice(price: string) {
        await this.price.fill(price);
    }
    async clickOnCreatBtn() {
        await this.creatBtn.click();
    }
}