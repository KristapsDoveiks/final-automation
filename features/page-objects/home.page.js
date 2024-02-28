import { Page } from './page.js';
import { browser } from '@wdio/globals';

class HomePage {

    //Case 1
    get tShirtsMenuItem() { return $('li > a=T-SHIRTS'); } 
    get firstItem() { return $('li > a=Faded Short Sleeve T-shirts'); }
    get addToCompareButton() { return $('div.product-container button=Add to Compare'); }
    get compareButton() { return $('button.btn.btn-default.button.button-medium.bt_compare'); } 
    get addToCartButton() { return $('a.button.ajax_add_to_cart_button.btn.btn-default'); } 


    async open() {
        await browser.navigateTo('http://www.automationpractice.pl/index.php');
    }   


    async selectTShirts() {
        await this.tShirtsMenuItem.click();
    }

    async hoverFirstItem() {
        await this.firstItem.moveTo();
    }

    async addToCompare() {
        await this.addToCompareButton.click();
    }
    async clickCompare() {
        await this.compareButton.click();
    }

    async addToCart() {
        await this.addToCartButton.click();
    }

}
export default new HomePage();