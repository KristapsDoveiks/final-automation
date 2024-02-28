import { Page } from './page.js';
import { browser } from '@wdio/globals';

class CartPage {

    // Case 1
    get cartEmptyIndicator() { return $('span.ajax_cart_no_product'); }
    get removeItemButton() { return $('.cart_quantity_down'); } 
    get proceedToCheckoutButton1() { return $('a.btn.btn-default.button.button-medium'); } 
    get proceedToCheckoutButton2() { return $('a.btn.btn-default.standard-checkout.button-medium'); } 
    get signInPrompt() { return $('h3.page-subheading=Create an account'); } 
    
    // Case 3
    async continueShopping() {
        const continueShoppingButton = await $('.continue');
        await continueShoppingButton.click();
    }

    async getCartItemCount() {
        const cartItemCount = await $('.ajax_cart_quantity');
        return await cartItemCount.getText();
    }

    //Case 4 
    async getItemQuantity() {
        const itemQuantity = await $('.cart_quantity_input');
        return await itemQuantity.getValue();
    }

    async removeItemFromCart() {
        await this.removeItemButton.click();
    }

    async getEmptyCartMessage() {
        const emptyCartMessage = await $('.alert.alert-warning');
        return await emptyCartMessage.getText();
    }
    
    // Other functions
    async isEmpty() {
        return await this.cartEmptyIndicator.isDisplayed();
    }

    async open() {
        await browser.navigateTo('http://www.automationpractice.pl/index.php?controller=order');
        await expect(this.pageTitle).toHaveText("Order - My Shop");
    }

    async proceedToCheckout() {
        await this.proceedToCheckoutButton1.click();
    }
    async proceedToCheckout2() {
        await this.proceedToCheckoutButton2.click();
    }
    async isSignInPromptDisplayed() {
        return await this.signInPrompt.isDisplayed();
    }

}
export default new CartPage();