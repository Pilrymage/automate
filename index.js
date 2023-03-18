// Directly distribute my config json file to be ysed in linux file
// Using express.js

const express = require('express');
const app = express();
const port = 3000;
const jsData = require('./config.json');
// return the json file
app.get('/', (req, res) => {
  res.send(jsData);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
