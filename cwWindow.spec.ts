import{test, expect} from '@playwright/test'

test ('Handle Window HW',async({page,context})=>
{ 
await page.goto('https://leaftaps.com/opentaps/control/main')
await page.locator('#username').fill('demosalesmanager');
await page.locator('#password').fill('crmsfa');
await page.locator('.decorativeSubmit').click();
await page.locator('//a[contains(text(),"CRM")]').click();
await page.locator('//a[contains(text(),"Leads")]').click();
await page.locator('//a[contains(text(),"Merge Leads")]').click();
await page.waitForTimeout(5000);
let title=await page.title();
//first id 
const [childWindow1] = await Promise.all([
    context.waitForEvent('page'),
    page.click('(//img[@src="/images/fieldlookup.gif"])[1]')
  ]);
  await childWindow1.waitForLoadState();
  await childWindow1.click('text=10049');
//second id
const [childWindow2] = await Promise.all([
    context.waitForEvent('page'),
    page.click('(//img[@src="/images/fieldlookup.gif"])[2]')
  ]);
  await childWindow2.waitForLoadState();
  await childWindow2.click('text=10050');

//handle alerts
page.once("dialog", async (alert) => {
        const alertmsg = alert.message();
        console.log(alertmsg);
        await alert.accept();})

//now merge two id's
await page.locator('//a[text()="Merge"]').click();
//handle Assertions
    await expect(page).toHaveTitle(/View Lead/)
await page.waitForTimeout(4000);

})


