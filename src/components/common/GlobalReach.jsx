import React from "react";
import { WorldMap } from "react-svg-worldmap";

const GlobalReach = () => {
  const data = [
    { country: "cn", value: 1389618778 }, // china
    { country: "in", value: 1311559204 }, // india
    { country: "us", value: 331883986 }, // united states
    { country: "id", value: 264935824 }, // indonesia
    { country: "pk", value: 210797836 }, // pakistan
    { country: "br", value: 210301591 }, // brazil
    { country: "ng", value: 208679114 }, // nigeria
    { country: "bd", value: 161062905 }, // bangladesh
    { country: "ru", value: 141944641 }, // russia
    { country: "mx", value: 127318112 }, // mexico
  ];

  const mapContainerStyle = {
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    background: "#ffffff",
  };

  return (
    <div className="w-11/12 text-center mx-auto my-10">
      <h2 className="text-5xl font-bold mb-4 text-gray-800">Global Reach</h2>
      <p className="text-lg text-gray-600 mb-8">
        MHJ PHARMACONCEPTS is proud to serve patients and healthcare providers
        around the world. Our global distribution network ensures that our
        high-quality oncology products are accessible to those who need them,
        wherever they are. We are committed to improving cancer care on a global
        scale.
      </p>
      <div
        className="flex justify-center items-center"
        style={mapContainerStyle}
      >
        <WorldMap
          color="red"
          title="MHJ PHARMACONCEPTS"
          value-suffix="people"
          size="responsive"
          data={data}
        />
      </div>
    </div>
  );
};

export default GlobalReach;
