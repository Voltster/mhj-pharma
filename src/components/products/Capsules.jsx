import React from "react";
import { capsules  } from "../../utils/ProductData";

const Capsules = () => {
  return (
    <section className="min-h-screen relative w-full mx-auto ">
      <div className="py-20 h-screen  relative">
        <h2 className="text-4xl text-center mt-10 font-bold mb-8 text-[#941616] uppercase">
          Capsules
        </h2>
        <div class="relative overflow-x-auto border py-2  sm:rounded-lg overflow-y-scroll h-[80%] w-11/12 mx-auto ">
          <table class="w-full md:w-1/2 mx-auto text-sm text-left rtl:text-right text-gray-500  h-[80%]">
            <thead class="text-xs text-[#ffffff] uppercase bg-[#941616] w-full">
              <tr>
                <th scope="col" class="px-6 py-3 w-full">
                  S. no.
                </th>
                <th scope="col" class="px-6 py-3">
                  Product name
                </th>
                <th scope="col" class="px-6 py-3">
                  Strengths Available
                </th>
              </tr>
            </thead>
            <tbody>
              {capsules.map((e, i) => (
                <tr
                  class="odd:bg-white  even:bg-orange-100  border-b  "
                  key={i}
                >
                  <td class="px-6  text-gray-900">{i + 1}</td>
                  <th
                    scope="row"
                    class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {e.productName}
                  </th>
                  <th
                    scope="row"
                    class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
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

export default Capsules;


