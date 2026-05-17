import {test, expect} from "@playwright/test";
import { captureHighlightedScreenshot } from '../utilityMethods/utilityMethods';


test('Check Title and Pagination Webtable', async ({ page }) => {

    const appURL = 'https://testautomationpractice.blogspot.com/';  
    await page.goto(appURL);
    const title = await page.title();
    expect(title).toBe('Automation Testing Practice');


    const tableHeading = page.locator('//h2[text()="Pagination Web Table"]');
    await expect(tableHeading).toBeVisible();
    // await tableHeading.scrollIntoViewIfNeeded();

    // await tableHeading.evaluate(el => el.style.border = '4px solid red');
    // await page.screenshot({ path: 'Screenshots/highlighted-table.png' });
    // await tableHeading.evaluate(el => el.style.border = '');

    await captureHighlightedScreenshot(page, tableHeading, 'highlighted-table');


});