import { useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Router from "./router/Router";

const App = () => {
  const location = useLocation();
  const showHeaderAndFooter = ["/", "/collection", "/login", "register", "/about", "/contact-us", "/cart", "/place-order",];
  const shouldShowHeaderAndFooter = showHeaderAndFooter.includes(location.pathname);
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
