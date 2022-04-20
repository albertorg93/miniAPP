const creaDoc = require('../models/dataproduct');
const getForm = (req, res) => {
    res.render('index');
}

const createDoc = async (req, res) => {
    console.log(req.file)
    const newProduct = new creaDoc(req.body); // {} nuevo producto a guardar      
        try{
        const response = await newProduct.save();
         res.json({message:`Producto ${response.name} guardada en el sistema con ID: ${response.id}`})
        } catch(err){
            res.status(400).json({message:err});
        }

}

const formulario = {
    getForm,
    createDoc
  }
   module.exports = formulario;