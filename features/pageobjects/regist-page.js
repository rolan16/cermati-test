const Page = require('./page')

class RegistrationPage extends Page {

    // This code below is for the element

    get emailFields() {
        return $('#email') // Email fields
    }

    get phoneNumber() {
        return $('#mobilePhone') // Phone number fields
    }

    get passwordFields() {
        return $('#password') // Password fields
    }

    get confirmPassword() {
        return $('#confirmPassword') // Confirm Password fields
    }

    get firstName() {
        return $('#firstName') // First Name fields
    }

    get lastName() {
        return $('#lastName') // Last Name fields
    }

    get cityAndProvince() {
        return $('#cityAndProvince') // City and Province fields
    }

    get checkBox() {
        return $('.TermsAndConditions_checkbox__text__ZPxfq') // Check Box
    }

    get btnDaftar() {
        return $('.RegistrationForm_form-container__button-text__k6N8W') // Button Daftar
    }

    // This code below is for the function

    async inputEmail (email) {
        await this.emailFields.setValue(email)
        await browser.pause(2000)
    }

    async inputPhone (phoneNumber) {
        await this.phoneNumber.setValue(phoneNumber)
        await browser.pause(2000)
    }
    
    async inputPassword (password) {
        await this.passwordFields.setValue(password)
        await browser.pause(2000)
    }

    async inputConfirmPassword (confirmPass) {
        await this.confirmPassword.scrollIntoView({block: 'center'})
        await this.confirmPassword.setValue(confirmPass)
        await browser.pause(2000)
    }

    async inputFirstName (firstName) {
        await this.firstName.scrollIntoView({block: 'center'})
        await this.firstName.setValue(firstName)
        await browser.pause(2000)
    }

    async inputLastName (lastName) {
        await this.lastName.setValue(lastName)
        await browser.pause(2000)
    }

    async inputCity (cityAndProvince) {
        await this.cityAndProvince.setValue(cityAndProvince)
        await browser.pause(2000)
    }

    async clickCheckBox () {
        await this.checkBox.click()
        await browser.pause(2000)
    }

    async clickButtonDaftar () {
        await this.btnDaftar.click()
        await browser.pause(2000)
    }

    async open(path) {
        return super.open(path)
    }

}

module.exports = new RegistrationPage()