import ResearchAndDevelopment from "../assets/img/R&D.webp";
import ManufacturingUnit from "../assets/ManufacturingUnit.webp";
import MainSection from "../components/common/MainSection";
import SectionLayout from "../components/common/SectionLayout";
const Research = () => {
  return (
    <main className="min-h-screen relative w-full mx-auto  md:mb-24">
      <MainSection
        heading={"Research & Development"}
        title={"Research"}
        videoSrc={
          "https://res.cloudinary.com/mhjproduct/video/upload/v1745486252/R_D_krhacx.mp4?f_auto&q_auto"
        }
        className={"flex-row-reverse"}
      />
      <SectionLayout
        title={"Research & Development"}
        description={`At MHJ Pharmaconcepts, our research lab is the foundation of our mission to deliver innovative and cost-effective treatment options that meet the evolving medical needs of society. Our team of skilled professionals is dedicated to developing and optimizing formulations that exceed industry standards, offering superior benefits compared to existing products.<br />
          Our pilot-scale prototypes of all production machines enable us to conduct research with precision and efficiency, allowing us to refine our formulations and bring new products to market. This cutting-edge equipment enables us to: <br />* Develop and test new formulations <br />* Refine existing formulations <br />* Validate production processes`}
        src={ResearchAndDevelopment}
        alt={" our research lab is the foundation"}
        className={"w-11/12 mx-auto container md:py-20  my-10"}
      />
      <SectionLayout
        description={`Our analytical research lab plays a critical role in our development process, where we rigorously test and analyze methods to ensure that every product we bring to market is not only effective but also safe for use. Our commitment to quality is further reinforced by our dedicated stability study area, where we evaluate the stability of our products under various environmental conditions.<br />This ensures that our products maintain their efficacy, even in extreme settings, delivering consistent and reliable healthcare solutions. Our stability study area allows us to:<br />* Evaluate the shelf life of our products <br />* Determine the optimal storage conditions<br />* Confirm the product's stability under various environmental conditions`}
        src={ManufacturingUnit}
        alt={"analytical research lab plays"}
        className={"w-11/12 mx-auto container xl:flex-row-reverse mb-8"}
        floatLeft={true}
      />
    </main>
  );
};

export default Research;
