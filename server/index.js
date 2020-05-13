const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const jsonParser = bodyParser.json();
const PORT = 3121;
const REVIEWS = 'http://localhost:3002/';
const CART = 'http://localhost:3001/';
const CAROUSEL = 'http://localhost:3003/';
const RECOMMENDED = 'http://localhost:3005/';

app.listen(PORT, () => { console.log(`Now listening on port ${PORT}`); });

app.use('/games/:gameId', express.static('public'));

app.all('/reviews/:gameId', jsonParser, (req, res) => {
  const METHOD = req.method;
  const BODY = req.body;
  axios({
    method: METHOD,
    url: `${REVIEWS}reviews/${req.params.gameId}`,
    data: JSON.stringify(BODY),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Something went wrong!');
    });
});

app.all('/cartapi/:gameId', jsonParser, (req, res) => {
  const METHOD = req.method;
  const BODY = req.body;
  axios({
    method: METHOD,
    url: `${CART}cartapi/${req.params.gameId}`,
    data: JSON.stringify(BODY),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Something went wrong!');
    });
});

app.all('/carousel/:gameId', jsonParser, (req, res) => {
  const METHOD = req.method;
  const BODY = req.body;
  axios({
    method: METHOD,
    url: `${CAROUSEL}carousel/${req.params.gameId}`,
    data: JSON.stringify(BODY),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Something went wrong!');
    });
});

app.all('/recommended/', jsonParser, (req, res) => {
  const METHOD = req.method;
  const BODY = req.body;
  axios({
    method: METHOD,
    url: `${RECOMMENDED}recommended/`,
    data: JSON.stringify(BODY),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Something went wrong!');
    });
});
