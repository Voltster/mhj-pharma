import React from "react";
import { useParams } from "react-router-dom";
import { porductInfo } from "../../utils/ProductInfo";

const ProductDetailsPage = ({product}) => {
  const { brand } = useParams();
  const product = porductInfo.find((item) => item.brand.toLowerCase() === brand.toLowerCase());

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen mt-20">
      <h2 className="text-2xl font-bold mb-4 text-gray-700 text-center uppercase">
        {product.productName}
      </h2>
      <p className="text-gray-600 mb-4">Brand: {product.brand}</p>
      <img src={product.productImage} alt={product.productName} className="w-64 mx-auto" />
      <table className="table-auto w-full mt-10">
        <tbody>
          <tr>
            <td className="border px-4 py-2">Batch Code</td>
            <td className="border px-4 py-2">{product.batchCode}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Manufactured On</td>
            <td className="border px-4 py-2">{product.manufacturedOn}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Expiry On</td>
            <td className="border px-4 py-2">{product.expiryOn}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Dosage</td>
            <td className="border px-4 py-2">{product.description.dosage}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductDetailsPage;
