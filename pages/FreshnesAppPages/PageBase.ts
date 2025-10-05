import { Page } from '@playwright/test';
export class PageBase{
    protected page: Page;
    constructor(page: Page){
        this.page = page;
    }
}