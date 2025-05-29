import React from "react";
import SectionLayout from "./../components/regulatory/SectionLayout";
import globalPharmacovigilance from "../assets/GlobalPharmacovigilance.webp";
import Pharmacovigilance1 from "../assets/Pharmacovigilance1.webp";
import Pharmacovigilance2 from "../assets/Pharmacovigilance2.webp";
import Pharmacovigilance3 from "../assets/Pharmacovigilance3.webp";
import { motion as m } from "framer-motion";

const Pharmacovigilance = () => {
  return (
    <div className="min-h-screen relative w-full mx-auto pt-1  md:mb-24">
      <div
        className=" w-full md:h-[90vh] relative text-gray-900 bg-cover  bg-no-repeat bg-center"
        style={{
          backgroundImage: `url('https://img.freepik.com/free-photo/young-man-wearing-protective-face-mask-while-holding-online-classes-computer-coronavirus-epidemic_637285-6141.jpg?t=st=1726491250~exp=1726494850~hmac=22ef1ddf0638828f3695c0c75fb65673aa1c20f71a30aea32953b8fde25d107c&w=740')`,
        }}
      >
        <h2 className="text-2xl md:text-6xl font-semibold text-white w-full min-h-[50vw] md:min-h-[90vh] h-full text-center flex justify-center items-center bg-black/60">
          Pharmacovigilance
        </h2>
      </div>
      <SectionLayout
        customClass={"pt-0 pb-10 md:pb-20"}
        description={`At MHJ Pharmaconcepts, we prioritize innovation, quality, and customer-centricity. We integrate cutting-edge technology to optimize pharmacovigilance processes, ensuring compliance and timely responses to safety and regulatory challenges. Our seasoned pharmacovigilance teams, comprising regulatory affairs and pharmacovigilance experts, guarantee meticulous adherence to global standards. We foster strong client relationships through transparency, collaboration, and regular updates, empowering clients with insights and expertise.
`}
        src={Pharmacovigilance1}
        alt="Regulatory Compliance Services"
        className={"w-11/12 mx-auto container"}
      />
      <m.h4
        className="text-4xl font-semibold w-10/12 mx-auto text-center text-[#B51915] "
        initial={{ y: [0], opacity: 0 }}
        whileInView={{ y: [25, 0], opacity: 1 }}
        transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Risk Management Plan (RMP)
      </m.h4>

      <div className="w-11/12 mx-auto  flex justify-center items-center flex-col md:flex-row gap-14 md:py-8 px-4">
        <div className="md:w-1/2 ">
          <m.img
            src={Pharmacovigilance2}
            alt="Pharmacovigilance"
            className="rounded-md"
            initial={{ x: [0], opacity: 0 }}
            whileInView={{ x: [-150, 0], opacity: 1 }}
            transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
            viewport={{ once: true, amount: 0.5 }}
          />
        </div>
        <m.div
          className="md:w-1/2"
          initial={{ x: [0], opacity: 0 }}
          whileInView={{ x: [150, 0], opacity: 1 }}
          transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-4 mx-auto text-[#B51915] ">
            MHJ Pharmaconcepts Risk Management Pharmacovigilance Expertise
            Includes
          </h3>
          <ul className="text-justify list-disc w-11/12 mx-auto">
            <li>
              Drafting, reviewing, and maintaining RMPs and REMS while providing
              support through submission methods
            </li>
            <li>
              Preparing customized procedures to classify safety risks and
              deliver tailored risk management strategies
            </li>
            <li>
              Assessment of potential risks and missing information and prepare
              reports that recommend PV & risk management methods through risk
              management services.
            </li>
            <li>
              Implementation of supplementary measures, including
              Post-Authorization Safety Studies (PASS), such as developing
              academic materials, observational examinations, and targeted
              follow-up questionnaires
            </li>
            <li>
              Effectively convey risks through labelling means such as Summary
              of Product Characteristics (SmPC) and patient information leaflet
              (PIL)
            </li>
          </ul>

          <p className="text-justify">
            We respond to queries from regulatory agencies regarding clinical
            trial application submissions, ensuring timely resolution and
            minimizing the risk of delays or rejects.
          </p>
        </m.div>
      </div>
      <SectionLayout
        title={"Global Pharmacovigilance "}
        description={`At MHJ Pharmaconcepts, we utilize a strategic approach to global adverse event reporting, ensuring compliance with international regulations and post-market safety requirements. Our team has expertise in working with reporting systems that facilitate timely and compliant reporting across various jurisdictions, adhering to stringent regulatory standards worldwide.<br />We are capable of working with global adverse event reporting systems, international pharmacovigilance databases, and regulatory platforms, enabling real-time information dissemination and proactive responses to emerging safety concerns. Our commitment to compliance spans regions, addressing diverse regulatory landscapes and reporting nuances.<br />
`}
        src={globalPharmacovigilance}
        alt={"Global Pharmacovigilance "}
        className={"w-11/12 mx-auto container flex-row-reverse "}
        customClass={"mt-0"}
      />
      <SectionLayout
        title={"Regulations And Post Marketing Safety Requirements"}
        description={`At MHJ Pharmaconcepts, our PV & drug safety team supports clients in navigating complex PV regulations and post-marketing safety requirements for regulated and emerging markets. Our global network of local partners and physicians enables us to conduct post-market safety surveillance in accordance with the latest regulations.<br />We offer regulatory consulting services to help clients understand and interpret diverse PV regulations, conduct compliance audits to identify gaps and discrepancies, and provide real-time updates on changing PV regulations. Our team combines its deep understanding of product portfolios and requirements to ensure compliance with healthcare authority regulations.<br />With experience in 20+ markets, including working with stringent authorities, we are the preferred partner for compliant solutions in global drug safety. Our expertise spans a broad range of products, including generics, biologics, biosimilars.
`}
        src={Pharmacovigilance3}
        alt={"Regulations And Post Marketing Safety Requirements"}
        className={"w-11/12 mx-auto container xl:flex-row-reverse"}
        customClass={"mt-0 pb-10"}
      />
    </div>
  );
};
export default Pharmacovigilance;
