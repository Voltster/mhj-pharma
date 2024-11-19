import { pediatrics } from "../../utils/ProductData";

const Pediatrics = () => {
  return (
    <section className="min-h-screen relative w-full mx-auto ">
      <div className="py-20 h-screen  relative ">
        <h2 className="text-4xl text-center mt-10 font-bold mb-8 text-[#B31815] uppercase">
          Pediatrics
        </h2>
        <div className="relative overflow-x-auto    sm:rounded-lg overflow-y-scroll h-[80%] w-auto mx-auto ">
          <table className="w-full md:w-1/2 mx-auto text-sm text-left rtl:text-right text-gray-500   h-[80%] productBg overflow-auto">
            <thead className="text-xs text-[#ffffff] uppercase bg-[#B31815] w-full  sticky top-0 z-50 ">
              <tr>
                <th scope="col" className="px-6 py-3 w-full whitespace-nowrap">
                  S. no.
                </th>
                <th scope="col" className="px-6 py-3 ">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Strengths Available
                </th>
                <th scope="col" className="px-6 py-3">
                  Pack
                </th>
              </tr>
            </thead>
            <tbody>
              {pediatrics.map((e, i) => (
                <tr
                  className=" even:bg-red-100 odd:bg-white border-b border-red-300 "
                  key={i}
                >
                  <td className="px-6  text-gray-800">{i + 1}</td>
                  <th
                    scope="row"
                    className="px-6 py-2 font-medium text-gray-800 whitespace-nowrap"
                  >
                    {e.productName}
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-2 font-medium text-gray-800 "
                  >
                    {e.composition}
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-2 font-medium text-gray-800 whitespace-nowrap "
                  >
                    {e.pack}
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

export default Pediatrics;
