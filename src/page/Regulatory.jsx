import React from "react";
import regulatoryBg from "../assets/RegulatoryBg.jpg";
import { FaCheck } from "react-icons/fa6";
import { motion as m } from "framer-motion";

const Regulatory = () => {
  return (
    <div className="min-h-screen relative w-full mx-auto pt-1">
      <div
        className="mt-16 w-full md:h-[90vh] relative text-gray-900 bg-cover  bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${regulatoryBg})` }}
      >
        <h2 className="text-2xl md:text-6xl font-semibold text-white w-full min-h-[50vw] md:min-h-[90vh] h-full text-center flex justify-center items-center bg-black/60">
          Regulatory Services
        </h2>
      </div>
      <div className="w-11/12 mx-auto flex md:flex-row flex-col-reverse items-center justify-center gap-4 py-10">
        <m.div
          className="md:w-1/2 text-justify"
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
        <div className="md:w-1/2">
          <m.img
            src={
              "https://img.freepik.com/premium-photo/regulations-business-condition-legal-protocol-concept_53876-121844.jpg?w=740"
            }
            className="w-[80%] mx-auto rounded-md "
            loading="lazy"
            initial={{ x: [0], opacity: 0 }}
            whileInView={{ x: [150, 0], opacity: 1 }}
            transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
            viewport={{ once: true, amount: 0.5 }}
          />
        </div>
      </div>
      <div className="w-11/12 mx-auto flex  flex-col-reverse items-center justify-center gap-4 md:flex-row-reverse">
        <m.div
          className="md:w-1/2  text-justify"
          initial={{ x: [0], opacity: 0 }}
          whileInView={{ x: [150, 0], opacity: 1 }}
          transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <p>
            At MHJ Pharmaconcepts, our regulatory affairs services in the USA
            include a wide range of activities, such as dossier preparation
            (ACTD, CTD, CMC, and regional-specific formats), analytical method
            validation (assay validation, RS, cleaning validation, etc.),
            technical packaging (DMF, PDR, stability raw data, audit trials,
            PVPR, etc.), stability chromatograms, artwork designs, bioequivalent
            studies (bio waiver/BE study/PSUR data), clinical and non-clinical
            data, and more.
            <br />
            Our regulatory affairs services in the USA help pharmaceutical
            companies launch new products to the desired market by ensuring
            compliance with regulations, regardless of their complexity. Our
            services include developing strategic plans, compiling and
            submitting required documents, liaising with competent authorities,
            and staying informed of recent regulatory updates. Additionally, our
            services help mitigate compliance and financial risks, expedite
            product approvals, and maintain lifecycle management.
          </p>
        </m.div>
        <div className="md:w-1/2">
          <m.img
            src={
              "https://img.freepik.com/free-photo/man-making-his-move_53876-40353.jpg?t=st=1725534550~exp=1725538150~hmac=dab3a480971716e459059f1a188021252ddf884f2a46735d9e09054d0648feab&w=740"
            }
            className="w-[80%] mx-auto rounded-md "
            loading="lazy"
            initial={{ x: [0], opacity: 0 }}
            whileInView={{ x: [-150, 0], opacity: 1 }}
            transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
            viewport={{ once: true, amount: 0.5 }}
          />
        </div>
      </div>
      <div className="w-11/12 mx-auto flex flex-col md:flex-row  items-center justify-center gap-4 py-10">
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
              Product Filing and Variation strategies
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
              Registration Strategy in Emerging Markets and European Union{" "}
            </li>
            <li>
              MHJ Pharmaconcepts offers specialized strategic expertise to
              pharmaceutical companies seeking to enter unfamiliar markets.
              Their consulting services in regulatory affairs strategies provide
              valuable insights, interpret complex regulations, and develop
              tailored approaches for a range of pharmaceutical products. By
              leveraging their expertise, clients can effectively navigate the
              dynamic regulatory landscape and successfully penetrate new
              markets.
            </li>
          </ul>
        </m.div>
        <div className="md:w-1/2">
          <m.img
            src={
              "https://img.freepik.com/free-photo/top-view-strategy-written-note-with-stickers-notepad-colored-background-copybook-color-salary-job-money-office-college-school_179666-18287.jpg?t=st=1725534830~exp=1725538430~hmac=d5671162b34909be2f57911514f621517323dd88e98656f95301329099d3b411&w=740"
            }
            className="w-[80%] mx-auto rounded-md"
            loading="lazy"
            initial={{ x: [0], opacity: 0 }}
            whileInView={{ x: [150, 0], opacity: 1 }}
            transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
            viewport={{ once: true, amount: 0.5 }}
          />
        </div>
      </div>
      {/* <p className="w-11/12 mx-auto">
        MHJ Pharmaconcepts offers specialized strategic expertise to
        pharmaceutical companies seeking to enter unfamiliar markets. Their
        consulting services in regulatory affairs strategies provide valuable
        insights, interpret complex regulations, and develop tailored approaches
        for a range of pharmaceutical products. By leveraging their expertise,
        clients can effectively navigate the dynamic regulatory landscape and
        successfully penetrate new markets.
      </p> */}
      <div className="w-11/12 mx-auto flex flex-col items-center justify-center gap-4 md:flex-row-reverse">
        <m.div
          className="md:w-1/2  text-justify"
          initial={{ x: [0], opacity: 0 }}
          whileInView={{ x: [150, 0], opacity: 1 }}
          transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h3 className="text-2xl md:text-4xl text-[#B51915] font-semibold">
            New Product Authorizations{" "}
          </h3>
          <p className="my-2">
            MHJ Pharmaconcepts has been providing high-quality regulatory
            services for over a decade, leveraging the expertise of its
            experienced team. With extensive experience in pharmaceutical
            regulatory consulting, the company has successfully filed new
            product authorization applications to over 20 countries and
            responded to related queries.
            <br />
            The firm offers a range of services to support pharmaceutical
            organizations, including:
            <ul className="list-disc mt-2 w-11/12 mx-auto">
              <li>Pre-submission technical data reviews</li>
              <li>
                Regulatory Content authoring (CTD sections, non-clinical and
                clinical overviews, and summaries)
              </li>
              <li>
                Dossier compilation, validation, and electronic publishing
              </li>
              <li>
                New Product Authorization advisory services, including hands-on
                support
              </li>
            </ul>
          </p>
        </m.div>
        <div className="md:w-1/2">
          <m.img
            initial={{ x: [0], opacity: 0 }}
            whileInView={{ x: [-150, 0], opacity: 1 }}
            transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
            viewport={{ once: true, amount: 0.5 }}
            src={
              "https://img.freepik.com/premium-vector/gmp-good-manufacturing-practice-certified-round-stamp-vector_690789-22.jpg?w=740"
            }
            className="w-[80%] mx-auto rounded-md"
            loading="lazy"
          />
        </div>
      </div>
      <div className="flex md:flex-row flex-col w-11/12   mx-auto items-center justify-center gap-4">
        <m.div
          className="md:w-1/2 mx-auto"
          initial={{ x: [0], opacity: 0 }}
          whileInView={{ x: [-150, 0], opacity: 1 }}
          transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h4 className="mt-6 w-11/12 mx-auto text-2xl md:text-4xl text-[#B51915] font-semibold mb-2">
            ANDA and MA Holder Services
          </h4>
          <p className=" w-11/12  mx-auto">
            Pharmaceutical companies seeking to navigate the complex ANDA filing
            process often prefer to partner with experts who possess technical
            expertise and local infrastructure. MHJ Pharmaconcepts offers a
            range of services to support seamless ANDA filings, including:
          </p>
          <ul className="list-disc mt-4 w-11/12 mx-auto">
            <li>
              Facilitating communication and correspondence with the US FDA
            </li>
            <li>
              Scheduling pre-submission meetings and submitting citizen
              petitions
            </li>
            <li>Enabling GMP audits and inspections</li>
          </ul>
        </m.div>
        <div className="md:w-1/2 mx-auto">
          <m.img
            src="https://img.freepik.com/premium-photo/fda-text-written-wooden-cubes-light-colored-background_392339-1603.jpg?w=826"
            alt=""
            className="rounded-md  w-[80%] mx-auto"
            initial={{ x: [0], opacity: 0 }}
            whileInView={{ x: [150, 0], opacity: 1 }}
            transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
            viewport={{ once: true, amount: 0.5 }}
          />
        </div>
      </div>
      <div className="flex justify-center md:flex-row flex-col-reverse  items-center w-11/12 mx-auto gap-4 my-20">
        <div className="md:w-1/2 mx-auto">
          <m.img
            src={regulatoryBg}
            alt=""
            className=" rounded-md  w-[80%] mx-auto hidden sm:block"
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
          <p>
            With extensive experience in ANDA submissions, MHJ Pharmaconcepts
            has successfully supported customers through the entire process,
            from submission to post-approval lifecycle management. Our team has
            obtained timely approvals and handled complex regulatory issues on
            behalf of pharmaceutical companies.
            <br />
          </p>
          <h4>
            In addition to ANDA services, MHJ Pharmaconcepts provides MAH
            services to support pharmaceutical companies seeking to enter the
            European market. We offer expertise in:
          </h4>
          <ul className="mt-4 list-disc w-11/12 mx-auto">
            <li>
              GMP-compliant Pharmacovigilance (PV) and quality management system
              (QMS) implementation
            </li>
            <li>
              Obtaining MA through mutual recognition procedure (MRP) and
              decentralized procedure (DP)
            </li>
            <li>Acting as an external MAH</li>
            <li>
              Providing Qualified Person for Pharmacovigilance (QPPV) services
            </li>
          </ul>
          <p>
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
