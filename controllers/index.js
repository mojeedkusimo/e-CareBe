// import model index.js
const db = require('../Models/index');
// middlewares
const asyncHandler = require('../middleware/asyncHandler');
// utilities
const errorResponse = require('../utils/errorResponse');

exports.welcomeMessage = (req, res) => {
  res.send('This is the e-care backend API index page');
};
