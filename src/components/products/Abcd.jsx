import React from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContext";


const Abcd = () => {
  console.log("Rendering Abcd");
  const { products, loading, error } = useProducts();
  const navigate = useNavigate();

  console.log("Current products:", products);
  console.log("Loading state:", loading);
  console.log("Error state:", error);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  // const handleDelete = async (id) => {
  //       try {
  //         await deleteProduct(id);
  //         alert('Product deleted successfully!');
  //       } catch (error) {
  //         alert(error.message || 'Failed to delete product');
  //       }
  //     };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-[#B51915]">Products List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products &&
          products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]  transition-shadow cursor-pointer p-4 hover:border-gray-600 border duration-200"
              onClick={() => navigate(`/products/${product._id}`)}
            >
               
              <div className="mb-4">
                <h2 className="text-xl  mb-2  whitespace-pre-line">
               
                 <span className="font-semibold">Brand:{" "}</span>{product.brandName}
                </h2>
                <p > <span className="font-semibold">Product Name:{" "}</span>{product.productName}</p>
              </div>
              <div className="space-y-2">
                <p>
                  <span className="font-semibold">Batch Code:</span>{" "}
                  {product.batchCode}
                </p>
                <p>
                  <span className="font-semibold">Created on:</span>{" "}
                  
                </p>
                {product.productImg && product.productImg[0] && (
                  <img
                    src={product.productImg[0]}
                    alt={product.productName}
                    className="w-full h-48 object-cover rounded"
                  />
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Abcd;
