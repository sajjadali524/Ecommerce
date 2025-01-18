import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Router from "./router/Router";

const App = () => {
  const isAdmin = true;
  return (
    <>
      {isAdmin ? null : <Header /> }
      <Router />
      {isAdmin ? null : <Footer /> }
    </>
  )
}

export default App;
