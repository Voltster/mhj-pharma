import CardData from "./CardData";

import contract from "../../assets/card1.jfif";
import Accredited from "../../assets/card2.jfif";
import Highly from "../../assets/card3.jfif";

const cardsData = [
  {
    image: contract,
    title: "Export Oriented",
    description:
      "MHJ Pharmaconcepts is a trusted partner for pharmaceutical companies seeking to expand their global reach.",
    link: "export",
  },
  // {
  //   image: Accredited,
  //   title: "Regulatory Endorsements",
  //   description:
  //     "Our expert regulatory affairs team ensures that all products manufactured at our facilities are fully compliant with the regulatory requirements of the target markets",
  //   link: "/technology/research-development",
  // },
  {
    image: Highly,
    title: "Highly Qualified Team",
    description:
      "Our team of highly skilled professionals leverages the latest technology and industry best practices to deliver innovative solutions.",
    link: "qualified-team",
  },
];

const Card = () => {
  return (
    <div className="w-full py-[4vw] mx-auto ">
      <h2 className="uppercase text-xl xl:text-4xl mb-2 mt-10 md:mt-20 font-semibold text-[#BE2013] text-center">
        Business Development Collaboration & Partnership
      </h2>
      <div className=" mx-auto flex justify-center items-center flex-wrap gap-12 w-11/12  h-auto py-12 ">
        {cardsData.map((card, index) => (
          <CardData
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            link={card.link}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
