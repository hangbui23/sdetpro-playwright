import { Dialog, expect, test } from '@playwright/test';
import { URI } from '../constants/uri';
import { DialogAlert } from '../handleControlField/HandleAlert';
import { HandleScroll } from '../handleControlField/HandleScroll';
import { LONG_TIMEOUT, SHORT_TIMEOUT, TIMEOUT } from '../constants/timeout';

const getAdverstisingParam = async (page: any, slotId: string) => {
    return await page.evaluate((adslotId: string) => {
        const slot = googletag.pubads().getSlots().find(({ getSlotElementId }) =>
            getSlotElementId() === adslotId);
        return slot.getTargetingMap();
    }, slotId);
}

test.describe('Handle Javascript alert', () => {
	test('Handle JS Alert', async ({ page }) => {
        await page.goto(URI.JS_ALERTS);
        await DialogAlert(page, true);
        // page.on('dialog', async (dialog:Dialog) => {
        //     console.log(`Dialog message: ${dialog.message()}`);
        //     await dialog.accept();
        // });
        await page.locator('button', { hasText: 'Click for JS Alert' }).click();
        let resultLoc = page.locator('#result');
        expect(resultLoc).toHaveText('You successfully clicked an alert');
})

test('Handle JS Confirm', async ({ page }) => {
        await page.goto(URI.JS_ALERTS);
        // page.on('dialog', async (dialog:Dialog) => {
        //     console.log(`Dialog message: ${dialog.message()}`);
        //     await dialog.dismiss();
        // });
        await DialogAlert(page, false);
        await page.locator('button', { hasText: 'Click for JS Confirm' }).click();
        let resultLoc = page.locator('#result');
        expect(resultLoc).toHaveText('You clicked: Cancel');
})

test('Handle JS Prompt', async ({ page }) => {
    let textToEnter = 'Playwright';
        await page.goto(URI.JS_ALERTS);
        await DialogAlert(page, true, textToEnter);
        // page.on('dialog', async (dialog:Dialog) => {
        //     console.log(`Dialog message: ${dialog.message()}`);
        //     await dialog.accept("Playwright");
        // });
        await page.locator('button', { hasText: 'Click for JS Prompt' }).click();
        let resultLoc = page.locator('#result');
        expect(resultLoc).toHaveText("You entered: " + textToEnter);
})
});

test.describe('Handle Javascript',()=>{
        test('Handle javascript no params', async ({ page }) => {
            await page.goto(URI.FLOAT_MENU);
        //     await page.evaluate(() => {
        //          window.scrollTo(0,document.body.scrollHeight);
        // });
        await HandleScroll(page);
        await expect(page.locator('#menu')).toBeInViewport();
        await expect(page.locator('//h3[text()="Floating Menu"]')).toBeVisible();
})

 test('Handle javascript params', async ({ page }) => {
            await page.goto(URI.FLOAT_MENU);
            let scrollPercentage =0.5;
        //     await page.evaluate((percentage) => {
        //          window.scrollTo(0,document.body.scrollHeight* percentage);
        // }, scrollPercentage);
        await HandleScroll(page, scrollPercentage);
        await expect(page.locator('#menu')).toBeInViewport();
        await expect(page.locator('//h3[text()="Floating Menu"]')).toBeVisible();
})

test('Handle javascript params and return value', async ({ page }) => {
            await page.goto("https://www.foodandwine.com/");
            let adSlotId='leaderboard-flex-1';
            let scrollPercentage =0.5;
        //     await page.evaluate((percentage) => {
        //          window.scrollTo(0,document.body.scrollHeight* percentage);
        // }, scrollPercentage);
        await HandleScroll(page, scrollPercentage);
        await page.mouse.click(0,0);
         await HandleScroll(page, 0);
        await page.waitForSelector('#leaderboard-flex-1',TIMEOUT.LONG);
        await page.waitForTimeout(5000);
       const adParams = await getAdverstisingParam(page, adSlotId);
       await expect(adParams.docId[0]).toBe("6361217");
})
})