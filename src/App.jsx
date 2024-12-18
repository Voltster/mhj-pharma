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
              {/* <Route path="/kids" element={<Kids />} />
              <Route
                path="/pediatric-products"
                element={<PediatricProducts />}
              />
              <Route
                path="/pediatric-products/:id"
                element={<ProductsDetails />}
              /> */}
              <Route path="/regulatory-services" element={<Regulatory />} />
              <Route path="/products" element={<Products />} />
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
              <Route
                path="/products/oncology/injectables"
                element={
                  <OncoProductList
                    data={oncoInjections}
                    heading="OncoLogy Injectables"
                  />
                }
              />
              <Route
                path="/oncology/oral-solid/capsules"
                element={
                  <OncoProductList
                    data={capsuleData}
                    heading="Oral solid / capsules"
                  />
                }
              />
              <Route
                path="/oncology/oral-solid/tablets"
                element={
                  <OncoProductList
                    data={tabletData}
                    heading="Oral solid / Tablets"
                  />
                }
              />
              <Route
                path="/products/general/injectables"
                element={
                  <ProductLists data={injections} heading={"Injectables"} />
                }
              />
              <Route
                path="/products/general/oral-solids/tablets"
                element={
                  <ProductLists
                    data={tablets}
                    heading={"Oral Solids / Tablets"}
                  />
                }
              />
              <Route
                path="/products/general/oral-solids/capsules"
                element={
                  <ProductLists
                    data={capsules}
                    heading={"Oral Solids / Capsules"}
                  />
                }
              />
              <Route
                path="/products/general/oral-liquids"
                element={
                  <ProductLists data={oralLiquids} heading={"Oral Liquids"} />
                }
              />
              <Route
                path="/products/general/infusions"
                element={
                  <ProductLists data={infusions} heading={"infusions"} />
                }
              />
              <Route
                path="/products/general/nutraceutical"
                element={<ProductLists data={otc} heading={"nutraceutical"} />}
              />

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
              <Route path="/contact" element={<Contact />} />
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
