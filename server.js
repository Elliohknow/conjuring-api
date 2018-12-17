const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const creaturesDB = require('./data/creatures.json');
const spellsDB = require('./data/spells.json');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send("getting root!");
});

app.get('/creatures', (req, res) => {
  return res.json(creaturesDB);
});

app.get('/spells', (req, res) => {
  return res.json(spellsDB);
});

app.listen(3000, () => {
  console.log('app is running on port 3000');
});