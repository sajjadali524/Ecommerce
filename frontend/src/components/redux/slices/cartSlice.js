// src/components/redux/cartSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const token = window.localStorage.getItem("token");

export const fetchCart = createAsyncThunk(
  'cart/fetchCart',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:8000/api/v1/cart/get-all-product", {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true
      });
      return response.data.fetchAllProduct.flatMap(product => product.items);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const removeFromCart = createAsyncThunk(
  'cart/removeFromCart',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`http://localhost:8000/api/v1/cart/remove-from-cart/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true
      });
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalPrice: 0,
    totalItems: 0,
    status: null,
    error: null
  },
  reducers: {
    addToCart: (state, action) => {
        const existingItem = state.items.find(
          (item) => item._id === action.payload._id
        );
        if (existingItem) {
            existingItem.quantity += action.quantity || 1;
          } else {
            state.items.push({
              _id: action._id,
              quantity: action.quantity || 1,
              price: action.price || 0,
              name: action.name || "Unknown product",
              size: action.size || "N/A"
            });
          }
        state.totalItems = state.items.reduce(
          (sum, item) => sum + item.quantity,
          0
        );
      },
      clearCart: (state) => {
        state.items = [];
        state.totalPrice = 0;
        state.quantity = 0
      },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.items = action.payload;
        state.totalItems = action.payload.reduce((sum, item) => sum + item.quantity, 0);
        state.totalPrice = action.payload.reduce((sum, item) => sum + item.price * item.quantity, 0);
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item._id !== action.payload);
        state.totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
        state.totalPrice = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
      });
  }
});

export const { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;