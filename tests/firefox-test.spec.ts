import { test, expect } from "@playwright/test";
import { firefox } from "@playwright/test";

test("b1", async ({ }) => {
   const browser = await firefox.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://example.com");
});