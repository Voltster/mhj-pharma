import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import map from "../../utils/features.json";

const geoUrl = map;

// const markers = [
//   {
//     name: "Kenya",
//     coordinates: [37, 1],
//     countryCode: "KE",
//   },
//   {
//     name: "Tajikistan",
//     coordinates: [71, 39],
//     countryCode: "TJ",
//   },
//   {
//     name: "Kyrgyzstan",
//     coordinates: [75, 41],
//     countryCode: "KG",
//   },
//   {
//     name: "Uzbekistan",
//     coordinates: [64, 41],
//     countryCode: "UZ",
//   },
//   {
//     name: "London",
//     coordinates: [-0.1, 51.5],
//     countryCode: "GB",
//   },
//   {
//     name: "Venezuela",
//     coordinates: [-66, 8],
//     countryCode: "VE",
//   },
//   {
//     name: "Bolivia",
//     coordinates: [-65, -17],
//     countryCode: "BO",
//   },
//   {
//     name: "Burkina Faso",
//     coordinates: [-1.5, 12],
//     countryCode: "BF",
//   },
//   {
//     name: "Ivory Coast",
//     coordinates: [-5, 7.5],
//     countryCode: "CI",
//   },
//   {
//     name: "Senegal",
//     coordinates: [-14, 14],
//     countryCode: "SN",
//   },
//   {
//     name: "Delaware",
//     coordinates: [-75.5, 39],
//     countryCode: "US",
//   },
//   {
//     name: "Dominican Republic",
//     coordinates: [-70, 19],
//     countryCode: "DO",
//   },
//   {
//     name: "Nicaragua",
//     coordinates: [-85, 13],
//     countryCode: "NI",
//   },
// ];

const markers = [
  { name: "Kenya", coordinates: [37.9062, -1.2921], countryCode: "KE" },
  { name: "Tajikistan", coordinates: [71.2761, 38.861], countryCode: "TJ" },
  { name: "Kyrgyzstan", coordinates: [74.7661, 41.2044], countryCode: "KG" },
  { name: "Uzbekistan", coordinates: [64.5853, 41.3775], countryCode: "UZ" },
  { name: "London", coordinates: [-0.1276, 51.5074], countryCode: "uk" },
  { name: "Venezuela", coordinates: [-66.5897, 6.4238], countryCode: "VE" },
  { name: "Bolivia", coordinates: [-63.5887, -16.2902], countryCode: "BO" },
  { name: "Burkina Faso", coordinates: [-1.5616, 12.2383], countryCode: "BF" },
  { name: "Ivory Coast", coordinates: [-5.5471, 7.5399], countryCode: "CI" },
  // { name: "Senegal", coordinates: [-14.4524, 14.4974], countryCode: "SN" },
  { name: "Delaware", coordinates: [-75.5277, 38.9108], countryCode: "US" },
  {
    name: "Dominican Republic",
    coordinates: [-70.1627, 18.7357],
    countryCode: "DO",
  },
  { name: "Nicaragua", coordinates: [-85.2072, 12.8654], countryCode: "NI" },
  { name: "Turkmenistan", coordinates: [59.5563, 38.9697], countryCode: "TM" },
  { name: "Myanmar", coordinates: [95.9562, 21.9162], countryCode: "MM" },
  { name: "Nigeria", coordinates: [8.6753, 9.082], countryCode: "NG" },
  { name: "Guatemala", coordinates: [-90.2308, 15.7835], countryCode: "GT" },
  { name: "Honduras", coordinates: [-86.2419, 15.199], countryCode: "HN" },
  { name: "Panama", coordinates: [-80.7821, 8.538], countryCode: "PA" },
  { name: "Ecuador", coordinates: [-78.1834, -1.8312], countryCode: "EC" },
  { name: "Costa Rica", coordinates: [-83.7534, 9.7489], countryCode: "CR" },
  { name: "Peru", coordinates: [-75.0152, -9.19], countryCode: "PE" },
  {
    name: "Moldova",
    coordinates: [28.3699, 47.4116],
    countryCode: "MD",
  },
];

const WorldMap = () => {
  const [content, setContent] = useState("");

  return (
    <div className="relative w-screen h-[90vh] overflow-hidden">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 100,
        }}
        className="w-[80%] mx-auto object-cover scale-[1.2]"
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                data-tooltip-id="my-tooltip"
                onMouseEnter={() => {
                  const countryCode = geo.properties.ISO_A2
                    ? geo.properties.ISO_A2.toLowerCase()
                    : "";
                  setContent(
                    <div className="flex items-center flex-col">
                      <img
                        src={`https://flagcdn.com/24x18/${geo.properties.name
                          .toLowerCase()
                          .slice(0, 2)}.png`}
                        alt={`${geo.properties.name} flag`}
                        width="16"
                        height="12"
                        className="mr-2"
                      />
                      <span>{geo.properties.name}</span>
                    </div>
                  );
                }}
                onMouseLeave={() => {
                  setContent("");
                }}
                style={{
                  default: {
                    fill: "#DCDCDC",
                    stroke: "#EBE8E7",
                  },
                  hover: {
                    fill: "#B71A14",
                    stroke: "#EBE8E7",
                  },
                  pressed: {
                    fill: "#2563eb",
                    stroke: "#EBE8E7",
                  },
                }}
              />
            ))
          }
        </Geographies>
        {markers.map(({ coordinates, name }) => (
          <Marker key={name} coordinates={coordinates}>
            {/* <FaLocationDot className="text-red-800" /> */}
            <circle r={4} fill="#B71A14" className="circle" />
          </Marker>
        ))}
      </ComposableMap>
      <ReactTooltip id="my-tooltip" place="top" content={content} />
    </div>
  );
};

export default WorldMap;
