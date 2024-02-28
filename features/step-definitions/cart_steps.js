const { Given, When, Then } = require('@wdio/cucumber-framework');
const HomePage = require('../page-objects/home.page');
const CartPage = require('../page-objects/cart.page');

When('I click on "Continue Shopping"', async () => {
    await CartPage.continueShopping();
});

Then('I should see {string} in the Cart', async (expectedCount) => {
    const actualCount = await CartPage.getCartItemCount();
    expect(actualCount).toBe(expectedCount);
});
