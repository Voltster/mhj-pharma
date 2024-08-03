const MainSection = ({ title, videoSrc, className }) => {
  return (
    <section className="py-1 xl:h-screen  relative">
      <div
        className={`h-[85%]  flex flex-col xl:flex-row justify-center items-center gap-x-16 mt-20 container mx-auto relative ${className}  relative`}
      >
        <h2 className="strokeText xl:absolute -left-10 xl:rotate-[-90deg] text-nowrap text-7xl ">
          {title}
        </h2>
        {/* <div className="">
        </div> */}
        {/* <div className="w-[10%] h-[90%] my-auto">
          <img src={imgSrc} alt="about us section" className="h-[100%]" />
        </div> */}

        <div className="w-[70%] overflow-hidden rounded-2xl ">
          <video src={videoSrc} autoPlay loop muted />
        </div>
      </div>
    </section>
  );
};

export default MainSection;
