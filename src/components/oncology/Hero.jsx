// import oncologyHeroImg from "../../assets/oncologyHeroImg.png";
// import PrimaryButton from "../common/PrimaryButton";
// import { motion as m } from "framer-motion";
// import OncologyTable from "../oncology/OnclologyTable";

// const tableData = [
//   { number: "100+", title: "Oncology Products" },
//   { number: "23+", title: "Countries Served" },
//   { number: "25+", title: "Clinical Trials" },
//   { number: "7+", title: "Years of Experience" },
// ];

// const Hero = () => {
//   return (
//     <div className="py-1 xl:h-screen w-screen  relative bg-gradient-to-t from-[#FFD4DF] to-[#EE8FA7]  mb-[10%]  ">
//       {/* <div className="h-[82%] w-11/12 flex flex-col-reverse xl:flex-row justify-center items-center gap-x-16 mt-20 container mx-auto">
//         <div className=" xl:w-1/2 ">
//           <m.h1
//             className="text-3xl md:text-5xl    font-bold mb-2 text-[#e91e63] mt-4"
//             initial={{ x: 0, opacity: 0 }}
//             whileInView={{ y: [50, 0], opacity: 1 }}
//             transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
//           >
//             WELCOME TO OUR ONCOLOGY DIVISION
//           </m.h1>
//           <m.p
//             className="text-[#111111] text-justify"
//             initial={{ x: 0, opacity: 0 }}
//             whileInView={{ y: [50, 0], opacity: 1 }}
//             transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
//           >
//             We are a team of dedicated professionals committed to pushing the
//             boundaries of oncology research and treatment. Our team is focused
//             on developing innovative immunotherapies and targeted therapies to
//             improve patient outcomes and reduce treatment side effects. We're
//             working towards the goal of increasing patient survival rates and
//             improving quality of life with our oncological support. By
//             leveraging cutting-edge technology and collaborating with top
//             researchers in the field, we're driven to make a meaningful
//             difference in the fight against evil.
//           </m.p>
//           <PrimaryButton
//             to={"/oncology-products"}
//             className={
//               "mt-10 bg-gradient-to-r from-[#e91e63] via-pink-400 to-pink-600 animate-custom-bounce hover:animate-none transition-all"
//             }
//           >
//             Products
//           </PrimaryButton>
//         </div>
//         <div className="xl:w-1/2 rounded-md overflow-hidden ">
//           <m.img
//             src={oncologyHeroImg}
//             alt="oncology section"
//             className="w-[100%] h-[80%] mx-auto rounded-lg aspect-video mt-5 md:mt-0"
//             initial={{ x: 0, opacity: 0 }}
//             whileInView={{ y: [50, 0], opacity: 1 }}
//             transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
//           />
//         </div>
//       </div> */}

//       <div
//         className="h-[82%] w-screen  flex flex-col-reverse xl:flex-row justify-center items-center gap-x-16 mt-20 container mx-auto bg-cover "
//         style={{
//           backgroundImage: `url("https://img.freepik.com/premium-photo/young-woman-holds-breast-cancer-awareness-ribbon-close-up_185193-54405.jpg?w=826")`,
//         }}
//       ></div>
//       <OncologyTable tableData={tableData} />
//     </div>
//   );
// };

// export default Hero;

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
    <div
      className="py-1 xl:h-screen w-screen relative bg-gradient-to-t from-[#FFD4DF] to-[#EE8FA7] bg-cover  mb-[10%] "
      style={{
        backgroundImage: `url("https://img.freepik.com/premium-photo/young-woman-holds-breast-cancer-awareness-ribbon-close-up_185193-54405.jpg?w=826")`,
      }}
    >
      <div className="h-[80%]  md:w-5/12 mx-4 md:mx-0  md:gap-x-16 mt-20 md:ml-20  flex flex-col items-start justify-center">
        <m.h1
          className="text-3xl md:text-5xl  mb-2 text-[#e91e63] font-semibold md:font-medium mt-4"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-50, 0], opacity: 1 }}
          transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
        >
          WELCOME TO OUR ONCOLOGY DIVISION
        </m.h1>
        <m.p
          className="text-[#111111] text-justify"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-50, 0], opacity: 1 }}
          transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
        >
          We are a dedicated team focused on advancing oncology research and
          treatment. Our goal is to develop innovative immunotherapies and
          targeted therapies that improve patient outcomes and reduce side
          effects. By leveraging cutting-edge technology and collaborating with
          leading researchers, we aim to enhance survival rates and the quality
          of life for cancer patients.
          {/* We are a team of dedicated professionals committed to pushing the
          boundaries of oncology research and treatment. Our team is focused on
          developing innovative immunotherapies and targeted therapies to
          improve patient outcomes and reduce treatment side effects. */}
          {/* We're
          working towards the goal of increasing patient survival rates and
          improving quality of life with our oncological support. By leveraging
          cutting-edge technology and collaborating with top researchers in the
          field, we're driven to make a meaningful difference in the fight
          against evil. */}
        </m.p>
        <PrimaryButton
          to={"/products/oncology/injectables"}
          className={
            "mt-10 bg-gradient-to-r from-[#e91e63] via-pink-400 to-pink-600 animate-custom-bounce hover:animate-none transition-all"
          }
        >
          Products
        </PrimaryButton>
      </div>
      <OncologyTable tableData={tableData} />
    </div>
  );
};

export default Hero;
