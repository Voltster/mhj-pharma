import HeroVideo from "../../assets/heroVideo.mp4";
import PrimaryButton from "../common/PrimaryButton";

const Hero = () => {
  return (
    <div className="py-1 h-screen  relative  heroBg text-gray-900">
      <div className="h-screen xl:h-[85%] xl:w-11/12 flex-col-reverse flex xl:flex-row justify-center items-center gap-x-16 mt-12 xl:mt-10 container mx-auto">
        <div className="w-11/12  xl:w-1/2 ">
          <h1 className="text-[1.4rem] leading-[2rem] xl:leading-[2.3rem] xl:text-[2rem]    font-bold mb-2 uppercase">
            <span className="bg-gradient-to-r from-[#db3700] to-[#fe5628] text-transparent bg-clip-text ">
              MHJ Pharmaconcepts,{" "}
            </span>
            today symbolizes a name Maintaining Health Judiciously.
          </h1>
          <p className="text-gray-800 ">
            MHJ is a manufacturing company in the pharmaceutical industry with
            an extensive range of products that include generic ad branded
            formulations, biotechnology products, and advanced drug delivery
            systems (adds).
          </p>
          <PrimaryButton to={"/about"} className={"mt-6 xl:mt-10"}>
            Know More
          </PrimaryButton>
        </div>
        <div className="w-10/12 xl:w-1/2 rounded-xl overflow-hidden mb-4 xl:mb-0">
          <video src={HeroVideo} autoPlay loop muted />
        </div>
      </div>
      <div className="w-8 h-12 rounded-full border border-gray-700 mx-auto relative scrollAnim"></div>
    </div>
  );
};

export default Hero;
