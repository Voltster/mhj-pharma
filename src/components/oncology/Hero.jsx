import oncologyHeroImg from "../../assets/oncologyHeroImg.png";
import PrimaryButton from "../common/PrimaryButton";
import { motion as m } from "framer-motion";
import OncologyTable from "../oncology/OnclologyTable";

const tableData = [
  { number: "100+", title: "Oncology Products" },
  { number: "23+", title: "Countries Served" },
  { number: "25+", title: "Clinical Trials" },
  { number: "7+", title: "Years of Experience" },
];

const Hero = () => {
  return (
    <div className="py-1 xl:h-screen  relative bg-gradient-to-t from-[#FFD4DF] to-[#EE8FA7] mb-[10%]">
      <div className="h-[82%] w-11/12 flex flex-col-reverse xl:flex-row justify-center items-center gap-x-16 mt-20 container mx-auto">
        <div className=" xl:w-1/2 ">
          <m.h1
            className="text-[2.3rem] leading-[2.4rem] xl:text-[3rem]  xl:leading-[4.3rem]  font-bold mb-2 text-[#e91e63] mt-4"
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ y: [50, 0], opacity: 1 }}
            transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
          >
            WELCOME TO OUR ONCOLOGY DIVISION
          </m.h1>
          <m.p
            className="text-[#111111] text-justify"
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ y: [50, 0], opacity: 1 }}
            transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
          >
            We are a team of dedicated professionals committed to pushing the
            boundaries of oncology research and treatment. Our team is focused
            on developing innovative immunotherapies and targeted therapies to
            improve patient outcomes and reduce treatment side effects. We're
            working towards the goal of increasing patient survival rates and
            improving quality of life with our oncological support. By
            leveraging cutting-edge technology and collaborating with top
            researchers in the field, we're driven to make a meaningful
            difference in the fight against evil.
          </m.p>
          <PrimaryButton
            to={"/oncology-products"}
            className={
              "mt-10 bg-gradient-to-r from-[#e91e63] via-pink-400 to-pink-600 animate-custom-bounce hover:animate-none transition-all"
            }
          >
            Products
          </PrimaryButton>
        </div>
        <div className="xl:w-1/2 rounded-md overflow-hidden ">
          <m.img
            src={oncologyHeroImg}
            alt="oncology section"
            className="w-[100%] h-[80%] mx-auto rounded-lg aspect-video"
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ y: [50, 0], opacity: 1 }}
            transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
          />
        </div>
      </div>
      {/* <div className="xl:w-9/12 mx-auto rounded-sm shadow-md relative bg-white grid grid-cols-2 xl:flex xl:items-center xl:justify-center xl:h-40 mt-10 xl:mt-0">
        {tableData.map((e, i) => (
          <span
            key={i}
            className={`flex justify-center items-center flex-col w-60 h-28 border-gray-400 border-r border-b xl:border-b-0  ${
              (i == 3 && "border-none ") || (i == 2 && "border-b-0")
            }`}
          >
            <p className="text-[#e91e63] text-4xl font-semibold">{e.number}</p>
            <h4 className="text-[#363636] font-medium">{e.title}</h4>
          </span>
        ))}
      </div> */}
      <OncologyTable tableData={tableData} />
    </div>
  );
};

export default Hero;
