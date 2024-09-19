import { Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("./page/Home"));
const Export = lazy(() => import("./page/Export"));
const QualifiedTeam = lazy(() => import("./page/QualifiedTeam"));
const About = lazy(() => import("./page/About"));
const Oncology = lazy(() => import("./page/Oncology"));
const Research = lazy(() => import("./page/Research"));
const Manufacture = lazy(() => import("./page/Manufacture"));
const QualityControls = lazy(() => import("./page/QualityControls"));
const GlobalPresence = lazy(() => import("./page/GlobalPresence"));
const Injections = lazy(() => import("./components/products/Injections"));
const Tablets = lazy(() => import("./components/products/Tablets"));
const Capsules = lazy(() => import("./components/products/Capsules"));
const OralLiquids = lazy(() => import("./components/products/OralLiquids"));
const Infusions = lazy(() => import("./components/products/Infusions"));
const OTC = lazy(() => import("./components/products/OTC"));
const Injection = lazy(() => import("./components/oncology/Injection"));
const OralCapsules = lazy(() => import("./components/oncology/Capsules"));
const OralTables = lazy(() => import("./components/oncology/OncoTables"));
// const Pediatrics = lazy(() => import("./components/products/Pediatrics"));
const Regulatory = lazy(() => import("./page/Regulatory"));
const ClinicalServices = lazy(() => import("./page/ClinicalServices"));
const ArtworkServices = lazy(() => import("./page/ArtworkServices"));
const Pharmacovigilance = lazy(() => import("./page/Pharmacovigilance"));
const Error404 = lazy(() => import("./components/common/Error404"));
import ScrollToTop from "./hook/ScrollToTop"
// const OncologyProducts = lazy(() =>
//   import("./components/oncology/OncologyProducts")
// );
import whatsappIcon from "./assets/whatsapp.svg";
import Loader from "./components/common/Loader";
import "./Reset.css";
import "./App.css";
import { AnimatePresence } from "framer-motion";
import OncologyModal from "./components/oncology/OncologyModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";
import QRCodeSection from "./components/common/QRCodeSection";

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
              <Route path="/" element={<Home />} />
              <Route path="/export" element={<Export />} />
              <Route path="/qualified-team" element={<QualifiedTeam />} />
              <Route path="/about" element={<About />} />
              <Route path="/regulatory-services" element={<Regulatory />} />
              <Route
                path="regulatory/clinical-services"
                element={<ClinicalServices />}
              />
              <Route
                path="regulatory/artwork-services"
                element={<ArtworkServices />}
              />
              <Route
                path="regulatory/pharmacovigilance-services"
                element={<Pharmacovigilance />}
              />
              <Route path="/oncology" element={<Oncology />} />
              {/* <Route path="/oncology-products" element={<OncologyProducts />} /> */}
              <Route path="/products/oncology/injectables" element={<Injection />} />
              <Route path="/oncology/oral-solid/capsules" element={<OralCapsules />} />
              <Route path="/oncology/oral-solid/tablets" element={<OralTables />} />
              <Route
                path="/products/exports/injectables"
                element={<Injections />}
              />
              <Route
                path="/products/exports/oral-solids/tablets"
                element={<Tablets />}
              />
              <Route
                path="/products/exports/oral-solids/capsules"
                element={<Capsules />}
              />
              <Route
                path="/products/exports/oral-liquids"
                element={<OralLiquids />}
              />
              <Route
                path="/products/exports/infusions"
                element={<Infusions />}
              />
              <Route path="/products/exports/nutraceutical" element={<OTC />} />
              {/* <Route
                path="/products/domestic/pediatrics"
                element={<Pediatrics />}
              /> */}
              <Route
                path="/technology/research-development"
                element={<Research />}
              />
              <Route
                path="/technology/manufacture-unit"
                element={<Manufacture />}
              />
              <Route
                path="/technology/quality-control"
                element={<QualityControls />}
              />
              <Route path="/globalfootprint" element={<GlobalPresence />} />
              <Route path="/loader" element={<Loader />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
            {/* <QRCodeSection /> */}
            <Footer />
          </div>
        </AnimatePresence>
      </Suspense>
      <Link
        to="https://api.whatsapp.com/send?phone=919100018000"
        target="_blank"
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
