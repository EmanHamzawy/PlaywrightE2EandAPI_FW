import { Page } from '@playwright/test';

export class FlutterEnableAccessibility {
    private readonly page: Page;
    private readonly glassPaneSelector: string;
    private readonly placeholderSelector: string;
    private readonly maxRetries: number;
    private readonly intervalMs: number;

    constructor(
        page: Page,
        glassPaneSelector: string,
        placeholderSelector: string,
        maxRetries = 10,
        intervalMs = 1000
    ) {
        this.page = page;
        this.glassPaneSelector = glassPaneSelector;
        this.placeholderSelector = placeholderSelector;
        this.maxRetries = maxRetries;
        this.intervalMs = intervalMs;
    }

    async enableAccessibility(): Promise<boolean> {
        try {
            const success = await this.page.evaluate(({ glassPaneSelector, placeholderSelector}) => {
                return new Promise<boolean>((resolve) => {
                    const maxRetries = 10;
                    let retries = 0;
                    const interval = setInterval(() => {
                        const glassPane = document.querySelector(glassPaneSelector);
                        if (glassPane && glassPane.shadowRoot) {
                            const placeholder = glassPane.shadowRoot.querySelector(placeholderSelector);
                            if (placeholder) {
                                (placeholder as HTMLElement).click(); // Enable tree population
                                clearInterval(interval);
                                resolve(true);
                                return;
                            }
                        }
                        retries++;
                        if (retries >= maxRetries) {
                            clearInterval(interval);
                            resolve(false); // Timeout fallback
                        }
                    }, 1000); // Poll every 1s
                });
            }
                ,
                {
                    glassPaneSelector: this.glassPaneSelector,
                    placeholderSelector: this.placeholderSelector,
                    maxRetries: this.maxRetries,
                    intervalMs: this.intervalMs,
                });
            return success;
        } catch (error) {
            console.error('Error enabling accessibility:', error);
            return false;
        }
    }
}