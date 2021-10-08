import React, { useState } from "react";
import BottomHeaderBar from "./BottomHeaderBar";

function Header() {
  const [isShown, setIsShown] = useState(false);

  const handleOnClick = () => {
    isShown ? setIsShown(false) : setIsShown(true);
  };

  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="header h-16 flex items-center min-w-min shadow-md">
        <div className="header__logo min-w-1/5 w-48 ml-7 mr-4">
          <img
            className="object-scale-down"
            src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg"
            alt="tokped logo"
          />
        </div>

        <div className="header__categories flex items-center h-9 w-16 space-x-1">
          <button
            className="opacity-50 text-xs hover:text-green-600 hover:opacity-100 hover:font-bold cursor-pointer  focus:outline-none"
            onClick={handleOnClick}
          >
            Kategori
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        <div className="header__search flex flex-grow">
          <input
            class="h-9 w-full bg-transparent ml-6 text-sm border-2 border-gray-300 border-opacity-75 rounded-l-xl px-3 opacity-50 focus:outline-none focus:border-green-500 focus:opacity-100"
            id="search"
            type="text"
            placeholder="Cari GPU"
          />

          <div className="header__searchIcon bg-gray-300 h-9 w-8 bg-transparent border-2 border-gray-300 border-opacity-75 grid place-items-center rounded-r-xl">
            <svg
              className="opacity-40 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="header__nav flex items-center ml-4 h-6 w-48 justify-evenly border-r">
          <div className="header__cart grid place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 opacity-60"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
          </div>

          <div className="header__notifications grid place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 opacity-60"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </div>

          <div className="header__messages grid place-items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 opacity-60"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
        </div>

        <div className="header__profile h-10 w-28 mx-2 flex items-center justify-evenly">
          <img
            className="h-6 w-6"
            src="https://ecs7.tokopedia.net/img/cache/100-square/default_v3-shopnophoto.png"
            alt=""
          ></img>
          <img
            className="rounded-full h-6 w-6"
            src="https://ecs7.tokopedia.net/img/cache/300/default_picture_user/default_toped-11.jpg"
            alt="Ridwan"
          />
        </div>
      </div>

      {isShown && <BottomHeaderBar />}
    </div>
  );
}

export default Header;
