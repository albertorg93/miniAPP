const routes = require('express').Router();
const formulario = require('../controllers/form');
const multer = require('multer');
const upload = multer({ dest: 'public/images/' })


routes.get('/', formulario.getForm);

routes.post('/upload', upload.single('imagen') ,formulario.createDoc);

module.exports = routes;