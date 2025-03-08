import { useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Router from "./router/Router";

const App = () => {
  const location = useLocation();
  const isProductDetailPage = /^\/product-detail\/[^/]+$/.test(location.pathname);
  const showHeaderAndFooter = ["/", "/collection", "/login", "/register", "/about", "/about-us", "/my-order", "/cart", "/place-order"];
  const shouldShowHeaderAndFooter = showHeaderAndFooter.includes(location.pathname) || isProductDetailPage;
  const isAdmin = window.localStorage.getItem("admin");
  return (
    <>
      {isAdmin ? null : shouldShowHeaderAndFooter && <Header /> }
      <Router />
      {isAdmin ? null : shouldShowHeaderAndFooter && <Footer /> }
    </>
  )
}

export default App;
