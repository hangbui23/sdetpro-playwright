import { expect, Page } from "@playwright/test";
import { LONG_TIMEOUT, SHORT_TIMEOUT, TIMEOUT } from "../constants/timeout";

export const handleDropDowns = async(page:Page) => {
   await page.waitForTimeout(5000);
   page.locator("#dropdown").selectOption({index:1})
   await page.waitForTimeout(2000);
    page.locator("#dropdown").selectOption({value:'2'})
    await page.waitForTimeout(2000);
    page.locator("#dropdown").selectOption({'label':'Option 1'});
    await page.waitForTimeout(2000);
}

export const handleIframe = async(page:Page) => {
   let parentFrameLoc = page.frameLocator('iframe[id*="mce"]');
    parentFrameLoc.locator('#tinymce').fill('Hello from iframe');
    await page.waitForTimeout(3000);
}

export const handleDynamicControlField = async(page:Page) => {
    let chk_form_Loc= await page.locator('#checkbox-example');
    let chk_Loc=chk_form_Loc.locator('#checkbox input')
    await chk_Loc.check();
    let removeButton = chk_form_Loc.locator('button:has-text("Remove")');
    await removeButton.click();
    await chk_Loc.waitFor({state:'hidden', timeout: LONG_TIMEOUT});
    await chk_form_Loc.locator('button:has-text("Add")').click();
    await removeButton.waitFor({state:'visible', timeout: LONG_TIMEOUT});

    let input_form_Loc= await page.locator('#input-example');
    let input_Loc=input_form_Loc.locator('input[type="text"]');
    await expect(input_Loc).toBeDisabled();
    await input_form_Loc.locator('button:has-text("Enable")').click();
    await input_Loc.waitFor({state:'visible', timeout: LONG_TIMEOUT});
}   

export const handleHover = async(page:Page) => {
    let hoverLoc = await page.locator('.example .figure').all();
    for (const element of hoverLoc) {
        element.locator('img').hover();
        await page.waitForTimeout(2000);
        let captionLoc = element.locator('.figcaption');
        await expect(captionLoc).toBeVisible();
        let name = await captionLoc.locator('h5').textContent()
        expect(name).not.toBeNull();
          let profile = await captionLoc.locator('a').textContent()
        expect(profile).toBe('View profile');
    }
}