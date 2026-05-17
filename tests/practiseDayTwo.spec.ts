import {test, expect} from '@playwright/test';

test('Check title', async ({ page }) => {                   


    const appURL = 'https://testautomationpractice.blogspot.com/';  
    await page.goto(appURL);
    const title = await page.title();

    expect(title).toBe('Automation Testing Practice');  

    const calenderFirst = page.locator('#datepicker');
    const calenderSecond = page.locator('#txtDate');

    await calenderFirst.click();
    await page.getByRole('link', { name: '5', exact: true }).click();

    await calenderSecond.click();
    await page.getByRole('link', { name: '5', exact: true }).click();

});