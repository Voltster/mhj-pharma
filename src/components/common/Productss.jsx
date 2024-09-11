// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./style.css";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { effectTarget } from "swiper/effect-utils";
import { motion as m } from "framer-motion";

export default function packshot({ heading, imageData, className, cardBg }) {
  return (
    <m.div
      className="my-20"
      initial={{ y: 0, opacity: 0 }}
      whileInView={{ y: [150, 0], opacity: 1 }}
      transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
    >
      <h2
        className={`text-xl xl:text-4xl font-bold mb-4 text-center  pb-2 ${className}`}
      >
        {heading}
      </h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 40,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {imageData.map((e, i) => (
          <SwiperSlide
            key={i}
            className={` rounded-lg shadow-2xl shadow-gray-500/20 ${cardBg}`}
          >
            <img src={e.image} alt="packshot" />
          </SwiperSlide>
        ))}
      </Swiper>
    </m.div>
  );
}
