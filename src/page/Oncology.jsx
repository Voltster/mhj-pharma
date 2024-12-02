import Hero from "../components/oncology/Hero";
import SectionCard from "../components/common/SectionCard";
import Products from "../components/common/Products";
import sample1 from "../assets/Packshot/cisplatin.png";
import sample2 from "../assets/Packshot/EPRIBIN.png";
import sample3 from "../assets/Packshot/itonik.png";
import sample5 from "../assets/Packshot/PACKTAC.png";
import sample6 from "../assets/Packshot/PALCIL.png";
import onco1 from "../assets/onco1.webp";
import onco2 from "../assets/onco2.webp";
import onco3 from "../assets/onco3.webp";
import onco4 from "../assets/onco4.webp";

const imageData = [
  { img: sample1 },
  { img: sample2 },
  { img: sample3 },
  { img: sample5 },
  { img: sample6 },
];

const Oncology = () => {
  return (
    <main className="min-h-screen relative w-screen mx-auto  bg-gradient-to-b from-[#FDE4EA] via-pink-50 to-white md:mb-24">
      <Hero />
      <section className="my-20 mx-auto w-11/12 md:rounded-2xl overflow-hidden ">
        <SectionCard
          title={"ADVANCE SOLUTIONS"}
          description={
            "We're dedicated to developing innovative treatments that transform oncology care. Our comprehensive range of products includes cutting-edge chemotherapy drugs, targeted therapies, and immunotherapies designed to effectively combat multiple cancer indications. With a focus on improving patient outcomes and quality of life, our treatments have been shown to deliver significant benefits, including improved survival rates and reduced side effects. We're committed to staying at the forefront of research and innovation, collaborating with leading experts in the field and leveraging the latest discoveries to drive progress in oncology."
          }
          image={onco1}
          customClass={"bg-[#FCE1E8]"}
          titleColor={"text-[#E91E63]"}
          paraColor={"invert"}
        />
        <SectionCard
          title={"COMPREHENSIVE CARE MANAGEMENT"}
          description={
            "We believe that every patient deserves a personalized approach to oncology treatment. That's why we offer customized patient care, tailored to each individual's unique needs and circumstances. We understand that every patient is different, and that what works for one person may not work for another. That's why we take a holistic approach to oncology treatment, considering not just the physical symptoms of the disease, but also the emotional and psychological toll it can take on patients and their families. Our goal is to provide each patient with the best possible chance of achieving a positive outcome, while also improving their overall quality of life."
          }
          image={onco2}
          className={"lg:flex-row-reverse"}
          customClass={"bg-[#f8bbd0]"}
          titleColor={"text-[#E91E63]"}
          paraColor={"invert"}
        />
        <SectionCard
          title={"Quality and Safety"}
          description={
            "We are committed to the highest standards of quality and safety in our manufacturing processes. Our state-of-the-art facilities and rigorous quality control measures ensure that every product we produce meets the strictest safety and efficacy standards, giving healthcare professionals and patient’s confidence in our medications."
          }
          image={onco3}
          customClass={"bg-[#f8bbd0]"}
          titleColor={"text-[#E91E63]"}
          paraColor={"invert"}
        />
        <SectionCard
          title={"Research & Development"}
          description={
            "Our research and development team is driven by a relentless passion to uncover innovative solutions for oncology treatment. We leverage our extensive resources to collaborate with world-renowned oncologists and researchers, fostering a culture of cutting-edge innovation. Our commitment to translational research enables us to bridge the gap between bench and bedside, expediting the discovery of new and effective therapies."
          }
          image={onco4}
          className={"lg:flex-row-reverse"}
          customClass={"bg-[#f8bbd0]"}
          titleColor={"text-[#E91E63]"}
          paraColor={"invert"}
        />
      </section>
      <Products imageData={imageData} customClass="text-[#E91E63]" />
    </main>
  );
};

export default Oncology;
