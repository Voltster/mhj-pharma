import Hero from "../components/home/Hero";
import Card from "../components/home/Card";
import SectionLayout from "../components/common/SectionLayout";
import CompanyDetails from "../components/home/CompanyDetails";
import ourDedication from "../assets/ourDedication.png";
import SectionCard from "../components/common/SectionCard";
import ourMission from "../assets/ourMission.png";
import Contact from "../components/home/Contact";
import InfinityScroll from "../components/common/InfinityScroll";

const Home = () => {
  return (
    <main className="min-h-screen relative w-full mx-auto ">
      <Hero />
      <div className=" w-11/12 container mx-auto my-20 ">
        <Card />
        <CompanyDetails />
        <InfinityScroll />
        <SectionLayout
          title={
            "OUR DEDICATION TO SCIENCE STEMS FROM OUR DESIRE TO IMPROVE SOCIETY"
          }
          description={
            "An extensive range of prescription drugs and over the counter medications are manufactured at our manufacturing plant, with an outsized product portfolio of over 500 molecules in Tablets, Capsules (Soft & Hard Gelatin), Injections (Dry Powders, Liquid & PFS), Oral Liquids, Ointments, and Sachets. MHJ PHARMACONCEPTS is also based in the United States and United Kingdom, and has overseas branches in Delaware and London respectively. We have prolonged our presence in key markets of AFRICA, CIS and LATAM, among other rising economies to make healthcare more affordable globally."
          }
          src={ourDedication}
          className={"xl:flex-row-reverse"}
        />
        <SectionCard
          image={ourMission}
          title={"OUR MISSION"}
          description={
            "MHJ Pharmaconcepts is a pharmaceutical company that is committed to maintaining a high standard in their manufacturing process. They have a well-equipped laboratory that conducts a thorough examination of all raw materials including Active Pharmaceutical Ingredients (APIs), Excipients, and packaging materials. The examination involves rigorous physical, microbiological and instrumental testing, as well as feasible interface control to ensure the quality of their products."
          }
        />
        <Contact />
      </div>
    </main>
  );
};

export default Home;
