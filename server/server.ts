import { default as express } from 'express';
import { default as compression } from 'express';
import { default as cors } from 'cors';
import getBackgrounds from './redditScraper';

const PORT = 4000;
const app = express();

app.use(compression());
app.use(cors());

app.get('/', () => getBackgrounds);

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
