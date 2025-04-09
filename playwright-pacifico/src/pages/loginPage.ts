export default class LoginPage {
    private Elements = {
        usernameInput: "//input[@name='user-name']",
        passwordInput: "//input[@name='password']",
        loginBtn: "//input[@id='login-button']" // Actualizado para el botón de inicio de sesión
        //loginBtn: "//body/div[@id='app']/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/form[1]/div[3]/button[1]"
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
}


