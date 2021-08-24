import dotenv from 'dotenv';
dotenv.config();
import express from 'express';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get('/api', (_req, res) => {
  res.send('Hello API!');
});

app.use('/storybook', express.static('dist/storybook'));

app.use(express.static('dist/app'));
app.listen(port, () => {
  console.log(`Your server listening on port: ${port}!`);
});
