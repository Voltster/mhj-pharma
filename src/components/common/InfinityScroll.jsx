import who from "../../assets/infinityScroll/who.png";
import bolivia from "../../assets/infinityScroll/bolivia.png";
import Ecuador from "../../assets/infinityScroll/Ecuador.jpg";
// import Kyrgyzstan from "../../assets/infinityScroll/Kyrgyzstan.png";
import uzbek from "../../assets/infinityScroll/uzbek.png";
import tazkistan from "../../assets/infinityScroll/tazkistan.png";
import frn from "../../assets/infinityScroll/frn.jpg";
import ukraine from "../../assets/infinityScroll/ukraine.jpg";
import pics from "../../assets/infinityScroll/pics.jpg";
import COSTRICA from "../../assets/infinityScroll/COSTRICA.png";
// import DominicanRepublic from "../../assets/infinityScroll/DominicanRepublic.png";
import eaeu from "../../assets/infinityScroll/eaeu.jpg";
import nigeria from "../../assets/infinityScroll/nigeria.jpg";
import agemed from "../../assets/infinityScroll/agemed.png";
import ppbKenya from "../../assets/infinityScroll/ppbKenya.png";
import agenica from "../../assets/infinityScroll/agenica.png";
import gobiero from "../../assets/infinityScroll/gobiero.png";
import mspas from "../../assets/infinityScroll/mspas.png";
import peru from "../../assets/infinityScroll/peru.png";
import honduras from "../../assets/infinityScroll/honduras.png";

const images = [
  { img: who },
  { img: pics },
  { img: ukraine },
  { img: eaeu },
  { img: bolivia },
  { img: Ecuador },
  // { img: Kyrgyzstan },
  { img: uzbek },
  { img: tazkistan },
  { img: frn },
  { img: COSTRICA },
  // { img: DominicanRepublic },
  { img: nigeria },
  { img: agemed },
  { img: ppbKenya },
  { img: agenica },
  { img: gobiero },
  { img: mspas },
  { img: peru },
  { img: honduras },
];

const InfinityScroll = () => {
  return (
    <div className="my-20">
      <h2 className="text-4xl capitalize py-2 text-center w-[70%] mx-auto font-semibold">
        Clearance and Approval
      </h2>
      <div className=" w-[90vw] overflow-hidden group mx-auto scroll-smooth">
        <div className="flex space-x-6 animate-loop-scroll  w-[700%] shadow-2xl shadow-gray-300/30 group-hover:paused hover:cursor-pointer scroll-smooth">
          {images.map((e, i) => (
            <>
              <img
                src={e.img}
                alt={e.img}
                key={i}
                className="w-[auto] h-[7vh] md:h-[15vh] mix-blend-multiply py-2 my-8"
              />
              {/* <p className="text-xl border-2">{i}</p> */}
            </>
          ))}

          {/* repeat */}
        </div>
      </div>
    </div>
  );
};

export default InfinityScroll;
