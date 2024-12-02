import React, { useState } from "react";

const OncoProductList = ({ data, heading }) => {
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
    <div
      className="mt-20 py-8  h-screen bg-[#fce5eb07] bg-cover mb-10 relative "
      style={{
        backgroundImage: `url("https://img.freepik.com/premium-photo/pink-ribbon-stethoscope-pastel-pink-background_53476-5532.jpg?w=900")`,
      }}
    >
      <div className="absolute w-screen h-screen bg-cover z-0 bg-gradient-to-b from-gray-50/0 via-gray-50/0 to-white flex justify-center items-center"></div>
      <h2 className="text-4xl text-center  font-bold mb-8 text-[#E91E63] uppercase ">
        {heading}
      </h2>
      <div className=" w-11/12  flex justify-end mx-auto mb-2">
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
            className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-red-500 "
            placeholder="Search for items"
          />
        </div>
      </div>
      <div className="w-11/12 h-[80%] mx-auto relative overflow-x-auto  sm:rounded-lg overflow-y-scroll">
        <table className=" w-full mx-auto text-sm text-left rtl:text-right text-gray-950  h-[80%] border-2 productBg ">
          <thead className=" text-xs text-[#ffffff] uppercase bg-[#e91e62] w-full  sticky top-0 z-10 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                S.No
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Strengths
              </th>
            </tr>
          </thead>
          <tbody>
            {fillterProduct.map((e, i) => (
              <tr
                className="bg-white/60 backdrop-blur-sm border-b border-pink-500 even:bg-[#fca0be]"
                key={i}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  {i + 1}
                </th>
                <td className="px-6 py-4">{e.productName}</td>
                <td className="px-6 py-4">{e.strengths}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OncoProductList;
