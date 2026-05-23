const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => {
    if (msg.type() === 'error') {
        console.log('PAGE LOG ERROR:', msg.text());
    }
  });
  page.on('pageerror', error => {
    console.log('PAGE ERROR:', error.message);
  });

  await page.goto('http://localhost:5173');
  // wait for load
  await new Promise(r => setTimeout(r, 2000));

  // Assume user needs to click 'TRADES'
  try {
      // Find the tab named TRADES
      const tabs = await page.$$('button');
      for (const tab of tabs) {
          const text = await page.evaluate(el => el.textContent, tab);
          if (text.includes('TRADES')) {
              await tab.click();
              console.log("Clicked TRADES tab");
              await new Promise(r => setTimeout(r, 1000));
          }
      }
  } catch (e) {
      console.log(e);
  }

  await browser.close();
})();
