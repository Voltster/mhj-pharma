import oncologyData from "../../utils/OncologyData";

const OncologyProducts = () => {
  return (
    <section className="min-h-screen relative w-full mx-auto bg-pink-50">
      <div className="py-20 h-screen  relative tableBg">
        <h2 className="text-4xl text-center mt-10 font-bold mb-8 text-[#E91E63] uppercase">
          Oncology Products
        </h2>
        <div className="relative overflow-x-auto border  sm:rounded-lg overflow-y-scroll h-[80%] w-[53vw] mx-auto bg-transparent border-none">
          <table className="w-full md:w-1/2 mx-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400  h-[80%]">
            <thead className="text-xs text-[#E91E63] uppercase bg-[#F8BBD0] ">
              <tr>
                <th scope="col" className="px-6 py-3 w-full text-nowrap">
                  S. no.
                </th>
                <th scope="col" className="px-6 py-3 text-nowrap">
                  Product name
                </th>
              </tr>
            </thead>
            <tbody >
              {oncologyData.map((e,i) => (
                <tr className="odd:bg-white  even:bg-pink-100 border-b  border-pink-300" key={i}>
                    <td className="px-6  text-gray-800">{i+1}</td>
                  <th
                    scope="row"
                    className="px-6 py-2 font-medium text-gray-800 whitespace-nowrap"
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
