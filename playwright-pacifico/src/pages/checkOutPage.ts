export default class CheckOutPage {

    private Elements = {
        cartTitle: "//div[@class='app_logo']",
        firstNameInput: "//input[@id='first-name']",
        lastNameInput: "//input[@id='last-name']",
        postalCodeInput: "//input[@id='postal-code']",
        continueBtn: "//input[@id='continue']",
        cancelBtn: "//button[@id='cancel']",
        finishBtn: "//button[@id='finish']",
        checkoutTitle: "//span[@class='title']",
        backtoproductsBtn: "//button[@id='back-to-products']",
        }

    async loginSuccess() {
        await global.page.waitForSelector(this.Elements.cartTitle);
    }

    async form(){
        await global.page.waitForSelector(this.Elements.firstNameInput);
        await global.page.waitForSelector(this.Elements.lastNameInput);
        await global.page.waitForSelector(this.Elements.postalCodeInput);
        await global.page.waitForSelector(this.Elements.continueBtn);
    }
    async fillForm(firstName: string, lastName: string, postalCode: string) {
        await global.page.waitForSelector(this.Elements.firstNameInput);
        await global.page.type(this.Elements.firstNameInput, firstName);
        await global.page.type(this.Elements.lastNameInput, lastName);
        await global.page.type(this.Elements.postalCodeInput, postalCode);
    }

    async clickContinue() {
        await global.page.waitForSelector(this.Elements.continueBtn);
        await global.page.click(this.Elements.continueBtn);
    }

    async clickFinish() {
        await global.page.waitForSelector(this.Elements.finishBtn);
        await global.page.click(this.Elements.finishBtn);
    }

    async cancelCheckout() {
        await global.page.waitForSelector(this.Elements.cancelBtn);
        await global.page.click(this.Elements.cancelBtn);
    }

    async retunrToCart() {
        await global.page.waitForSelector(this.Elements.backtoproductsBtn);
        await global.page.click(this.Elements.backtoproductsBtn);
}
}