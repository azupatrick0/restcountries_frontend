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
  console.log('Test slot starting....')
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

  it('should spin machine', async () => {
    const spin = await page.waitForSelector("div[class='navbar__desktop'] a");
    await spin.click();
    await page.waitForSelector('button[class="spin__button-view-button"]');
    await page.click('button[class="spin__button-view-button"]');
    await page.waitForTimeout(10000);
    const spins = await page.$eval('div[class="spin__card"]', e => e.innerHTML);
    expect(spins.length).toBeGreaterThan(1);
    await takePageScreenShot(page, 'slot-machine/1-spin', true);
  });
});