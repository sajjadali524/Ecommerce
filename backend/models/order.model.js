import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },
    items: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "products",
                required: true
            },
            name: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            image: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
        }
    ],
    shippingAddress: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        street: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        zipcode: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
    },
    paymentMethod: {
        type: String,
        enum: ["stripe", "cod"],
        required: true,
        default: "cod"
    },
    paymentStatus: {
        type: String,
        enum: ["Order Placed", "Packing", "Shipped", "Out for Delivery", "Delivered"],
        default: "Order Placed",
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    }
}, {timestamps: true});

export const Order = mongoose.model("orders", orderSchema);