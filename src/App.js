import "./styles/output.css";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    <div className="bg-white w-full h-screen">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Situs Jual Beli Online Terlengkap, Mudah & Aman | Tokopedia
        </title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <Header />
      {/* <div className="relative z-10 p-5 h-full bg-black"></div> */}

      <Home />
    </div>
  );
}

export default App;
