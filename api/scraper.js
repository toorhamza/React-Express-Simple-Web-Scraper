const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");

puppeteer.use(StealthPlugin());

module.exports = async function(fetchUrl, selector) {
  try {
    const browser = await puppeteer.launch({
      headless: true,

      // Important to run on Heroku and you need to install buildpacks. Look stackoverflow link below
      // https://stackoverflow.com/questions/52225461/puppeteer-unable-to-run-on-heroku
      args: ["--no-sandbox", "--disable-setuid-sandbox"]
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });

    //Image blocking code starts

    await page.setRequestInterception(true);

    page.on("request", req => {
      if (req.resourceType() === "image") {
        req.abort();
      } else {
        req.continue();
      }
    });
    //Image blocking code ends

    page.on("error", err => {
      console.log("error happen at the page: ", err);
    });

    await page.goto(fetchUrl, {
      timeout: 25000,
      waitUntil: "networkidle2"
    });

    const selectorData = await page.evaluate(selector => {
      return document.querySelector(selector).innerText;
    }, selector);

    await browser.close();
    return selectorData;
  } catch (error) {
    console.error(error);
    await browser.close();
  }
};
