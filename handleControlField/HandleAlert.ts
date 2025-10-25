import { Dialog, Page } from "@playwright/test";

export const DialogAlert = async (page: Page, isAccept: boolean, prompText?: string) => {
  if (isAccept && prompText) {
    page.on('dialog', async (dialog: Dialog) => {
      console.log(`Dialog message: ${dialog.message()}`);
      await dialog.accept(prompText);
    });
  } else if (isAccept) {
    page.on('dialog', async (dialog: Dialog) => {
      console.log(`Dialog message: ${dialog.message()}`);
      await dialog.accept();
    });
  } else {
    page.on('dialog', async (dialog: Dialog) => {
      console.log(`Dialog message: ${dialog.message()}`);
      await dialog.dismiss();
    });
  }
};