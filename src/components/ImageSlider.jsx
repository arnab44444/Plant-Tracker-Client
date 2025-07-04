import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ImageSlider = () => {
  const images = [
    "https://i.ibb.co/8gKzQ1rh/IMG-20250627-012513-734.jpg",
    "https://i.ibb.co/PZs6jJ5L/IMG-20250627-012510-596.jpg",
    "https://i.ibb.co/LXvKt50m/IMG-20250627-012507-596.jpg",
  ];

  const [sliderHeight, setSliderHeight] = useState("65vh");

  useEffect(() => {
    const updateHeight = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setSliderHeight("35vh");
      } else if (width < 1024) {
        setSliderHeight("50vh");
      } else {
        setSliderHeight("65vh");
      }
    };

    updateHeight(); // set initially
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div className="w-full max-w-screen-xl mx-auto px-2">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="rounded-lg"
        style={{ height: sliderHeight, maxHeight: "700px" }}
      >
        {images.map((url, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={url}
              alt={`slide-${idx}`}
              className="w-full h-full object-cover rounded-lg"
              style={{ minHeight: "400px" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
