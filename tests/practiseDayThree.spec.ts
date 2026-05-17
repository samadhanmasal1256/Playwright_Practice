import {test, expect} from "@playwright/test"; 

test('Check title and upload files', async ({ page }) => {

    const appURL = 'https://testautomationpractice.blogspot.com/';  
    await page.goto(appURL);
    const title = await page.title();
    expect(title).toBe('Automation Testing Practice');

    const SingleFileName = 'unit 3.txt';

    const chooseFileInput = page.locator('#singleFileInput');
    await chooseFileInput.scrollIntoViewIfNeeded();

    await chooseFileInput.setInputFiles('C:\\Users\\Admin\\OneDrive\\Desktop\\unit 3.txt');
   
    const uploadSingleButton = page.getByRole('button', { name: 'Upload Single File' });
    await uploadSingleButton.click();

    const uploadedFileStatus = page.locator('#singleFileStatus');

    await expect(uploadedFileStatus).toBeVisible();
    await expect(uploadedFileStatus).toContainText(SingleFileName);

});    
