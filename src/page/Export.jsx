import React from "react";
// import SectionLayout from "./../components/regulatory/SectionLayout";
import ExportImg from "../assets/Export.webp";
import { motion as m } from "framer-motion";
const Export = () => {
  return (
    <div className="relative w-full mx-auto pt-1">
      <div className="w-11/12 mx-auto flex flex-col-reverse xl:flex-row justify-center items-center xl:gap-x-16 mt-10 py-20">
        <m.div
          className="w-full xl:w-1/2"
          initial={{ x: [0], opacity: 0 }}
          whileInView={{ x: [-150, 0], opacity: 1 }}
          transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h3 className="text-xl md:text-4xl font-semibold mx-auto text-[#B51915]  mb-2 ">
            Export Oriented
          </h3>
          <p className="text-justify text-gray-800">
            MHJ Pharmaconcepts, a renowned pharmaceutical company in India, has
            made a significant impact on the global healthcare landscape by
            exporting its products to over 23 countries across the world. With a
            strong focus on quality, innovation, and customer satisfaction, the
            company has established itself as a trusted partner for healthcare
            providers and patients alike. With operations in over 23 countries,
            we have established a strong presence globally. Our global reach
            allows us to provide access to our products and services to patients
            and healthcare providers worldwide.
          </p>
        </m.div>
        <m.div
          className="xl:w-1/2 rounded-lg mb-4 xl:mb-0 "
          initial={{ x: [0], opacity: 0 }}
          whileInView={{ x: [150, 0], opacity: 1 }}
          transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <img
            src={ExportImg}
            alt="Team"
            loading="lazy"
            className=" rounded-md aspect-video w-[95%] mx-auto"
          />
        </m.div>
      </div>
    </div>
  );
};

export default Export;
