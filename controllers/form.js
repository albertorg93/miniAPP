const paraNada = require('../utils/dbMongo')
const creaDoc = require('../models/dataproduct');
const fs = require('fs');
const firebase = require('../configs/firebase');
const { getStorage, ref, uploadBytes, getDownloadURL } = require("firebase/storage");
const storage = getStorage();
const model =  require("../models/productModel")


const getForm = (req, res) => {
    res.render('index');
}


const createDoc = async (req, res) => {

let img;
const file = req.file;
const fileName= file.originalname;
const metadata = {
    contentType: 'image/jpeg'
}; 
const storageRef = ref(storage, 'images/' + fileName);
try {
    await uploadBytes(storageRef, file.buffer, metadata).then(async (snapshot) => {
        console.log('Uploaded a file!')
        img = await getDownloadURL(storageRef);
    });
         req.body.image = img
        const response = await model.createProduct(req.body);
        res.json({message:`Producto ${response.name} guardado en el sistema con ID: ${response.id}`})
} catch (error) {
    console.log(error);    
}

 }

 const getAllProducts = async (req, res) => {
    try {
        const products = await model.getProducts();
        res.render("productsList.pug",{"products":products});  
      } catch (error) {
          console.log(error);
      }
}


const formulario = {
    getForm,
    createDoc,
    getAllProducts
  }
   module.exports = formulario;