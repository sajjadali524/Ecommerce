import { Cart } from "../models/cart.model.js";
import { Product } from "../models/product.model.js";

// add product to cart 
export const addToCart = async (req, res) => {
    const {productId, quantity} = req.body;
    const id = req.user;
    try {
        if(!productId || quantity <= 0) {
            return res.status(400).json({message: "Invalid product or quantity"})
        }

        const product = await Product.findById(productId);
        if(!product) {
            return res.status(400).json({message: "product not found"})
        }

        var cart = await Cart.findOne(id);
        if(!cart) {
            cart = new Cart({
                userId: id,
                items: [],
                totalPrice: 0,
                totalItems: 0
            });
        };

        const existingItem = cart.items.find((item) => {
            item.productId.equals(productId)
        });

        if(existingItem) {
            var totalItems = existingItem.quantity += quantity;
        }else {
            cart.items.push({
                productId: product._id,
                name: product.name,
                // image: product.image,
                price: product.price,
                quantity: quantity
            });
        };
        
        console.log("total Items : ", totalItems)
        const total = cart.items.price * cart.items.quantity;
        console.log("total price : ", total)
        // await cart.save();


        return res.status(200).json({message: "Product is added to Cart", cart});
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error", error})
    }
};