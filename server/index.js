const express = require('express');

const app = express();
const PORT = 9966;
const BANNER = 'http://localhost:9800/';
const DESCRIPTION = 'http://localhost:9006/';
const RESERVATIONS = 'http://localhost:9001/';
const REVIEWS = 'http://localhost:9999/';


app.listen(PORT, () => { console.log(`Listening on port http://localhost:${PORT}/?1`); });

app.use('/', express.static('public'));
app.use(express.urlencoded());


app.all('/photos/:id', (req, res) => {
  const response = Response.redirect(`${BANNER}api/photos/${req.params.id}`);
  console.log('here', res)
  fetch(response)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

