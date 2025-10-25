import { Locator } from "@playwright/test";

export default class LinkComponent{
    public static readonly SELECTOR:string = 'li a';

    constructor(private component: Locator){
        this.component = component;
    }

    public async getLinkText():Promise<string>{
        return this.component.innerText();
    }

    public async getLinkHref():Promise<string>{
        return (await this.component.getAttribute('href')) ?? '';
    }

    public async clickLink():Promise<void>{
        await this.component.click();
    }

}