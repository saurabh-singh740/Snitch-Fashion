// src/context/ProductContext.jsx
import React, { createContext, useContext, useState } from "react";
import ProductData from './ProductData' // default export correctly used

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products] = useState(productData); // Ensure it's an array

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
