import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Collections from "../pages/Collections";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/collection" element={<Collections />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}

export default Router;
