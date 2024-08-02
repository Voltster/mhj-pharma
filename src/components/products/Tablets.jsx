// import { tablets } from "../../utils/ProductData";

// const Tablets = () => {
//   return (
//     <section className="min-h-screen relative w-full mx-auto ">
//       <div className="py-20 h-screen  relative">
//         <h2 className="text-4xl text-center mt-10 font-bold mb-8 text-[#941616] uppercase">
//           Tablets
//         </h2>
//         <div className="relative overflow-x-auto border py-2  sm:rounded-lg overflow-y-scroll h-[80%] w-11/12 mx-auto ">
//           <table className="w-full md:w-1/2 mx-auto text-sm text-left rtl:text-right text-gray-500  h-[80%]">
//             <thead className="text-xs text-[#ffffff] uppercase bg-[#941616] w-full">
//               <tr>
//                 <th scope="col" className="px-6 py-3 w-full whitespace-nowrap">
//                   S. no.
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Product name
//                 </th>
//                 <th scope="col" className="px-6 py-3 whitespace-nowrap">
//                   Strengths Available
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Coating
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {tablets.map((e, i) => (
//                 <tr
//                   className="odd:bg-white  even:bg-orange-100  border-b  "
//                   key={i}
//                 >
//                   <td className="px-6  text-gray-900">{i + 1}</td>
//                   <th
//                     scope="row"
//                     className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
//                   >
//                     {e.productName}
//                   </th>
//                   <th
//                     scope="row"
//                     className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
//                   >
//                     {e.strengths}
//                   </th>
//                   <th
//                     scope="row"
//                     className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
//                   >
//                     {e.coating}
//                   </th>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Tablets;

import { tablets } from "../../utils/ProductData";

const Tablets = () => {
  return (
    <section className="min-h-screen relative w-full mx-auto ">
      <div className="py-20 h-screen  relative heroBg">
        <h2 className="text-4xl text-center mt-10 font-bold mb-8 text-[#941616] uppercase">
          Tablets
        </h2>
        <div className="relative overflow-x-auto border   sm:rounded-lg overflow-y-scroll h-[80%] w-[81.8%] bg-white mx-auto ">
          <table className="w-full md:w-1/2 mx-auto text-sm text-left rtl:text-right text-gray-500   h-[80%]">
            <thead className="text-xs text-[#ffffff] uppercase bg-[#941616] w-full">
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
                  Coating
                </th>
              </tr>
            </thead>
            <tbody>
              {tablets.map((e, i) => (
                <tr className=" even:bg-red-100 border-b border-red-300 " key={i}>
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
                    {e.strengths}
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-2 font-medium text-gray-800 whitespace-nowrap "
                  >
                    {e.coating}
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

export default Tablets;
