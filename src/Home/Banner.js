import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./../styles/homeBannerIndicator.css";

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
  };

  const bannerStyle =
    "bg-contain bg-no-repeat w-full h-0 mt-6 rounded-lg cursor-pointer";

  // const bannerStyle = "bg-center bg-cover h-72";

  return (
    <div className="">
      <div className="banner relative z-0">
        <button className="absolute z-10 bottom-0 right-0 bg-black text-white text-xs opacity-80 m-2 mb-7 py-1 px-2 rounded-md focus:outline-none">
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
          ))}
        </Slide>
      </div>
    </div>
  );
}

export default Banner;
