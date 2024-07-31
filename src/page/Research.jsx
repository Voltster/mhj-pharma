import ResearchText from "../assets/ResearchText.png";
import ResearchAndDevelopment from "../assets/ResearchAndDevelopment.png";
import ManufacturingUnit from "../assets/ManufacturingUnit.png";
import video from "../assets/Research.mp4";
import MainSection from "../components/common/MainSection";
import SectionLayout from "../components/common/SectionLayout";
const Research = () => {
  return (
    <main className="min-h-screen relative w-full mx-auto ">
      <MainSection
        imgSrc={ResearchText}
        videoSrc={video}
        className={"flex-row-reverse"}
      />
      <SectionLayout
        title={"Research & Development"}
        description={`The research lab at MHJ PHARMACONCEPTS is an integral part of our commitment to providing cost-effective and innovative treatment options that meet society's medical needs. Our team of skilled professionals is dedicated to the development and optimization of formulations that have a distinct edge over existing products in the market. This is achieved through the utilization of pilot scale prototypes of all production machines available, which enable us to carry out research work with ease.<br /> 
        Additionally, we have an analytical research lab attached to the research lab for development testing and analysing methods to ensure our products are safe for use and of the highest quality. Our formulation research lab also has a separate stability study area, which allows us to test our products' stability in various conditions. This ensures that our products maintain their efficacy even under extreme environmental conditions.`}
        src={ResearchAndDevelopment}
        className={"w-11/12 mx-auto container"}
      />
      <SectionLayout
        title={"Manufacturing Unit"}
        description={`At MHJ PHARMACONCEPTS, we take great care to ensure that our manufacturing division operates with reliability and excellence. Our priority is to produce stable and high-quality pharmaceutical products, while maintaining safety measures for both our workers and the environment. Our state-of-the-art manufacturing facilities are equipped with modern equipment that is built on robust principles, allowing us to produce accurate results at a faster pace than ever before, without compromising on quality.<br />
        To enhance the quality assurance of our products, we have established procedures that minimize human touch, thus reducing the potential for errors. We continually strive to improve our infrastructure and equipment to deliver the highest quality products. Through the implementation of automation in various stages of the manufacturing process, we have vastly improved both the quality of our products, and the efficiency of our operations.`}
        src={ManufacturingUnit}
        className={"w-11/12 mx-auto container flex-row-reverse"}
      />
      <p className="w-11/12 mx-auto text-center mb-20">
        Our staff are highly trained professionals who are dedicated to
        delivering the best possible results while maintaining our high-quality
        standards. At MHJ PHARMACONCEPTS, we believe that by investing in our
        employees, and committing to sustainable manufacturing practices, we can
        continue to make a positive impact on people’s lives. Whether we are
        manufacturing generic or branded pharmaceuticals, we always prioritize
        safety, quality, and efficiency.
      </p>
    </main>
  );
};

export default Research;
