
import { test } from '@playwright/test';
import { URI } from '../constants/uri';
import { handleDropDowns, handleDynamicControlField, handleHover, handleIframe } from '../handleControlField/ControlField';

const DROP_DOWNS_DESC = 'Handle Drop Downs';
const IFRAME_DESC = 'Handle IFRAME';
const DYNAMIC_CONTROL_DESC = 'Handle Dynamic Control Fields';
const HOVER_DESC = 'Handle Hover Elements';

test(DROP_DOWNS_DESC, async ({ page }) => {
    await page.goto(URI.DROP_DOWNS);
    await handleDropDowns(page);
});

test(IFRAME_DESC, async ({ page }) => {
    await page.goto(URI.IFRAMES);
    await handleIframe(page);
});

test(DYNAMIC_CONTROL_DESC, async ({ page }) => {
    await page.goto(URI.DYNAMIC_FIELDS);
    await handleDynamicControlField(page);
});

test(HOVER_DESC, async ({ page }) => {
    await page.goto(URI.HOVER);
    await handleHover(page);
});