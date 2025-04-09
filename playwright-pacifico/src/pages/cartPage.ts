export default class CartPage {
    private Elements = {
        cartTitle: "//div[@class='app_logo']",
        checkoutBtn: "//button[@id='checkout']",
        continueShoppingBtn: "//button[@id='continue-shopping']",
        removeBtn: "//button[@id='remove-sauce-labs-backpack']",
        addToCartBtn: "//button[@id='add-to-cart-sauce-labs-backpack']", // Selector para el botón "Add to cart"
        shoppingCartLink: "//a[@class='shopping_cart_link']", // Selector para el enlace del carrito
        shoppingCartBadge: "//span[@class='shopping_cart_badge']" // Selector para el badge del carrito
    }

    async loginSuccess() {
        await global.page.waitForSelector(this.Elements.cartTitle);
    }

    async addToCart() {
        await global.page.waitForSelector(this.Elements.addToCartBtn);
        await global.page.click(this.Elements.addToCartBtn); // Hacer clic en el botón "Add to cart"
    }

    async openCart() {
        await global.page.waitForSelector(this.Elements.shoppingCartLink);
        await global.page.click(this.Elements.shoppingCartLink); // Hacer clic en el enlace del carrito
    }

    async checkout() {
        await global.page.waitForSelector(this.Elements.checkoutBtn);
        await global.page.click(this.Elements.checkoutBtn); // Hacer clic en el botón "Checkout"
    }
}