import puppeteer from 'puppeteer';
import takePageScreenShot from '../../helper/take-page-screenshot';
require('dotenv').config();

const options = {
  headless: true,
  slowMo: 300,
  defaultViewport: null,
  args: ['--no-sandbox', '--start-maximized'],
  executablePath: process.env.PUPPETEER_EXEC_PATH,
}

jest.setTimeout(200000);

describe('Restcountries Test Suite', () => {
  console.log('Test starting....')
  let page;

  let browser;

  const homepage = 'https://restcountries-frontend.netlify.app/';
  
  beforeAll(async () => {
    browser = await puppeteer.launch(options)
    page = await browser.newPage();
    await page.goto(homepage, { waitUntil: 'networkidle2' });
  });

  afterAll(async () => {
    await page.waitForTimeout(20000);
    await browser.close()
  });

  it('should visit the meeting link', async () => {
    await page.waitForTimeout(10000);
    expect(page.url()).toEqual('https://restcountries-frontend.netlify.app/');
    await takePageScreenShot(page, 'homepage/1-homepage', false);
  });

  it('should search for a country', async () => {
    const search = await page.waitForSelector("input[class='search__input']");
    await search.click();
    await search.type('Canada');
    await page.waitForSelector('div[class="search"] div button');
    await page.click('div[class="search"] div button');
    await page.waitForTimeout(10000);
    const countryName = await page.$eval('div[class="card__description"] div', e => e.innerHTML);
    expect(countryName.length).toBeGreaterThan(1);
    await takePageScreenShot(page, 'homepage/2-search', true);
  });
});
