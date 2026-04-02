import {expect, test} from '@playwright/test'
test ('check for assertions', async ({page}) => {
await page.goto('https://leafground.com/input.xhtml')//1 navigate page
//validate disabled textbox
await expect (page.getByPlaceholder('Disabled')).toBeDisabled(); //2.check disable
await expect(page.getByPlaceholder('Babu Manickam')).toBeEnabled(); //3.check enable
await page.getByPlaceholder('Babu Manickam').fill('Poonam y') //3  self name
await expect.soft (page.locator('//input[@value="Chennai"]')).toBeDisabled(); //4.soft 
await  page.locator('//input[@value="Can you clear me, please?"]').fill('');//5 fill 
await  page.locator('//input[@value="Can you clear me, please?"]').fill('yes can clear'); //fill

})