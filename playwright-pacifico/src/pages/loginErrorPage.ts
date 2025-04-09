export default class LoginErrorPage {
    private Elements = {
        usernameInput: "//input[@name='user-name']",
        passwordInput: "//input[@name='password']",
        loginBtn: "//input[@id='login-button']",
        errorMessage: "//h3[@data-test='error']" 
    }

    async navigateToOrangePage() {
        await global.page.goto(process.env.BASEURL);
        await global.page.waitForSelector(this.Elements.usernameInput);
    }

    async login(user: string, password: string) {
        await global.page.waitForSelector(this.Elements.usernameInput);
        await global.page.type(this.Elements.usernameInput, user);
        await global.page.type(this.Elements.passwordInput, password)
        await global.page.click(this.Elements.loginBtn);
    }
    async loginError() {
        await global.page.waitForSelector(this.Elements.errorMessage, { timeout: 10000 }); // Esperar hasta 10 segundos
        const isVisible = await global.page.isVisible(this.Elements.errorMessage);
        if (!isVisible) {
            throw new Error("El mensaje de error no es visible");
        }
    }
    
}
