import MainSection from "../components/common/MainSection";
import SectionLayout from "../components/common/SectionLayout";
import companyOverview from "../assets/companyOverview.png";
import companyOverview2 from "../assets/companyOverview2.png";
// import InfinityScroll from "../components/common/InfinityScroll";
import ourMission from "../assets/ourMission1.png";
import ourVision from "../assets/ourVision.png";
import ourGoal from "../assets/ourGoal.png";
import SectionCard from "../components/common/SectionCard";
import Therapeutic from "../components/about/Therapeutic";
import video from "../assets/Research.mp4";
import about from "../assets/About Us.png";

const About = () => {
  return (
    <main className="min-h-screen relative w-full mx-auto ">
      <MainSection imgSrc={about} videoSrc={video} />
      <SectionLayout
        title={"Company Overview"}
        description={`MHJ PHARMACONCEPTS is an Indian pharmaceutical company with an International existence, its founder, Mr. Mohitt Jaen, established it in 2017 with the" visualization to formulate India autonomous in healthcare. Since then, it has come out as one of India's leading pharmaceutical companies.<br /> 
        The company trade an extensive range of generic branded and generic formulations, advanced drug delivery systems (adds) and biotechnology products worldwide. 
        The company promote its pharmaceutical formulations as generics and branded generics in India and all major International markets by the company's portfolio that includes products and services under custom pharmaceutical services, generics, biosimilars and differentiated formulations.`}
        src={companyOverview}
        className={"w-11/12 mx-auto container"}
      />
      <Therapeutic />
      <SectionLayout
        description={
          "MHJ PHARMACONCEPTS today symbolizes a name – maintaining health judiciously.<br /> MHJ PHARMACONCEPTS has comprehensive its scope of services towards the artery of global market. It established exports of medicines from India to the world and has been exporting antibiotics and other pharmaceutical products. We are focusing to extend our export market to over 50+ countries.<br /> Our company is a WHO recognized organization which has certification for GMP and ISO 9001: 2000 for productive management in developing, quality control and other business operations. This expansion in business and services has marked the credibility of MHJ PHARMACONCEPTS."
        }
        src={companyOverview2}
        className={"w-11/12 mx-auto container flex-row-reverse"}
      />
      <section className="my-20 mx-auto w-11/12">
        {/* <InfinityScroll /> */}
        <SectionCard
          title={"Our Mission"}
          description={
            "To extend our wings across globle with strong technical competence and International accreditations. <br /> By effectively applying the concept of forte in marketing, trade and exports worldwide."
          }
          image={ourMission}
        />
        <SectionCard
          title={"Our Vision"}
          description={
            "To obtain and sustain global leadership in chosen areas of businesses. To construct new prospects of growth in our strategic businesses"
          }
          image={ourVision}
          className={"lg:flex-row-reverse"}
        />
        <SectionCard
          title="Our Goal"
          description="Our goal is to revolutionize the Global Health Care System by providing superior quality products that comply with WHO-GMP, EU-GMP standards for ultimate customer satisfaction.<br /> MHJ PHARMACONCEPTS deem customer contentment is the key to growing clientele and expanding business."
          image={ourGoal}
        />
      </section>
    </main>
  );
};

export default About;
