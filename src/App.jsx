import { Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("./page/Home"));
const Export = lazy(() => import("./page/Export"));
const QualifiedTeam = lazy(() => import("./page/QualifiedTeam"));
const About = lazy(() => import("./page/About"));
const Oncology = lazy(() => import("./page/Oncology"));
// const Kids = lazy(() => import("./page/Kids"));
// const PediatricProducts = lazy(
//   () => import("./components/products/PediatricProducts")
// );
// const ProductsDetails = lazy(
//   () => import("./components/products/ProductsDetails")
// );
const Research = lazy(() => import("./page/Research"));
const Manufacture = lazy(() => import("./page/Manufacture"));
const QualityControls = lazy(() => import("./page/QualityControls"));
const GlobalPresence = lazy(() => import("./page/GlobalPresence"));
const Regulatory = lazy(() => import("./page/Regulatory"));
const ClinicalServices = lazy(() => import("./page/ClinicalServices"));
const ArtworkServices = lazy(() => import("./page/ArtworkServices"));
const Pharmacovigilance = lazy(() => import("./page/Pharmacovigilance"));
const Contact = lazy(() => import("./page/Contact"));
const Error404 = lazy(() => import("./components/common/Error404"));
import ScrollToTop from "./hook/ScrollToTop";
import whatsappIcon from "./assets/whatsapp.svg";
import Loader from "./components/common/Loader";
import "./Reset.css";
import "./App.css";
import { AnimatePresence } from "framer-motion";
import OncologyModal from "./components/oncology/OncologyModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";
import {
  injections,
  tablets,
  capsules,
  oralLiquids,
  infusions,
  otc,
} from "./utils/ProductData";
import { tabletData, capsuleData, oncoInjections } from "./utils/OncologyData";
import ProductLists from "./components/products/ProductLists";
import OncoProductList from "./components/oncology/OncoProductList";
import Products from "./page/Products";
import { Helmet } from "react-helmet";

// meta coponent
const SEO = ({title,description,keywords}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
  </Helmet>
)


