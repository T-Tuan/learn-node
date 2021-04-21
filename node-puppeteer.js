const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.bilibili.com/");
  console.log(await page.content());
  await browser.close();
})();