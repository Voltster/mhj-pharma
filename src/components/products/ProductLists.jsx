import React, { useState } from "react";

import productBg from "../../assets/img/productBg.webp";

const ProductLists = ({ data, heading }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const fillterProduct = data.filter((product) => {
    const matchesSearch = product.productName
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <section
      className="min-h-screen relative w-full mx-auto bg-cover  z-10"
      style={{
        backgroundImage: `url("${productBg}")`,
      }}
    >
      <div className="absolute w-screen h-screen bg-cover z-0 bg-gradient-to-b from-gray-50/0 via-gray-50/0 to-white"></div>
      <div className="py-20 h-screen  relative mb-10">
        <h2 className="text-4xl text-center mt-10 font-bold mb-8 text-[#B31815] uppercase">
          {heading}
        </h2>
        <div className="w-11/12 flex justify-end mx-auto mb-2">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              value={searchQuery}
              onChange={handleSearchChange}
              className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-red-500"
              placeholder="Search for items"
            />
          </div>
        </div>
        <div className="w-11/12 h-[80%]  mx-auto relative overflow-x-auto  sm:rounded-lg">
          <table className=" w-full mx-auto text-sm text-left rtl:text-right text-gray-500  h-[80%] border-2 productBg">
            <thead className="text-xs text-[#ffffff] uppercase bg-[#B31815] w-full  sticky top-0 z-10 ">
              <tr>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  S. no.
                </th>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Strengths Available
                </th>
              </tr>
            </thead>
            <tbody>
              {fillterProduct.map((e, i) => (
                <tr
                  className="odd:bg-white  even:bg-red-100  border-b  border-red-300  relative"
                  key={i}
                >
                  <td className="px-6  text-gray-800">{i + 1}</td>
                  <th
                    scope="row"
                    className="px-6 py-2 font-medium text-gray-800 whitespace-nowrap "
                  >
                    {e.productName}
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-2 font-medium text-gray-800 whitespace-nowrap"
                  >
                    {e.strengths}
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ProductLists;
