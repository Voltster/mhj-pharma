import React, { useState } from "react";
import HeroVideo from "../../assets/heroVideo.mp4";
import PrimaryButton from "../common/PrimaryButton";

const Hero = () => {
  const [isVideoOpen, setVideoOpen] = useState(false);

  const handleVideoClick = () => {
    setVideoOpen(true);
  };

  const handleCloseClick = () => {
    setVideoOpen(false);
  };

  return (
    <div className="py-1 h-screen relative heroBg text-gray-900">
      <div className="h-screen xl:h-[85%] xl:w-11/12 flex-col-reverse flex xl:flex-row justify-center items-center gap-x-16 mt-12 xl:mt-10 container mx-auto">
        <div className="w-11/12 xl:w-1/2">
          <h1 className="text-[1.4rem] leading-[2rem] xl:leading-[2.3rem] xl:text-[2rem] font-bold mb-2 uppercase">
            <span className="bg-gradient-to-r from-[#db3700] to-[#fe5628] text-transparent bg-clip-text">
              MHJ Pharmaconcepts,{" "}
            </span>
            today symbolizes a name Maintaining Health Judiciously.
          </h1>
          <p className="text-gray-800">
            MHJ is a manufacturing company in the pharmaceutical industry with
            an extensive range of products that include generic and branded
            formulations, biotechnology products, and advanced drug delivery
            systems (adds).
          </p>
          <PrimaryButton to={"/about"} className={"mt-6 xl:mt-10"}>
            Know More
          </PrimaryButton>
        </div>
        <div className="w-10/12 xl:w-1/2 rounded-xl overflow-hidden mb-4 xl:mb-0">
          <video
            src={HeroVideo}
            autoPlay
            loop
            muted
            onClick={handleVideoClick}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="w-8 h-12 rounded-full border border-gray-700 mx-auto relative scrollAnim"></div>

      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative w-full h-full flex items-center justify-center">
            <video
              src={HeroVideo}
              controls
              autoPlay
              className="w-full h-full object-cover"
            />
            <button
              onClick={handleCloseClick}
              className="absolute top-4 right-4 bg-white text-black p-2 rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
