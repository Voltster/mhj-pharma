import React from "react";
import GlobalReach from "../components/common/WorldMap";

const GlobalPresence = () => {
  return (
    <div className="py-20  text-center bg-gray-50">
      <h2 className="text-5xl font-bold mb-4 text-gray-800 mt-4">Global Reach</h2>
      <p className="text-lg text-gray-600 mb-8">
        MHJ PHARMACONCEPTS is proud to serve patients and healthcare providers
        around the world. Our global distribution network ensures that our
        high-quality oncology products are accessible to those who need them,
        wherever they are. We are committed to improving cancer care on a global
        scale.
      </p>
      <GlobalReach />
    </div>
  );
};

export default GlobalPresence;
