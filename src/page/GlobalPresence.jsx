import React from "react";
import GlobalReach from "../components/common/WorldMap";

const GlobalPresence = () => {
  return (
    <div className="py-20  text-center bg-gray-50">
      <h2 className="text-5xl font-bold mb-4 text-[#B31815] mt-4">
        Global Footprint
      </h2>
      <p className="w-11/12 mx-auto mb-2 text-gray-800 text-center">
        We are proud to supply our high-quality products to customers worldwide
        through our overseas private market and institutional business. Our
        global presence allows us to cater to the needs of healthcare
        professionals and patients around the world, and we are committed to
        maintaining seamless supply chain management and distribution.
      </p>
      <GlobalReach />
    </div>
  );
};

export default GlobalPresence;
