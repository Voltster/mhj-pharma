import who from "../../assets/infinity scroll/who.png";
import bolivia from "../../assets/infinity scroll/bolivia.png";
import Ecuador from "../../assets/infinity scroll/Ecuador.jpg";
import Kyrgyzstan from "../../assets/infinity scroll/Kyrgyzstan.png";
import uzbek from "../../assets/infinity scroll/uzbek.png";
import tazkistan from "../../assets/infinity scroll/tazkistan.png";
import frn from "../../assets/infinity scroll/frn.jpg";
import ukraine from "../../assets/infinity scroll/ukraine.jpg";
import pics from "../../assets/infinity scroll/pics.jpg";
import COSTRICA from "../../assets/infinity scroll/COSTRICA.png";
import DominicanRepublic from "../../assets/infinity scroll/DominicanRepublic.png";
import eaeu from "../../assets/infinity scroll/eaeu.jpg";
import nigeria from "../../assets/infinity scroll/nigeria.jpg";
import agemed from "../../assets/infinity scroll/agemed.png";
import ppbKenya from "../../assets/infinity scroll/ppbKenya.png";
import agenica from "../../assets/infinity scroll/agenica.png";
import gobiero from "../../assets/infinity scroll/gobiero.png";
import mspas from "../../assets/infinity scroll/mspas.png";
import peru from "../../assets/infinity scroll/peru.png";
import honduras from "../../assets/infinity scroll/honduras.png";

const images = [
  { img: who },
  { img: pics },
  { img: ukraine },
  { img: eaeu },
  { img: bolivia },
  { img: Ecuador },
  { img: Kyrgyzstan },
  { img: uzbek },
  { img: tazkistan },
  { img: frn },
  { img: COSTRICA },
  { img: DominicanRepublic },
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
