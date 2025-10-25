import { Page } from "@playwright/test";
import FooterComponent from "../component/global/FooterComponent";
import InformationFooterComponent from "../component/global/InformationFooterComponent";
import CustomerServiceFooterComponent from "../component/global/CustomerServiceFooterComponent";


export default class BasePage{
    protected page:Page;

    constructor(page:Page){
        this.page = page;
    }

    public get footer():FooterComponent{
        const footerLoc = this.page.locator(FooterComponent.SELECTOR);
        return new FooterComponent(footerLoc);
    }

    public get information(): InformationFooterComponent{
        const infoFooter = this.page.locator(InformationFooterComponent.SELECTOR);
        return new InformationFooterComponent(infoFooter);
    }

    public get customerService(): CustomerServiceFooterComponent{
        const customerServiceInfoFooter = this.page.locator(CustomerServiceFooterComponent.SELECTOR);
        return new CustomerServiceFooterComponent(customerServiceInfoFooter);
    }
}