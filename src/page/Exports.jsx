import { useParams } from "react-router-dom";
import { exportsData } from "../utils/ProductData";

const Exports = () => {
  const { category, subcategory } = useParams();

  const categoryData = exportsData[category.toLowerCase()];
  const subcategoryData = subcategory
    ? categoryData[subcategory.toLowerCase()]
    : null;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Exports - {category}</h1>
      {subcategory && (
        <h2 className="text-xl mb-4">Subcategory: {subcategory}</h2>
      )}
      <div>
        {subcategoryData ? (
          Array.isArray(subcategoryData) ? (
            subcategoryData.map((item, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-700">Strength: {item.strength}</p>
              </div>
            ))
          ) : (
            <p>{subcategoryData}</p>
          )
        ) : (
          <p>No data available for this category.</p>
        )}
      </div>
    </div>
  );
};

export default Exports;
