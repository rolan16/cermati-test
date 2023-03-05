const { Given, When, Then } = require('@wdio/cucumber-framework');

const RegistrationPage = require('../pageobjects/regist-page.js');
const VerificationPage = require('../pageobjects/verification-page.js');

Given('I am on the Cermati.com Sign Up Page', async () => {
    await RegistrationPage.open(`https://www.cermati.com/app/gabung`)
});

When('I input email with {string}', async (email) => {
    await RegistrationPage.inputEmail(email);
});

When('I input phone number with {string}', async (phoneNumber) => {
    await RegistrationPage.inputPhone(phoneNumber);
});

When('I input password with {string}', async (password) => {
    await RegistrationPage.inputPassword(password);
});

When('I confirm password with {string}', async (confirmPass) => {
    await RegistrationPage.inputConfirmPassword(confirmPass);
});

When('I input First Name with {string}', async (firstName) => {
    await RegistrationPage.inputFirstName(firstName);
});

When('I input Last Name with {string}', async (lastName) => {
    await RegistrationPage.inputLastName(lastName);
});

When('I input City or Province with {string}', async (cityAndProvince) => {
    await RegistrationPage.inputCity(cityAndProvince);
});

When('I click the Regist Button', async () => {
    await RegistrationPage.clickButtonDaftar();
});

Then('Then I go to verification method page', async () => {
    await VerificationPage.verifyRegistration();
});