function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <AnimatePresence mode="wait">
          <div className="bg-[#fefefe]  relative w-screen">
            <ScrollToHashElement />
            <ScrollToTop />
            <OncologyModal />
            <Navbar />
            <Routes>
              <Route path="/" element={<> <SEO title={"MHJ Pharmaconcepts Pvt Ltd | Leading Pharmaceutical Innovation & Quality"} description={"Empowering global health through innovation, MHJ Pharmaconcepts Pvt Ltd offers high-quality generics, biosimilars, and pharmaceutical solutions for global markets."} keywords={"MHJ Pharmaconcepts Pvt Ltd, Leading Pharmaceutical Company in India, Healthcare Innovation and Solutions, Global Pharmaceutical Manufacturer, Quality Generics and Biosimilars"}  />  <Home /> </> } />
              
              <Route path="/export" element={<><SEO title={" Export Oriented Pharmaceutical Solutions | MHJ Pharmaconcepts"} description={"MHJ Pharmaconcepts specializes in export-oriented pharmaceutical products, ensuring global quality standards and innovative healthcare solutions"} keywords={"Export-Oriented Pharmaceuticals, Global Pharmaceutical Exports, Healthcare Products for Export, International Pharmaceutical Supplier, Pharmaceutical Export Services"}/><Export /></>} />
              
              <Route path="/qualified-team" element={<><SEO title={"Expert Team in Pharmaceuticals | MHJ Pharmaconcepts"} description={" Meet the highly qualified professionals at MHJ Pharmaconcepts, committed to delivering world-class pharmaceutical products and services"} keywords={"Highly Qualified Pharmaceutical Team, Expert Team in Pharmaceuticals, Skilled Healthcare Professionals, Pharmaceutical Expertise, Global Healthcare Team"} /><QualifiedTeam /></>} />

              <Route path="/about" element={<><SEO title={"Products - Innovative Differentiated Formulations"} description={"MHJ Pharmaconcepts Pvt Ltd offers differentiated formulations with cutting-edge technology to address unmet medical needs and improve patient care."} keywords={"Generic Branded Formulations, Advanced Drug Delivery Systems, Biosimilars Manufacturer India, Differentiated Pharmaceutical Formulations, Custom Pharmaceutical Solutions"}/> <About /></>} />
              {/* <Route path="/kids" element={<Kids />} />
              <Route
                path="/pediatric-products"
                element={<PediatricProducts />}
              />
              <Route
                path="/pediatric-products/:id"
                element={<ProductsDetails />}
              /> */}
              <Route path="/regulatory-services" element={<><SEO title={"Regulatory Services for Global Pharma Solutions | MHJ Pharmaconcepts"} description={"MHJ Pharmaconcepts offers regulatory services designed to accelerate the approval process for pharmaceutical products, ensuring global market entry and compliance"} keywords={"Pharmaceutical Regulatory Services, Global Pharma Compliance, Regulatory Affairs in Pharma, Pharma Regulatory Consulting, International Pharmaceutical Approvals"}/><Regulatory /></>} />

              <Route path="/products" element={<><SEO title={" Global Pharmaceutical Solutions for Better Health"} description={"MHJ Pharmaconcepts offers global pharmaceutical solutions with cutting-edge products, including generics, advanced formulations, and biotechnology, improving healthcare outcomes"} keywords={" High-Quality Pharmaceutical Products, Pharmaceutical Solutions for Healthcare Global Pharmaceutical Manufacturers, Generics and Biosimilars, Innovative Drug Delivery Systems"}/>  <Products /></>} />

              <Route
                path="regulatory/clinical-services"
                element={<><SEO title={" Clinical Regulatory Affairs | MHJ Pharmaconcepts Pvt Ltd"}  description={" MHJ Pharmaconcepts offers comprehensive clinical regulatory affairs services to guide your pharmaceutical products through global regulatory pathways with expertise and precision"} keywords={"Clinical Regulatory Affairs, Global Regulatory Compliance, Clinical Trial Regulatory Services, Regulatory Affairs Consulting, Pharmaceutical Regulatory Services"}/> <ClinicalServices /></>}
              />

              <Route
                path="regulatory/artwork-services"
                element={<><SEO title={" Packaging Artwork & Labeling Services | MHJ Pharmaconcepts Pvt Ltd"} description={"MHJ Pharmaconcepts specializes in pharmaceutical artwork management, ensuring accurate and compliant labeling and packaging for products in global markets"} keywords={" Pharmaceutical Artwork Management, Packaging and Labeling Services Regulatory-Compliant Artwork, Pharmaceutical Packaging Solutions, Artwork and Labeling Compliance"}/><ArtworkServices /></>}
              />

              <Route
                path="regulatory/pharmacovigilance-services"
                element={<> <SEO title={" Pharmacovigilance Services for Drug Safety | MHJ Pharmaconcepts"} description={" MHJ Pharmaconcepts provides comprehensive pharmacovigilance services to ensure drug safety, monitor adverse effects, and maintain regulatory compliance globally"} keywords={" Pharmacovigilance Services, Drug Safety Monitoring, Adverse Event Reporting, Pharmacovigilance Compliance, Global Drug Safety Solutions"}/> <Pharmacovigilance /></>}
              />

              <Route path="/oncology" element={<><SEO title={" Oncology - Innovative Cancer Care Solutions"} description={"MHJ Pharmaconcepts leads the way in innovative cancer care solutions, offering high-quality oncology products for better patient care worldwide"} keywords={" Oncology Generics Manufacturer, Biosimilars for Cancer Treatment, Advanced Oncology Formulations, Targeted Cancer Therapies, Affordable Cancer Care Solutions"} />  <Oncology /> </>} />

              <Route
                path="/products/oncology/injectables"
                element={<> <SEO title={"Oncology Injectables Solutions | MHJ Pharmaconcepts Pvt Ltd"} description={" MHJ Pharmaconcepts offers advanced injectable oncology solutions, enhancing cancer treatment with precision, innovation, and global accessibility"} keywords={"Oncology Injectables for Cancer Treatment, Chemotherapy Injectable Medications Targeted Cancer Injectables, Affordable Oncology Injectables, Biosimilar Oncology Injectables"}/> <OncoProductList
                data={oncoInjections}
                heading="OncoLogy Injectables"
              /> </>  }
              />

              <Route
                path="/oncology/oral-solid/capsules"
                element={<><SEO title={"Oral Solid Capsules for Effective Treatment | MHJ Pharmaconcepts"}  description={"MHJ Pharmaconcepts manufactures reliable and effective oral solid capsules, adhering to strict quality standards to ensure safe and high-quality treatment options globally"} keywords={"Oral Solid Capsules, Pharmaceutical Capsules, Solid Dosage Forms, High-Quality Capsules, Oral Capsules for Healthcare"}/> <OncoProductList
                data={capsuleData}
                heading="Oral solid / capsules"
              /> </>
                }
              />

              <Route
                path="/oncology/oral-solid/tablets"
                element={<><SEO title={"Oncology Oral Solid Tablets | MHJ Pharmaconcepts"} description={"Explore MHJ Pharmaconcepts range of high-quality oncology oral solid tablets, offering safe and effective treatment options for various therapeutic areas in global markets"} keywords={"Oncology Oral Solid Tablets, Cancer Treatment Tablets, Pharmaceutical Oncology Tablets, Oral Solid Dosage Oncology, Oncology Tablets for Healthcare"}/> 
                <OncoProductList
                data={tabletData}
                heading="Oral solid / Tablets"
              /> </>
                }
              />

              <Route
                path="/products/general/injectables"
                element={
                  <><SEO title={" Innovative Injectable Medicines | MHJ Pharmaconcepts"} description={" MHJ Pharmaconcepts specializes in injectable pharmaceuticals, delivering innovative healthcare solutions with a focus on quality and compliance"} keywords={" Pharmaceutical Injectables, Safe Injectable Medicines, High-Quality Injectables Global Injectable Pharmaceuticals, Injectable Healthcare Solutions"}/><ProductLists data={injections} heading={"Injectables"} /></>
                }
              />

              <Route
                path="/products/general/oral-solids/tablets"
                element={
                <><SEO title={"Oral Solid Tablets for Healthcare | MHJ Pharmaconcepts"} description={" MHJ Pharmaconcepts specializes in manufacturing oral solid tablets, ensuring high-quality standards and innovative solutions for global healthcare markets"} keywords={"General Oral Solid Tablets, Pharmaceutical Oral Tablets, Oral Tablets for Healthcare Solid Dosage Tablets, High-Quality Oral Tablets"}/>
                 <ProductLists
                data={tablets}
                heading={"Oral Solids / Tablets"}
              /></>
                }
              />
              <Route
                path="/products/general/oral-solids/capsules"
                element={ <> <SEO title={"Oral Solid Capsules for Healthcare | MHJ Pharmaconcepts"} description={"Explore MHJ Pharmaconcepts' portfolio of oral solid capsules, developed to meet rigorous quality standards and provide effective treatment options globally"} keywords={"General Oral Solid Capsules, Pharmaceutical Oral Capsules, Oral Capsules for Healthcare, Capsule Dosage Forms, High-Quality Oral Capsules"}/>  <ProductLists
                  data={capsules}
                  heading={"Oral Solids / Capsules"}
                /></>}
              />
              <Route
                path="/products/general/oral-liquids"
                element={<><SEO title={"Reliable General Oral Liquids for Healthcare | MHJ Pharmaconcepts"} description={"Discover MHJ Pharmaconcepts' portfolio of general oral liquid products, designed to meet global healthcare needs with a focus on safety and efficacy"} keywords={"General Oral Liquid Products, Pharmaceutical Oral Liquids, Oral Liquid Dosage Forms, High-Quality Oral Liquids, Liquid Pharmaceutical Solutions"}/>   <ProductLists data={oralLiquids} heading={"Oral Liquids"} /></>}
              />
              <Route
                path="/products/general/infusions"
                element={<><SEO title={" Infusion Solutions for Healthcare | MHJ Pharmaconcepts"} description={"Explore MHJ Pharmaconcepts' portfolio of advanced infusion products, providing safe, effective, and reliable solutions for a wide range of medical treatments globally"} keywords={"Infusion Products, Pharmaceutical Infusions, Infusion Solutions, IV Infusions, Infusion Therapy"}/>  <ProductLists data={infusions} heading={"infusions"} /> </>
                
                }
              />
              <Route
                path="/products/general/nutraceutical"
                element={<><SEO title={" Nutraceutical Supplements for Global Wellness | MHJ Pharmaconcepts"} description={"MHJ Pharmaconcepts offers a diverse range of nutraceutical supplements, designed to improve health outcomes and wellness with advanced formulations and premium quality"} keywords={"Nutraceutical Products, Health Supplements, Nutraceuticals for Wellness Pharmaceutical Nutraceuticals, Nutraceutical Solutions"}/> <ProductLists data={otc} heading={"nutraceutical"} /> </>}
              />

              <Route
                path="/technology/research-development"
                element={<><SEO title={"R&D - Advanced Pharma Solutions"} description={"At MHJ Pharmaconcepts, our R&D efforts drive the future of healthcare with innovative products, including generics, biosimilars, and advanced formulations for better patient care"} keywords={"Pharmaceutical Research and Development, Innovative Drug Development R&D in Biosimilars, Pharmaceutical R&D Solutions, Advanced Drug Delivery Systems R&D"}/> <Research /></> }
              />
              <Route
                path="/technology/manufacture-unit"
                element={<><SEO title={"Global Pharma Solutions by MHJ Pharmaconcepts"} description={" At MHJ Pharmaconcepts, our innovative manufacturing units produce top-tier pharmaceutical products, ensuring quality, compliance, and advanced drug formulations worldwide"} keywords={" Pharmaceutical Manufacturing Units, Advanced Drug Manufacturing Facilities Quality Pharmaceutical Manufacturing, Global Pharmaceutical Manufacturing Solutions"}/> <Manufacture /></>}
              />
              <Route
                path="/technology/quality-control"
                element={<><SEO title={"Quality Control - Ensuring Pharmaceutical Beats Benchmarks"} description={" MHJ Pharmaconcepts follows rigorous quality control procedures for all our pharmaceutical products, ensuring the highest level of quality and patient safety globally"} keywords={"Pharmaceutical Quality Control, Quality Assurance in Pharma, Global Pharma Quality Standards, Rigorous Quality Control Processes, Compliance in Pharmaceutical Manufacturing"}/> <QualityControls /></>}
              />
              <Route path="/globalfootprint" element={<><SEO title={" Global Footprint - Delivering Healthcare Worldwide"} description={" Explore MHJ Pharmaconcepts' global footprint, providing innovative pharmaceutical solutions across major international markets with a commitment to improving global health"} keywords={"Global Pharmaceutical Reach, MHJ Pharmaconcepts Worldwide International Healthcare Solutions, Pharmaceutical Global Footprint,  Global Pharmaceutical Presence"} /> <GlobalPresence /></>} />
              <Route path="/contact" element={<><SEO title={"Contact US - MHJ Pharmaconcepts"} description={" Connect with MHJ Pharmaconcepts for pharmaceutical inquiries, product support, or to explore potential partnerships. We're ready to help!"} keywords={"Contact Pharmaceutical Company, Pharmaceutical Customer Support, Contact MHJ Pharmaconcepts, Contact for Pharma Inquiries, Pharmaceutical Partnership Inquiries"}/> <Contact /></>} />
              <Route path="/loader" element={<Loader />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
            <Footer />
          </div>
        </AnimatePresence>
      </Suspense>
      <Link
        to="https://api.whatsapp.com/send?phone=919100018000"
        target="_blank"
        rel="noopener noreferrer"
        className="bottom-8 right-4 sm:right-8 md:right-16 fixed z-50 cursor-pointer transition-all duration-400 ease-in-out animate-bounce"
      >
        <img
          src={whatsappIcon}
          alt="contact on whatsapp"
          className="w-[8vh] md:w-[4vw]"
        />
      </Link>
      <ToastContainer autoClose={1000} hideProgressBar closeOnClick />
    </>
  );
}
export default App;
