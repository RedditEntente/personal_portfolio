const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const highScores = [];

app.get('/highscores', (req, res) => {
  res.json(highScores);
});

app.post('/highscores', (req, res) => {
  const { score } = req.body;
  highScores.push(score);
  highScores.sort((a, b) => b - a); // Sort high scores in descending order
  if (highScores.length > 10) highScores.pop(); // Keep only top 10 scores
  res.status(201).send();
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
