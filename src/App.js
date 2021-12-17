import "./styles/output.css";
import Header from "./components/Header/Header";
import Banner from "./pages/Home/Banner";
import MidSection from "./pages/Home/MidSection";
import Products from "./pages/Home/Products";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./Cart";

function App() {
  document.title =
    "Situs Jual Beli Online Terlengkap, Mudah & Aman | Tokopedia";

  return (
    <Router>
      <div className="app bg-white w-full h-screen">
        <Switch>
          <Route path="/cart">
            <Header />
            <div className="xl:w-360 lg:w-300 md:w-200 min-w-5xl m-auto overflow-auto relative top-10">
              <Cart />
            </div>
          </Route>

          <Route path="/">
            <Header />
            <div className="home xl:w-400 lg:w-300 md:w-200 min-w-3xl m-auto overflow-auto relative top-14">
              <Banner />
              <MidSection />
              <Products />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
