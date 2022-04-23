const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

//requerimos las rutas
const formulario = require('./routes/form');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//rutas que utilizaremos
app.use("/",formulario);

//app escuchando en el puerto indicado
const server = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })  
module.exports = server;