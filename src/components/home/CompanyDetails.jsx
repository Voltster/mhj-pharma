import React from "react";
import hero2 from "../../assets/hero2.jpg";
import Authenticity from "../../assets/Authenticity.png";
import QualityCredibility from "../../assets/Quality&Credibility.png";
import Integrity from "../../assets/Integrity.png";

const cards = [
  {
    image: Authenticity,
    title: "Authenticity",
    description: "Being Trustworthy & Genuine",
  },
  {
    image: QualityCredibility,
    title: "Quality & Credibility",
    description: "Being Accountable & Taking Charge",
  },
  {
    image: Integrity,
    title: "Integrity",
    description: "Being Reliable & Adhering to Principles",
  },
];

const CompanyDetails = () => {
  return (
    <section className="flex justify-center items-center gap-x-16  mb-28">
      {/* left */}
      <div className="w-1/2">
        <h2 className="uppercase text-4xl mb-2 font-semibold">
          OFFERING EXCEPTIONAL EMINENCE AND PROTECTION FOR WELL-BEING
        </h2>
        <p className="text-justify">
          MHJ PHARMACONCEPTS is a company that has been accredited by WHO-GMP,
          and is involved in fulfilling medical requirements across the world by
          offering a range of top-grade medical products that are aimed at
          enhancing the quality of life. We thrive in the direction of
          development in a way where we can bring bold competition to some of
          the world's most expensive medicines by developing generics.
          Therefore, we are facilitating access to superior class of generic
          medicines for a greater number of patients around the world with
          critical ailments. We also provide access to our high-quality and
          finest generic versions of our medications to the entire world
          manufactured under most pioneered plant with highly trained
          professionals who follow EU-GMP, PIC/s, US-FDA and TGA-AUSTRALIA
          standards. As a result, we have been trusted by health care proficient
          and patients across the globe over the years.
        </p>
      </div>
      {/* right */}
      <div className="w-1/2 rounded-lg relative">
        <img src={hero2} alt="MHJ PHARMACONCEPTS is a company" />
        <div className="flex justify-center items-center gap-4 absolute -bottom-20">
          {cards.map((e, i) => (
            <div
              key={i}
              className="text-center border backdrop-blur-md rounded-lg p-1"
            >
              <img src={e.image} alt={e.image} className=" mx-auto" />
              <p className="font-bold font-gray-950 ">{e.title}</p>
              <p className="text-gray-900">{e.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyDetails;
