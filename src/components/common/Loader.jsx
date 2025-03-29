const Loader = () => {
  return (
    <div className="main w-screen h-[90vh] fixed z-50 bg-white flex justify-center items-center">
      <div className="loaderPil text-center">
        <div className="loaderAnim h-[160px] relative -z-10 mb-2">
          <div className="loader-anime-bounce">
            <div className="loaderPill-anim-flop">
              <div className="loaderPill-Pill inline-block box-border w-[80px] h-[30px] border border-[#800000] rounded-[15px] overflow-hidden">
                <div className="bg-[#800000] h-full w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="loaderPill-floor block ">
          <div className="loaderPill-shadow inline-block w-[70px] h-[7px] rounded-[50%] bg-gray-500/40 transform translate-y-[-15px]"></div>
        </div>
        <h2 className="uppercase text-xl md:text-2xl font-bold bg-gradient-to-r from-[#800000] via-[#db3700] to-[#fe5628] text-transparent bg-clip-text">
          MHJ Pharmaconcepts Private Limited
        </h2>
      </div>
    </div>
  );
};

export default Loader;
