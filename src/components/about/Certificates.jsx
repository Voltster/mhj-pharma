import React from "react";
import certificate1 from "../../assets/img/certificates1.webp";
import certificate2 from "../../assets/img/certificates2.webp";
import certificate3 from "../../assets/img/certificates3.webp";
import certificate4 from "../../assets/img/certificates4.webp";
import certificate5 from "../../assets/img/certificates5.webp";
import { motion as m } from "framer-motion";

const Certificates = () => {
  return (
    <div className="w-10/12 mx-auto  pb-20">
      <h2 className="uppercase text-2xl md:text-4xl mb-8 font-semibold text-[#B51915] text-center ">
        Our Certificates
      </h2>
      <div className="  mx-auto w-full  gap-y-6">
        <div className="flex justify-center items-center gap-x-6 mb-6">
          <m.img
            src={certificate1}
            alt="certificate"
            className="w-[30%]"
            initial={{ scale: 0.4, opacity: 0.4 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
            viewport={{ once: true, amount: 0.5 }}
          />
          <m.img
            src={certificate2}
            alt="certificate"
            className="w-[30%]"
            initial={{ scale: 0.4, opacity: 0.4 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
            viewport={{ once: true, amount: 0.5 }}
          />
          <m.img
            src={certificate3}
            alt="certificate"
            className="w-[30%]"
            initial={{ scale: 0.4, opacity: 0.4 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
            viewport={{ once: true, amount: 0.5 }}
          />
        </div>
        <div className="flex justify-center items-center gap-x-6">
          <m.img
            src={certificate4}
            alt="certificate"
            className="w-[30%]"
            initial={{ scale: 0.4, opacity: 0.4 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
            viewport={{ once: true, amount: 0.5 }}
          />
          <m.img
            src={certificate5}
            alt="certificate"
            className="w-[30%]"
            initial={{ scale: 0.4, opacity: 0.4 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
            viewport={{ once: true, amount: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Certificates;
