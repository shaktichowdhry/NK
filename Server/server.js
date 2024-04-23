import 'dotenv/config';
import express from 'express';
const app = express();
const PORT = process.env.SERVER_PORT || 5500;

app.get('/', (req, res) => {
  res.send('<h1>Welcome to NK Server</h1>');
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
