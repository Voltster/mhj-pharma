import React from "react";
import GlobalReach from "../components/common/WorldMap";

const GlobalPresence = () => {
  return (
    <div className="py-20 mt-10  text-center bg-gray-50">
      <h2 className="text-5xl font-bold mb-4 text-[#B31815] mt-4">
        Global Footprint
      </h2>
      <p className="w-8/12 mx-auto mb-2 text-gray-800  text-justify">
        We are proud to supply our high-quality products to customers worldwide
        through our overseas private market and institutional business,
        connecting healthcare professionals and patients across the globe. With
        a global presence in 23+ countries, we have established a strong network
        of distributors, partners, and customers who trust our products to meet
        the evolving needs of the healthcare industry. Our global reach enables
        us to cater to the diverse needs of healthcare professionals and
        patients, from urban hospitals to rural clinics, and from emerging
        markets to developed economies.
      </p>
      <GlobalReach />
    </div>
  );
};

export default GlobalPresence;
