import { test, expect } from '@playwright/test';

test('Check title', async ({ page }) => {

  const appURL = 'https://testautomationpractice.blogspot.com/';

  await page.goto(appURL);

  await expect(page).toHaveTitle('Automation Testing Practice');

});

test('Enter Texts in Fields and select Female', async ({ page }) => {
 
    const appURL = 'https://testautomationpractice.blogspot.com/';

    await page.goto(appURL);

    const Name = 'MONIKA MASAL';
    const Email = 'monika.masal@example.com';
    const Phone = '1234567890';
    const address = 'JAGTAP NIVAS MARUNJI PUNE 1234567890';
    
    const nameField = page.getByRole('textbox', { name: 'Enter Name' });
    const emailField = page.getByRole('textbox', { name: 'Enter Email' });
    const phoneField = page.getByRole('textbox', { name: 'Enter Phone' });
    const addressField = page.getByRole('textbox', { name: 'Address:' });
    const countryDropdown = page.getByLabel('Country:');


    const maleRadioButton = page.getByRole('radio', { name: 'Male' });
    const femaleRadioButton = page.getByRole('radio', { name: 'Female' });
    const sundayCheckbox = page.getByRole('checkbox', { name: 'Sunday' });
    const mondayCheckbox = page.getByRole('checkbox', { name: 'Monday' });
    const tuesdayCheckbox = page.getByRole('checkbox', { name: 'Tuesday' });
    const wednesdayCheckbox = page.getByRole('checkbox', { name: 'Wednesday' });
    const thursdayCheckbox = page.getByRole('checkbox', { name: 'Thursday' });
    const fridayCheckbox = page.getByRole('checkbox', { name: 'Friday' });
    const saturdayCheckbox = page.getByRole('checkbox', { name: 'Saturday' });

    await nameField.fill(Name);
    await emailField.fill(Email);
    await phoneField.fill(Phone);
    await addressField.fill(address);

    await expect(nameField).toHaveValue(Name);
    await expect(emailField).toHaveValue(Email);
    await expect(phoneField).toHaveValue(Phone);
    await expect(addressField).toHaveValue(address);

    await femaleRadioButton.check();
    await expect(femaleRadioButton).toBeChecked();
    // await expect(maleRadioButton).not.toBeChecked();

    // await countryDropdown.waitFor({ state: 'visible' });
    await countryDropdown.selectOption('India');
    await expect(countryDropdown).toHaveValue('india');


    await sundayCheckbox.check();
    await expect(sundayCheckbox).toBeChecked();
    await mondayCheckbox.check();
    await expect(mondayCheckbox).toBeChecked();
    await tuesdayCheckbox.check();
    await expect(tuesdayCheckbox).toBeChecked();
    await wednesdayCheckbox.check();
    await expect(wednesdayCheckbox).toBeChecked();
    await thursdayCheckbox.check();
    await expect(thursdayCheckbox).toBeChecked();
    await fridayCheckbox.check();
    await expect(fridayCheckbox).toBeChecked();
    await saturdayCheckbox.check();
    await expect(saturdayCheckbox).toBeChecked();
});