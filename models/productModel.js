const data = require("./dataproduct");


const createProduct = async (item) => {
    try {
        const newProduct = new data(item);
        const create = await newProduct.save()
        return create;
    } catch (error) {
        console.log(error);
    }
}

const getProducts = async () => {
    try {
        const getAllProducts = await data.find({});
        return getAllProducts;        
    } catch (error) {
        console.log(error);
    }
}


const productsModel = {
    createProduct,
    getProducts
}

module.exports = productsModel;