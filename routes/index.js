const express = require("express");
const { welcomeMessage } = require("../controllers/index");

const router = express.Router();

router.get("/", welcomeMessage);

module.exports = router;
