import { Locator } from "@playwright/test";

export default class FooterComponent{
    public static readonly SELECTOR:string = '.footer';

    constructor(private component: Locator){
        this.component = component;
    }

    public async getFooterText():Promise<string>{
    return this.component.locator('.footer-poweredby').innerText();
    }

    public getTitleSection(title: string):Locator{
        if(title.includes(' ')){
            title = title.replace(' ','-');
        }
        title = title.toLowerCase();
        return this.component.locator(`.${title}`)
    }

    public async getInfoInSection(title:string):Promise<{text:string,href:string}[]>{
        let results:{text:string,href:string}[] = [];
        let section = this.getTitleSection(title);
        let eles = await section.locator('li a').all();
        for (const element of eles) {
            results.push({
                text: await element.innerText(),
                href: await element.getAttribute('href') || ''
            });
        }
        return results;
    }
}