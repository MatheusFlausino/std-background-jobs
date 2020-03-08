'use strict'
require('dotenv').config()
const express = require("express");
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const usuarioController = require('./app/controller/usuarioController')
const app = express();
const port = process.env.PORT || 3000

app.use(express.json());

app.post('/usuario', usuarioController.store);
app.post('/usuario/upload', upload.single('usuarios'), usuarioController.upload);

app.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})
