const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/fullName', (req, res) => {
  const firstName = req.query.firstName;
  const lastName = req.query.lastName;
  res.send(firstName.toUpperCase() + ' ' + lastName.toUpperCase());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
