const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

(async () => {
    console.log('START');
    const browser = await puppeteer.launch();
    console.log('Puppeteer started!');

    const page = await browser.newPage();
    console.log('New tab opened');

    // your logic goes here

    await browser.close();
    console.log('Puppeteer ended');
    console.log('END');
})();