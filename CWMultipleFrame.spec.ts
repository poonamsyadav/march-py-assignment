import {test, expect} from '@playwright/test'

test( 'ClassAssignment to check iFrames :', async({page})=>{
    await page.goto('https://leafground.com/frame.xhtml')//initilise url

    //1.inside first frame click on "Click button"
await page.frameLocator('//iframe[@src="default.xhtml"]').locator("//button[text()='Click Me']").click();
//2.Assert the text changed after clicking the button 
const checkTextMsg= await page.frameLocator('//iframe[@src="default.xhtml"]').locator("//button[text()='Click Me']").textContent()
console.log(`the msg is :${checkTextMsg}`); //after clicking show's msg: Hurray! You Clicked Me.
 expect(checkTextMsg).toMatch('Hurray! You Clicked Me.') // verify msg
// verify msg
console.log('Text is correct!');
await page.waitForTimeout(5000);
//3.now check for total count of frame 
let totalFrame= page.frames()
let NoofFrames=totalFrame.length
//print no of frames
console.log(`No of frames is:${NoofFrames}`);

//4.Interact with the Click Me button present inside the nested frames 

await page.frameLocator('//iframe[@src="page.xhtml"]').frameLocator('#frame2').locator('#Click').click();
const nestedFrame=await page.frameLocator('//iframe[@src="page.xhtml"]').frameLocator('#frame2').locator('#Click').textContent()
//print text msg
console.log(`Text msg is:${nestedFrame}`);
//verify msg
 expect(nestedFrame).toMatch('Hurray! You Clicked Me.')
await page.waitForTimeout(5000);
})