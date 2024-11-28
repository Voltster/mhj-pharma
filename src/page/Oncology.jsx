import Hero from "../components/oncology/Hero";
import SectionCard from "../components/common/SectionCard";
import Products from "../components/common/Products";
import sample1 from "../assets/Packshot/cisplatin.png";
import sample2 from "../assets/Packshot/EPRIBIN.png";
import sample3 from "../assets/Packshot/itonik.png";
import sample5 from "../assets/Packshot/PACKTAC.png";
import sample6 from "../assets/Packshot/PALCIL.png";

const imageData = [
  { img: sample1 },
  { img: sample2 },
  { img: sample3 },
  { img: sample5 },
  { img: sample6 },
];

const Oncology = () => {
  return (
    <main className="min-h-screen relative w-screen mx-auto bg-pink-50 ">
      <Hero />
      {/* <OncologyProductRange /> */}
      <section className="my-20 mx-auto w-11/12">
        <SectionCard
          title={"ADVANCE SOLUTIONS"}
          description={
            "We're dedicated to developing innovative treatments that transform oncology care. Our comprehensive range of products includes cutting-edge chemotherapy drugs, targeted therapies, and immunotherapies designed to effectively combat multiple cancer indications. With a focus on improving patient outcomes and quality of life, our treatments have been shown to deliver significant benefits, including improved survival rates and reduced side effects. We're committed to staying at the forefront of research and innovation, collaborating with leading experts in the field and leveraging the latest discoveries to drive progress in oncology."
          }
          image={
            "https://img.freepik.com/premium-photo/male-doctor-his-office-looking-virtual-dna-coming-out-tablet_306105-1431.jpg?w=826"
          }
          customClass={"bg-[#f8bbd0]"}
          titleColor={"text-[#E91E63]"}
          paraColor={"invert"}
        />
        <SectionCard
          title={"COMPREHENSIVE CARE MANAGEMENT"}
          description={
            "We believe that every patient deserves a personalized approach to oncology treatment. That's why we offer customized patient care, tailored to each individual's unique needs and circumstances. We understand that every patient is different, and that what works for one person may not work for another. That's why we take a holistic approach to oncology treatment, considering not just the physical symptoms of the disease, but also the emotional and psychological toll it can take on patients and their families. Our goal is to provide each patient with the best possible chance of achieving a positive outcome, while also improving their overall quality of life."
          }
          image={
            "https://img.freepik.com/free-photo/front-view-doctor-holding-medical-element_23-2148854106.jpg?t=st=1725540465~exp=1725544065~hmac=05ab7a822e12cabed61ec8fddda21240bef31509f2a97d5bb1c0d9394b869f4a&w=740"
          }
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
          image={
            "https://img.freepik.com/free-photo/exclusive-premium-quality-brand-graphic-concept_53876-124909.jpg?t=st=1725541117~exp=1725544717~hmac=1763a0fad14ba2a776cb4f229d5e9b701fa425db7caba9f8a7ef0fddd5465151&w=740"
          }
          customClass={"bg-[#f8bbd0]"}
          titleColor={"text-[#E91E63]"}
          paraColor={"invert"}
        />
        <SectionCard
          title={"Research & Development"}
          description={
            "Our research and development team is driven by a relentless passion to uncover innovative solutions for oncology treatment. We leverage our extensive resources to collaborate with world-renowned oncologists and researchers, fostering a culture of cutting-edge innovation. Our commitment to translational research enables us to bridge the gap between bench and bedside, expediting the discovery of new and effective therapies."
          }
          image={
            "https://img.freepik.com/free-photo/close-up-researcher-working-with-microscope_23-2148882130.jpg?t=st=1725541220~exp=1725544820~hmac=1480f673c52f0f13c75b7681488d0b50773ee2756a7fe98c838ec07244997921&w=740"
          }
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
