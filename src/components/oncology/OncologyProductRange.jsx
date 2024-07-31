import Chemotherapy from "../../assets/Chemotherapy.png";
import Targeted from "../../assets/Targeted.png";
import Immunotherapies from "../../assets/Immunotherapies.png";
import Supportive from "../../assets/Supportive.png";

const products = [
  {
    title: "Chemotherapy Drugs",
    description:
      "High-quality chemotherapy drugs designed for effective cancer treatment.",
    image: Chemotherapy,
  },
  {
    title: "Targeted Therapies",
    description:
      "Advanced targeted therapies that specifically attack cancer cells.",
    image: Targeted,
  },
  {
    title: "Immunotherapies",
    description:
      "Innovative immunotherapies that harness the body’s immune system to fight cancer.",
    image: Immunotherapies,
  },
  {
    title: "Supportive Care Products",
    description:
      "Products designed to manage side effects and improve patient quality of life.",
    image: Supportive,
  },
];

const OncologyProductRange = () => {
  return (
    <section className="py-24 w-screen">
      <div className=" mx-auto text-center">
        <h2 className="text-5xl font-bold text-pink-600 mb-12">
          OUR ONCOLOGY PRODUCT RANGE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 mx-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-4 w-full group hover:cursor-pointer"
            >
              <div className="rounded-t-lg h-48 overflow-hidden w-full">
                <img
                  src={product.image}
                  alt={product.title}
                  className=" w-full h-48 object-cover scale-[1.08] group-hover:scale-100 transition-all"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-pink-600">
                  {product.title}
                </h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OncologyProductRange;
