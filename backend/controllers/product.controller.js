import { Product } from "../models/product.model.js";

// Add Product (admin)
export const addProduct = async (req, res) => {
    const {name, description, price, category, type} = req.body;
    try {
        const addProduct = await Product.create({name, description, price, category, type});
        return res.status(200).json({message: "Product addes Successfully", addProduct});
    } catch (error) {
        return res.status(500).json({message: "Internal Server error", error});
    }
};

// fetch products (admin)
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

// update product (admin)
export const updateProduct = async(req, res) => {
    const {name, description, price, category, type } = req.body;
    const {id} = req.params;
    try {
        const updateProduct = await Product.findByIdAndUpdate(id, {name, description, price, category, type}, {new: true});
        if(!updateProduct) {
            return res.status(400).json({message: "Product not Found!"});
        }
        return res.status(200).json({message: "Product updated", updateProduct});
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error", error})
    }
};

// delete product (admin)
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

// get all products (user)
export const fetchAllProductUser = async (req, res) => {
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

// get product details (user)
export const productDetailsUser = async (req, res) => {
    const {id} = req.params.id;
    try {
        const product = await Product.findOne(id);
        if(!product) {
            return res.status(400).json({message: "product not found"})
        }
        return res.status(200).json({message: "product details page showing", product})
    } catch (error) {
        return res.status(500).json({message: "Internal Server error", error});
    }
};