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
      return page.content();
    })
  )
  .then(html => {
    const parsedHtml = cheerio.load(html);
    parsedHtml('a[data-event-action="title"]').each(function() {
      backgrounds.push({ title: parsedHtml(this).text });
    });
  })
  .catch(err => {
    Promise.reject(err);
  });

const getBackgrounds = (req: Request, res: Response) => {
  return backgrounds;
};

export default getBackgrounds;
