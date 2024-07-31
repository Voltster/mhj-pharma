import React from "react";
import Hero from "../components/oncology/Hero";
import OncologyProductRange from "../components/oncology/OncologyProductRange";
import SectionCard from "../components/common/SectionCard";
import Innovative from "../assets/Innovative.png";
import Customized from "../assets/Customized.png";
import ResearchDevelopment from "../assets/ResearchDevelopment.png";
import QualitySafety from "../assets/QualitySafety.png";
import GlobalReach from "../components/common/GlobalReach";

const Oncology = () => {
  return (
    <main className="min-h-screen relative w-screen mx-auto bg-pink-50 ">
      <Hero />
      <OncologyProductRange />
      <section className="my-20 mx-auto w-11/12">
        <SectionCard
          title={"Innovative Treatments"}
          description={
            "At MHJ PHARMACONCEPTS, we are at the forefront of oncology innovation, constantly pushing the boundaries to develop advanced treatments that make a real difference in the lives of cancer patients.<br /> Our comprehensive range of products includes cutting-edge chemotherapy drugs, targeted therapies, and immunotherapies designed to effectively combat various types of cancer."
          }
          image={Innovative}
          customClass={"bg-[#f8bbd0]"}
          titleColor={"text-[#E91E63]"}
          paraColor={"text-[#595566]"}
        />
        <SectionCard
          title={"Customized Patient Care"}
          description={
            "Understanding that every cancer journey is unique, we focus on providing personalized treatment options tailored to individual patient needs. Our products are developed with the latest scientific research and technological advancements, ensuring that patients receive the most effective and targeted therapies available."
          }
          image={Customized}
          className={"lg:flex-row-reverse"}
          customClass={"bg-[#f8bbd0]"}
          titleColor={"text-[#E91E63]"}
          paraColor={"text-[#595566]"}
        />
        <SectionCard
          title={"Quality and Safety"}
          description={
            "We are committed to the highest standards of quality and safety in our manufacturing processes. Our state-of-the-art facilities and rigorous quality control measures ensure that every product we produce meets the strictest safety and efficacy standards, giving healthcare professionals and patients confidence in our treatments."
          }
          image={QualitySafety}
          customClass={"bg-[#f8bbd0]"}
          titleColor={"text-[#E91E63]"}
          paraColor={"text-[#595566]"}
        />
        <SectionCard
          title={"Research & Development"}
          description={
            "Our dedicated R&D team is passionate about discovering new and better ways to treat cancer. We invest heavily in research and collaborate with leading oncologists and researchers worldwide to bring the latest innovations from the lab to the clinic. Our ongoing clinical trials and research projects are paving the way for the next generation of cancer treatments."
          }
          image={ResearchDevelopment}
          className={"lg:flex-row-reverse"}
          customClass={"bg-[#f8bbd0]"}
          titleColor={"text-[#E91E63]"}
          paraColor={"text-[#595566]"}
        />
      </section>
      <GlobalReach />
    </main>
  );
};

export default Oncology;
