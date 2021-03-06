/**
 * MIT License
 *
 * Copyright (c) 2021 Gwyn M. Davies
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
import { test, expect } from '@playwright/test';

test("Confirm dialog is auto handled", async ({page}) => {
  await page.goto("/dialogs");

  // Click Alert
  await page.click('#confirm_button');

  // Wait so we can see the dialog was handled
  await page.waitForTimeout(500);
});

test("Confirm dialog can be handled with Accept", async ({page}) => {
  await page.goto("/dialogs");

  // Handle dialog yourself
  page.on('dialog', dialog => {
    dialog.accept();
    console.log("Alert dialog handled");
  })

  // Click Alert
  await page.click('#confirm_button');

  const valueOfResponse = await page.$eval("#dialogResponse", (el) => el.textContent);
  await expect(valueOfResponse).toEqual("true");

  // Wait so we can see the dialog was handled
  await page.waitForTimeout(500);
});

test("Confirm dialog can be handled with Dismiss", async ({page}) => {
  await page.goto("/dialogs");

  // Handle dialog yourself
  page.on('dialog', dialog => {
    dialog.dismiss();
    console.log("Alert dialog handled");
  })

  // Click Alert
  await page.click('#confirm_button');

  const valueOfResponse = await page.$eval("#dialogResponse", (el) => el.textContent);
  await expect(valueOfResponse).toEqual("false");

  // Wait so we can see the dialog was handled
  await page.waitForTimeout(500);
});