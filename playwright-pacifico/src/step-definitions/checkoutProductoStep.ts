import {Given, When, Then} from '@cucumber/cucumber';
import CheckOutPage from '../pages/checkOutPage';
import cartPage from '../pages/cartPage';

const checkoutPage = new CheckOutPage();
const cart = new cartPage();

Given ('Estoy en la pagina de checkout', async () => {   
    await cart.checkout();
})

When ('Completo el formulario de checkout con nombre {string}, apellido {string} y codigo postal {string}', async (firstName, lastName, postalCode) => {
    await checkoutPage.fillForm(firstName, lastName, postalCode);
})

Then ('Continuo dando le click al siguiente boton', async () => {
    await checkoutPage.clickContinue();
})

Then ('Finalizo el checkout dando click en el boton de finalizar', async () => {
    await checkoutPage.clickFinish();
}) 
       
Then ('Regreso a la pagina de productos dando click en el boton de regresar', async () => {
    await checkoutPage.retunrToCart();
})