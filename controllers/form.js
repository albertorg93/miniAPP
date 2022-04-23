const paraNada = require('../utils/dbMongo')
const creaDoc = require('../models/dataproduct');
const fs = require('fs');
const firebase = require('../configs/firebase');
const { getStorage, ref, uploadBytes, getDownloadURL } = require("firebase/storage");
const storage = getStorage();


const getForm = (req, res) => {
    res.render('index');
}


const createDoc = async (req, res) => {
//     fs.renameSync(req.file.path, req.file.path + '.' + req.file.mimetype.split('/')[1]);
//     req.body.image = req.file.originalname
//     const newProduct = new creaDoc(req.body); // {} nuevo producto a guardar   

//     try{
        

//         const response = await newProduct.save();
//          res.json({message:`Producto ${response.name} guardada en el sistema con ID: ${response.id}`})
//         } catch(err){
//             res.status(400).json({message:err});
//         }


// const name = req.body.name;
// const price = req.body.price;
// const description = req.body.description;
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
         req.body.image = fileName
        const newProduct = new creaDoc(req.body)
        const response = await newProduct.save();
        res.json({message:`Producto ${response.name} guardado en el sistema con ID: ${response.id}`})
} catch (error) {
    console.log(error);    
}






 }

const formulario = {
    getForm,
    createDoc
  }
   module.exports = formulario;