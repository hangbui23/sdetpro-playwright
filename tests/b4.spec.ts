import { expect, Page, test } from '@playwright/test';
import HomePage from '../Page/HomePage';
import {INFORMATION,CUSTOMER_SERVICE,MY_ACCOUNT,FOLLOW_US} from '../utilities/FooterInfo';

test.describe('Demo Web Shop', () => {
    test('Verify Footer Text', async ({ page }) => {
        await page.goto('https://demowebshop.tricentis.com/');

       let homePage = new HomePage(page);
       let footerText = await homePage.footer.getFooterText();
       expect(footerText).toContain("Powered by nopCommerce");
       
       let infos = await homePage.footer.getInfoInSection('INFORMATION');
        expect(infos).toEqual(INFORMATION);

        let customerServices = await homePage.footer.getInfoInSection('CUSTOMER SERVICE');
        expect(customerServices).toEqual(CUSTOMER_SERVICE);

        let myAccount = await homePage.footer.getInfoInSection('MY ACCOUNT');
        expect(myAccount).toEqual(MY_ACCOUNT);

         let followUs = await homePage.footer.getInfoInSection('FOLLOW US');
        expect(followUs).toEqual(FOLLOW_US);
    });

     test('Verify Product Items', async ({ page }) => {
        await page.goto('https://demowebshop.tricentis.com/');
       let homePage = new HomePage(page);
       let pageBody = homePage.PageBodyComponent();
        let productItemList = await pageBody.productItemsList();
      for(const productItem of productItemList){
        let productTitle = await productItem.getProductTitle();
        let productPrice = await productItem.getProductPrice();
        console.log(`Product Title: ${productTitle} | Product Price: ${productPrice}`);
      }
    });
})