// import React from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import giraffe from "../../assets/jumi/jumiGiraffe.png";
// import lion from "../../assets/jumi/jumiLion.png";
// import jumiMonkey from "../../assets/jumi/jumiMonkey.png";
// import jumiBlueBird from "../../assets/jumi/jumiBlueBird.png";
// import { motion as m } from "framer-motion";

// const ProductDetails = () => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate("/contact");
//   };

//   const location = useLocation();
//   const { product } = location.state || {};

//   if (!product) {
//     return <div>Product not found. Go back to products page.</div>;
//   }

//   return (
//     <div className="min-h-screen mt-20 p-1 bg-[#f0d9bdb0] relative">
//       <div className="w-11/12 md:w-8/12 mx-auto flex flex-col-reverse md:flex-row gap-6 mt-10 items-center justify-center ">
//         <m.div
//           className="md:w-1/2 "
//           initial={{ y: [0], opacity: 0 }}
//           whileInView={{ y: [30, 0], opacity: 1 }}
//           transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
//           viewport={{ once: true, amount: 0.5 }}
//         >
//           <h2 className="text-3xl font-bold text-[#B31815] mb-4 uppercase">
//             {product.brandName}
//           </h2>
//           <p className="text-xl text-wrap">
//             <strong>Generice Name:</strong> {product.composition}
//           </p>
//           <p>
//             <strong>Pack Size: </strong>
//             {product.packSize}
//           </p>

//           <button
//             onClick={handleClick}
//             className={`secondaryButton text-[#B81B15] relative leading-7 z-10 hover:text-gray-50 overflow-hidden rounded-lg border border-[#B81B15]  bg-transparent after:bg-gradient-to-r from-[#B81B15] to-[#B81B15] hover:shadow-md h-auto  py-2 px-4 mt-4`}
//           >
//             Quick Enquiry
//           </button>
//         </m.div>
//         <div className="md:w-1/2  mr-4   flex justify-center  rounded-xl  overflow-hidden">
//           <m.img
//             src={product.img}
//             alt={product.brandName}
//             className="mb-4 float-left w-auto rounded-md mx-auto  "
//             initial={{ y: [0], opacity: 0 }}
//             whileInView={{ y: [30, 0], opacity: 1 }}
//             transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
//             viewport={{ once: true, amount: 0.5 }}
//           />
//         </div>
//       </div>
//       <div className="w-11/12 md:w-8/12 mx-auto pb-8 text-justify">
//         <p className="mt-4">
//           <strong>Product Details:</strong> <br /> {product.productInto}
//         </p>
//         <p className="mt-4">
//           <strong>Benefits of Product:</strong> <br /> {product.benefits}
//         </p>
//         <p className="mt-4">
//           <strong>{product.sideEffectsHeading}:</strong> <br />
//           {product.sideEffects}
//         </p>
//         <p className="mt-4">
//           <strong>Note:</strong> <br /> {product.note}
//         </p>
//         <p className="mt-4">
//           <strong>Storage:</strong> <br /> {product.storage}
//         </p>
//         <p className="mt-4">
//           <strong>Disclaimer:</strong> <br /> {product.disclaimer}
//         </p>
//       </div>
//       <m.img
//         src={jumiMonkey}
//         alt="jumi monkey"
//         className="hidden md:block absolute top-0 left-4"
//         width={200}
//         initial={{ x: [0], opacity: 0 }}
//         whileInView={{ x: [-30, 0], opacity: 1 }}
//         transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
//         viewport={{ once: true, amount: 0.5 }}
//       />
//       <m.img
//         src={jumiBlueBird}
//         alt="jumi blue bird"
//         className="hidden md:block absolute top-10 -right-4"
//         width={250}
//         initial={{ x: [0], opacity: 0 }}
//         whileInView={{ x: [30, 0], opacity: 1 }}
//         transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
//         viewport={{ once: true, amount: 0.5 }}
//       />
//       <m.img
//         src={giraffe}
//         alt="jumi giraffe"
//         className="hidden md:block absolute bottom-0 right-4"
//         width={150}
//         initial={{ y: [0], opacity: 0 }}
//         whileInView={{ y: [30, 0], opacity: 1 }}
//         transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
//         viewport={{ once: true, amount: 0.5 }}
//       />
//       <m.img
//         src={lion}
//         alt="jumi lion"
//         className="hidden md:block absolute bottom-[18rem] left-4"
//         width={200}
//         initial={{ y: [0], opacity: 0 }}
//         whileInView={{ y: [30, 0], opacity: 1 }}
//         transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
//         viewport={{ once: true, amount: 0.5 }}
//       />
//     </div>
//   );
// };

// export default ProductDetails;
