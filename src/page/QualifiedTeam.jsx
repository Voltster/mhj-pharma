import React from "react";
import SectionLayout from "./../components/regulatory/SectionLayout";
import { motion as m } from "framer-motion";

const QualifiedTeam = () => {
  return (
    <div className="min-h-screen relative w-full mx-auto pt-1">
      <div className=" mt-24 w-11/12 mx-auto">
        <h2 className=" text-xl xl:text-4xl  font-semibold text-[#B51915] text-center mb-12">
          Highly Qualified Team
        </h2>
        <div className="flex flex-col-reverse xl:flex-row justify-center items-center xl:gap-x-16">
          <m.div
            className="w-full xl:w-1/2"
            initial={{ x: [0], opacity: 0 }}
            whileInView={{ x: [150, 0], opacity: 1 }}
            transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold mx-auto text-[#B51915]  mb-2">
              Meet the Team at MHJ Pharmaconcepts
            </h3>
            <p className="text-justify text-gray-800">
              At MHJ Pharmaconcepts, we pride ourselves on having a highly
              qualified team of professionals who are dedicated to delivering
              exceptional results. Our team members have extensive experience in
              the pharmaceutical industry, with a deep understanding of the
              latest technologies, trends, and regulatory requirements.{" "}
            </p>
            {/* <p>Our team includes: </p>
            <ul className="list-disc w-11/12 mx-auto">
              <li>
                PhD-qualified Scientists with expertise in formulation
                development, analytical chemistry, and microbiology
              </li>
              <li>
                Experienced Production Managers with a strong background in
                manufacturing and quality control
              </li>
              <li>
                Skilled Engineers with expertise in equipment design,
                installation, and maintenance
              </li>
              <li>
                Regulatory Affairs specialists with knowledge of global
                regulatory requirements and compliance
              </li>
              <li>
                Professional certifications in quality control, Good
                Manufacturing Practices (GMP), and other relevant areas
              </li>
              <li>
                Extensive experience in the pharmaceutical industry, with a
                track record of delivering high-quality products and services
              </li>
            </ul> */}
          </m.div>
          <m.div
            className="xl:w-1/2 rounded-lg mb-4 xl:mb-0 "
            initial={{ x: [0], opacity: 0 }}
            whileInView={{ x: [-150, 0], opacity: 1 }}
            transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <img
              src="https://img.freepik.com/free-photo/strength-people-hands-success-meeting_1150-1690.jpg?t=st=1725708355~exp=1725711955~hmac=484457b7a73cf0140f82bae5e94009ca61e337b8bb19b808037968d3c4caf912&w=740"
              alt="Team"
              loading="lazy"
              className=" rounded-md aspect-video w-[95%] mx-auto"
            />
          </m.div>
        </div>
        <div className="flex flex-col-reverse xl:flex-row-reverse mt-20 mb-10 justify-center items-center xl:gap-x-16">
          <m.div
            className="w-full xl:w-1/2"
            initial={{ x: [0], opacity: 0 }}
            whileInView={{ x: [150, 0], opacity: 1 }}
            transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <p className="text-2xl font-semibold text-[#B51915] mb-4">
              Our Team includes :
            </p>
            <ul className="list-disc w-11/12 mx-auto flex flex-col gap-2">
              <li>
                PhD-qualified Scientists with expertise in formulation
                development, analytical chemistry, and microbiology
              </li>
              <li>
                Experienced Production Managers with a strong background in
                manufacturing and quality control
              </li>
              <li>
                Skilled Engineers with expertise in equipment design,
                installation, and maintenance
              </li>
              <li>
                Regulatory Affairs specialists with knowledge of global
                regulatory requirements and compliance
              </li>
              <li>
                Professional certifications in quality control, Good
                Manufacturing Practices (GMP), and other relevant areas
              </li>
              <li>
                Extensive experience in the pharmaceutical industry, with a
                track record of delivering high-quality products and services
              </li>
            </ul>
          </m.div>
          <m.div
            className="xl:w-1/2 rounded-lg mb-4 xl:mb-0"
            initial={{ x: [0], opacity: 0 }}
            whileInView={{ x: [-150, 0], opacity: 1 }}
            transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <img
              src="https://img.freepik.com/free-photo/group-diverse-people-with-joining-hands-teamwork_53876-147465.jpg?t=st=1725696869~exp=1725700469~hmac=9fb5933b685104a4f822e2702527c5fd76899b2015a2d9b06a9b92fc917c9280&w=740"
              alt="Team"
              loading="lazy"
              className=" rounded-md"
            />
          </m.div>
        </div>
      </div>
    </div>
  );
};

export default QualifiedTeam;
