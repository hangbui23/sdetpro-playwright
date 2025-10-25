import { Page } from "@playwright/test";
import BasePage from "./BasePage";
import PageBodyComponent from "../component/PageBodyComponent";

export default class HomePage extends BasePage{

    public PageBodyComponent():PageBodyComponent{
        const pageBodyLoc = this.page.locator(PageBodyComponent.SELECTOR);
        return new PageBodyComponent(pageBodyLoc);
    }
}