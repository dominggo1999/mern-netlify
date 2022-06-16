import express from 'express';
import serverless from 'serverless-http';

const app = express();
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    hello: 'API!',
  });
});

router.get('/test', (req, res) => {
  res.json({
    hello: 'HELLO!',
  });
});

router.post('/testpost', (req, res) => {
  res.json({
    hello: 'hit the POST!',
  });
});

app.use('/.netlify/functions/api', router);

export const handler = serverless(app);
