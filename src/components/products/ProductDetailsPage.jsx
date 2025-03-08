import React from "react";
import { useParams } from "react-router-dom";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ProductDetailsPage = ({ product }) => {
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long" });
    // Output: "January 2025"
  };

  return (
    <section className="w-full">
      <div className="p-6 bg-gray-50 min-h-screen mt-20">
        <h2 className="text-2xl font-bold mb-4 text-gray-700 text-center uppercase">
          {product.productName}
        </h2>
        <div className="overflow-x-auto mt-10">
          <table className="table-auto w-11/12 mx-auto font-semibold bg-white shadow-md rounded-lg border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left text-gray-600 font-medium">
                  Field
                </th>
                <th className="px-4 py-2 text-left text-gray-600 font-medium">
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2 text-gray-700 ">
                  Product Name
                </td>
                <td className="border px-4 py-2 text-gray-600 uppercase">
                  {product.productName}
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-gray-700">Brand</td>
                <td className="border px-4 py-2 text-gray-600 uppercase">
                  {product.brandName}
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2 text-gray-700">Batch Code</td>
                <td className="border px-4 py-2 text-gray-600 uppercase">
                  {product.batchCode}
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-gray-700">
                  Manufactured On
                </td>
                <td className="border px-4 py-2 text-gray-600">
                  {" "}
                  {formatDate(product.manufactureDate)}
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-gray-700">Expiry On</td>
                <td className="border px-4 py-2 text-gray-600">
                  {formatDate(product.expiryDate)}
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2 text-gray-700">
                  Product Image
                </td>
                <td className="border px-4 py-2 text-gray-600">
                  <PhotoProvider>
                    <PhotoView src={product.productImg}>
                      <img
                        src={product.productImg}
                        alt=""
                        className="border p-2 h-32 cursor-pointer"
                      />
                    </PhotoView>
                  </PhotoProvider>
                </td>
              </tr>

              <tr className="text-left">
                <td className="border px-4 py-2 text-gray-700">Description</td>
                <td className="border px-4 py-2 text-gray-600 whitespace-pre-wrap">
                  Generic Name : {product.description.genericName} <br />
                  <br />
                  Composition: {product.description.composition}
                  <br />
                  <br />
                  {product.description.storePoint}
                  <br />
                  <br />
                  Dosage : {product.description.dosage}
                  <br />
                  <br />
                  <div className="uppercase left">
                    Exported by: {product.description.exportedBy}
                    <br />
                    <br />
                    Imported By : {product.description.importedBy}
                    <br />
                    <br />
                    Manufactured By : {product.description.manufacturedBy}
                    <br />
                    <br />
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
