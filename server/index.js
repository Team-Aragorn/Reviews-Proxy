const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3121;
const REVIEWS = 'http://localhost:3002';

app.listen(PORT, () => { console.log(`Now listening on port ${PORT}`); });

app.use('/games/:gameId', express.static('public'));

app.get('/reviews/:gameId', (req, res) => {
  axios.get(REVIEWS + `/reviews/${req.params.gameId}`)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => { console.log(err); });
});
