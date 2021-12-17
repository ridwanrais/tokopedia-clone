import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./../../styles/homeBannerIndicator.css";
// import NextArrow from "./../styles/NextArrow";
// import PrevArrow from "./../styles/PrevArrow";

function Banner() {
  const slideImages = [
    "images/banner_1.jpg",
    "images/banner_2.jpg",
    "images/banner_3.jpg",
  ];

  const bannerProperties = {
    indicators: (i) => {
      const dotsHorizontalMargin = 3 * (i + 1);

      return (
        <div
          className={`indicator absolute z-10 bottom-0 left-0 bg-white h-2 w-2 rounded-full opacity-80 ml-${dotsHorizontalMargin} mb-9 `}
        ></div>
      );
    },
    pauseOnHover: false,
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
      <div className="shadow-md rounded-full p-1 opacity-70 absolute right-0">
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

  const bannerStyle = "bg-contain bg-no-repeat w-full h-0 mt-6 cursor-pointer";

  // const bannerStyle = "bg-center bg-cover h-72";

  return (
    <div className="banner relative z-0">
      <button className="absolute z-10 bottom-0 right-0 bg-black text-white text-xs opacity-80 mx-3 mb-7 py-1 px-2 rounded-md focus:outline-none">
        Lihat Promo Lainnya
      </button>
      <Slide easing="ease" {...bannerProperties}>
        {slideImages.map((image, index) => (
          <div
            className={bannerStyle}
            style={{
              backgroundImage: `url(${image})`,
              paddingTop: "25%",
            }}
          ></div>
          // <img className="h-full w-full mt-6" src={`${image}`} alt="" />
        ))}
      </Slide>
    </div>
  );
}

export default Banner;
