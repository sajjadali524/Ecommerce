import { Product } from "../models/product.model.js";
import cloudinary from "../config/cloudinaryConfig.js";

// Add Product (admin)
export const addProduct = async (req, res) => {
    const {name, description, price, category, type, bestSeller} = req.body;
    const productSizes = req.body.productSizes.split(',').map(size => size.trim());
    if(!req.file) {
        return res.status(400).json({message: "No image Found"});
    }
    try {
        const result = await new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream(
                { folder: "Ecommerce/products" },
                (error, result) => {
                    if (error) {
                        reject(new Error("Cloudinary upload failed"));
                    } else {
                        resolve(result);
                    }
                }
            );
            stream.end(req.file.buffer);
        });

        const formattedPrice = price.startsWith('$') ? price : `$${price.trim()}`;

        const product = new Product({name, description, price: formattedPrice, category, type, productImage: result.secure_url, productSizes: productSizes, bestSeller});
        await product.save();
        return res.status(200).json({message: "Product added Successfully", product});
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

// get product details (user) and related product as well
export const productDetailsUser = async (req, res) => {
    const {id} = req.params;
    try {
        const product = await Product.findById(id);
        if(!product) {
            return res.status(400).json({message: "product not found"})
        };

        // get related products
        const relatedProduct = await Product.find({category: product.category, _id: {$ne: product._id}}).sort({createdAt: -1}).limit(5);

        return res.status(200).json({message: "product details page showing", product, relatedProduct})
    } catch (error) {
        return res.status(500).json({message: "Internal Server error", error});
    }
};

// get all product without user and admin
export const getLatestCollectionProduct = async (req, res) => {
    try {
        const products = await Product.find().sort({ createdAt: -1 }).limit(10);
        if(products.length === 0) {
            return res.status(404).json({message: "Product not found"})
        }
        return res.status(200).json({message: "All product Fetched", products})
    } catch (error) {
        return res.status(500).json({message: "Internal Server error", error});
    }
};

// get bestSelller Products without login
export const getBestSellerProductsOnly = async (req, res) => {
    try {
        const products = await Product.find({bestSeller: true}).sort({createdAt: -1}).limit(5);
        if(products.length === 0) {
            return res.status(404).json({message: "Product not found"})
        }
        return res.status(200).json({message: "All product Fetched", products})
    } catch (error) {
        return res.status(500).json({message: "Internal Server error", error});
    }
};

// get all products a to z
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find().sort({createdAt: -1});
        if(products.length === 0) {
            return res.status(404).json({message: "Product not found"})
        }
        return res.status(200).json({message: "All product Fetched", products})
    } catch (error) {
        return res.status(500).json({message: "Internal Server error", error});
    }
};

// get all products A to Z filter by category and sort by price
export const filterProductByCategory = async (req, res) => {
    const { category, type, sort } = req.query;

    try {
        const filter = {};
        if (category) {
            filter.category = { $regex: new RegExp(category, "i") };
        }
        if (type) {
            filter.type = { $regex: new RegExp(type, "i") };
        }

        const sortOption = {};
        if (sort === "Low to High") {
            sortOption.numericPrice = 1;
        } else if (sort === "High to Low") {
            sortOption.numericPrice = -1;
        } else {
            sortOption.createdAt = -1;
        }

        const products = await Product.aggregate([
            { $match: filter },
            {
                $addFields: {
                    numericPrice: {
                        $toDouble: {
                            $substr: ["$price", 1, -1] // Convert "$100" to 100
                        }
                    }
                }
            },
            { $sort: sortOption }
        ]);

        if (!products.length) {
            return res.status(404).json({ message: "Products not found" });
        }
        return res.status(200).json({ message: "Products filtered", products });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server error" });
    }
};