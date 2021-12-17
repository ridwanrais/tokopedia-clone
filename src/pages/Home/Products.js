import React from "react";
import CurrencyFormat from "react-currency-format";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
// import nextArrow from "./../styles/NextArrow";
// import prevArrow from "./../styles/PrevArrow";

import productData from "../../tests/productData";

function Products() {
  const truncateString = (str, n = 40) =>
    str.length > n ? str.substring(0, n - 1) + "..." : str;

  const productsProperties = {
    transitionDuration: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: false,
    easing: "cubic",
    infinite: false,
    prevArrow: (
      <div className="shadow-md rounded-full p-1 opacity-70 absolute">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
    ),
    nextArrow: (
      <div className="shadow-md rounded-full p-1 opacity-70 absolute right-7">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    ),
  };

  return (
    <div className="p-4 rounded-md shadow-md w-full border my-6 min-w-2xl">
      <h1 className="font-bold opacity-80 text-2xl mb-4">
        Berdasarkan pencarianmu
      </h1>

      <Slide {...productsProperties}>
        {productData.map((product) => (
          <div className="product xl:h-80 xl:w-40 lg:h-80 lg:w-36 h-80 w-32 rounded-xl shadow-md bg-white flex flex-col items-start mx-1 my-1">
            <img
              className="object-contain rounded-t-xl "
              src={product.picture}
              alt=""
            />

            {product.stock <= 10 ? (
              <p className="mt-1 mx-2 text-red-600 text-xs font-bold">{`Sisa ${product.stock}`}</p>
            ) : null}

            <p className="mt-1 mx-2 text-xs">{truncateString(product.title)}</p>

            <p className="mt-1 mx-2 text-sm font-bold">
              <CurrencyFormat
                value={Math.round(product.price * (1 - product.discount))}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"Rp "}
              />
            </p>

            {product.discount ? (
              <div className="mt-1 mx-2 flex items-center space-x-1">
                <div className="py-0.5 px-1 bg-red-100 rounded-md">
                  <p className="text-red-600 text-2xs font-bold">{`${
                    product.discount * 100
                  }%`}</p>
                </div>
                <p className="opacity-50 text-2xs line-through">
                  <CurrencyFormat
                    value={product.price}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"Rp "}
                  />
                </p>
              </div>
            ) : product.cashback ? (
              <div className="mt-1 mx-2 p-1 bg-green-100 rounded-lg">
                <p className="text-green-600 text-xs font-bold">Cashback</p>
              </div>
            ) : null}

            <div className="products__sellerData mt-1 mx-2 flex space-x-1">
              <img className="h-4" src={product.merchantLevel} alt="" />
              <p className="opacity-50 text-xs">{product.sellerAddress}</p>
            </div>

            {product.sold ? (
              <div className="mt-1 mx-2 flex">
                <img
                  src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/abeeb1e0.svg"
                  alt=""
                />
                <p className="opacity-60 text-sm">{`${product.rating} | Terjual ${product.sold}`}</p>
              </div>
            ) : null}
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default Products;
