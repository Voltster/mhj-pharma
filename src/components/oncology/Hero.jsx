import HeroVideo from "../../assets/heroVideo.mp4";
import oncologyHeroImg from "../../assets/oncologyHeroImg.png";
import PrimaryButton from "../common/PrimaryButton";

const tableData = [
  { number: "100+", title: "Oncology Products" },
  { number: "22+", title: "Countries Served" },
  { number: "25+", title: "Clinical Trials" },
  { number: "7+", title: "Years of Experience" },
];

const Hero = () => {
  return (
    <div className="py-1 h-screen  relative bg-gradient-to-t from-[#FFD4DF] to-[#EE8FA7] mb-[10%]">
      <div className="h-[82%] w-11/12 flex justify-center items-center gap-x-16 mt-20 container mx-auto ">
        <div className=" w-1/2 ">
          <h1 className="text-[4rem] leading-[4.3rem]  font-bold mb-2 text-[#e91e63]">
            Welcome to our ONCO division
          </h1>
          <p className="text-[#595566]">
            Welcome to our Onco division. We are a team of dedicated
            professionals committed to bringing cutting-edge solutions and
            therapies to the fight against cancer.
          </p>
          <PrimaryButton
            to={"/oncology-products"}
            className={
              "mt-10 bg-gradient-to-r from-[#e91e63] via-pink-400 to-pink-600 animate-custom-bounce hover:animate-none transition-all"
            }
          >
            Products
          </PrimaryButton>
        </div>
        <div className="w-1/2 rounded-xl overflow-hidden">
          {/* <video src={HeroVideo} autoPlay loop muted /> */}
          <img
            src={oncologyHeroImg}
            alt="oncology section"
            className="w-[90%]"
          />
        </div>
      </div>
      <div className="w-9/12 mx-auto rounded-sm shadow-md relative bg-white flex justify-center items-center h-40">
        {tableData.map((e, i) => (
          <span
            key={i}
            className={`flex justify-center items-center flex-col w-60 h-28 border-gray-700 border-r ${
              i == 3 && "border-none"
            }`}
          >
            <p className="text-[#e91e63] text-4xl font-semibold">{e.number}</p>
            <h4 className="text-[#363636] font-medium">{e.title}</h4>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Hero;
