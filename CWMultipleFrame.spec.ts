import{test,expect} from '@playwright/test'
test('iframes and nested frames',async({page})=>{
   await page.goto('https://leafground.com/frame.xhtml')

   //step 1 Interact with the Click Me button inside frame  using frame locator
   await page.frameLocator('//iframe[@src="default.xhtml"]').locator('#Click').click()
   
   //step 2 Assert the text changed after clicking the button 
   const frame1=await page.frameLocator('//iframe[@src="default.xhtml"]').locator('#Click').textContent()
   console.log(`Text name is ${frame1}`)//display the clicked text
   //expect(frame1).toBe('Hurray! You Clicked Me.')
   

   //step 3 Get the total count of frames present in the page
   const totalFrame=page.frames()
   const Noofframes=totalFrame.length
   console.log(`No of frames is ${Noofframes}`)

   //step 4 Interact with the Click Me button present inside the nested frames 

   await page.frameLocator('//iframe[@src="page.xhtml"]').frameLocator('#frame2').locator('#Click').click()
   const nestedframe=await page.frameLocator('//iframe[@src="page.xhtml"]').frameLocator('#frame2').locator('#Click').textContent()
   console.log(`Nestedframe msg ${nestedframe}`)
   //expect(nestedframe).toBe('Hurray! You Clicked Me.')


})
