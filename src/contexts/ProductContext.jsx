// import React, { createContext, useState, useContext, useEffect } from "react";
// import axios from "axios";

// const ProductContext = createContext();

// export const ProductProvider = ({ children }) => {
//     const [products, setProducts] = useState([])
//     const [loading, setLoading] = useState(false)
//     const [error, setError] = useState(null)

//     const api = axios.create({
//         baseURL: import.meta.env.VITE_BACKEND_URL,
//     })

//     const fetchProducts = async () => {
//         setLoading(true)
//         try {
//             const response = await api.get("/productsDetails")
//             console.log("product data here", response)
//             setProducts(response.data.product || response.data)
//             setError(null)
//         } catch (error) {
//             setError(error.response?.data?.message || "Error fetching products")
//         }
//         finally{
//             setLoading(false)
//         }
//     }

//     useEffect(()=>{
//         fetchProducts()
//     },[])

//     return(
//         <ProductContext.Provider value={{products,loading,error,fetchProducts}}>
//             {children}
//         </ProductContext.Provider>
//     )
// }

// export const useProducts = () => {
//     const context = useContext(ProductContext);
//     if (!context) {
//       throw new Error("useProducts must be used within a ProductProvider");
//     }
//     return context ;
//   };


import React, { createContext, useState, useEffect } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8000/productsDetails/");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        console.log("product data", response)
        const data = await response.json();
        setProducts(data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => React.useContext(ProductContext);
