import React from "react";
import oncologyData from "../../utils/OncologyData";

const OncologyProducts = () => {
  return (
    <section className="min-h-screen relative w-full mx-auto bg-pink-50">
      <div className="py-20 h-screen  relative">
        <h2 className="text-4xl text-center mt-10 font-bold mb-8 text-[#E91E63]">
          Oncology Products
        </h2>
        <div class="relative overflow-x-auto border py-2  sm:rounded-lg overflow-y-scroll h-[80%] w-11/12 mx-auto ">
          <table class="w-full md:w-1/2 mx-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400  h-[80%]">
            <thead class="text-xs text-[#E91E63] uppercase bg-[#F8BBD0] ">
              <tr>
                <th scope="col" class="px-6 py-3 w-full ">
                  S. no.
                </th>
                <th scope="col" class="px-6 py-3">
                  Product name
                </th>
              </tr>
            </thead>
            <tbody >
              {oncologyData.map((e,i) => (
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-pink-100 even:dark:bg-pink-800 border-b dark:border-pink-700 " key={i}>
                    <td class="px-6  text-gray-900">{i+1}</td>
                  <th
                    scope="row"
                    class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {e.productName}
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

export default OncologyProducts;
