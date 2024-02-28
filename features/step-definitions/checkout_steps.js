const { Given, When, Then } = require('@wdio/cucumber-framework');
const HomePage = require('../page-objects/home.page');
const CartPage = require('../page-objects/cart.page');

Given('I am on the home page', async () => {
    await HomePage.open();
});

Given('I have no items in my cart', async () => {
    await CartPage.open();
    if (!await CartPage.isEmpty()) {
        await CartPage.removeItem();
    }
    await CartPage.open();
    expect(await CartPage.isEmpty()).toBe(true);
});

When('I select "T-shirts" menu items', async () => {
    await HomePage.selectTShirts();
});

When('I hover over the first item', async () => {
    await HomePage.hoverFirstItem();
});

When('I click on "Add to compare"', async () => {
    await HomePage.addToCompare();
    await browser.pause(1000);
});

When('I click on "Compare"', async () => {
    await HomePage.clickCompare();
    await browser.pause(1000);
});

When('I click on "Add to cart"', async () => {
    await HomePage.addToCart();
    await browser.pause(2000);
});

When('I click on "Proceed to checkout"', async () => {
    await CartPage.proceedToCheckout();
});

When('I click on "Proceed to checkout" again', async () => {
    await CartPage.proceedToCheckout2();
});

Then('The page should ask the user to create an account or sign in', async () => {
    expect(await CartPage.isSignInPromptDisplayed()).toBe(true);
});