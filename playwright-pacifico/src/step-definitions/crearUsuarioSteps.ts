import { Given, Then, When } from "@cucumber/cucumber";
import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

Given('que estoy en la página principal', async ()=> {
    await loginPage.navigateToOrangePage();
})

When('ingreso credenciales username {string} y password {string}', async (user, password)=> {
    await loginPage.login(user, password);
})

Then('el inicio de sesión es satisfactorio', async ()=> {
    await dashboardPage.loginSuccess();
})