import QualityControlText from "../assets/QualityControlText.png";
import QualityControl from "../assets/QualityControl.png";
import QualityControl2 from "../assets/QualityControl2.png";
import video from "../assets/Research.mp4";
import MainSection from "../components/common/MainSection";
import SectionLayout from "../components/common/SectionLayout";

const QualityControls = () => {
  return (
    <main className="min-h-screen relative w-full mx-auto ">
      <MainSection imgSrc={QualityControlText} videoSrc={video} />
      <SectionLayout
        title={"Quality Control"}
        description={`MHJ Pharmaconcepts is a pharmaceutical company that is committed to maintaining a high standard in their manufacturing process. They have a well-equipped laboratory that conducts a thorough examination of all raw materials including Active Pharmaceutical Ingredients (APIs), Excipients, and packaging materials. The examination involves rigorous physical, microbiological and instrumental testing, as well as feasible interface control to ensure the quality of their products.
          <br /> 
          In addition, the company has a sophisticated instrument lab featuring a range of High-Performance Excipients (HPLC), Atomic Absorption Spectrophotometer, Fourier Transform Infrared Spectroscopy (FTIR), Ultra Violet (UV) Spectrophotometer and Total Organic Carbon (TOC) Analyser. Their instruments are regularly aligned and serviced to ensure that their examination results are accurate and reliable.`}
        src={QualityControl}
        className={"w-11/12 mx-auto container"}
      />
      <SectionLayout
        description={`MHJ Pharmaconcepts is also devoted to conducting Sped up and Real Time
        Stability Studies according to the global standards set by the
        International Council for Harmonisation (ICH) and the World Health
        Organisation (WHO). These studies help to determine the shelf life of
        their products under various climatic zones, ensuring that they maintain
        their quality and efficacy throughout their lifespan. From research and
        development to final production, we adhere to strict standards to ensure
        everything we make meets or exceeds regulatory requirements. We also
        understand the importance of providing reliable information and service,
        both to our internal team members and external partners. Our commitment
        to quality extends beyond the products we make, as we strive to deliver
        exceptional customer service every step of the way.`}
        src={QualityControl2}
        className={"w-11/12 mx-auto container flex-row-reverse"}
      />
    </main>
  );
};

export default QualityControls;
