import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    productImage: {
        type: String,
        required: true
    },
    productSizes: {
        type: [String],
        required: true,
        default: []
    },
    bestSeller: {
        type: Boolean,
        required: true,
        default: false
    }
}, {timestamps: true});

export const Product = mongoose.model("products", productSchema);