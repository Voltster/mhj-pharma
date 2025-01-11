import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import vitexB from "../../assets/ProductInfo/vitex-b.png";


const porductInfo = [
 {
     productName: "Vitamin B Complex Injection, 10 ml",
     brand: "Vitamin B Complex Injection, 10 ml",
     price: null,
     batchCode: "PVITIE001",
     manufacturedOn: "Jan 2025",
     expiryOn: "Dec 2026",
     genuineProduct: true,
     productImage: vitexB,
     labelImage: vitexB,
     description: {
       genericName: "Vitamin B Complex Injection, 10 ml",
       Composition: `Each 10 ml contains
Vitamin B1 - USP 200 mg
Vitamin B6 - USP 50 mg
Vitamin B12 - USP 0.030 mg
Niacinamida - USP 20 mg
D-Pantenol - USP 6 mg
Water for injections - q.s.
`,
       eachVialContains: `
Ampicillin Sodium (Sterile) U.S.P. Eq. to Ampicillin 1000 mg
         
Sulbactum Sodium (Sterile) U.S.P.
Eq. to Sulbactam 500 mg`,
       storeAtBelow: `30°C
Protect from light & moisture.`,
       dosage: "As directed by the Physician",
 
       exportedBy: `
MHJ Pharmaconcepts Private Limited
X-73/1B, Naraina Industrial Area,
New Delhi -110028, INDIA`,
       importedBy: `
MEDICPRO 
OE8-32 y Pedro de Alvarado, 
Quito 170301, ECUADOR`,
       manufacturedBy: `
Laborate Pharmaceuticals India Ltd.
Plot No.31, Rajban Road, Nariwala
Paonta Sahib (H.P) INDIA`,
     },
     productJourney: "NA",
   }
]

const Texel = () => {
  
  return (

    <section className='w-full'>
       {
        porductInfo.map((info,i)=>(
          <div className="p-6 bg-gray-50 min-h-screen mt-20" key={i}>
          <h2 className="text-2xl font-bold mb-4 text-gray-700 text-center uppercase">{info.productName}</h2>
          <div className="overflow-x-auto mt-10">
          <table className="table-auto w-11/12 mx-auto font-semibold bg-white shadow-md rounded-lg border border-gray-200" key={i}>
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left text-gray-600 font-medium">Field</th>
              <th className="px-4 py-2 text-left text-gray-600 font-medium">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2 text-gray-700 ">Product Name</td>
              <td className="border px-4 py-2 text-gray-600 uppercase">{info.productName}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-gray-700">Brand</td>
              <td className="border px-4 py-2 text-gray-600 uppercase">{info.brand}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-gray-700">Price</td>
              <td className="border px-4 py-2 text-gray-600 uppercase">{info.price || "N/A"}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-gray-700">Batch Code</td>
              <td className="border px-4 py-2 text-gray-600 uppercase">{info.batchCode}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-gray-700">Manufactured On</td>
              <td className="border px-4 py-2 text-gray-600">{info.manufacturedOn}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-gray-700">Expiry On</td>
              <td className="border px-4 py-2 text-gray-600">{info.expiryOn}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-gray-700">Genuine Product</td>
              <td className="border px-4 py-2 text-gray-600">{info.genuineProduct ? "Yes" : "No"}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-gray-700">Product Image</td>
              <td className="border px-4 py-2 text-gray-600">
              <PhotoProvider>
               <PhotoView src={info.productImage}>
                  <img src={info.productImage} alt="" className='border p-2 h-32 cursor-pointer' />
                </PhotoView>
               </PhotoProvider>
             </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-gray-700">Label Image</td>
              <td className="border px-4 py-2 text-gray-600 ">
              <PhotoProvider>
               <PhotoView src={info.productImage}>
                  <img src={info.productImage} alt="" className='border p-2 h-32 cursor-pointer' />
                </PhotoView>
               </PhotoProvider>
             </td>
            </tr>
            <tr >
              <td className="border px-4 py-2 text-gray-700">Description</td>
              <td className="border px-4 py-2 text-gray-600 whitespace-pre-wrap">
              Generic Name : {info.description.genericName} <br/><br/>
              Composition: {info.description.Composition}<br/><br/>
              {/* Each Vial Contains: {info.description.eachVialContains}   <br/><br/> */}
              Store at below  {info.description.storeAtBelow}<br/><br/>
              Dosage : {info.description.dosage}<br/><br/>
            <div className='uppercase'>
            Exported by:  {info.description.exportedBy}<br/><br/>
              Imported By :  {info.description.importedBy}<br/><br/>
              Manufactured By :  {info.description.manufacturedBy}<br/><br/>
            </div>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-gray-700">Product Journey</td>
              <td className="border px-4 py-2 text-gray-600">{info.productJourney}</td>
            </tr>
          </tbody>
        </table>
        </div>
        </div>
        ))
       }
   
    </section>
  )
}

export default Texel