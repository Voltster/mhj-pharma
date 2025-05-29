import who from "../../assets/infinityScroll/who.webp";
import Ecuador from "../../assets/infinityScroll/Ecuador.webp";
import Kyrgyzstan from "../../assets/infinityScroll/kyrgyzstan.webp";
import uzbek from "../../assets/infinityScroll/uzbek.webp";
import tazkistan from "../../assets/infinityScroll/tazkistan.webp";
import frn from "../../assets/infinityScroll/frn.webp";
import ukraine from "../../assets/infinityScroll/ukraine.webp";
import pics from "../../assets/infinityScroll/pics.webp";
import COSTRICA from "../../assets/infinityScroll/COSTRICA.webp";
import DominicanRepublic from "../../assets/infinityScroll/dominicanRepublic.webp";
import eaeu from "../../assets/infinityScroll/eaeu.webp";
import agemed from "../../assets/infinityScroll/agemed.webp";
import ppbKenya from "../../assets/infinityScroll/ppbKenya.webp";
import gobiero from "../../assets/infinityScroll/gobiero.webp";
import peru from "../../assets/infinityScroll/peru.webp";
import honduras from "../../assets/infinityScroll/honduras.webp";
import Venezuela from "../../assets/infinityScroll/Venezuela.webp";

const images = [
  { img: who, name: "WHO-GMP" },
  { img: pics, name: "PIC/s" },
  { img: ukraine, name: "MOH, Ukraine" },
  { img: eaeu, name: "EAEU" },
  { img: Ecuador, name: "MISPA, Ecuador" },
  { img: Kyrgyzstan, name: "MOH, Kyrgyzstan" },
  { img: uzbek, name: "MOH, Uzbekistan" },
  { img: tazkistan, name: "MOH, Tajikistan" },
  { img: frn, name: "NAFDAC, Nigeria" },
  { img: COSTRICA, name: "MOH, Cost Rica" },
  { img: DominicanRepublic, name: "MOH, Dominican Republic" },
  { img: agemed, name: "AGEMED, Bolivia" },
  { img: ppbKenya, name: "PPB, Kenya" },
  { img: gobiero, name: "MSPAS, Guatemala" },
  { img: Venezuela, name: " MOH, Venezuela" },
  { img: peru, name: "DIGIMED, Peru" },
  { img: honduras, name: "MOH, Honduras" },
];

const InfinityScroll = () => {
  return (
    <div className="my-12 md:my-24 ">
      <h2 className="text-2xl text-nowrap xl:text-4xl text-[#B71B15] uppercase py-2 text-center  font-semibold">
        Endorsed Approvals
      </h2>
      <div className="w-full xl:w-[90vw] overflow-hidden group mx-auto scroll-smooth">
        <div className="flex space-x-6 animate-loop-scroll w-[2000%]  md:w-[700%] shadow-2xl shadow-gray-300/30 group-hover:paused hover:cursor-pointer scroll-smooth">
          {images.map((e, i) => (
            <div key={i} className=" mt-8 md:my-8">
              <img
                src={e.img}
                alt={e.img}
                loading="lazy"
                draggable={false}
                className="w-full mx-auto h-[10vh] md:h-[15vh] mix-blend-multiply py-2 noselect"
              />
              <p className="text-base text-center text-gray-800 text-nowrap">
                {e.name}
              </p>
            </div>
          ))}
          {images.map((e, i) => (
            <div key={i} className="mt-8 md:my-8 ">
              <img
                src={e.img}
                alt={e.img}
                loading="lazy"
                draggable={false}
                className="w-full mx-auto h-[10vh] md:h-[15vh] mix-blend-multiply py-2 noselect"
              />
              <p className="text-base text-center text-gray-800 text-nowrap">
                {e.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfinityScroll;
