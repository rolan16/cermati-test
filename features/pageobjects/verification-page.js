const Page = require('./page')

class VerificationPage extends Page {

    get headerTitle() {
        return $('.header_2xOrt')
    }

    async verifyRegistration() {
        await (await this.headerTitle).waitForDisplayed(2000);
        return await (await this.headerTitle).isDisplayed();
    }
}

module.exports = new VerificationPage()