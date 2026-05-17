import { Page, Locator } from "@playwright/test";   


export async function captureHighlightedScreenshot(page: Page, element: Locator, filename: string) {
    await element.scrollIntoViewIfNeeded();
    await element.evaluate((el) => {
        el.style.border = '4px solid red';
    });
    await page.screenshot({ path: `screenshots/${filename}.png` });
    await element.evaluate((el) => {
        el.style.border = '';
    });
}
