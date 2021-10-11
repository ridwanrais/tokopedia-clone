import "./styles/output.css";
import { Helmet } from "react-helmet";
import Header from "./Header/Header";
import Banner from "./Home/Banner";
import MidSection from "./Home/MidSection";
import Products from "./Home/Products";

function App() {
  document.title =
    "Situs Jual Beli Online Terlengkap, Mudah & Aman | Tokopedia";

  return (
    <div className="bg-white w-full h-screen">
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>
          Situs Jual Beli Online Terlengkap, Mudah & Aman | Tokopedia
        </title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet> */}

      <Header />
      <div className="home xl:w-400 lg:w-300 md:w-200 min-w-3xl m-auto overflow-auto relative top-14">
        <Banner />
        <MidSection />
        <Products />
      </div>
    </div>
  );
}

export default App;
