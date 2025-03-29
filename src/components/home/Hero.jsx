import { motion as m } from "framer-motion";
import HeroVideo from "../../assets/Hero.mp4";
import OncologyTable from "../oncology/OnclologyTable";

const tableData = [
  { number: "600+", title: "Molecules" },
  { number: "23+", title: "Countries Served" },
  { number: "124+", title: "Clinical Trials" },
  { number: "7+", title: "Years of Experience" },
];

const Hero = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <div className="mt-14 w-full md:h-[90vh] relative text-gray-900 ">
      <m.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="md:h-[75%] w-full flex-col-reverse flex xl:flex-row justify-center items-center gap-x-16 mt-24 xl:mt-10  mx-auto  relative"
      >
        <h1 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20  text-2xl md:text-5xl font-bold text-white text-center w-11/12 mx-auto md:w-auto">
          Leading The Way In Healthcare Innovation
        </h1>
        <m.div
          variants={fadeIn}
          className="w-full -mt-4 md:-mt-0 overflow-hidden mb-4 xl:mb-0 "
        >
          <video
            src={HeroVideo}
            autoPlay
            loop
            muted
            className="cursor-pointer w-full -full relative z-0 backdrop-blur-sm scale-105"
          />
          <div className="absolute w-full  sm:h-full  -top-10 left-0 bg-gradient-to-b from-gray-800/10 via-gray-950/40 to-slate-50/0 z-10"></div>
        </m.div>
      </m.div>
      <OncologyTable tableData={tableData} color={"red"} />
    </div>
  );
};

export default Hero;
