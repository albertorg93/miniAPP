const paraNada = require('../utils/dbMongo')
const creaDoc = require('../models/dataproduct');
const fs = require('fs');
const getForm = (req, res) => {
    res.render('index');
}

const createDoc = async (req, res) => {
    // fs.renameSync(req.file.path, req.file.path + '.' + req.file.mimetype.split('/')[1]);
     req.body.image = req.file.path
    console.log(req.body,"esto es req body")
    console.log(req.file)
    res.status(201).json({message:'todo okk'});
    // const newProduct = new creaDoc(req.body); // {} nuevo producto a guardar      
    //     try{
    //     const response = await newProduct.save();
    //      res.json({message:`Producto ${response.name} guardada en el sistema con ID: ${response.id}`})
    //     } catch(err){
    //         res.status(400).json({message:err});
    //     }

}

const formulario = {
    getForm,
    createDoc
  }
   module.exports = formulario;