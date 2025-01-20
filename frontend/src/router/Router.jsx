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
import PageNotFound from "../pages/PageNotFound";

const Router = () => {
  const isAdmin = Boolean(window.localStorage.getItem("admin"));

  return (
    <Routes>
      {/* Public Routes */}
      {!isAdmin && (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collections />} />
          <Route path="/product-detail" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<PageNotFound />} />
        </>
      )}

      {/* Admin Routes */}
      {isAdmin && (
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="add-items" element={<AddItems />} />
          <Route path="list-items" element={<ListItems />} />
          <Route path="orders" element={<Orders />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      )}
    </Routes>
  );
};

export default Router;