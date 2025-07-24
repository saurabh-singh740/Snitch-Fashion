import React from "react";
import { useProduct } from "../context/ProductContext";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { products } = useProduct();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
