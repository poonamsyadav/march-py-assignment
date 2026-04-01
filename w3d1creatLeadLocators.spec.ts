import {test} from '@playwright/test'
test ('create lead using playwright locators',async ({page})=> {

await page.goto('http://leaftaps.com/opentaps/control/main')
await page.getByLabel('Username').fill('demosalesmanager');
await page.getByLabel('Password').fill('crmsfa');
await page.getByRole('button',{name:'Login'}).click();
await page.getByRole('link',{name:'CRM/SFA'}).click();
await page.getByRole('link',{name:'Leads'}).click();
await page.getByRole('link',{name:'Create Lead'}).click();
await page.locator('//input[@id="createLeadForm_companyName"]').fill('TATA Consultancy');
await page.waitForTimeout(1000);// can view inputs 
await page.locator('//input[@id="createLeadForm_firstName"]').fill('Emp1');
await page.locator('//input[@id="createLeadForm_lastName"]').fill('emp2');
await page.locator('//input[@id="createLeadForm_personalTitle"]').fill('hello');
await page.waitForTimeout(1000);
await page.locator('//input[@id="createLeadForm_generalProfTitle"]').fill('sir/mam');
await page.locator('//input[@id="createLeadForm_annualRevenue"]').fill('1000000');
await page.locator('//input[@id="createLeadForm_departmentName"]').fill('Information Technology');
await page.locator('//input[@id="createLeadForm_primaryPhoneNumber"]').fill('+91 1237621352')
await page.locator('//input[@name="submitButton"]').click
await page.waitForTimeout(1000);
const title= await page.title();
console.log(title);
//await page.waitForTimeout(2000);
await page.pause(); // used to check debug step by step
headless:false; // used to check gui took from google
}
) /*Running 1 test using 1 worker
[chromium] › tests\week3day1\w3d1creatLeadLocators.spec.ts:2:5 › create lead using playwright locators
Create Lead | opentaps CRM
  1 passed (2.4m)*/