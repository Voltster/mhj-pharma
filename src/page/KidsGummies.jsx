import React from "react";
import jumi1 from "../assets/jumi/jumi bottel 1.png";
import jumi2 from "../assets/jumi/jumi bottel 2.png";
import jumi3 from "../assets/jumi/jumi bottel 3.png";
import about from "../assets/jumi/about.jpg";
import bg from "../assets/jumi/bg.png";

import Bear1 from "../assets/jumi/greenBear.png";
import Bear2 from "../assets/jumi/orangeBear.png";
import Bear3 from "../assets/jumi/orangeBear2.png";
import Bear4 from "../assets/jumi/redBear.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay } from "swiper/modules";

import landing from "../assets/jumi/landingImg.png";
import landing2 from "../assets/jumi/landingImg2.png";

const features = [
  {
    icon: Bear1,
    title: "Our Quality Approach",
    backgroundColor: "bg-green-200",
    description:
      "Through our Pharma manufacturing facilities, Jumi Kids has the best QA/QC approach bringing high-quality drug formulations in Schedule manufacture unit.",
  },
  {
    icon: Bear2,
    title: "Certified Safe Products",
    backgroundColor: "bg-orange-400",
    description:
      "Focusing on higher form of quality, authenticity and efficacy – jumi Kids operates by following all legal certificates from higher authorities. Our Pharma manufacturing facilities have GMP and WHO certifications.",
  },
  {
    icon: Bear3,
    title: "Dedicated Skilled Workforce",
    backgroundColor: "bg-orange-200",
    description:
      "Jumi is staffed by a highly skilled and motivated team of professionals that are continuously striving to develop high-quality, cost-effective solutions to a variety of ailments.",
  },
  {
    icon: Bear4,
    title: "Ethics And Compliance",
    backgroundColor: "bg-red-200",
    description:
      "Start great earning with your own business with Jumi Kids ‘the most reliable Pharmaceutical Company because it offers its associates ethical and real business agreements.",
  },
];

const products = [
  {
    name: "Glorious Skin",
    image: jumi1,
    backgroundColor: "bg-blue-200",
  },
  {
    name: "Fabulous Hair",
    image: jumi2,
    backgroundColor: "bg-pink-200",
  },
  {
    name: "Magnificent Multi",
    image: jumi3,
    backgroundColor: "bg-green-200",
  },
  {
    name: "Magnificent Multi",
    image: jumi2,
    backgroundColor: "bg-yellow-200",
  },
];

