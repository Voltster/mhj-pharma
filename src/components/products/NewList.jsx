import React from "react";
import { useProduct } from "../../contexts/ProductContext";

const NewList = () => {
  const { products, loading } = useProduct();

  if (loading) return <div>Loading products...</div>;

  return (
    <div>
      <h1>Product List</h1>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product._id}>
              <h3>{product.name}</h3>
              <p>Price: ${product.price.toFixed(2)}</p>
              <p>{product.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NewList;
