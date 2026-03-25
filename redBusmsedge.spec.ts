 import { test,chromium} from '@playwright/test'

test('Launch the RedBus in msedge browser', async()=>{
 const edgebrowser=await chromium.launch({headless: false , channel:"msedge"})
 const edgecontext=await edgebrowser.newContext();
 const edgepage= await edgecontext.newPage();
 await edgepage.goto("https://www.redbus.in/");
const redbusTitle = await edgepage.title();
const redbusURL = edgepage.url();
 await edgepage.waitForTimeout(10000)
 
console.log("RedBus Title:", redbusTitle);
console.log("RedBus URL:", redbusURL);
}) 
/* Running 1 test using 1 worker

  ✓  1 Week2day1\redBusmsedge.spec.ts:3:5 › Launch the RedBus in msedge browser (12.8s)
RedBus Title: Bus Booking Online and Train Tickets at Lowest Price - redBus
RedBus URL: https://www.redbus.in/

  1 passed (14.6s) */
