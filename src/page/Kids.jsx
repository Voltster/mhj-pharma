import React from "react";
import hero from "../assets/jumi/kid.jpeg";
import PediatricAbout from "../assets/jumi/PediatricAbout.png";
import SecondaryButton from "../components/common/SecondaryButton";
import lion from "../assets/jumi/jumiLion.png";
import { motion as m } from "framer-motion";

const Kids = () => {
  return (
    <div className="min-h-screen relative w-full mx-auto pt-1  md:mb-24">
      <div className=" mt-20 md:mt-8 w-full md:h-[90vh] relative text-gray-900  flex flex-col-reverse md:flex-row items-center justify-center bg-gradient-to-t from-[#D0AE85] via-[#CFAD89] to-[#C9AA83] brightness-[1.1]">
        <m.div
          className=" md:w-1/2"
          initial={{ x: [0], opacity: 0 }}
          whileInView={{ x: [-150, 0], opacity: 1 }}
          transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-semibold mb-4 w-[85%] mx-auto">
            Welcome to <span className="text-[#B61915]">Jumi Kids</span>
          </h1>
          <p className="w-[85%] mx-auto text-justify">
            Our commitment at Children's Health is to make every moment, both
            big and small, as exceptional as our world-class patient care,
            ensuring families feel supported at every step.
          </p>
        </m.div>
        <m.div
          className="md:w-1/2 "
          initial={{ x: [0], opacity: 0 }}
          whileInView={{ x: [150, 0], opacity: 1 }}
          transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <img src={hero} alt="" className="rounded-bl-3xl" />
        </m.div>
      </div>

      <section className="py-20 bg-local bg-white relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.dev/svgjs"
          viewBox="0 0 2400 550"
          opacity="1"
          className="rotate-180 outline-none absolute top-0"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="sssurf-grad"
            >
              <stop
                stopColor="hsl(208, 77%, 50%)"
                stopOpacity="1"
                offset="0%"
              ></stop>
              <stop stopColor="#E5BF92)" stopOpacity="1" offset="100%"></stop>
            </linearGradient>
          </defs>
          <g
            fill="#e5bf92"
            transform="matrix(1,0,0,1,10.593017578125,335.4557113647461)"
          >
            <path
              d="M-10,10C19.86111111111111,16.875,75.69444444444446,53.625,133.33333333333334,43C190.97222222222223,32.375,211.11111111111114,-50.375,266.6666666666667,-41C322.22222222222223,-31.625,344.44444444444446,82.58333333333333,400,88C455.55555555555554,93.41666666666667,477.7777777777778,-8.541666666666666,533.3333333333334,-15C588.8888888888889,-21.458333333333336,611.1111111111112,68.45833333333333,666.6666666666667,57C722.2222222222223,45.54166666666667,744.4444444444445,-82.91666666666667,800,-70C855.5555555555555,-57.08333333333333,877.7777777777778,113.79166666666667,933.3333333333334,119C988.8888888888889,124.20833333333333,1011.1111111111112,-44.166666666666664,1066.6666666666667,-45C1122.2222222222222,-45.833333333333336,1144.4444444444443,113.54166666666667,1200,115C1255.5555555555557,116.45833333333333,1277.7777777777778,-30.083333333333336,1333.3333333333335,-38C1388.8888888888891,-45.916666666666664,1411.1111111111113,82,1466.6666666666667,77C1522.2222222222222,72,1544.4444444444443,-57,1600,-62C1655.5555555555557,-67,1677.7777777777778,43.416666666666664,1733.3333333333335,53C1788.8888888888891,62.583333333333336,1811.111111111111,-20.791666666666668,1866.6666666666667,-16C1922.2222222222224,-11.208333333333332,1944.4444444444446,80.375,2000.0000000000002,76C2055.5555555555557,71.625,2077.777777777778,-31.166666666666664,2133.3333333333335,-37C2188.888888888889,-42.833333333333336,2211.1111111111113,35.91666666666667,2266.666666666667,48C2322.2222222222226,60.08333333333333,2320.138888888889,-52.33333333333333,2400,21C2479.861111111111,94.33333333333333,3254.1666666666665,216.875,2650,400C2045.8333333333335,583.125,156.25,795.8333333333334,-500,900"
              transform="matrix(1,0,0,1,0,25)"
              opacity="0.05"
            ></path>
            <path
              d="M-10,10C19.86111111111111,16.875,75.69444444444446,53.625,133.33333333333334,43C190.97222222222223,32.375,211.11111111111114,-50.375,266.6666666666667,-41C322.22222222222223,-31.625,344.44444444444446,82.58333333333333,400,88C455.55555555555554,93.41666666666667,477.7777777777778,-8.541666666666666,533.3333333333334,-15C588.8888888888889,-21.458333333333336,611.1111111111112,68.45833333333333,666.6666666666667,57C722.2222222222223,45.54166666666667,744.4444444444445,-82.91666666666667,800,-70C855.5555555555555,-57.08333333333333,877.7777777777778,113.79166666666667,933.3333333333334,119C988.8888888888889,124.20833333333333,1011.1111111111112,-44.166666666666664,1066.6666666666667,-45C1122.2222222222222,-45.833333333333336,1144.4444444444443,113.54166666666667,1200,115C1255.5555555555557,116.45833333333333,1277.7777777777778,-30.083333333333336,1333.3333333333335,-38C1388.8888888888891,-45.916666666666664,1411.1111111111113,82,1466.6666666666667,77C1522.2222222222222,72,1544.4444444444443,-57,1600,-62C1655.5555555555557,-67,1677.7777777777778,43.416666666666664,1733.3333333333335,53C1788.8888888888891,62.583333333333336,1811.111111111111,-20.791666666666668,1866.6666666666667,-16C1922.2222222222224,-11.208333333333332,1944.4444444444446,80.375,2000.0000000000002,76C2055.5555555555557,71.625,2077.777777777778,-31.166666666666664,2133.3333333333335,-37C2188.888888888889,-42.833333333333336,2211.1111111111113,35.91666666666667,2266.666666666667,48C2322.2222222222226,60.08333333333333,2320.138888888889,-52.33333333333333,2400,21C2479.861111111111,94.33333333333333,3254.1666666666665,216.875,2650,400C2045.8333333333335,583.125,156.25,795.8333333333334,-500,900"
              transform="matrix(1,0,0,1,0,50)"
              opacity="0.53"
            ></path>
            <path
              d="M-10,10C19.86111111111111,16.875,75.69444444444446,53.625,133.33333333333334,43C190.97222222222223,32.375,211.11111111111114,-50.375,266.6666666666667,-41C322.22222222222223,-31.625,344.44444444444446,82.58333333333333,400,88C455.55555555555554,93.41666666666667,477.7777777777778,-8.541666666666666,533.3333333333334,-15C588.8888888888889,-21.458333333333336,611.1111111111112,68.45833333333333,666.6666666666667,57C722.2222222222223,45.54166666666667,744.4444444444445,-82.91666666666667,800,-70C855.5555555555555,-57.08333333333333,877.7777777777778,113.79166666666667,933.3333333333334,119C988.8888888888889,124.20833333333333,1011.1111111111112,-44.166666666666664,1066.6666666666667,-45C1122.2222222222222,-45.833333333333336,1144.4444444444443,113.54166666666667,1200,115C1255.5555555555557,116.45833333333333,1277.7777777777778,-30.083333333333336,1333.3333333333335,-38C1388.8888888888891,-45.916666666666664,1411.1111111111113,82,1466.6666666666667,77C1522.2222222222222,72,1544.4444444444443,-57,1600,-62C1655.5555555555557,-67,1677.7777777777778,43.416666666666664,1733.3333333333335,53C1788.8888888888891,62.583333333333336,1811.111111111111,-20.791666666666668,1866.6666666666667,-16C1922.2222222222224,-11.208333333333332,1944.4444444444446,80.375,2000.0000000000002,76C2055.5555555555557,71.625,2077.777777777778,-31.166666666666664,2133.3333333333335,-37C2188.888888888889,-42.833333333333336,2211.1111111111113,35.91666666666667,2266.666666666667,48C2322.2222222222226,60.08333333333333,2320.138888888889,-52.33333333333333,2400,21C2479.861111111111,94.33333333333333,3254.1666666666665,216.875,2650,400C2045.8333333333335,583.125,156.25,795.8333333333334,-500,900"
              transform="matrix(1,0,0,1,0,75)"
              opacity="1.00"
            ></path>
          </g>
        </svg>
        <div className="flex flex-col md:mt-20  justify-center md:flex-row items-center gap-14 w-11/12 mx-auto ">
          <m.div
            className="md:w-1/2 "
            initial={{ y: [0], opacity: 0 }}
            whileInView={{ y: [150, 0], opacity: 1 }}
            transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <img
              src={PediatricAbout}
              alt="Pediatri Kid"
              width={500}
              className="border-b-4 border-[#E5BF92]  mx-auto"
            />
          </m.div>
          <div className="md:w-1/2  md:p-10">
            <m.h1
              className="text-4xl md:text-5xl text-[#BE2013] font-semibold mb-2"
              initial={{ y: [0], opacity: 0 }}
              whileInView={{ y: [150, 0], opacity: 1 }}
              transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
              viewport={{ once: true, amount: 0.5 }}
            >
              High-Quality <span>Pediatric Products</span>
            </m.h1>
            <m.p
              className="text-justify"
              initial={{ y: [0], opacity: 0 }}
              whileInView={{ y: [150, 0], opacity: 1 }}
              transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Enjoy world-class drug formulations developed, manufactured and
              packaged under strict quality guidelines. Jumi Kids have always
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
            </m.p>
          </div>
        </div>
      </section>
      <div className=" bg-white pb-10">
        <div className=" w-full md:w-10/12 mx-auto gap-4 p-12 contactBg flex flex-col md:flex-row justify-center bg-[#ebd1b1] rounded-lg border border-[#fce5cc] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
          <m.h2
            className="text-4xl md:text-5xl md:font-medium antialiased text-[#BE2013] md:w-1/2"
            initial={{ x: [0], opacity: 0 }}
            whileInView={{ x: [-50, 0], opacity: 1 }}
            transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Trusted Pediatric Care for Every Child’s Well-Being
          </m.h2>
          <div className="md:w-1/2 relative">
            <m.p
              className="mb-4 text-gray-900 text-justify"
              initial={{ x: [0], opacity: 0 }}
              whileInView={{ x: [50, 0], opacity: 1 }}
              transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Discover our range of syrups, injections, and liquid pediatric
              products, crafted with the highest standards of safety and purity.
              We ensure effective and easy-to-use solutions for children's
              health, trusted by parents and healthcare professionals alike.
            </m.p>
            <SecondaryButton to={"/pediatric-products"}>
              Explore Pediatric Products
            </SecondaryButton>
            <img
              src={lion}
              alt=""
              className="absolute hidden md:block -bottom-12 md:-bottom-10 -right-2 md:right-40 pediatric"
              width={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kids;
