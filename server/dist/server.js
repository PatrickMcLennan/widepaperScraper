"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var express_2 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var redditScraper_1 = __importDefault(require("./redditScraper"));
var PORT = 4000;
var app = express_1.default();
app.use(express_2.default());
app.use(cors_1.default());
app.get('/', function () { return redditScraper_1.default; });
app.listen(PORT, function () {
    console.log("Running on Port " + PORT);
});
//# sourceMappingURL=server.js.map