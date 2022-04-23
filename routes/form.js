const routes = require('express').Router();
const formulario = require('../controllers/form');
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single('image');


routes.get('/', formulario.getForm);

routes.post('/upload', upload ,formulario.createDoc);

//routes.get('/products', formulario.getProducts);

module.exports = routes;