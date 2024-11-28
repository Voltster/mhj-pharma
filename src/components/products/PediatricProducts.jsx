import React, { useState } from "react";
import { pediatricsProducts } from "../../utils/ProductData";
import { useNavigate } from "react-router-dom";

import bird from "../../assets/jumi/jumiBird.png";
import giraffe from "../../assets/jumi/jumiGiraffe.png";
import jumiMonkey from "../../assets/jumi/jumiMonkey.png";
import { motion as m } from "framer-motion";

const PediatricProducts = () => {
  const navigate = useNavigate();
  const handleDetailsClick = (product) => {
    navigate(`/pediatric-products/${product.brandName}`, {
      state: { product },
    });
  };
  // State for search query and filter
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");

  // Function to handle the search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredProducts = pediatricsProducts.filter((product) => {
    const matchesSearch =
      product.brandName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.composition.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      filter === "all" ||
      (filter === "otc" && product.isOTC) ||
      (filter === "non-otc" && !product.isOTC);
    return matchesSearch && matchesFilter;
  });

  return (
    <section className="min-h-screen relative w-full mx-auto bg-[#F0D9BD]">
      <div className="py-20 h-screen  relative ">
        <div className="w-8/12 mx-auto ">
          <m.h2
            className="text-2xl md:text-4xl text-center mt-10 font-bold mb-8 text-[#B31815] uppercase"
            initial={{ y: [0], opacity: 0 }}
            whileInView={{ y: [20, 0], opacity: 1 }}
            transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
            viewport={{ once: true, amount: 0.5 }}
          >
            our Pediatric Products
          </m.h2>

          <div className="w-full  flex flex-col md:flex-row justify-end gap-4 mb-4 relative z-50">
            <select
              value={filter}
              onChange={handleFilterChange}
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 hover:cursor-pointer"
            >
              <option value="all">All Products</option>
              <option value="otc">OTC </option>
              <option value="non-otc">Prescription drugs</option>
            </select>
            <div className="mr-20">
              <label htmlFor="search" className="font-medium">
                Search:{" "}
              </label>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search for products..."
                id="search"
                className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>
        </div>
        <div className="relative  border-none overflow-auto sm:rounded-lg  h-[80%] mx-auto ">
          <table className="mx-auto text-sm text-left rtl:text-right text-gray-500  w-7/12  h-[80%] productBg overflow-scroll scroll">
            <thead className="text-xs text-[#ffffff] uppercase bg-[#B31815] w-full  sticky top-0 z-40 ">
              <tr>
                {/* <th
                  scope="col"
                  className="px-6 py-3 whitespace-nowrap text-center"
                >
                  Image
                </th> */}
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Pack Size
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Generice Name
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Details
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product, i) => (
                <tr
                  className="odd:bg-white  even:bg-orange-200  border-b  border-gray-300  relative"
                  key={i}
                >
                  {/* <td className="px-6 text-gray-800">
                    <img src={product.img} alt="" width={100} />
                  </td> */}
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-800 uppercase"
                  >
                    {product.brandName}
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap"
                  >
                    {product.packSize}
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-800 "
                  >
                    {product.composition}
                  </th>
                  <th className="text-center">
                    <button
                      onClick={() => handleDetailsClick(product)}
                      className="text-gray-800 hover:underline"
                    >
                      Details
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <m.img
        src={jumiMonkey}
        alt="bird"
        className="absolute left-10 top-10 hidden md:block rotate-12"
        width={200}
        initial={{ x: [0], opacity: 0 }}
        whileInView={{ x: [-30, 0], opacity: 1 }}
        transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
        viewport={{ once: true, amount: 0.5 }}
      />
      <m.img
        src={giraffe}
        alt=""
        className="absolute bottom-10 hidden md:block right-10 z-0"
        width={200}
        initial={{ x: [0], opacity: 0 }}
        whileInView={{ x: [30, 0], opacity: 1 }}
        transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
        viewport={{ once: true, amount: 0.5 }}
      />
      {/* <img
        src={jumiSnake}
        alt=""
        className="absolute bottom-0 z-0"
        width={300}
      /> */}
      <m.img
        src={bird}
        alt=""
        className="absolute hidden md:block bottom-0 left-28"
        width={150}
        initial={{ y: [0], opacity: 0 }}
        whileInView={{ y: [30, 0], opacity: 1 }}
        transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
        viewport={{ once: true, amount: 0.5 }}
      />
    </section>
  );
};

export default PediatricProducts;
