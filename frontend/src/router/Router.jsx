import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Collections from "../pages/Collections";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import ProductDetails from "../pages/ProductDetails";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AddItems from "../pages/admin/AddItems";
import ListItems from "../pages/admin/ListItems";
import Orders from "../pages/admin/Orders";
import Layout from "../components/admin/Layout";
import PlaceOrder from "../pages/PlaceOrder";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/collection" element={<Collections />} />
      <Route path="/product-detail" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/place-order" element={<PlaceOrder />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      {/* admin  */}
      <Route path="/admin" element={<Layout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="add-items" element={<AddItems />} />
        <Route path="list-items" element={<ListItems />} />
        <Route path="orders" element={<Orders />} />
      </Route>
    </Routes>
  )
}

export default Router;
