import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
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
            productImage: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                default: 1
            },
            price: {
                type: Number,
                required: true,
                default: 0
            },
            size: {
                type: String,
                required: true
            }
        }
    ],
    totalPrice: {
        type: Number,
        required: true,
        default: 0
    },
    totalItems: {
        type: Number,
        required: true,
        default: 0
    }
}, {timestamps: true});

export const Cart = mongoose.model("cart", cartSchema);