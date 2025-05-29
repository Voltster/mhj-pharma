import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { motion as m } from "framer-motion";

const Products = ({ imageData, customClass }) => {
  return (
    <div className="w-full  md:h-full mb-10">
      <m.h2
        initial={{ y: 0, opacity: 0 }}
        whileInView={{ y: [50, 0], opacity: 1 }}
        transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
        viewport={{ once: true, amount: 0.5 }}
        className={`text-2xl xl:text-4xl uppercase font-semibold mb-4 text-center  pb-2 text-[#B71B15] pt-4 ${customClass}`}
      >
        Our Products
      </m.h2>

      <Swiper
        spaceBetween={50}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper md:h-full w-full md:py-10"
        breakpoints={{
          450: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {imageData.map((e, index) => (
          <SwiperSlide key={index} className="bg-cover bg-center h-[18rem] ">
            <m.img
              initial={{ scale: 0.8, opacity: 0.3 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
              src={e.img}
              alt={e}
              className="aspect-square object-contain block h-[80%] w-[80%] px-4 mx-auto mix-blend-multiply"
              loading="lazy"
            />
          </SwiperSlide>
        ))} 
      </Swiper>
    </div>
  );
};

export default Products;
