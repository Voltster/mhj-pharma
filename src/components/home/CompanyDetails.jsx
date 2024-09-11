import hero2 from "../../assets/MHJ.jpg";
import Authenticity from "../../assets/Authenticity.png";
import QualityCredibility from "../../assets/Quality&Credibility.png";
import Integrity from "../../assets/Integrity.png";
import { motion as m } from "framer-motion";

const cards = [
  {
    image: Authenticity,
    title: "Authenticity",
    description: "Being Trustworthy & Genuine",
  },
  {
    image: QualityCredibility,
    title: "Quality & Credibility",
    description: "Being Accountable & Taking Charge",
  },
  {
    image: Integrity,
    title: "Integrity",
    description: "Being Reliable & Adhering to Principles",
  },
];

const CompanyDetails = () => {
  return (
    <section className="flex flex-col-reverse xl:flex-row justify-center items-center xl:gap-x-16 mb-8 md:mb-28">
      <m.div
        initial={{ x: [0], opacity: 0 }}
        whileInView={{ x: [-150, 0], opacity: 1 }}
        transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
        className="w-full xl:w-1/2"
      >
        <h2 className="uppercase text-2xl xl:text-4xl mb-2 mt-10 md:-mt-20 font-semibold text-[#BE2013] text-center">
          ENSURING EXCELLENCE AND INTEGRITY
        </h2>
        <p className="text-justify text-gray-800 mt-10">
          MHJ Pharmaconcepts is a Leading Pharmaceutical Innovation dedicated to
          transforming global healthcare worldwide, accredited by WHO-GMP. The
          company specializes in manufacturing high-quality finished
          formulations adhering to the stringent standards of EU-GMP, US-FDA,
          PIC/s, and TGA-Australia, MHJ Pharmaconcepts has earned the trust of
          healthcare professionals and patients alike. Our mission is to provide
          affordable, top-grade pharmaceutical products to patients with
          critical ailments, enhancing the quality of life across the globe.
        </p>
      </m.div>
      <m.div
        className="xl:w-1/2 rounded-lg relative"
        initial={{ x: [0], opacity: 0 }}
        whileInView={{ x: [150, 0], opacity: 1 }}
        transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
      >
        <m.img
          src={hero2}
          alt="MHJ PHARMACONCEPTS is a company"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="rounded-lg w-auto"
          loading="lazy"
        />
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 xl:absolute -bottom-10 mt-2 xl:mt-0 mb-2 xl:mb-0">
          {cards.map((e, i) => (
            <m.div
              key={i}
              className="text-center border backdrop-blur-md bg-white/20 rounded-lg p-1"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <m.img
                src={e.image}
                alt={e.image}
                className="mx-auto"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                loading="lazy"
              />
              <p className="font-bold text-gray-900">{e.title}</p>
              <p className="text-gray-800">{e.description}</p>
            </m.div>
          ))}
        </div>
      </m.div>
    </section>
  );
};

export default CompanyDetails;
