import React from "react";
import SectionLayout from "./../components/regulatory/SectionLayout";
import { motion as m } from "framer-motion";

const ClinicalServices = () => {
  return (
    <div className="min-h-screen relative w-full mx-auto pt-1">
      {/* <SectionLayout
        customClass={"py-20"}
        heading={
          "MHJ Pharmaconcepts Expertise in Clinical Regulatory Affairs Services Includes"
        }
        title={"Regulatory Compliance Services"}
        description={`We provide expert support in clinical study report writing, ensuring compliance with country-specific regulations and guidelines. Our team also offers strategic advice on clinical trial applications for target markets, helping to minimize agency queries and ensure a smoother submission process.`}
        src={
          "https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-stethoscope_23-2149611228.jpg?t=st=1725520547~exp=1725524147~hmac=69e9322c173439f10469c08c9b716b695c4a874f381754fe189ba06e8f9651fc&w=740"
        }
        className={"w-11/12 mx-auto container"}
      /> */}
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
      <div className="w-11/12 mx-auto pb-10 md:pb-20 flex flex-col-reverse xl:flex-row justify-center items-center gap-y-4 gap-x-12 xl:gap-x-16">
        <m.div
          className="md:w-1/2"
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
            Regulatory Due Diligence and Protocol Support
          </h2>
          <p className="text-justify text-gray-800">
            We conduct meticulous regulatory due diligence for clinical trial
            applications and early phase clinical protocols, ensuring compliance
            with relevant regulations and guidelines.
          </p>
        </m.div>
        <div className="xl:w-1/2 rounded-lg mb-4 xl:mb-0">
          <m.img
            src="https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-stethoscope_23-2149611228.jpg?t=st=1725520547~exp=1725524147~hmac=69e9322c173439f10469c08c9b716b695c4a874f381754fe189ba06e8f9651fc&w=740"
            alt=""
            className="rounded-md"
            initial={{ x: [0], opacity: 0 }}
            whileInView={{ x: [150, 0], opacity: 1 }}
            transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
            viewport={{ once: true, amount: 0.5 }}
          />
        </div>
        <div></div>
      </div>
      {/* <h4 className="text-4xl font-semibold w-11/12 md:w-10/12 mx-auto text-center text-[#B51915] ">
        Regulatory Due Diligence and Protocol Support
      </h4>
      <p className="w-11/12 md:w-8/12 mt-2 mx-auto text-center">
        We conduct meticulous regulatory due diligence for clinical trial
        applications and early phase clinical protocols, ensuring compliance
        with relevant regulations and guidelines.
      </p> */}
      <div className="w-11/12 mx-auto  flex justify-center items-center md:flex-row flex-col gap-y-4 gap-x-12 xl:gap-x-16 md:py-8 px-4">
        <div className="md:w-1/2">
          <m.img
            src="https://img.freepik.com/free-photo/document-marketing-strategy-business-concept_53876-132234.jpg?t=st=1725521797~exp=1725525397~hmac=4567fed617ebf44c7e927c81f4a7acbfcba45c40de3d4d5c27c2bc00d3b27526&w=826"
            alt=""
            className="rounded-md"
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
            Clinical Documentation Development and Review
          </h3>
          <ul className="list-disc">
            <li className="font-semibold list-none">
              Our team develops and reviews clinical documentation, including:
            </li>
            <li>• Investigator's Brochure (IB)</li>
            <li>• Information Consent Form (ICF)</li>
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
