import Hero from "../components/home/Hero";
import Card from "../components/home/Card";
import SectionLayout from "../components/common/SectionLayout";
import CompanyDetails from "../components/home/CompanyDetails";
import Contact from "../components/home/Contact";
import InfinityScroll from "../components/common/InfinityScroll";
import Products from "../components/common/Products";
import indiaFlag from "../assets/IndianFlag.png";
import usaFlag from "../assets/UsaFlag.png";
import UkFlag from "../assets/UkFlag.png";
import sample2 from "../assets/Packshot/gapine.jpg";
import sample3 from "../assets/Packshot/icane.webp";
import sample4 from "../assets/Packshot/merrin.webp";
import sample5 from "../assets/Packshot/timoc.webp";
import sample6 from "../assets/Packshot/valpoc.webp";
import sample7 from "../assets/Packshot/zatron.webp";
import sample8 from "../assets/Packshot/bortiz.png";
import sample9 from "../assets/Packshot/CHLOROQ.png";
import sample10 from "../assets/Packshot/CROLEM1.png";
import sample11 from "../assets/Packshot/LOSAK.png";

import { motion as m } from "framer-motion";

const imageData = [
  { img: sample2 },
  { img: sample3 },
  { img: sample4 },
  { img: sample5 },
  { img: sample6 },
  { img: sample7 },
  { img: sample8 },
  { img: sample9 },
  { img: sample10 },
  { img: sample11 },
];

const Home = () => {
  return (
    <main className="min-h-screen relative w-full mx-auto pt-1">
      <Hero />
      <Card />
      <Products imageData={imageData} customClass="text-[#B71B15]" />
      <div className="w-11/12 container mx-auto my-20">
        <CompanyDetails />
        <InfinityScroll />
        <SectionLayout
          title={"Comprehensive Global Aid "}
          description={
            "An extensive range of Prescription Drugs and Over The Counter medications are manufactured at our manufacturing plant, with an outsized product portfolio of over 600 molecules in Tablets, Capsules (Soft & Hard Gelatin), Injections (Dry Powders, Liquid & PFS), Oral Liquids. MHJ Pharmaconcepts has its International existence with its branches in USA and UK .We have prolonged our presence in key markets of LATAM , CIS and  AFRICA, among other rising economies to make healthcare more affordable globally."
          }
          src={
            "https://img.freepik.com/premium-photo/healthcare-medicine-covid19-doctor-holding-tablet-electronic-medical-record-graph-statistics-infection-outbreak-with-coronavirus-pandemic-spread-global-network_1028938-124417.jpg?w=900"
          }
          className={"xl:flex-row-reverse"}
        />
        <Contact title={"Contact Us"} />
        <div className="flex sm:justify-around items-center flex-wrap gap-4">
          <m.div
            className="mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="flex items-center ">
              <img
                src={indiaFlag}
                alt="India Flag"
                className="h-8 mr-2"
                loading="lazy"
              />
              <span>
                <h4 className="font-semibold uppercase text-nowrap">
                  Head Office :
                </h4>
                <p className="text-xs text-nowrap">
                  MHJ PHARMACONCEPTS PRIVATE LIMITED
                </p>
              </span>
            </span>
            <p className="text-xs mt-1 ">
              DSM-030/031, DLF Corporate Towers,
              <br /> Shivaji Marg, New Delhi- 110015, INDIA
            </p>
          </m.div>
          <m.div
            className="mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="flex items-center ">
              <img
                src={usaFlag}
                alt="USA Flag"
                className=" h-8 mr-2"
                loading="lazy"
              />
              <span>
                <h4 className="font-semibold uppercase">Americas :</h4>
                <p className="text-xs text-nowrap">MHJ PHARMACONCEPTS LLC</p>
              </span>
            </span>
            <p className="text-xs mt-1">
              19 Holly Cove Lane, Dover,
              <br /> Delaware 19901, USA
            </p>
          </m.div>
          <m.div
            className="mb-2 "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="flex items-center ">
              <img
                src={UkFlag}
                alt="Uk Flag"
                className=" h-8 mr-2"
                loading="lazy"
              />
              <span>
                <h4 className="font-semibold uppercase text-nowrap">
                  United Kingdom :
                </h4>
                <p className="text-xs text-nowrap">MHJ PHARMACONCEPTS LTD</p>
              </span>
              <h4 className="font-semibold uppercase"></h4>
            </span>
            <p className="text-xs mt-1">128, City Road, London, EC1V 2NX, UK</p>
          </m.div>
        </div>
      </div>
    </main>
  );
};

export default Home;
