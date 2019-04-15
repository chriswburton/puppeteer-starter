# Puppeteer Starter
A small repo for getting started with Puppeteer.

# Configuration
To get set up, clone this repo, navigate to the folder on the Command Line, then carry out the following steps:

```
npm install
```

# Running
To run Puppeteer, simply run: ``node index.js`` from inside this folder.

# Puppeteer
Below are some common Puppeteer commands you may need to use. Simply copy and paste them into the `index.js` file (see comments). You can disregard the ``// comment lines above each command``:
```
// for navigating
await page.goto('https://www.linkedin.com');

// for waiting until a page element exists
await page.waitForSelector('title');

// for waiting for a specified number of milliseconds
await page.waitFor(1000);
```

[See a full list of Puppeteer API commands by clicking here.](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md)

## Cheerio
Cheerio is a small, jQuery-inspired library that makes it easy to work with HTML. First we need to set up Cheerio with the HTML we want to work with:
```
// firstly, we need to load the content of the page into a variable
const content = await page.content();
// we can now load this HTML content into Cheerio
const $ = cheerio.load(content);
```

We can now use Cheerio (replace ``CSS_SELECTOR`` with a valid CSS selector):

```
// for extracting text only
$(CSS_SELECTOR).text()

// for extracting full HTML
$(CSS_SELECTOR).html()

// for getting the value of an attribute
$(CSS_SELECTOR).attr('data-my-attribute')
```

[Click here to see a useful jQuery cheatsheet (most of which is supported in Cheerio).](https://oscarotero.com/jquery/)