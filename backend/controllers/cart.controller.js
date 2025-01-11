import { Cart } from "../models/cart.model.js";
import { Product } from "../models/product.model.js";

// add product to cart 
export const addToCart = async (req, res) => {
    const {productId, quantity} = req.body;
    const userId = req.user.id;
    try {
        if(!productId || quantity <= 0) {
            return res.status(400).json({message: "Invalid product or quantity"})
        }

        const product = await Product.findById(productId);
        if(!product) {
            return res.status(400).json({message: "product not found"})
        }

        let cart = await Cart.findOne({userId});
        if(!cart) {
            cart = new Cart({
                userId,
                items: [],
                totalPrice: 0,
                totalItems: 0
            });
        };

        const existingItem = cart.items.find((item) => item.productId.equals(productId));

        if(existingItem) {
            existingItem.quantity += quantity;
        }else {
            cart.items.push({
                productId: product._id,
                name: product.name,
                image: product.image,
                price: product.price,
                quantity: quantity
            });
        };
        
        cart.totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);
        cart.totalPrice = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        await cart.save();


        return res.status(200).json({message: "Product is added to Cart", cart});
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error", error});
    }
};

// fetch all product to cart (user)
export const fetchAllProductToCart = async (req, res) => {
    try {
        const fetchAllProduct = await Cart.find();
        
        if(!fetchAllProduct) {
            return res.status(400).json({message: "Cart is empty please added some product"});
        };
        
        return res.status(200).json({message: "All product is fetched", fetchAllProduct});
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error", error});
    }
};

// delete product from cart (user)
export const removeProductFromCart = async (req, res) => {
    const {id} = req.params;
    try {
        const productInCart = await Cart.findByIdAndDelete(id);

        if(!productInCart) {
            return res.status(400).json({message: "Product is not in Cart"});
        }

        return res.status(200).json({message: "Product Deleted Successfully", productInCart});
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error", error});
    }
};