import SectionLayout from "../components/common/SectionLayout";
import companyOverview from "../assets/companyOverview.png";
import companyOverview2 from "../assets/companyOverview2.png";
import InfinityScroll from "../components/common/InfinityScroll";
import ourMission from "../assets/ourMission1.png";
import ourVision from "../assets/Vision.png";
import ourGoal from "../assets/ourGoal.png";
import SectionCard from "../components/common/SectionCard";
import Therapeutic from "../components/about/Therapeutic";
import MainSection from "../components/about/MainSection";
import smart from "../assets/smart3.png";
import { motion as m } from "framer-motion";
const About = () => {
  return (
    <main className="min-h-screen relative w-full mx-auto bg-inherit">
      <MainSection />
      <div className="flex flex-col lg:flex-row items-center justify-between p-10  md:pt-20  mt-10">
        <div className="md:w-1/2">
          <m.img
            initial={{ x: [0], opacity: 0 }}
            whileInView={{ x: [-150, 0], opacity: 1 }}
            transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
            viewport={{ once: true, amount: 0.5 }}
            src={smart}
            alt="smart"
            className="mix-blend-multiply"
          />
        </div>
        <m.div
          className="lg:w-1/2 mt-10 lg:mt-0 lg:pl-10"
          initial={{ x: [0], opacity: 0 }}
          whileInView={{ x: [150, 0], opacity: 1 }}
          transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <p className="text-gray-600 text-lg">
            We have a diverse portfolio of over 150 registered products
            worldwide, catering to various therapeutic areas. Our products are
            designed to address the unmet medical needs of patients and
            healthcare professionals, and we are committed to ongoing innovation
            to stay ahead of the curve in the industry.
          </p>
          <p className="mt-4 text-gray-600 text-lg">
            We take pride in our robust COPPs program, which has resulted in
            over 200 certificates till date. Our COPPs program ensures the
            authenticity and integrity of our products, and we are committed to
            maintaining the highest standards of quality control and compliance.
            Our two manufacturing plants in India are equipped with
            state-of-the-art facilities and cutting-edge technology to ensure
            the highest standards of quality and production.
          </p>
        </m.div>
      </div>
      <SectionLayout
        title={"Overview"}
        description={`Established in 2017 by our visionary leader, Mr. Mohiiit Jaiin, MHJ Pharmaconcepts has been driven by a mission to empower global health through excellence and shape the future with innovative strategies. Our goal is to make the world self-reliant in healthcare, and we have quickly become one of India's leading pharmaceutical companies. <br /> We offer a wide range of products, including generic branded formulations, advanced drug delivery systems (ADDS), and biotechnology products, catering to the global market. Our comprehensive portfolio includes generics, biosimilars, and differentiated formulations, which we market as both generics and branded generics in India and major international markets.<br />Our commitment to excellence in pharmaceutical innovation and quality has earned us a reputation as a trusted partner in healthcare, both in India and globally. Through our custom pharmaceutical services, we continue to drive advancements in medicines, making high-quality healthcare accessible to all.
`}
        src={companyOverview}
        className={"w-11/12 mx-auto container "}
      />
      <Therapeutic />
      <SectionLayout
        title={"Global Standards"}
        subheading={
          "Delivering Exceptional Quality and Comprehensive Offerings"
        }
        description={`MHJ Pharmaconcepts has established itself as a trusted leader in the pharmaceutical industry with a strong global presence, we have expanded our scope of services to export medicines from India to over 23+ countries, providing access to quality healthcare worldwide.<br />Our commitment to excellence is reflected in our recognition by the World Health Organization (WHO) and certifications for GMP (Good Manufacturing Practices) and ISO 9001:2000. These international standards ensure our adherence to best practices in product development, quality control, and business operations.<br />Our growth and dedication to excellence have solidified our reputation as a trusted partner in the pharmaceutical industry. We continue to strive for excellence in all aspects of our operations, ensuring that our products meet the highest standards of quality and safety, ultimately benefiting patients worldwide.
`}
        src={companyOverview2}
        className={"w-11/12 mx-auto container xl:flex-row-reverse"}
      />
      <section className="my-20 mx-auto w-11/12">
        <InfinityScroll />
        <SectionCard
          title={"Our Mission"}
          description={
            "Our mission is to improve global health by delivering high-quality, affordable medications through innovation and rigorous standards. We are dedicated to enhancing patient care and empowering healthcare professionals worldwide."
          }
          image={ourMission}
        />
        <SectionCard
          title={"Our Vision"}
          description={
            "Our Vision is to be a global leader in innovative and sustainable pharmaceutical manufacturing, driving better health outcomes through cutting-edge technology, exceptional quality, and a commitment to patient safety. We envision accessible medicines produced with the highest environmental standards, setting new industry benchmarks and making a lasting impact on global health."
          }
          image={ourVision}
          className={"lg:flex-row-reverse"}
        />
        <SectionCard
          title="Our Goal"
          description="To achieve 99.9% compliance with global regulatory standards while reducing production costs by 15% over the next five years through the implementation of advanced manufacturing technologies and sustainable practices. “This goal is specific, measurable, achievable, relevant, and time-bound (SMART), focusing on regulatory compliance, cost efficiency, and sustainability."
          image={ourGoal}
        />
      </section>
    </main>
  );
};

export default About;
