import { Request, Response } from 'express';
import { default as cheerio } from 'cheerio';
import { default as puppeteer } from 'puppeteer';
const REDDIT_URL = 'https://www.reddit.com/r/WidescreenWallpaper/';

interface IBackground {
  url: string;
  title: string;
  alt: string;
}

const backgrounds: IBackground[] | any = [];

puppeteer
  .launch()
  .then(browser => browser.newPage())
  .then(page =>
    page.goto(REDDIT_URL).then(function() {
      console.log(page.content());
      return page.content();
    })
  )
  .then(html => {
    const parsedHtml = cheerio.load(html);
    const titles = parsedHtml('a[data-event-action="title"]').text();
    backgrounds.push(titles);
  });

const getBackgrounds = (req: Request, res: Response) => {
  console.log(backgrounds);
  setTimeout(getBackgrounds, 750);
};

export default getBackgrounds;
