import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./style.css";

import { EffectCoverflow, Pagination } from "swiper/modules";
import sample1 from "../../assets/Packshot/EPIRUBICIN.png";
import sample2 from "../../assets/Packshot/lidom 50.png";
import sample3 from "../../assets/Packshot/PACLITAXEL 30 mg.png";
// import sample4 from "../../assets/Packshot/Palbociclib Cápsula PALCIL.jpg";
import sample5 from "../../assets/Packshot/SPANISH.png";

const imageData = [
  { image: sample1 },
  { image: sample2 },
  { image: sample3 },
  //   { image: sample4 },
  { image: sample5 },
];

export default function packshot() {
  return (
    <>
      <h2 className="text-5xl font-bold mb-4 text-[#E91E63] text-center pt-20 pb-6">
        Our Products
      </h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {imageData.map((e, i) => (
          <SwiperSlide key={i} className="bg-[#F8BBD0] rounded-lg shadow-2xl shadow-pink-500/20">
            <img src={e.image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
