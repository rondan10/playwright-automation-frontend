import { Given, Then, When } from "@cucumber/cucumber";
import CartPage from "../pages/cartPage";
const cartPage = new CartPage();

Given('que estoy en la página principal de saucedemo', async () => {
    await cartPage.loginSuccess();
})

When('agrego un producto al carrito', async ()=> {
    await cartPage.addToCart();
})

When('abro el carrito', async ()=> {
    await cartPage.openCart();
})

Then('realizo el checkout', async ()=> {
    await cartPage.checkout();
})
