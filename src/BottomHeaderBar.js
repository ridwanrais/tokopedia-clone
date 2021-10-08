import React from "react";

function BottomHeaderBar() {
  const categoryStyle =
    "bottomHeaderBar__category whitespace-nowrap grid place-items-center py-5 px-6 w-full text-sm opacity-60 border-b-4 border-transparent hover:text-green-600 hover:opacity-100 cursor-pointer focus:text-green-600 focus:opacity-100 focus:border-solid focus:border-green-500 focus:outline-none";

  // const categoryList = Array.from(
  //   document.getElementsByClassName("bottomHeaderBar__category")
  // );
  // console.log(categoryList);

  return (
    <div className="bottomHeaderBar flex items-center overflow-y-auto max-w-screen-2xl z-10 ">
      <button className={categoryStyle}>Belanja</button>
      <button className={categoryStyle}>Featured</button>
      <button className={categoryStyle}>Brand Unggulan</button>
      <button className={categoryStyle}>Halal Corner</button>
      <button className={categoryStyle}>Investasi Asuransi & Pinjaman</button>
      <button className={categoryStyle}>Pajak</button>
      <button className={categoryStyle}>Pendidikan</button>
      <button className={categoryStyle}>Tagihan</button>
      <button className={categoryStyle}>Top-Up</button>
      <button className={categoryStyle}>Travel & Entertainment</button>
      <button className={categoryStyle}>OS Populer</button>
      <button className={categoryStyle}>Lainnya</button>
    </div>
  );
}

export default BottomHeaderBar;
