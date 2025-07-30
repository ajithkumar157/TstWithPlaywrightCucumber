 import {Given,When,Then} from "@cucumber/cucumber"; 
    import {Page,Browser,chromium,expect} from '@playwright/test';

    let page:Page;
    let browser:Browser;

        Given('the user navigates to the BookCart login page', async function () {
             browser  = await chromium.launch({headless:false});
             page = await browser.newPage();
            await page.goto('https://bookcart.azurewebsites.net/login');
         });
       

         When('the user enters a valid username {string}',async function (username:string) {
            await page.getByPlaceholder('Username').fill(username);
         });
       

         When('the user enters a valid password {string}',async function (pasword:string) {
            await page.getByPlaceholder('Password').fill(pasword);
         });
       

       
         When('the user clicks the login button', async function () {
            await page.getByText('Login').nth(2).click();
         });
       

         Then('the user should be redirected to the BookCart page',async function () {
            const icon = page.locator('mat-icon', { hasText: 'favorite' });
            await expect(icon).toBeVisible();
            browser.close();
         });

