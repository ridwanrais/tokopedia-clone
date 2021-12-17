import React from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import cartData from "./tests/cartData2";
import CurrencyFormat from "react-currency-format";

function Cart() {
  const truncateString = (str, n = 60) =>
    str.length > n ? str.substring(0, n - 1) + "..." : str;

  return (
    <div className="container m-3 mt-12 flex">
      <div className="cart__left w-3/5 mr-8">
        <div className="cart__heading p-1 pb-4">
          <h1 className="cart__headingText my-3 font-bold text-xl text-gray-700">
            Keranjang
          </h1>
          <input
            className="chooseAllInput transform scale-150 ml-1"
            type="checkbox"
            name="chooseAll"
          />
          <label
            for="chooseAllLabel"
            className=" ml-3 text-gray-400"
            htmlFor=""
          >
            Pilih Semua
          </label>
        </div>

        <hr className="cart__headerHr bg-gray-200 h-1 border-none" />

        <div className="cart__storeItemsContainer my-3 p-1 flex flex-col">
          {cartData.map((store) => (
            <div className="cart__storeItems">
              <div className="cart__storeName flex items-start mb-4">
                <input
                  className="chooseStoreInput transform scale-150 ml-1 mt-1.5"
                  type="checkbox"
                  name="chooseStore"
                />
                <div className="cart__storeNameInnerComponents flex flex-col">
                  <div className="products__sellerNameTextContainer flex ml-3 items-center space-x-1">
                    <img
                      className="cart__sellerBadge h-4"
                      src={store.merchantLevel}
                      alt=""
                    />
                    <label
                      for="chooseStoreLabel"
                      className="cart__storeNameText ml-3 font-bold text-sm mb-1"
                      htmlFor=""
                    >
                      {store.sellerName}
                    </label>
                  </div>
                  <p className="cart__storeCityText ml-3 text-xs text-gray-400">
                    {store.sellerAddress}
                  </p>
                </div>
              </div>
              <div className="cart__productContainer">
                {store.products.map((item) => (
                  <div className="cart__product flex">
                    <input
                      className="chooseProductInput transform scale-150 ml-1 mt-1.5"
                      type="checkbox"
                      name="chooseProduct"
                    />
                    <div className="cart__productDetail w-full">
                      <div className="cart__productNameAndPrice flex mb-4">
                        <img
                          src={item.picture}
                          alt="usb bluetooth 5.0"
                          className="productImage ml-3 rounded-md h-16"
                        />
                        <div className="cart__productDetailInnerComponents flex flex-col">
                          <label
                            for="chooseProductLabel"
                            className="cart____productDetailText ml-3 text-sm mb-1"
                            htmlFor=""
                          >
                            {truncateString(item.title)}
                          </label>
                          <p className="cart__productPrice ml-3 font-bold text-xs">
                            <CurrencyFormat
                              value={Math.round(
                                item.price * (1 - item.discount)
                              )}
                              displayType={"text"}
                              thousandSeparator={true}
                              prefix={"Rp "}
                            />
                          </p>
                        </div>
                      </div>
                      <div className="cart__productAdjustment flex justify-between ml-3 mb-3">
                        <span className="cart__writeNote text-xs text-green-500 ">
                          Tulis Catatan
                        </span>
                        <div className="cart__removeProduct flex">
                          <span className="cart__moveToWishList text-xs pr-3 border-r-2 opacity-50 mr-2">
                            Pindahkan ke Wishlist
                          </span>
                          <DeleteOutlineOutlinedIcon className="opacity-50" />
                        </div>
                        <div className="cart__productAmountContainer opacity-60">
                          <RemoveCircleOutlineOutlinedIcon className="cursor-pointer" />
                          <span className="cart__productAmount mx-3">
                            {item.numberOfItems}
                          </span>
                          <AddCircleOutlineOutlinedIcon className="cursor-pointer" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <hr className="cart__productHr bg-gray-200 h-1 border-none mb-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cart__right flex flex-col space-y-8 items-center w-2/5">
        <div className="cart__shoppingSummary flex flex-col w-80 space-y-3 p-3 mt-20 rounded-sm shadow-md border-2">
          <h1 className="cart__shoppingSummaryHeader font-bold mb-2">
            Ringkasan belanja
          </h1>
          <div className="cart__priceTotalContainer flex justify-between mb-2  opacity-60">
            <span className="cart__priceTotalText text-sm">
              Total Harga (3 barang)
            </span>
            <span className="priceTotalAmount text-sm">Rp 10.000.000</span>
          </div>
          <hr className="cart__hrShoppingSummary" />
          <div className="cart__priceTotalContainer2 flex justify-between mb-2">
            <span className="cart__priceTotalText2 text-sm font-bold">
              Total Harga
            </span>
            <span className="priceTotalAmount2 text-sm font-bold">
              Rp 10.000.000
            </span>
          </div>
          <button className="cart__checkoutButton text-white w-full rounded-md p-2  bg-green-400 transition delay-50 hover:bg-green-600 focus:outline-none">
            Beli (3)
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
