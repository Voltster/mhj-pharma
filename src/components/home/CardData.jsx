import SecondaryButton from "./../common/SecondaryButton";
import { motion as m } from "framer-motion";
import { popUpCard } from "../common/Animation";

const CardData = ({ image, title, description, link, index }) => {
  return (
    <m.div
      className="xl:max-w-md w-[100%] h-[auto] overflow-hidden shadow-sm border bg-gray-50 border-gray-200 hover:shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] relative  rounded-md group"
      variants={popUpCard}
      initial="initial"
      whileInView="whileInView"
      custom={index}
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="object-cover h-40 w-full aspect-square group-hover:scale-110 transition-all"
        />
      </div>
      <div className="px-6 py-4">
        <h2 className="md:text-xl text-base uppercase font-semibold  text-nowrap mb-2 text-[#B81B15] w-[80%]">
          {title}
        </h2>
        <p className="text-gray-800 text-base ">{description}</p>
        <SecondaryButton to={link} className={"mt-4"}>
          Know More
        </SecondaryButton>
      </div>
    </m.div>
  );
};

export default CardData;
