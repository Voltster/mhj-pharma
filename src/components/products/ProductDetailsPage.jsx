import React from "react";
import { useParams } from "react-router-dom";
import { porductInfo } from "../../utils/ProductInfo";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ProductDetailsPage = ({product}) => {
  const { brand } = useParams();
  // const product = porductInfo.find((item) => item.brand.toLowerCase() === brand.toLowerCase());
  if (!product) {
        return (
          <div className="p-6 bg-gray-50 min-h-screen mt-20">
            <h2 className="text-2xl font-bold text-center text-red-500 mt-20">
              Product not found
            </h2>
          </div>
        );
      }
      // console.log(product.pageUrl.toLowerCase())

  return (
    <section className='w-full'>
   <div className="p-6 bg-gray-50 min-h-screen mt-20" >
       <h2 className="text-2xl font-bold mb-4 text-gray-700 text-center uppercase">{product.productName}</h2>
       <div className="overflow-x-auto mt-10">
       <table className="table-auto w-11/12 mx-auto font-semibold bg-white shadow-md rounded-lg border border-gray-200" >
       <thead>
         <tr className="bg-gray-100">
           <th className="px-4 py-2 text-left text-gray-600 font-medium">Field</th>
           <th className="px-4 py-2 text-left text-gray-600 font-medium">Value</th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <td className="border px-4 py-2 text-gray-700 ">Product Name</td>
           <td className="border px-4 py-2 text-gray-600 uppercase">{product.productName}</td>
         </tr>
         <tr>
           <td className="border px-4 py-2 text-gray-700">Brand</td>
           <td className="border px-4 py-2 text-gray-600 uppercase">{product.brandName}</td>
         </tr>
       
         <tr>
           <td className="border px-4 py-2 text-gray-700">Batch Code</td>
           <td className="border px-4 py-2 text-gray-600 uppercase">{product.batchCode}</td>
         </tr>
         <tr>
           <td className="border px-4 py-2 text-gray-700">Manufactured On</td>
           <td className="border px-4 py-2 text-gray-600">{product.manufactureDate}</td>
         </tr>
         <tr>
           <td className="border px-4 py-2 text-gray-700">Expiry On</td>
           <td className="border px-4 py-2 text-gray-600">{product.expiryDate}</td>
         </tr>
        
         <tr>
           <td className="border px-4 py-2 text-gray-700">Product Image</td>
           <td className="border px-4 py-2 text-gray-600">
           <PhotoProvider>
            <PhotoView src={product.images}>
               <img src={product.images} alt="" className='border p-2 h-32 cursor-pointer' />
             </PhotoView>
            </PhotoProvider>
          </td>
         </tr>
        
         <tr >
           <td className="border px-4 py-2 text-gray-700">Description</td>
           <td className="border px-4 py-2 text-gray-600 whitespace-pre-wrap">
           Generic Name : {product.description.genericName} <br/><br/>
           Composition: {product.description.composition}<br/><br/>
           {/* Each Vial Contains: {product.description.eachVialContains}   <br/><br/> */}
           Store at below  {product.description.storePoint}<br/><br/>
           Dosage : {product.description.Dosage}<br/><br/>
         <div className='uppercase'>
         Exported by:  {product.description.exportedBy}<br/><br/>
           Imported By :  {product.description.importedBy}<br/><br/>
           Manufactured By :  {product.description.manufacturedBy}<br/><br/>
         </div>
           </td>
         </tr>
         
       </tbody>
     </table>
     </div>
     </div>

 </section>
  );
};

export default ProductDetailsPage;



// import React from "react";

// const ProductDetailsPage = ({ e }) => {
//   if (!e) {
//     return (
//       <div className="p-6 bg-gray-50 min-h-screen mt-20">
//         <h2 className="text-2xl font-bold text-center text-red-500 mt-20">
//           Product not found
//         </h2>
//       </div>
//     );
//   }
//   // console.log(e.pageUrl.toLowerCase())

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen mt-20">
//       <h2 className="text-2xl font-bold mb-4 text-gray-700 text-center uppercase mt-20 border-2 bg-red-300">
//         {e.pageUrl}s
//       </h2>
//       <div className="text-gray-600 text-center mt-6">
//         <p className="mb-2 font-semibold">Brand: {e.brandName}</p>
//         <img
//           src={e.images[0]}
//           alt={e.productName}
//           className="w-64 mx-auto"
//         />
//       </div>
//       <table className="table-auto w-full mt-10 border border-gray-300">
//         <tbody>
//           <tr>
//             <td className="border px-4 py-2">Batch Code</td>
//             <td className="border px-4 py-2">{e.batchCode}</td>
//           </tr>
//           <tr>
//             <td className="border px-4 py-2">Manufactured On</td>
//             <td className="border px-4 py-2">{e.manufactureDate}</td>
//           </tr>
//           <tr>
//             <td className="border px-4 py-2">Expiry On</td>
//             <td className="border px-4 py-2">{e.expiryDate}</td>
//           </tr>
//           <tr>
//             <td className="border px-4 py-2">Dosage</td>
//             <td className="border px-4 py-2">{e.description.Dosage}</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ProductDetailsPage;
