import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import React from "react";

export default function Slider({ children, slidesPerView = 1, spaceBetween }) {
  return (
    <Swiper
    height={400}
      spaceBetween={spaceBetween}
      // pagination={{ clickable: true }}
      slidesPerView={slidesPerView}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="p-10"
      // centeredSlides={true}
      style={{ padding: '20px 0' }} // Add vertical padding
    >
      {React.Children.map(children, (child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
}
