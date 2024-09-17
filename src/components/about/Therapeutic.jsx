import Otc from "../../assets/Otc.png";
import Tilt from "react-parallax-tilt";
import { motion as m } from "framer-motion";
import { cards } from "../common/Animation";
import Antibiotics from "../../assets/Antibiotics.jpg";
import Pulmonology from "../../assets/Pulmonology.jpg";
import Gastro from "../../assets/Gastro.jpg";
import Pain from "../../assets/Pain.jpg";
import Otalaryngology from "../../assets/Otalaryngology.jpg";
import Pediatrics from "../../assets/Pediatrics.jpg";
import Infectives from "../../assets/Infectives.jpg";

const cardsData = [
  {
    id: 1,
    bgColor: "#F92316",
    icon: Antibiotics,
    title: "Antibiotics",
  },
  {
    id: 2,
    bgColor: "#F97D16",
    icon: Pulmonology,
    title: "Pulmonology",
  },
  {
    id: 3,
    bgColor: "#F0C401",
    icon: Gastro,
    title: "Gastro-Intestinal",
  },
  {
    id: 4,
    bgColor: "#20CD2A ",
    icon: Otc,
    title: "OTC",
  },
  {
    id: 5,
    bgColor: "#2096CD",
    icon: Pain,
    title: "NSAIDs",
  },
  {
    id: 6,
    bgColor: "#4970CD",
    icon: Otalaryngology,
    title: "Ophthalmics",
  },
  {
    id: 7,
    bgColor: "#2320aD",
    icon: Pediatrics,
    title: "Pediatrics",
  },
  {
    id: 8,
    bgColor: "#7920CD",
    icon: Infectives,
    title: "Anti-Infectives",
  },
];

const cardComponents = cardsData.map((card, i) => {
  return (
    <m.div
      variants={cards}
      initial="initial"
      whileInView="whileInView"
      custom={i}
      key={card.id}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div
        className={` flex flex-col items-center text-center group hover:bg-gray-200 cursor-pointer transition-all relative rounded-md overflow-hidden`}
      >
        <img
          src={card.icon}
          alt={card.icon}
          className="object-cover w-full h-[20rem]"
        />
        <p className="text-xl font-medium text-gray-100 mt-3 absolute bottom-0  py-2 w-full bg-gradient-to-b from-gray-500/0 via-black/10 via-10% to-gray-950">
          {card.title}
        </p>
      </div>
    </m.div>
  );
});

import React from "react";

const Therapeutic = () => {
  return (
    <div className="pt-10 pb-20 md:py-20">
      <h3 className="uppercase text-2xl md:text-4xl mb-2 font-semibold text-center text-[#B71B15]">
        Therapeutic Divisions
      </h3>

      <div className="px-3 md:lg:xl:px-40  pt-5 bg-opacity-10">
        <div className="grid grid-cols-1 lg:md:grid-cols-4 gap-4 group bg-[#fefefe] ">
          {cardComponents}
        </div>
      </div>
    </div>
  );
};

export default Therapeutic;
