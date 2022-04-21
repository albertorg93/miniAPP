require('dotenv').config()
const express = require('express');
//const bodyParser = require('body-parser')
const path = require('path');

const app = express();

//requerimos las rutas
const formulario = require('./routes/form');

const port = process.env.PORT || 5000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(bodyParser.json());


//rutas que utilizaremos
app.use("/",formulario);


const server = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  
  module.exports = server;