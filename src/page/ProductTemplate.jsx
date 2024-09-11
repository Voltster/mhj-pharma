import React from "react";
import { useParams } from "react-router-dom";

const ProductTemplate = ({ product }) => {
  const { subcategory } = useParams();
  return (
    <div>
      <h1>{product.label}</h1>
      {subcategory && <h2>{subcategory.replace(/-/g, " ")}</h2>}
      {product.products ? (
        <ul>
          {product.products.map((item, index) => (
            <li key={index}>
              {item.name}
              <ul>
                {item.strengths.map((strength, idx) => (
                  <li key={idx}>{strength}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p>Details about {product.label}</p>
      )}
    </div>
  );
};

export default ProductTemplate;
