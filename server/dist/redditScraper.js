"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cheerio_1 = __importDefault(require("cheerio"));
var puppeteer_1 = __importDefault(require("puppeteer"));
var REDDIT_URL = 'https://www.reddit.com/r/WidescreenWallpaper/';
var backgrounds = [];
puppeteer_1.default
    .launch()
    .then(function (browser) { return browser.newPage(); })
    .then(function (page) {
    return page.goto(REDDIT_URL).then(function () {
        return page.content();
    });
})
    .then(function (html) {
    var parsedHtml = cheerio_1.default.load(html);
    parsedHtml('a[data-event-action="title"]').each(function () {
        backgrounds.push({ title: parsedHtml(this).text });
    });
})
    .catch(function (err) {
    Promise.reject(err);
});
var getBackgrounds = function (req, res) {
    return backgrounds;
};
exports.default = getBackgrounds;
//# sourceMappingURL=redditScraper.js.map