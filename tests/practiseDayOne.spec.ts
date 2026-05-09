import { test, expect } from '@playwright/test';

test('Check title', async ({ page }) => {

  const appURL = 'https://testautomationpractice.blogspot.com/';

  await page.goto(appURL);

  await expect(page).toHaveTitle('Automation Testing Practice');

});

test('Enter Texts in Fields and select Male', async ({ page }) => {
 
    const appURL = 'https://testautomationpractice.blogspot.com/';

    await page.goto(appURL);

    const Name = 'MONIKA MASAL';
    const Email = 'monika.masal@example.com';
    const Phone = '1234567890';
    const address = 'JAGTAP NIVAS MARUNJI PUNE 1234567890';
    
    const nameField = page.getByRole('textbox', { name: 'Enter Name' });
    const emailField = page.getByRole('textbox', { name: 'Enter Email' });
    const phoneField = page.getByRole('textbox', { name: 'Enter Phone' });
    const addressField = page.getByRole('textbox', { name: 'Address:' })

    const maleRadioButton = page.getByRole('radio', { name: 'Male' });
    const femaleRadioButton = page.getByRole('radio', { name: 'Female' });

    await nameField.fill(Name);
    await emailField.fill(Email);
    await phoneField.fill(Phone);
    await addressField.fill(address);

    await expect(nameField).toHaveValue(Name);
    await expect(emailField).toHaveValue(Email);
    await expect(phoneField).toHaveValue(Phone);
    await expect(addressField).toHaveValue(address);

    await maleRadioButton.check();
    await expect(maleRadioButton).toBeChecked();
    await expect(femaleRadioButton).not.toBeChecked();
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
    const addressField = page.getByRole('textbox', { name: 'Address:' })

    const maleRadioButton = page.getByRole('radio', { name: 'Male', exact: true });
    const femaleRadioButton = page.getByRole('radio', { name: 'Female' });

    await nameField.fill(Name);
    await emailField.fill(Email);
    await phoneField.fill(Phone);
    await addressField.fill(address);

    await expect(nameField).toHaveValue(Name);
    await expect(emailField).toHaveValue(Email);
    await expect(phoneField).toHaveValue(Phone);
    await expect(addressField).toHaveValue(address);

    // Select Female radio button directly as per test intent
    await femaleRadioButton.check();
    await expect(femaleRadioButton).toBeChecked();
    await expect(maleRadioButton).not.toBeChecked();
});