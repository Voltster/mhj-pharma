import React from "react";
import SectionLayout from "./../components/regulatory/SectionLayout";
import { motion as m } from "framer-motion";

const Pharmacovigilance = () => {
  return (
    <div className="min-h-screen relative w-full mx-auto pt-1">
      <SectionLayout
        heading={"Pharmacovigilance Consulting Services"}
        title={"Pharmacovigilance"}
        customClass={"py-20"}
        description={`At MHJ Pharmaconcepts, we prioritize innovation, quality, and customer-centricity. We integrate cutting-edge technology to optimize pharmacovigilance processes, ensuring compliance and timely responses to safety and regulatory challenges. Our seasoned pharmacovigilance teams, comprising regulatory affairs and pharmacovigilance experts, guarantee meticulous adherence to global standards. We foster strong client relationships through transparency, collaboration, and regular updates, empowering clients with insights and expertise.
`}
        src={
          "https://img.freepik.com/free-photo/border-from-stethoscope-pills_23-2147796533.jpg?t=st=1725527955~exp=1725531555~hmac=f4ffce39143a089f9065f6ea0ac8777d2b50ce85d22734d3ee8ed988f1685b67&w=740"
        }
        className={"w-11/12 mx-auto container"}
      />
      <m.h4
        className="text-4xl font-semibold w-10/12 mx-auto text-center text-[#B51915] "
        initial={{ y: [0], opacity: 0 }}
        whileInView={{ y: [25, 0], opacity: 1 }}
        transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Risk Management
      </m.h4>

      <div className="w-11/12 mx-auto  flex justify-center items-center flex-col md:flex-row gap-12 py-8 px-4">
        <div className="md:w-1/2 ">
          <m.img
            src="https://img.freepik.com/premium-photo/risk-management-text-words-typography-written-with-paper-life-business-concept_21336-5159.jpg?w=740"
            alt=""
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
            includes
          </h3>
          <ul className="text-justify list-disc">
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

          <p>
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
        src={
          "https://img.freepik.com/premium-photo/male-doctor-looks-display-unaccepted-messages-emails_102583-2702.jpg?w=740"
        }
        className={"w-11/12 mx-auto container flex-row-reverse "}
        customClass={"mt-0"}
      />
      <SectionLayout
        title={"Regulations and Post Marketing Safety Requirements"}
        description={`At MHJ Pharmaconcepts, our PV & drug safety team supports clients in navigating complex PV regulations and post-marketing safety requirements for regulated and emerging markets. Our global network of local partners and physicians enables us to conduct post-market safety surveillance in accordance with the latest regulations.<br />We offer regulatory consulting services to help clients understand and interpret diverse PV regulations, conduct compliance audits to identify gaps and discrepancies, and provide real-time updates on changing PV regulations. Our team combines its deep understanding of product portfolios and requirements to ensure compliance with healthcare authority regulations.<br />With experience in 20+ markets, including working with stringent authorities, we are the preferred partner for compliant solutions in global drug safety. Our expertise spans a broad range of products, including generics, biologics, biosimilars, medical devices, cosmetics, over-the-counters, and dietary supplements.
`}
        src={
          "https://img.freepik.com/free-photo/health-safety-policy-statement-form-concept_53876-132299.jpg?t=st=1725530115~exp=1725533715~hmac=a986810d68726a0f97afe50deecb595588e74fb053800f7baad54fb2995a6a4d&w=740"
        }
        className={"w-11/12 mx-auto container xl:flex-row-reverse"}
        customClass={"mt-0 pb-10"}
      />
    </div>
  );
};

export default Pharmacovigilance;
