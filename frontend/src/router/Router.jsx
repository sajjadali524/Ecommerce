import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Collections from "../pages/Collections";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import ProductDetails from "../pages/ProductDetails";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/collection" element={<Collections />} />
      <Route path="/product-detail" element={<ProductDetails />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}

export default Router;
