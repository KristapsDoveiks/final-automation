const { Given, When, Then } = require('@wdio/cucumber-framework');
const HomePage = require('../page-objects/home.page');
const CartPage = require('../page-objects/cart.page');

Then('I should see Qty being {string} for the item', async (expectedQty) => {
    const actualQty = await CartPage.getItemQuantity();
    expect(actualQty).toBe(expectedQty);
});

When('I remove an item from the cart', async () => {
    await CartPage.removeItemFromCart();
});

Then('I should see message saying {string}', async (expectedMessage) => {
    const actualMessage = await CartPage.getEmptyCartMessage();
    expect(actualMessage).toBe(expectedMessage);
});