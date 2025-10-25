import { Locator } from "@playwright/test";

export default class ProductItem{
    public static readonly SELECTOR = '.product-item';
    private titleSelector: string = '.product-title';
    private priceSelector: string = '.prices';

    constructor(private component:Locator){
        this.component = component;
    }

    public async getProductTitle():Promise<string>{
        return await this.component.locator(this.titleSelector).innerText();
    }

    public async getProductPrice():Promise<string>{
        return await this.component.locator(this.priceSelector).innerText();
    }
}