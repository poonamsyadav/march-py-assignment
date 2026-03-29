import {test} from '@playwright/test'
test('CreateLead',async({page})=>{

    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.locator('//input[@id="username"]').fill('demosalesmanager')
    await page.locator('//input[@id="password"]').fill('crmsfa')
    await page.click('//input[@class="decorativeSubmit"]')
    await page.locator('//a[contains(text(),"CRM")]').click()
    await page.click('//a[text()="Leads"]')
    await page.locator('//a[text()="Create Lead"]').click()
    await page.locator('//input[@id="createLeadForm_companyName"]').fill('Testleaf')
    await page.locator('//input[@id="createLeadForm_firstName"]').fill('Poonam')
    await page.locator('//input[@id="createLeadForm_lastName"]').fill('Y')
    await page.locator('//input[@id="createLeadForm_personalTitle"]').fill('Dear ')
    await page.locator('//input[@id="createLeadForm_generalProfTitle"]').fill('mr or miss')
    await page.waitForTimeout(10000)
})
/*  PS C:\Testleaf_vs> npx playwright test createLead.spec.ts

Running 1 test using 1 worker
  1 passed (33.7s)
*/