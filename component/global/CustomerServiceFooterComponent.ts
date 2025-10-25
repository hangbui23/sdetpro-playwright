import { Locator } from "@playwright/test";
import LinkComponent from "./LinkComponent";

export default class CustomerServiceFooterComponent{
    public static readonly SELECTOR:string = '.customer-service';

    constructor(private component: Locator){
        this.component = component;
    }

    public async getAllCustomerServiceLinksText():Promise<LinkComponent[]>{
       const infoLinks = await this.component.locator(LinkComponent.SELECTOR).all();
       return infoLinks.map(link => new LinkComponent(link));
    }
}