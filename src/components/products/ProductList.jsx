import React, { useState } from "react";

const ProductList = ({ data }) => {
  const itemsPerPage = 10; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);
  const totalProducts = data.length;
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalProducts);

  // Calculate total pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Calculate the items to display
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

  // Change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const fillterProduct = currentItems.filter((product) => {
    const matchesSearch = product.productName
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <section
      className="min-h-screens py-20 relative w-full mx-auto   "
        //   style={{
        //     backgroundImage: `url("https://img.freepik.com/free-photo/heart-shape-stethoscope-medical-subjects_23-2150254045.jpg?t=st=1732951430~exp=1732955030~hmac=e7421e9feb6169827df99526942f3fe370d90f6a68d4bcefccc539f4fdde061a&w=826")`,
        //   }}
    >
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-11/12 mx-auto p-4 mt-10 border bg-white">
        <div className="pb-4 bg-white  ">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none  ">
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
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
              <th scope="col" className="px-6 py-3">
                S.NO.
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Strenghts Available
              </th>
            </tr>
          </thead>
          <tbody>
            {fillterProduct.map((data, index) => (
              <tr className="bg-white border-b  hover:bg-gray-50 " key={index}>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {index + 1}
                </th>
                <td className="px-6 py-4">{data.productName}</td>
                <td className="px-6 py-4">{data.strengths}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav
          className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
          aria-label="Table navigation"
        >
          {/* Range display */}
          <span className="text-sm font-normal text-gray-500  mb-4 md:mb-0 block w-full md:inline md:w-auto">
            Showing{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {startItem}-{endItem}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {totalProducts}
            </span>
          </span>

          {/* Pagination buttons */}
          <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            {/* Previous Button */}
            <li>
              <button
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight border border-gray-300 rounded-s-lg ${
                  currentPage === 1
                    ? "text-gray-400 bg-gray-200 cursor-not-allowed"
                    : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"
                }`}
              >
                Previous
              </button>
            </li>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index}>
                <button
                  onClick={() => handlePageChange(index + 1)}
                  className={`flex items-center justify-center px-3 h-8 leading-tight border ${
                    currentPage === index + 1
                      ? "text-blue-600 border-blue-300 bg-blue-50"
                      : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"
                  }`}
                >
                  {index + 1}
                </button>
              </li>
            ))}

            {/* Next Button */}
            <li>
              <button
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                className={`flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 rounded-e-lg ${
                  currentPage === totalPages
                    ? "text-gray-400 bg-gray-200 cursor-not-allowed"
                    : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"
                }`}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default ProductList;
