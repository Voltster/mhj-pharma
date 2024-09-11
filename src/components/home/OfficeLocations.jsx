import React from "react";
import { motion } from "framer-motion";
import indiaFlag from "../../assets/IndianFlag.png";
import usaFlag from "../../assets/UsaFlag.png";
import UkFlag from "../../assets/UkFlag.png";

const officeData = [
  {
    country: "India",
    flag: indiaFlag,
    title: "Head Office :",
    company: "MHJ PHARMACONCEPTS PRIVATE LIMITED",
    address:
      "DSM-030/031, DLF Corporate Towers, Shivaji Marg, New Delhi- 110015, INDIA",
  },
  {
    country: "USA",
    flag: usaFlag,
    title: "Americas :",
    company: "MHJ PHARMACONCEPTS LLC",
    address: "19 Holly Cove Lane, Dover, Delaware 19901, USA",
  },
  {
    country: "UK",
    flag: UkFlag,
    title: "United Kingdom :",
    company: "MHJ PHARMACONCEPTS LTD",
    address: "128, City Road, London, EC1V 2NX, UK",
  },
];

const OfficeLocation = ({ flag, title, company, address }) => {
  return (
    <motion.div
      className="mb-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.span
        className="flex items-center"
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img
          src={flag}
          alt={`${title} Flag`}
          className="h-8 mr-2"
          loading="lazy"
        />
        <span>
          <motion.h4
            className="font-semibold uppercase text-nowrap"
            whileHover={{ color: "#B51915" }}
          >
            {title}
          </motion.h4>
          <motion.p
            className="text-xs text-nowrap"
            whileHover={{ fontWeight: "bold" }}
          >
            {company}
          </motion.p>
        </span>
      </motion.span>
      <motion.p
        className="text-xs mt-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        whileHover={{ color: "#4A5568" }}
      >
        {address.split(", ").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index < address.split(", ").length - 1 && <br />}
          </React.Fragment>
        ))}
      </motion.p>
    </motion.div>
  );
};

const OfficeLocations = () => {
  return (
    <div className="flex sm:justify-around items-center flex-wrap gap-4">
      {officeData.map((office, index) => (
        <OfficeLocation key={index} {...office} />
      ))}
    </div>
  );
};

export default OfficeLocations;
