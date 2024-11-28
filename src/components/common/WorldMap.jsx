import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import map from "../../utils/features.json";
import { motion as m } from "framer-motion";

const geoUrl = map;

const markers = [
  { name: "Kenya", coordinates: [37.9062, -0.0236], countryCode: "KE" },
  { name: "Tajikistan", coordinates: [71.2761, 38.861], countryCode: "TJ" },
  { name: "Kyrgyzstan", coordinates: [74.7661, 41.2044], countryCode: "KG" },
  { name: "Uzbekistan", coordinates: [64.5853, 41.3775], countryCode: "UZ" },
  {
    name: "United Kingdom",
    title: "MHJ PHARMACONCEPTS LTD",
    coordinates: [-0.1276, 51.5074],
    countryCode: "GB",
  },
  {
    name: "India",
    coordinates: [78.0629, 26.5937],
    countryCode: "IN",
    title: "Head Office",
  },
  { name: "Venezuela", coordinates: [-66.5897, 6.4238], countryCode: "VE" },
  { name: "Bolivia", coordinates: [-63.5887, -16.2902], countryCode: "BO" },
  { name: "Burkina Faso", coordinates: [-1.5616, 12.2383], countryCode: "BF" },
  {
    name: "United States of America",
    title: "MHJ PHARMACONCEPTS LLC",
    coordinates: [-75.5277, 38.9108],
    countryCode: "US",
  },
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
  { name: "Moldova", coordinates: [28.3699, 47.4116], countryCode: "MD" },
  { name: "Azerbaijan", coordinates: [47.5769, 40.1431], countryCode: "AZ" },
];

const WorldMap = ({ color }) => {
  const [content, setContent] = useState("");
  const findMarkerByName = (name) =>
    markers.find((marker) => marker.name === name);

  const containerVariants = {
    hidden: { scale: 0.7, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, ease: [0.45, 0, 0.55, 1] },
    },
  };

  return (
    <m.div
      className="relative overflow-hidden lg:h-screen"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 80,
        }}
        className="w-full md:w-[90%] mx-auto object-contain"
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                data-tooltip-id="my-tooltip"
                onMouseEnter={() => {
                  const marker = findMarkerByName(geo.properties.name);
                  if (marker) {
                    setContent(
                      <div className="flex items-center justify-center flex-col backdrop-blur-lg cursor-pointer">
                        <img
                          src={`https://flagcdn.com/24x18/${marker.countryCode
                            .toLowerCase()
                            .slice(0, 2)}.png`}
                          alt={`${marker.countryCode} flag`}
                          width="20"
                          height="16"
                          className="mr-2"
                        />
                        <span className="font-semibold">{marker.title}</span>
                        <span>{marker.name}</span>
                      </div>
                    );
                  } else {
                    setContent("");
                  }
                }}
                onMouseLeave={() => {
                  setContent("");
                }}
                style={{
                  default: {
                    fill: "#EDEDED",
                    stroke: "#E3E3E4",
                  },
                  hover: {
                    fill: "#941616",
                    stroke: "#E3E3E4",
                  },
                  pressed: {
                    fill: "#941616",
                    stroke: "#EBE8E7",
                  },
                }}
              />
            ))
          }
        </Geographies>
        {markers.map(({ coordinates, name }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle
              r={3}
              fill={`${color === "pink" ? "#E91E63" : "#941616"}`}
              className="relative circle pointer-events-none"
            />
          </Marker>
        ))}
      </ComposableMap>
      <ReactTooltip id="my-tooltip" place="top" content={content} />
    </m.div>
  );
};

export default WorldMap;
