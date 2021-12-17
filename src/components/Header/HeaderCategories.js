import React from "react";

function HeaderCategories() {
  const categoryStyle =
    "bottomHeaderBar__category whitespace-nowrap grid place-items-center py-5 px-6 w-full text-sm opacity-60 border-b-4 border-transparent hover:text-green-600 hover:opacity-100  focus:text-green-600 focus:opacity-100 focus:border-solid focus:border-green-500 focus:outline-none";

  const categories = [
    "Belanja",
    "Featured",
    "Brand Unggulan",
    "Halal Corner",
    "Investasi Asuransi & Pinjaman",
    "Pajak",
    "Pendidikan",
    "Tagihan",
    "Top-Up",
    "Travel & Entertainment",
    "OS Populer",
    "Lainnya",
  ];

  // const categoryList = Array.from(
  //   document.getElementsByClassName("bottomHeaderBar__category")
  // );
  // console.log(categoryList);

  return (
    <div className="w-screen bg-white border-b">
      <div className="header__categories flex items-center overflow-y-auto max-w-screen-2xl z-50 ">
        {categories.map((category) => (
          <button className={categoryStyle}>{category}</button>
        ))}
      </div>
    </div>
  );
}

export default HeaderCategories;
