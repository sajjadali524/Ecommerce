import { Order } from "../models/order.model.js";
import { Cart } from "../models/cart.model.js";

// place order (user)
export const placeOrder = async (req, res) => {
    const {firstName, lastName, email, street, city, state, zipcode, country, phone, paymentMethod, paymentStatus} = req.body;
    const userId = req.user.id;
    try {
        const cart = await Cart.findOne({userId});
        if(!cart || cart.items.length === 0) {
            return res.status(400).json({message: "Cart is empty please add some product before placing oredr"});
        };

        const orderItems = cart.items.map((item => ({
            productId: item.productId,
            name: item.name,
            price: item.price,
            image: item.image || "",
            quantity: item.quantity
        })));

        
        const totalPrice = cart.totalPrice;

        const order = new Order({
            userId,
            items: orderItems,
            shippingAddress: {
                firstName,
                lastName,
                email,
                street,
                city,
                state,
                zipcode,
                country,
                phone
            },
            paymentMethod,
            paymentStatus,
            totalPrice,
        });

        await order.save();
        await Cart.deleteOne({ userId });
        return res.status(200).json({message: "Order is Placed", order});

    } catch (error) {
        return res.status(500).json({message: "Intenal Server Error", error});
    }
};

// fetch orders (user)
export const fetchMyOrders = async (req, res) => {
    try {
        const myOrders = await Order.find({userId: req.user.id});

        if(!myOrders || myOrders.length === 0) {
            return res.status(400).json({message: "you did not made any order"});
        }

        return res.status(200).json({message: "fetch all orders", myOrders});
    } catch (error) {
        return res.status(500).json({message: "Internal server error", error});
    }
};