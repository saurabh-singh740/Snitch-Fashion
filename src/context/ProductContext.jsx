// src/context/ProductContext.jsx
import React, { createContext, useContext, useState } from "react";
import ProductData from './ProductData' // default export correctly used

const ProductContext = createContext(null);
export const useProduct = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products , setProducts] = useState(ProductData); // Ensure it's an array
  console.log(products)

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

