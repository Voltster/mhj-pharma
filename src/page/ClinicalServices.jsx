import React from "react";
import { motion as m } from "framer-motion";
import Clinical1 from "../assets/Clinical1.webp";
import Clinical2 from "../assets/Clinical2.webp";
import ClinicalBg from "../assets/ClinicalBg.webp";

const ClinicalServices = () => {
  return (
    <div className="min-h-screen relative w-full mx-auto pt-1">
      <div
        className=" w-full md:h-[90vh] relative text-gray-900 bg-cover  bg-no-repeat bg-center"
        style={{
          backgroundImage: `url('${ClinicalBg}')`,
        }}
      >
        <h2 className="text-2xl md:text-6xl font-semibold text-white w-full min-h-[50vw] md:min-h-[90vh] h-full text-center flex justify-center items-center bg-black/60">
          Clinical Regulatory Affairs
        </h2>
      </div>
      <m.h2
        className="pt-20 mt-10 text-2xl md:text-4xl  font-semibold text-[#B51915] text-center md:mb-12 w-11/12 mx-auto"
        initial={{ y: [0], opacity: 0 }}
        whileInView={{ y: [25, 0], opacity: 1 }}
        transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
        viewport={{ once: true, amount: 0.5 }}
      >
        MHJ Pharmaconcepts Expertise in Clinical Regulatory Affairs Services
        Includes
      </m.h2>
      <div className="w-11/12 mx-auto pb-10 md:pb-20 flex flex-col-reverse xl:flex-row justify-center items-center gap-y-4 gap-x-12 xl:gap-x-16 ">
        <m.div
          className="md:w-1/2 "
          initial={{ x: [0], opacity: 0 }}
          whileInView={{ x: [-150, 0], opacity: 1 }}
          transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-xl font-semibold mx-auto text-[#B51915]  mb-2 ">
            Regulatory Compliance Services
          </h2>
          <p className="text-justify text-gray-800">
            We provide expert support in clinical study report writing, ensuring
            compliance with country-specific regulations and guidelines. Our
            team also offers strategic advice on clinical trial applications for
            target markets, helping to minimize agency queries and ensure a
            smoother submission process.
          </p>
          <h2 className="text-xl font-semibold mx-auto text-[#B51915]  mb-2 mt-8 ">
            Regulatory Due Diligence And Protocol Support
          </h2>
          <p className="text-justify text-gray-800">
            We conduct meticulous regulatory due diligence for clinical trial
            applications and early phase clinical protocols, ensuring compliance
            with relevant regulations and guidelines.
          </p>
        </m.div>
        <div className="xl:w-1/2   rounded-lg mb-4 xl:mb-0 ">
          <m.img
            src={Clinical1}
            alt="Regulatory Compliance Services"
            className="rounded-md "
            initial={{ x: [0], opacity: 0 }}
            whileInView={{ x: [150, 0], opacity: 1 }}
            transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
            viewport={{ once: true, amount: 0.5 }}
          />
        </div>
      </div>
      <div className="w-11/12 mx-auto  flex justify-center items-center md:flex-row flex-col gap-y-4 gap-x-12 xl:gap-x-16 md:py-8  md:mb-24">
        <div className="md:w-1/2">
          <m.img
            src={Clinical2}
            alt="Clinical Documentation Development And Review"
            className="rounded-md md:float-left"
            initial={{ x: [0], opacity: 0 }}
            whileInView={{ x: [150, 0], opacity: 1 }}
            transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
            viewport={{ once: true, amount: 0.5 }}
          />
        </div>
        <m.div
          className="md:w-1/2"
          initial={{ x: [0], opacity: 0 }}
          whileInView={{ x: [-150, 0], opacity: 1 }}
          transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-4 mx-auto text-[#B51915]">
            Clinical Documentation Development And Review
          </h3>
          <ul className="list-disc w-11/12 mx-auto">
            <li className="font-semibold list-none">
              Our team develops and reviews clinical documentation, including:
            </li>
            <li>Investigator's Brochure (IB)</li>
            <li>Information Consent Form (ICF)</li>
            <li className="list-none">
              We also author, compile, review, and submit clinical trial
              application packages, ensuring that all necessary documents are
              complete and accurate.
            </li>
          </ul>
          <h3 className="font-semibold mt-4">
            Submission and Query Response Services
          </h3>
          <p>
            We respond to queries from regulatory agencies regarding clinical
            trial application submissions, ensuring timely resolution and
            minimizing the risk of delays or rejects.
          </p>
        </m.div>
      </div>
    </div>
  );
};

export default ClinicalServices;