const Kids = () => {
  return (
    <main className=" relative w-full mx-auto ">
      <div className='w-full md:h-[90vh] relative text-gray-900 "'>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: false,
          }}
          autoplay={{ delay: 8000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          className="mySwiper w-screen  md:h-[90vh] flex justify-center items-center bg-[#FFF9F3]"
        >
          <SwiperSlide>
            <div className="flex md:flex-row flex-col-reverse mt-20 md:mt-0 justify-center items-center">
              <div className="w-11/12 md:w-1/2 relative md:ml-10 ">
                <h1 className="text-6xl font-bold mb-4 ">
                  Welcome to <span className="text-[#B61A15]">JUMI</span>
                </h1>
                <p>
                  JUMI Kids Is Pediatric Division of Dr. Kumars Pharmaceuticals.
                  It has dedicated itself into bringing better quality medicines
                  for children to cure diseases in most subtle yet effective and
                  safest way. Multiple therapeutic pediatric segments are
                  covered owing to great demand making us the trusted Top
                  Pediatric Pharma Company in India
                </p>
                <img
                  src={Bear3}
                  alt=""
                  className="absolute h-40 hidden md:block"
                />
              </div>
              <div className="w-1/2">
                <img src={landing} alt="" className="h-full" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex  md:flex-row flex-col-reverse justify-center items-center bg-[#FFF9F3]">
              <div className="w-11/12 md:w-1/2 md:ml-10 relative">
                <h1 className="text-6xl font-bold mb-4">
                  Wide <span className="text-[#B61A15]">Range of Products</span>
                </h1>
                <p>
                  JUMI Kids Is Pediatric Division of Dr. Kumars Pharmaceuticals.
                  It has dedicated itself into bringing better quality medicines
                  for children to cure diseases in most subtle yet effective and
                  safest way. Multiple therapeutic pediatric segments are
                  covered owing to great demand making us the trusted Top
                  Pediatric Pharma Company in India.
                </p>
                <img src={Bear2} alt="" className="absolute h-40" />
              </div>
              <div className="w-full md:w-[50%]">
                <img src={landing2} alt="" className="w-full" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <section className="py-16 bg-[#FFF9F3] ">
        <div className="container mx-auto">
          <h2 className="text-4xl uppercase font-semibold mb-4 text-center  pb-2 text-[#B71B15] pt-4">
            Why Choose Us
          </h2>
          <p className="text-center max-w-2xl mx-auto mb-12 text-gray-700">
            Unibyte is a customer-centric pharma firm with a business-centric
            approach that makes our organization a top pick for the best Quality
            pediatric Pharma Franchise business in India.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                className={`bg-[#fdfdfd]  rounded-lg p-6 text-center shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] ${feature.backgroundColor}`}
                key={index}
              >
                <img src={feature.icon} className="text-4xl mb-4 " />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-900">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ backgroundImage: `url(${bg})` }} className=" py-20 ">
        <div className="flex flex-col md:flex-row justify-center items-center gap-14 w-11/12 mx-auto">
          <div className="md:w-1/2">
            <img
              src={about}
              alt=""
              className="w-[400px] mx-auto bg-[#FFCC29] p-1  rounded-tr-[6rem] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] "
            />
          </div>
          <div className="md:w-1/2 bg-[#FFF9F3] md:p-10">
            <h1 className="text-4xl md:text-5xl text-[#BE2013] font-semibold mb-2">
              Welcome to <span>Jumi</span>
            </h1>
            <p>
              Jumi Kids Is Pediatric Division of Dr. Kumars Pharmaceuticals. It
              has dedicated itself into bringing better quality medicines for
              children to cure diseases in most subtle yet effective and safest
              way. Multiple therapeutic pediatric segments are covered owing to
              great demand making us the trusted Top Pediatric Pharma Company in
              India. We’re into pharmaceuticals marketing, manufacturing,
              supplying and trading of reliable pediatric drugs formulations.
              Our range is certified with ISO, WHO, GMP and DCGI compliant,
              completely developed, produced and packaged in the company’s
              Pharma manufacturing units. Strict quality monitoring by skilled
              experts using latest modern technology and latest techniques are a
              specialty bringing widest range of Pharma syrup, oral suspensions
              and drops for infants and adolescent children use.
            </p>
          </div>
        </div>
      </section>
      {/* Products */}
      <div className="py-8  bg-[#FFF9F3]">
        <h2 className="text-4xl uppercase font-semibold mb-4 text-center  pb-2 text-[#B71B15] pt-4">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-11/12 mx-auto">
          {products.map((product, index) => (
            <div
              className={`p-6 rounded-lg shadow-lg cursor-pointer transition-transform duration-300 group ${product.backgroundColor}`}
              key={index}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-40 mx-auto mb-4  group-hover:scale-[1.2] transition-all"
              />
              <h3 className="text-lg font-semibold text-center">
                {product.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
      <section
        style={{ backgroundImage: `url(${bg})` }}
        className=" py-20 bg-fixed"
      >
        <div className="flex flex-col  justify-center md:flex-row-reverse items-center gap-14 w-11/12 mx-auto">
          <div className="md:w-1/2">
            <img
              src={
                "https://img.freepik.com/premium-photo/cute-baby-eating-while-being-accompanied-by-her-mother_13339-52521.jpg?w=740"
              }
              alt=""
              className="md:w-[600px] mx-auto bg-[#FFCC29] p-1  rounded-tl-[6rem] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]"
            />
          </div>
          <div className="md:w-1/2 bg-[#FFF9F3] md:p-10">
            <h1 className="text-4xl md:text-5xl text-[#BE2013] font-semibold mb-2">
              High-Quality <span>Pediatric Products</span>
            </h1>
            <p>
              Enjoy world-class drug formulations developed, manufactured and
              packaged under strict quality guidelines. Unibyte Kids have always
              maintained internationals standards laid by ISO, WHO and GMP to
              ensure that our pediatric drugs are safe, durable and effective in
              providing desired results. Our experts are skilled and experienced
              in R&D of medicines intended for child consumption. Our products
              are recommended by pediatricians having modern infrastructure,
              latescent technology and efficient technology. Our Pharma
              manufacturing facilities provide an upper hand to bring forwards
              highest quality pediatric product range. Various clinical test and
              thorough quality tests are run to eliminate deviations making our
              products side-effect free.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Kids;
