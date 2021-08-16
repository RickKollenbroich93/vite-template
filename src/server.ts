import dotenv from 'dotenv';
dotenv.config();
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (_reg, res) => {
  res.send('Hello there i´m your server');
});
app.listen(port, () => {
  console.log(`Your server listening on port: ${port}!`);
});
