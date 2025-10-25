import { Locator } from "@playwright/test";
import LinkComponent from "./LinkComponent";

export default class InformationFooterComponent{
    public static readonly SELECTOR:string = '.information';

    constructor(private component: Locator){
        this.component = component;
    }

    public async getAllInformationLinksText():Promise<LinkComponent[]>{
       const infoLinks = await this.component.locator(LinkComponent.SELECTOR).all();
       return infoLinks.map(link => new LinkComponent(link));
    }
}