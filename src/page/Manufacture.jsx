import React from "react";
import { motion as m } from "framer-motion";

const Manufacture = () => {
  return (
    <div className="min-h-screen relative w-full mx-auto pt-1">
      <div
        className="mt-16 w-full md:h-[90vh] relative text-gray-900 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url('https://img.freepik.com/premium-photo/worker-filling-bottles-with-water-factory-generative-ai_843410-3620.jpg?w=740')`,
        }}
      >
        <m.h2
          className=" text-xl md:text-6xl font-semibold text-white w-full min-h-[100vw] md:min-h-[90vh]  text-center flex justify-center items-center bg-black/60"
          // initial={{ scale: .5, opacity: 0 }}
          // whileInView={{ scale: 1, opacity: 1 }}
          // transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
          // viewport={{ once: true, amount: 0.5 }}
        >
          Manufacturing Unit
        </m.h2>
      </div>
      <div className="w-11/12 mx-auto  flex-col-reverse md:flex-row flex items-center justify-center gap-8 py-10 ">
        <m.div
          className="md:w-1/2  text-justify"
          initial={{ x: [0], opacity: 0 }}
          whileInView={{ x: [-150, 0], opacity: 1 }}
          transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-xl md:text-2xl  mb-4 mx-auto text-[#B51915] font-medium">
            Pharmaceutical Manufacturing
          </h2>
          <p>
            Our manufacturing division is a testament to our unshakeable
            commitment to reliability, excellence, and quality. We prioritize
            the production of stable, high-quality pharmaceutical products,
            ensuring the safety of our workers and the environment. Our
            state-of-the-art facilities are equipped with cutting-edge
            technology, designed on robust principles that enable us to deliver
            accurate and efficient results without compromising quality.
          </p>
        </m.div>
        <div className="md:w-1/2">
          <m.img
            initial={{ x: [0], opacity: 0 }}
            whileInView={{ x: [150, 0], opacity: 1 }}
            transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
            viewport={{ once: true, amount: 0.5 }}
            src={
              "https://img.freepik.com/premium-photo/quotfactory-worker-pharmaceutical-facility-carefully-handling-equipmentquot_1280275-244851.jpg?w=740"
            }
            className="w-[80%] mx-auto rounded-md"
            loading="lazy"
          />
        </div>
      </div>
      <div className="w-11/12 mx-auto flex-col md:flex-row  flex items-center justify-center gap-8 py-10 ">
        <div className="md:w-1/2">
          <m.img
            src={
              "https://img.freepik.com/premium-photo/long-track-with-white-blue-lines-some-white-caps-it_793248-14186.jpg?w=740"
            }
            className="w-[80%] mx-auto rounded-md "
            loading="lazy"
            initial={{ x: [0], opacity: 0 }}
            whileInView={{ x: [-150, 0], opacity: 1 }}
            transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
            viewport={{ once: true, amount: 0.5 }}
          />
        </div>
        <m.div
          className="md:w-1/2  text-justify"
          initial={{ x: [0], opacity: 0 }}
          whileInView={{ x: [150, 0], opacity: 1 }}
          transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h3 className="text-xl  mb-4 mx-auto text-[#B51915] font-medium">
            To further enhance our quality assurance, we have implemented
            procedures that minimize human touch, reducing the potential for
            errors. This includes:
          </h3>
          <ul className="list-disc mt-2 w-11/12 mx-auto ">
            <li>
              Implementing automation at various stages of the manufacturing
              process
            </li>
            <li>
              Designing and implementing quality control measures to detect and
              correct defects
            </li>
            <li>
              Continuously monitoring and improving our processes to ensure
              consistency and reliability
            </li>
            <li>
              Our commitment to quality is unwavering, and we are constantly
              investing in the latest infrastructure and equipment to uphold the
              highest standards in product quality. By integrating automation at
              various stages of the manufacturing process, we have significantly
              boosted both the quality of our products and the overall
              efficiency of our operations.
            </li>
          </ul>
        </m.div>
      </div>
      <div className="w-11/12 mx-auto  flex-col-reverse md:flex-row flex items-center justify-center gap-8 py-10 ">
        <m.div
          className="md:w-1/2  text-justify"
          initial={{ x: [0], opacity: 0 }}
          whileInView={{ x: [-150, 0], opacity: 1 }}
          transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <p className="text-xl text-[#B51915] font-medium ">
            Our focus on automation has enabled us to:
          </p>
          <ul className="mt-2 list-disc w-11/12 mx-auto">
            <li>Reduce the risk of human error</li>
            <li>Increase production speed and accuracy</li>
            <li>Improve product consistency and reliability</li>
          </ul>
          <p>
            At MHJ Pharmaconcepts, we are dedicated to delivering high-quality
            pharmaceutical products that meet the highest standards of
            excellence. Our commitment to quality, reliability, and efficiency
            is unwavering, and we are constantly working to improve our
            processes and products to better serve our customers.
          </p>
        </m.div>
        <div className="md:w-1/2">
          <m.img
            src={
              "https://img.freepik.com/premium-photo/automated-pill-bottle-filling-line-pharmaceutical-factory_1034924-40578.jpg?w=826"
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
    </div>
  );
};

export default Manufacture;
