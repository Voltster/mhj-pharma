import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("./page/Home"));
const About = lazy(() => import("./page/About"));
const Oncology = lazy(() => import("./page/Oncology"));
const Research = lazy(() => import("./page/Research"));
const QualityControls = lazy(() => import("./page/QualityControls"));
const Exports = lazy(() => import("./page/Exports"));
const GlobalPresence = lazy(() => import("./page/GlobalPresence"));
const Injections = lazy(() => import("./components/products/Injections"));
const Tablets = lazy(() => import("./components/products/Tablets"));
const Capsules = lazy(() => import("./components/products/Capsules"));
const OralLiquids = lazy(() => import("./components/products/OralLiquids"));
const Infusions = lazy(() => import("./components/products/Infusions"));
const OTC = lazy(() => import("./components/products/OTC"));
const Pediatrics = lazy(() => import("./components/products/Pediatrics"));
const OncologyProducts = lazy(() =>
  import("./components/oncology/OncologyProducts")
);

import "./Reset.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="bg-gray-50 h-screen relative w-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/oncology" element={<Oncology />} />
            <Route path="/oncology-products" element={<OncologyProducts />} />
            <Route
              path="/products/exports/injections"
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
            <Route path="/products/exports/infusions" element={<Infusions />} />
            <Route path="/products/exports/otc" element={<OTC />} />
            <Route
              path="/products/domestic/pediatrics"
              element={<Pediatrics />}
            />
            <Route
              path="/technology/research-and-development"
              element={<Research />}
            />
            <Route
              path="/technology/quality-control"
              element={<QualityControls />}
            />
            <Route path="/globalPresence" element={<GlobalPresence />} />
            {/* <Route
              path="/products/exports/:category/:subcategory?"
              element={<Exports />}
            /> */}
          </Routes>
          <Footer />
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
