const puppeteer = require('puppeteer');

module.exports = async function (fetchUrl, selector) {
    
    const browser = await puppeteer.launch({
        headless: true
    }); 
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });

    //Image blocking code starts

    await page.setRequestInterception(true);

    page.on('request', (req) => {
        if(req.resourceType() === 'image'){
            req.abort();
        }
        else {
            req.continue();
        }
    });
    //Image blocking code ends

    page.on('error', err=> {
        console.log('error happen at the page: ', err);
      });

    await page.goto(fetchUrl, {
        timeout: 25000,
        waitUntil: 'networkidle2',
      });
      
      const selectorData = await page.evaluate(selector => { 
        return document.querySelector(selector).innerText;
    }, selector);

    return (selectorData);
    await browser.close();
} 

