import { Locator } from "@playwright/test";
import ProductItem from "./ProductItems";

export default class PageBodyComponent{
    public static readonly SELECTOR:string = '.page-body';

    constructor(private component: Locator){
        this.component = component;
    }

    public async productItemsList():Promise<ProductItem[]>{
        const productItems = await this.component.locator(ProductItem.SELECTOR).all();
        return productItems.map(item => new ProductItem(item));
    }
}