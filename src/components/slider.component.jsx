import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import React from "react";

export default function Slider({ children, slidesPerView = 1, spaceBetween }) {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      pagination={{ clickable: true }}
      slidesPerView={slidesPerView}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="z-50"
    >
      {React.Children.map(children, (child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
}
