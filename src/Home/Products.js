import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import productData from "./../productData";

function Products() {
  const truncateString = (str, n = 40) =>
    str.length > n ? str.substring(0, n - 1) + "..." : str;

  const productsProperties = {
    transitionDuration: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: false,
    easing: "cubic",
  };

  return (
    <div className="p-4 rounded-md shadow-md h-100 w-full border my-6 bg-red-200">
      <h1 className="font-bold opacity-80 text-2xl mb-4">
        Berdasarkan pencarianmu
      </h1>

      <Slide {...productsProperties}>
        {productData.map((product) => (
          <div className="product h-80 w-40 rounded-xl bg-white flex flex-col items-start">
            <img
              className="object-contain rounded-t-xl h-1/2"
              src={product.picture}
              alt=""
            />

            {product.stock <= 10 ? (
              <p className="mt-1 mx-2 text-red-600 text-xs font-bold">{`Sisa ${product.stock}`}</p>
            ) : null}

            <p className="mt-1 mx-2 text-xs">{truncateString(product.title)}</p>

            <p className="mt-1 mx-2 text-sm font-bold">{`Rp ${
              product.price * (1 - product.discount)
            }`}</p>

            <div className="mt-1 mx-2 flex items-center space-x-1">
              <div className="py-0.5 px-1 bg-red-100 rounded-md">
                <p className="text-red-600 text-2xs font-bold">5%</p>
              </div>
              <p className="opacity-50 text-2xs line-through">{`Rp ${product.price}`}</p>
            </div>

            {product.cashback ? (
              <div className="mt-1 mx-2 p-1 bg-green-100 rounded-lg">
                <p className="text-green-600 text-xs font-bold">Cashback</p>
              </div>
            ) : null}

            <div className="mt-1 mx-2 flex space-x-1">
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
