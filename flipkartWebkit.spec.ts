

import { test,webkit} from '@playwright/test'

test ('Launch the flipkart in webkit browser', async()=>{
 const webkitbrowser=await webkit.launch({headless: false , channel:"webkit"})
 const webkitcontext=await webkitbrowser.newContext();
 const webkitpage= await webkitcontext.newPage();
 await webkitpage.goto("https://www.flipkart.com");
const flipkartTitle = await webkitpage.title();
const flipkartURL = webkitpage.url();
 await webkitpage.waitForTimeout(10000)
 
console.log("flipkart Title:", flipkartTitle);
console.log("flipkart URL:", flipkartURL);
}) /* PS C:\Testleaf_vs\tests> npx playwright test flipkartWebkit.spec.ts

Running 1 test using 1 worker

  ✓  1 Week2day1\flipkartWebkit.spec.ts:5:5 › Launch the flipkart in webkit browser (15.1s)
flipkart Title: Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!
flipkart URL: https://www.flipkart.com/

  1 passed (16.6s)*/