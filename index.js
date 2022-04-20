require('dotenv').config()
const express = require('express');
const path = require('path');
const fs = require('fs');



const formulario = require('./routes/form');
const app = express();

const port = process.env.PORT || 5000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use("/",formulario);


const server = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  
  module.exports = server;