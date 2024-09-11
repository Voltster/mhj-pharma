import video from "../../assets/Aboutus.webm";
const MainSection = () => {
  return (
    <section className="py-1 xl:h-screen h-[50%]  relative p-0  md:pb-24">
      <div
        className={` pt-1 mt-14 md:mb-10 md:h-[100vh] flex flex-col xl:flex-row justify-center items-center gap-x-16  w-full mx-auto relative `}
      >
        <div className="w-[100%] h-full overflow-hidden relative">
          <video src={video} autoPlay loop muted className="w-full" />
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  text-white w-full bg-black/30 h-full flex flex-col justify-center items-center">
            <h2 className="text-2xl md:text-5xl font-bold uppercase ">
              {" "}
              Who We Are?
            </h2>
            <p className="text-xl capitalize text-center">
              Serving Medications and Remedies throughout the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
