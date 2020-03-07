'use strict'
require('dotenv').config()
const express = require("express");

const app = express();
const port = process.env.PORT || 3000


app.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})
