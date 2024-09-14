import React from "react";
import SectionLayout from "./../components/regulatory/SectionLayout";
import { motion as m } from "framer-motion";

const ArtworkServices = () => {
  return (
    <div className="min-h-screen relative w-full mx-auto pt-1">
      <SectionLayout
        customClass={"pt-20 pb-10 md:pb-20"}
        title={"Exceptional Regulatory Artwork Management Services"}
        description={`At MHJ Pharmaconcepts, we pride ourselves on delivering exceptional regulatory artwork management services to our clients. With our extensive expertise in pharmaceutical regulatory consulting and pharmaceutical artwork management, we have successfully submitted new product authorization applications to over 23+ countries and responded to related inquiries.<br /> Expertise in Package Artwork Management<br />Our team specializes in mitigating the risks associated with package artwork, ensuring that all labeling and packaging comply with regulatory requirements. We understand the importance of accuracy and attention to detail, and our services are designed to minimize the likelihood of errors or labelling inconsistencies.`}
        src={
          "https://img.freepik.com/free-photo/standard-quality-control-collage-concept_23-2149595850.jpg?t=st=1725523193~exp=1725526793~hmac=97b20404e315f92c919e8077640f0d2860ff55c3346d6ac286d65f8572dc0112&w=740"
        }
        className={"w-11/12 mx-auto container"}
      />
      <div className="w-11/12 mx-auto  flex justify-center items-center flex-col md:flex-row gap-12 md:py-8 px-4">
        <div className="md:w-1/2 ">
          <m.img
            src="https://img.freepik.com/premium-photo/concept-service-main-connections-with-it-wooden-blocks_102583-1992.jpg?w=740"
            alt=""
            className="rounded-md "
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
            Benefits of Our Services
          </h3>
          <ul className="list-disc">
            <li className="font-semibold list-none">
              By partnering with MHJ Pharmaconcepts, you can expect
            </li>
            <li>Accurate and compliant packaging artwork</li>
            <li>Efficient submission process</li>
            <li>Minimized risk of errors or labelling inconsistencies</li>
            <li>
              Compliance with regulatory requirements for over 23+ countries
            </li>
          </ul>
          <h3 className="font-semibold mt-4">
            Trust MHJ Pharmaconcepts for Your Regulatory Artwork Management
            Needs
          </h3>
          <p>
            With our expertise in pharmaceutical regulatory consulting and
            pharmaceutical artwork management, we are your trusted partner for
            regulatory artwork management services. Contact us today to learn
            more about how we can help you streamline your package artwork
            management process and ensure compliance with regulatory
            requirements.
          </p>
        </m.div>
      </div>
    </div>
  );
};

export default ArtworkServices;
