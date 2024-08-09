const ProductModule = require('../models/product');

const createProduct = async (req, res) => {
    const { name, price, company } = req.body;

    try {
        if (!name || !price || !company) {
            return res.status(400).json({
                message: "All fields (name, price, company) are required"
            });
        }

        const newProduct = new ProductModule({
            name: name,
            price: price,
            company: company
        });

        await newProduct.save();
        return res.status(201).json(newProduct);

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Something went wrong"
        });
    }
}
const updateProduct = async (req,res)=>{

    const id = req.params.id;

    const { name, price, company } = req.body;

    try {
        if (!name || !price || !company) {
            return res.status(400).json({
                message: "All fields (name, price, company) are required"
            });
        }

        const newProduct = {
            name: name,
            price: price,
            company: company
        };

        await ProductModule.findByIdAndUpdate(id, newProduct, {new:true})
        return res.status(201).json(newProduct);

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Something went wrong"
        });
    }
}
const deleteProduct = async (req,res)=>{
    const id = req.params.id;
    try {
        const product = await ProductModule.findByIdAndDelete(id);
        return res.status(202).json(product);

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Something went wrong"
        });
    }
}
const getProducts = async (_req, res) =>{

    try {

        const products = await ProductModule.find()        
        return res.status(200).json(products);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Something went wrong"
        });
    }

}




module.exports = {
    createProduct,
    updateProduct,
    deleteProduct,
    getProducts
}