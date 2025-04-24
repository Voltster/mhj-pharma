import QualityControl from "../assets/img/QualityControl.webp";
import QualityControl2 from "../assets/img/QualityControl2.webp";
import MainSection from "../components/common/MainSection";
import SectionLayout from "../components/common/SectionLayout";

const QualityControls = () => {
  return (
    <main className="min-h-screen relative w-full mx-auto mb-10">
      <MainSection
        title={"Quality"}
        heading={"Quality Control"}
        videoSrc={
          "https://res.cloudinary.com/mhjproduct/video/upload/v1745486243/Research_wrdvud.mp4"
        }
      />
      <SectionLayout
        title={"Quality Control"}
        description={`We as MHJ are dedicated to upholding the highest standards in our manufacturing processes. Our state-of-the-art laboratories are equipped to conduct rigorous examinations of all raw materials, including Active Pharmaceutical Ingredients (APIs), excipients, and packaging materials. This thorough examination process involves comprehensive physical, microbiological, and instrumental testing, as well as precise interface control, ensuring the quality and integrity of our products. Our sophisticated instrument lab is outfitted with cutting-edge technology,
        including High-Performance Liquid Chromatography (HPLC), Atomic Absorption Spectrophotometers, Fourier Transform Infrared Spectroscopy (FTIR), Ultra Violet (UV) Spectrophotometers, and Total Organic Carbon (TOC) Analyzers. These
        instruments are meticulously calibrated and serviced regularly to ensure the accuracy and reliability of our testing results.
        `}
        src={QualityControl}
        className={"w-11/12 mx-auto container md:py-20  mt-10"}
        alt={"Quality Control"}
      />
      <SectionLayout
        description={`In our commitment to global quality standards, MHJ Pharmaconcepts conducts
        Accelerated and Real-Time Stability Studies in accordance with guidelines from the International Council for Harmonization (ICH) and the World Health Organization (WHO). These studies are essential in determining the shelf life of our products across various climatic zones, ensuring they maintain their quality and efficacy throughout their lifespan. From research and development to final production, we adhere to stringent regulatory standards to guarantee that every product we manufacture meets or exceeds industry requirements. Our dedication to quality extends beyond our products, as we are committed to providing exceptional customer service and reliable information to our internal teams and external partners alike.
        `}
        src={QualityControl2}
        alt={"commitment to global quality standards"}
        className={
          "w-11/12 mx-auto container xl:flex-row-reverse md:pb-20 pt-10 md:pt-0"
        }
        floatLeft={true}
      />
    </main>
  );
};

export default QualityControls;
