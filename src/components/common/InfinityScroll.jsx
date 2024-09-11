import who from "../../assets/infinityScroll/who.png";
// import bolivia from "../../assets/infinityScroll/bolivia.png";
import Ecuador from "../../assets/infinityScroll/Ecuador.jpg";
import Kyrgyzstan from "../../assets/infinityScroll/kyrgyzstan.png";
import uzbek from "../../assets/infinityScroll/uzbek.png";
import tazkistan from "../../assets/infinityScroll/tazkistan.png";
import frn from "../../assets/infinityScroll/frn.jpg";
import ukraine from "../../assets/infinityScroll/ukraine.jpg";
import pics from "../../assets/infinityScroll/pics.jpg";
import COSTRICA from "../../assets/infinityScroll/COSTRICA.png";
import DominicanRepublic from "../../assets/infinityScroll/dominicanRepublic.png";
import eaeu from "../../assets/infinityScroll/eaeu.png";
// import nigeria from "../../assets/infinityScroll/nigeria.jpg";
import agemed from "../../assets/infinityScroll/agemed.png";
import ppbKenya from "../../assets/infinityScroll/ppbKenya.png";
import agenica from "../../assets/infinityScroll/agenica.png";
import gobiero from "../../assets/infinityScroll/gobiero.png";
// import mspas from "../../assets/infinityScroll/mspas.png";
import peru from "../../assets/infinityScroll/peru.png";
import honduras from "../../assets/infinityScroll/honduras.png";
import Venezuela from "../../assets/infinityScroll/Venezuela.png";

const images = [
  { img: who, name: "WHO-GMP" },
  { img: pics, name: "PIC/s" },
  { img: ukraine, name: "MOH, Ukraine" },
  { img: eaeu, name: "EAEU" },
  // { img: bolivia, name: " AGEMED Bolivia" },
  { img: Ecuador, name: "MISPA, Ecuador" },
  { img: Kyrgyzstan, name: "MOH, Kyrgyzstan" },
  { img: uzbek, name: "MOH, Uzbekistan" },
  { img: tazkistan, name: "MOH, Tajikistan" },
  { img: frn, name: "NAFDAC, Nigeria" },
  { img: COSTRICA, name: "MOH, Cost Rica" },
  { img: DominicanRepublic, name: "MOH, Dominican Republic" },
  // { img: nigeria, name: "Nigeria" },
  { img: agemed, name: "AGEMED, Bolivia" },
  { img: ppbKenya, name: "PPB, Kenya" },
  // { img: agenica, name: "Agenica" },
  { img: gobiero, name: "MSPAS, Guatemala" },
  // { img: mspas, name: "MSPAS" },
  { img: Venezuela, name: " MOH, Venezuela" },
  { img: peru, name: "DIGIMED, Peru" },
  { img: honduras, name: "MOH, Honduras" },
];

const InfinityScroll = () => {
  return (
    <div className="my-12 md:my-24 ">
      <h2 className="text-2xl text-nowrap xl:text-4xl text-[#B71B15] uppercase py-2 text-center  font-semibold">
        Endorsed Certifications
      </h2>
      <div className="w-full xl:w-[90vw] overflow-hidden group mx-auto scroll-smooth">
        <div className="flex space-x-6 animate-loop-scroll  w-[700%] shadow-2xl shadow-gray-300/30 group-hover:paused hover:cursor-pointer scroll-smooth">
          {images.map((e, i) => (
            <div key={i} className=" mt-8 md:my-8">
              <img
                src={e.img}
                alt={e.img}
                loading="lazy"
                className="w-auto md:h-[15vh] mix-blend-multiply py-2"
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
                className="w-auto h-[12vh]  md:h-[15vh] mix-blend-multiply py-2"
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
