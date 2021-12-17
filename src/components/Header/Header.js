import { IconButton } from "@mui/material";
import { Badge } from "@material-ui/core";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-router-dom";

import HeaderCategories from "./HeaderCategories";
import styled from "styled-components";

const navChildrenStyle =
  "grid place-items-center h-8 w-9 hover:bg-gray-200 cursor-pointer rounded-md";
const profileChildrenStyle =
  "grid place-items-center h-10 w-16 hover:bg-gray-200 cursor-pointer rounded-md";

const Container = styled.div`fixed top-0 z-50 bg-white bg-red-500 w-full`;

function Header() {
  const [isShown, setIsShown] = useState(false);

  const handleOnClick = () => {
    isShown ? setIsShown(false) : setIsShown(true);
  };

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setIsShown(false);
      }}
    >
      {/* <Container> */}
      <div className="fixed top-0 z-50 bg-white w-full">
        <div className="header h-16 flex items-center min-w-min shadow-md">
          <Link to="/">
            <div className="header__logo ml-7 cursor-pointer">
              <img
                className="max-w-none"
                src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg"
                alt="tokped logo"
              />
            </div>
          </Link>

          <button
            className="flex items-center h-9 space-x-1 ml-5 p-2 opacity-50 text-xs hover:text-green-600 hover:opacity-100 hover:font-bold focus:outline-none hover:bg-gray-200 focus:text-green-600 focus:opacity-100 focus:font-bold rounded-md"
            onClick={handleOnClick}
          >
            Kategori
          </button>

          <div className="header__search flex flex-grow ml-5">
            <input
              class="h-9 w-full bg-transparent text-sm border-2 border-gray-300 border-opacity-75 rounded-l-xl px-3 opacity-50 focus:outline-none focus:border-green-500 focus:opacity-100"
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

          <div className="header__nav flex items-center ml-4 h-6 w-36 justify-evenly border-r">
            <Link to="/cart">
              <div className={`header__cart ${navChildrenStyle}`}>
                <Badge badgeContent={4} color="error">
                  <ShoppingCartIcon className="opacity-60" />
                </Badge>
              </div>
            </Link>

            <div className={`header__notifications ${navChildrenStyle}`}>
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

            <div className={`header__messages ${navChildrenStyle}`}>
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
            <div className={profileChildrenStyle}>
              <img
                className="h-6 w-6"
                src="https://ecs7.tokopedia.net/img/cache/100-square/default_v3-shopnophoto.png"
                alt=""
              ></img>
            </div>
            <div className={profileChildrenStyle}>
              <img
                className="rounded-full h-6 w-6"
                src="https://ecs7.tokopedia.net/img/cache/300/default_picture_user/default_toped-11.jpg"
                alt="Ridwan"
              />
            </div>
          </div>
        </div>

        {isShown && <HeaderCategories />}
      </div>
      {/* </Container> */}
    </OutsideClickHandler>
  );
}

export default Header;
