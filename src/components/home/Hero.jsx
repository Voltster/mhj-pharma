import HeroVideo from "../../assets/heroVideo.mp4";
import PrimaryButton from "../common/PrimaryButton";

const Hero = () => {
  return (
    <div className="py-1 h-screen  relative  heroBg">
      <div className="h-[85%] w-11/12 flex justify-center items-center gap-x-16 mt-10 container mx-auto">
        <div className=" w-1/2 ">
          <h1 className="text-[2rem] leading-[2.3rem]  font-bold mb-2">
            <span className="bg-gradient-to-r from-[#db3700] to-[#fe5628] text-transparent bg-clip-text">
              MHJ Pharmaconcepts{" "}
            </span>
            today symbolizes a name Maintaining Health Judiciously.
          </h1>
          <p>
            MHJ is a manufacturing company in the pharmaceutical industry with
            an extensive range of products that include generic ad branded
            formulations, biotechnology products, and advanced drug delivery
            systems (adds).
          </p>
          <PrimaryButton to={"/about"} className={"mt-10"}>
            Know More
          </PrimaryButton>
        </div>
        <div className="w-1/2 rounded-xl overflow-hidden">
          <video src={HeroVideo} autoPlay loop muted />
        </div>
      </div>
      <div className="w-8 h-12 rounded-full border border-gray-800 mx-auto relative scrollAnim"></div>
    </div>
  );
};

export default Hero;
