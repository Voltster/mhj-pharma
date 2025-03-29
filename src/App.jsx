import { Link, Route, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";

// Import non-lazy components
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import ScrollToTop from "./hook/ScrollToTop";
import Loader from "./components/common/Loader";
import OncologyModal from "./components/oncology/OncologyModal";
import ProductDetailsPage from "./components/products/ProductDetailsPage";

// Import data
import {
  injections,
  tablets,
  capsules,
  oralLiquids,
  infusions,
  otc,
} from "./utils/ProductData";

import { tabletData, capsuleData, oncoInjections } from "./utils/OncologyData";

// Import components using routes
import ProductLists from "./components/products/ProductLists";
import OncoProductList from "./components/oncology/OncoProductList";

// Import styles
import "./Reset.css";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

// Import assets
import whatsappIcon from "./assets/whatsapp.svg";

// Lazy-loaded components
const lazyComponents = {
  Home: lazy(() => import("./page/Home")),
  Export: lazy(() => import("./page/Export")),
  QualifiedTeam: lazy(() => import("./page/QualifiedTeam")),
  About: lazy(() => import("./page/About")),
  Oncology: lazy(() => import("./page/Oncology")),
  Kids: lazy(() => import("./page/Kids")),
  PediatricProducts: lazy(
    () => import("./components/products/PediatricProducts")
  ),
  ProductsDetails: lazy(() => import("./components/products/ProductsDetails")),
  Research: lazy(() => import("./page/Research")),
  Manufacture: lazy(() => import("./page/Manufacture")),
  QualityControls: lazy(() => import("./page/QualityControls")),
  GlobalPresence: lazy(() => import("./page/GlobalPresence")),
  Regulatory: lazy(() => import("./page/Regulatory")),
  ClinicalServices: lazy(() => import("./page/ClinicalServices")),
  ArtworkServices: lazy(() => import("./page/ArtworkServices")),
  Pharmacovigilance: lazy(() => import("./page/Pharmacovigilance")),
  Contact: lazy(() => import("./page/Contact")),
  Error404: lazy(() => import("./components/common/Error404")),
  TermsAndConditions: lazy(
    () => import("./components/common/TermsAndConditions")
  ),
  Products: lazy(() => import("./page/Products")),
};

// SEO component
const SEO = ({ title, description, keywords }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
  </Helmet>
);

// Route config object
const routeConfig = [
  {
    path: "/",
    element: lazyComponents.Home,
    seo: {
      title:
        "MHJ Pharmaconcepts Pvt Ltd | Leading Pharmaceutical Innovation & Quality",
      description:
        "Empowering global health through innovation, MHJ Pharmaconcepts Pvt Ltd offers high-quality generics, biosimilars, and pharmaceutical solutions for global markets.",
      keywords:
        "MHJ Pharmaconcepts Pvt Ltd, Leading Pharmaceutical Company in India, Healthcare Innovation and Solutions, Global Pharmaceutical Manufacturer, Quality Generics and Biosimilars",
    },
  },
  {
    path: "/export",
    element: lazyComponents.Export,
    seo: {
      title: "Export Oriented Pharmaceutical Solutions | MHJ Pharmaconcepts",
      description:
        "MHJ Pharmaconcepts specializes in export-oriented pharmaceutical products, ensuring global quality standards and innovative healthcare solutions",
      keywords:
        "Export-Oriented Pharmaceuticals, Global Pharmaceutical Exports, Healthcare Products for Export, International Pharmaceutical Supplier, Pharmaceutical Export Services",
    },
  },
  {
    path: "/qualified-team",
    element: lazyComponents.QualifiedTeam,
    seo: {
      title: "Expert Team in Pharmaceuticals | MHJ Pharmaconcepts",
      description:
        "Meet the highly qualified professionals at MHJ Pharmaconcepts, committed to delivering world-class pharmaceutical products and services",
      keywords:
        "Highly Qualified Pharmaceutical Team, Expert Team in Pharmaceuticals, Skilled Healthcare Professionals, Pharmaceutical Expertise, Global Healthcare Team",
    },
  },
  {
    path: "/about",
    element: lazyComponents.About,
    seo: {
      title: "About us - Innovative Differentiated Formulations",
      description:
        "MHJ Pharmaconcepts Pvt Ltd offers differentiated formulations with cutting-edge technology to address unmet medical needs and improve patient care.",
      keywords:
        "Generic Branded Formulations, Advanced Drug Delivery Systems, Biosimilars Manufacturer India, Differentiated Pharmaceutical Formulations, Custom Pharmaceutical Solutions",
    },
  },
  {
    path: "/kids",
    element: lazyComponents.Kids,
  },
  {
    path: "/pediatric-products",
    element: lazyComponents.PediatricProducts,
  },
  {
    path: "/pediatric-products/:id",
    element: lazyComponents.ProductsDetails,
  },
  {
    path: "/regulatory-services",
    element: lazyComponents.Regulatory,
    seo: {
      title:
        "Regulatory Services for Global Pharma Solutions | MHJ Pharmaconcepts",
      description:
        "MHJ Pharmaconcepts offers regulatory services designed to accelerate the approval process for pharmaceutical products, ensuring global market entry and compliance",
      keywords:
        "Pharmaceutical Regulatory Services, Global Pharma Compliance, Regulatory Affairs in Pharma, Pharma Regulatory Consulting, International Pharmaceutical Approvals",
    },
  },
  {
    path: "/products",
    element: lazyComponents.Products,
    seo: {
      title: "Product - Global Pharmaceutical Solutions for Better Health",
      description:
        "MHJ Pharmaconcepts offers global pharmaceutical solutions with cutting-edge products, including generics, advanced formulations, and biotechnology, improving healthcare outcomes",
      keywords:
        "High-Quality Pharmaceutical Products, Pharmaceutical Solutions for Healthcare Global Pharmaceutical Manufacturers, Generics and Biosimilars, Innovative Drug Delivery Systems",
    },
  },
  // ...other routes following the same pattern...
];

// Product list route configs with reusable patterns
const productListRoutes = [
  {
    path: "/products/oncology/injectables",
    component: OncoProductList,
    props: { data: oncoInjections, heading: "OncoLogy Injectables" },
    seo: {
      title: "Oncology Injectables Solutions | MHJ Pharmaconcepts Pvt Ltd",
      description:
        "MHJ Pharmaconcepts offers advanced injectable oncology solutions, enhancing cancer treatment with precision, innovation, and global accessibility",
      keywords:
        "Oncology Injectables for Cancer Treatment, Chemotherapy Injectable Medications Targeted Cancer Injectables, Affordable Oncology Injectables, Biosimilar Oncology Injectables",
    },
  },
  {
    path: "/oncology/oral-solid/capsules",
    component: OncoProductList,
    props: { data: capsuleData, heading: "Oral solid / capsules" },
    seo: {
      title: "Oral Solid Capsules for Effective Treatment | MHJ Pharmaconcepts",
      description:
        "MHJ Pharmaconcepts manufactures reliable and effective oral solid capsules, adhering to strict quality standards to ensure safe and high-quality treatment options globally",
      keywords:
        "Oral Solid Capsules, Pharmaceutical Capsules, Solid Dosage Forms, High-Quality Capsules, Oral Capsules for Healthcare",
    },
  },
  // ...other product list routes...
];

function App() {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(
          "https://all-products-api.onrender.com/productsDetails"
        );
        const data = await response.json();
        setProductData(data.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  // Helper function to render route with SEO
  const renderRouteWithSEO = (route) => {
    const RouteElement = route.element;
    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          <>
            {route.seo && <SEO {...route.seo} />}
            <RouteElement />
          </>
        }
      />
    );
  };

  // Helper function to render product list routes
  const renderProductListRoute = (routeConfig) => {
    const Component = routeConfig.component;
    return (
      <Route
        key={routeConfig.path}
        path={routeConfig.path}
        element={
          <>
            {routeConfig.seo && <SEO {...routeConfig.seo} />}
            <Component {...routeConfig.props} />
          </>
        }
      />
    );
  };

  return (
    <>
      <Suspense fallback={<Loader />}>
        <AnimatePresence mode="wait">
          <div className="bg-[#fefefe] relative w-screen">
            <ScrollToHashElement />
            <ScrollToTop />
            <OncologyModal />
            <Navbar />
            <Routes>
              {/* Render main routes from config */}
              {routeConfig.map(renderRouteWithSEO)}

              {/* Render product list routes */}
              {productListRoutes.map(renderProductListRoute)}

              {/* Dynamic product detail routes */}
              {productData.map((product) => (
                <Route
                  key={product._id}
                  path={`/${product.pageUrl}`}
                  element={<ProductDetailsPage product={product} />}
                />
              ))}

              <Route path="/loader" element={<Loader />} />
              <Route path="*" element={<lazyComponents.Error404 />} />
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
