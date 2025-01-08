import { Product } from "../models/product.model.js";

// Add Product
export const addProduct = async (req, res) => {
    const {name, description, price, category, type} = req.body;
    try {
        const addProduct = await Product.create({name, description, price, category, type});
        return res.status(200).json({message: "Product addes Successfully", addProduct});
    } catch (error) {
        return res.status(500).json({message: "Internal Server error", error});
    }
};

// fetch products
export const fetchProduct = async (req, res) => {
    try {
        const fetchProduct = await Product.find();
        if(!fetchProduct) {
            return res.status(400).json({message: "product did not exists"})
        }
        return res.status(200).json({message: "fetch all products", fetchProduct});
    } catch (error) {
        return res.status(500).json({message: "Internal Server error", error});
    }
};

// delete product
export const deleteProduct = async (req, res) => {
    const {id} = req.params;
    try {
        const product = await Product.findByIdAndDelete(id);
        if(!product) {
            return res.status(400).json({message: "Product not found"})
        }
        return res.status(200).json({message: "Product deleted"});
    } catch (error) {
        return res.status(500).json({message: "Internal Server error", error});
    }
};