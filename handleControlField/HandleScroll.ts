import { Page } from "@playwright/test";

export const HandleScroll = async (page: Page, scrollPercent=1) => {
page.evaluate((value) => {
        window.scrollTo(0,document.body.scrollHeight * value);
},scrollPercent);
};