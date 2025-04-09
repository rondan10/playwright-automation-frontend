import { Given, Then, When } from "@cucumber/cucumber";
import LoginErrorPage from "../pages/loginErrorPage";

const loginePage = new LoginErrorPage();

Given('que estoy en la página de saucedemo', async ()=> {
    await loginePage.navigateToOrangePage();
})

When('ingreso mis credenciales username {string} y password {string}', async (user, password)=> {
    await loginePage.login(user, password);
})

Then('el inicio de sesión no es exitoso', async ()=> {
    await loginePage.loginError();
})

