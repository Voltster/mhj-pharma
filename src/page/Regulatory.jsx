import React from "react";
import regulatoryBg from "../assets/img/RegulatoryBg.webp";
import Regulatory1 from "../assets/Regulatory1.webp";
import Regulatory2 from "../assets/Regulatory2.webp";
import Regulatory3 from "../assets/Regulatory3.webp";
import { FaCheck } from "react-icons/fa6";
import { motion as m } from "framer-motion";

const Regulatory = () => {
  return (
    <div className="min-h-screen relative w-full mx-auto pt-1  md:mb-24">
      <div
        className=" w-full md:h-[90vh] relative text-gray-900 bg-cover  bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${regulatoryBg})` }}
      >
        <h2 className="text-2xl md:text-6xl font-semibold text-white w-full min-h-[50vw] md:min-h-[90vh] h-full text-center flex justify-center items-center bg-black/60 ">
          Regulatory Services
        </h2>
      </div>
      <div className="w-11/12 mx-auto flex md:flex-row flex-col-reverse items-center justify-center gap-4 md:space-x-14 py-10">
        <m.div
          className="md:w-1/2 text-justify "
          initial={{ x: [0], opacity: 0 }}
          whileInView={{ x: [-150, 0], opacity: 1 }}
          transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <p>
            Regulatory affairs services play a vital role in the pharmaceutical
            industry, ensuring compliance with applicable regulations to
            facilitate the approval of safe, effective, and high-quality
            products. The primary objective of regulatory affairs services is to
            ensure that pharmaceutical companies comply with legal standards and
            requirements, thereby enabling the timely and efficient launch of
            new products to the market.
            <br />
            The role of regulatory affairs services is critical in managing
            regulatory compliance, facilitating drug approvals, and maintaining
            liaison with competent authorities. Regulatory affairs professionals
            and organizations must navigate the complex regulatory landscape to
            ensure that pharmaceutical products are brought to market while
            maintaining compliance with regulatory requirements.
          </p>
        </m.div>
        <div className="w-full  md:w-1/2">
          <m.img
            src={Regulatory2}
            alt="Regulatory Services"
            className="md:w-[100%]  mx-auto rounded-md "
            loading="lazy"
            initial={{ x: [0], opacity: 0 }}
            whileInView={{ x: [150, 0], opacity: 1 }}
            transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
            viewport={{ once: true, amount: 0.5 }}
          />
        </div>
      </div>
      <div className="w-11/12 mx-auto flex  flex-col-reverse items-center justify-center gap-4 md:gap-14 md:flex-row-reverse ">
        <m.div
          className="md:w-1/2  text-justify"
          initial={{ x: [0], opacity: 0 }}
          whileInView={{ x: [150, 0], opacity: 1 }}
          transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <p>
            At MHJ Pharmaconcepts, our regulatory affairs services include a
            wide range of activities, such as dossier preparation
            (regional-specific formats), analytical method validation (assay
            validation, RS, cleaning validation, etc.), Drug Master
            File(DMF),Product Development Report (PDR), Process Validation
            protocol And Report (PVPR), stability studies, etc., Artwork
            designs, bioequivalent studies (bio waiver/BE study/PSUR data),
            Non-clinical and Clinical Studies.
            <br />
            Our regulatory affairs services help pharmaceutical companies launch
            new products to the desired market by ensuring compliance with
            regulations, regardless of their complexity. Our services include
            developing strategic plans, compiling and submitting required
            documents, liaising with competent authorities, and staying informed
            of recent regulatory updates. Additionally, our services help
            mitigate compliance and financial risks, expedite product approvals,
            and maintain lifecycle management.
          </p>
        </m.div>
        <div className="md:w-1/2">
          <m.img
            src={Regulatory3}
            className="w-[100%] mx-auto rounded-md "
            alt="Regulatory Services"
            loading="lazy"
            initial={{ x: [0], opacity: 0 }}
            whileInView={{ x: [-150, 0], opacity: 1 }}
            transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
            viewport={{ once: true, amount: 0.5 }}
          />
        </div>
      </div>
      <div className="w-11/12 mx-auto flex flex-col md:flex-row items-center justify-center gap-4 md:space-x-14 py-10">
        <m.div
          className="md:w-1/2  text-justify"
          initial={{ x: [0], opacity: 0 }}
          whileInView={{ x: [-150, 0], opacity: 1 }}
          transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h3 className="text-2xl md:text-4xl text-[#B51915] font-semibold">
            Regulatory Strategies
          </h3>
          <p className="my-2">
            MHJ Pharmaconcepts offers comprehensive and customized regulatory
            services. Our services in this specialized pharmaceutical area are
            included below:
          </p>
          <ul>
            <li className="flex items-center gap-2">
              <FaCheck className="text-red-600" />
              Regulatory Feasibility Analysis
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-red-600" />
              Legal Status Switches – Rx/POM to OTC/P & GSL
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-red-600" />
              Change Control Strategies
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-red-600" />
              Query Responses strategies
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-red-600" />
              Registration Strategy in Emerging Markets{" "}
            </li>
          </ul>
        </m.div>
        <div className="md:w-1/2">
          <m.img
            src={Regulatory1}
            className="w-[100%] mx-auto rounded-md"
            alt="Regulatory Services"
            loading="lazy"
            initial={{ x: [0], opacity: 0 }}
            whileInView={{ x: [150, 0], opacity: 1 }}
            transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
            viewport={{ once: true, amount: 0.5 }}
          />
        </div>
      </div>

      <div className="flex justify-center md:flex-row flex-col-reverse  items-center w-11/12 mx-auto gap-4 md:space-x-14 my-5 mb-10">
        <div className="md:w-1/2 mx-auto">
          <m.img
            src={regulatoryBg}
            alt="Regulatory Services"
            className=" rounded-md  w-[100%] mx-auto hidden sm:block"
            initial={{ x: [0], opacity: 0 }}
            whileInView={{ x: [-150, 0], opacity: 1 }}
            transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
            viewport={{ once: true, amount: 0.5 }}
          />
        </div>
        <m.div
          className="md:w-1/2 mx-auto"
          initial={{ x: [0], opacity: 0 }}
          whileInView={{ x: [150, 0], opacity: 1 }}
          transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <p className="text-justify">
            With extensive experience in ANDA submissions, MHJ Pharmaconcepts
            has successfully supported customers through the entire process,
            from submission to post-approval lifecycle management. Our team has
            obtained timely approvals and handled complex regulatory issues on
            behalf of pharmaceutical companies.
            <br />
          </p>
          <p className="text-justify">
            In addition to ANDA services, MHJ Pharmaconcepts provides MAH
            services to support pharmaceutical companies seeking to enter the
            European market. We offer expertise in:
          </p>
          <ul className="mt-4 list-disc w-11/12 mx-auto">
            <li className="text-justify">
              GMP-compliant Pharmacovigilance (PV) and quality management system
              (QMS) implementation
            </li>
            <li className="text-justify">
              Obtaining MA through mutual recognition procedure (MRP) and
              decentralized procedure (DP)
            </li>
            <li>Acting as an external MAH</li>
            <li>
              Providing Qualified Person for Pharmacovigilance (QPPV) services
            </li>
          </ul>
          <p className="text-justify">
            Our expertise helps pharmaceutical companies overcome regulatory
            hurdles and successfully navigate the complexities of the European
            market.
          </p>
        </m.div>
      </div>
    </div>
  );
};

export default Regulatory;
