import test, { expect } from "@playwright/test";
import { TIMEOUT } from "../constants/timeout";

//const CUSTOM_TIMEOUT = {timeout:5 *1000};

test("b1", async ({ page }) => {
  await page.goto("/");
  //let pa = await page.locator('a:has-text("Form Authentication")');
  //pa.click();
    let pa = await page.waitForSelector('a:has-text("Form Authentications")',TIMEOUT.SHORT);
  pa.click();
  let username = (await page.locator('//em[1]').filter({ hasText: 'tomsmith' }).textContent()) ?? "";
  let password = (await page.locator('//em[2]').filter({ hasText: 'SuperSecretPassword!' }).textContent()) ?? "";
  await page.locator("#username").fill(username)
  await page.locator("#password").fill(password);
  await page.locator('button:has-text("Login")').click();
  expect(await page.locator("#flash").textContent()).toContain("You logged into a secure area!");
  page.close();
});