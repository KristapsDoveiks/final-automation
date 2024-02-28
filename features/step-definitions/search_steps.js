const { Given, When, Then } = require('@wdio/cucumber-framework');

Given('I am on the home page', async function () {
    await HomePage.open();
});

When('I click on the search box', async function () {
    const searchBox = await $('//*[@id="searchbox"]');
    await searchBox.click();
});

When('I type {string} into the search box', async function (searchTerm) {
    const searchBox = await $('//*[@id="searchbox"]');
    await searchBox.setValue(searchTerm);
});

When('I click the search button', async function () {
    const searchButton = await $('//*[@id="searchbox"]/button');
    await searchButton.click();
});

Then('I should see a list of items that contain text {string}', async function (expectedText) {
    const searchResults = await $$('.product-name');
    const texts = await Promise.all(searchResults.map(result => result.getText()));
    assert(texts.every(text => text.includes(expectedText)));
});