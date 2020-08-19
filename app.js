const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const morgan = require('morgan');
const db = require('./Models');

const app = express();
app.use(morgan('tiny'));
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

module.exports = app;