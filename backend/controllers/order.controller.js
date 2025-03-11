import { Order } from "../models/order.model.js";
import { Cart } from "../models/cart.model.js";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// place order (user)
export const placeOrder = async (req, res) => {
    const {firstName, lastName, email, street, city, zipcode, country, phone, payment, paymentStatus} = req.body;
    const userId = req.user.id;
    console.log(req.body)
    try {
        const cart = await Cart.findOne({userId});
        if(!cart || cart.items.length === 0) {
            return res.status(400).json({message: "Cart is empty please add some product before placing oredr"});
        };

        if(!firstName || !lastName || !email || !street || !city || !zipcode || !country || !phone || !payment) {
            return res.status(404).json({message: "All fields are required"})
        };

        const orderItems = cart.items.map((item => ({
            productId: item.productId,
            name: item.name,
            price: item.price,
            image: item.productImage || "",
            size: item.size,
            quantity: item.quantity
        })));

        
        const totalPrice = cart.totalPrice;
        const totalQuantity = cart.totalItems;

        const order = new Order({
            userId,
            items: orderItems,
            shippingAddress: {
                firstName,
                lastName,
                email,
                street,
                city,
                zipcode,
                country,
                phone
            },
            paymentMethod: payment,
            paymentStatus,
            totalPrice,
            totalQuantity
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

// delete order from cart (user)
export const deleteOrderFromCart = async (req, res) => {
    const {id} = req.params;
    try {
        const order = await Order.findByIdAndDelete(id);

        if(!order) {
            return res.status(400).json({message: "order not found"})
        }
        
        return res.status(200).json({message: "order deleted", order});
    } catch (error) {
        return res.status(500).json({message: "Internal server error", error})
    }
};

// fetch orders all orders (admin)
export const fetchAllOrdersAdmin = async (req, res) => {
    try {
        const order = await Order.find();

        if(!order || order.length === 0) {
            return res.status(200).json({message: "orders not found"});
        }

        return res.status(200).json({message: "all orders fetch", order});
    } catch (error) {
        return res.status(500).json({message: "Internal server error", error});
    }
};

// update order status (admin)
export const updateOrderStatus = async (req, res) => {
    const { paymentStatus } = req.body;
    const {id} = req.params;
    try {
        const updateOrder = await Order.findByIdAndUpdate(id, {paymentStatus}, {new: true});

        if (!updateOrder) {
            return res.status(400).json({ message: "Order does not exist" });
        }
        
        if (updateOrder.paymentStatus === "Delivered") {
            return res.status(400).json({ message: "Order is already delivered" });
        }        
        
        await updateOrder.save();
        return res.status(200).json({message: "order status updated", updateOrder});
    } catch (error) {
        return res.status(500).json({message: "Internal server error", error})
    }
};

//pay from stripe
export const payFromStripe = async (req, res) => {
    const { items } = req.body;
    try {
        if (!items || !Array.isArray(items)) {
            return res.status(400).json({ message: "Invalid items data" });
        }
  
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: items.map(item => ({
          price_data: {
            currency: 'usd',
            product_data: {
              name: item.name,
            },
            unit_amount: item.price * 100,
        },
        quantity: item.quantity,
        })),
        mode: 'payment',
        success_url: 'http://localhost:5173/success',
        cancel_url: 'http://localhost:5173/cancel',
      });
  
      res.status(200).json({ sessionId: session.id });
    } catch (err) {
      res.status(500).json({ message: "Failed to create Stripe session" });
    }
  };