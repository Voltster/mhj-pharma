const MainSection = ({ imgSrc, videoSrc, className }) => {
  return (
    <section className="py-1 h-screen  relative">
      <div
        className={`h-[85%]  flex flex-row justify-center items-center gap-x-16 mt-20 container mx-auto relative ${className}`}
      >
        <div className="w-[10%] h-[90%] my-auto">
          <img src={imgSrc} alt="about us section" className="h-[100%]" />
        </div>

        <div className="w-[70%] overflow-hidden rounded-2xl">
          <video src={videoSrc} autoPlay loop muted />
        </div>
      </div>
    </section>
  );
};

export default MainSection;
