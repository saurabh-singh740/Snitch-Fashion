import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition duration-300">
      <img src={product.image} alt={product.name} className="w-full h-60 object-cover rounded-md" />
      <h3 className="mt-2 font-semibold text-lg">{product.name}</h3>
      <p className="text-gray-600">₹{product.price}</p>
      <p className="text-sm text-gray-500">{product.category}</p>
      <p className="text-yellow-500 text-sm">⭐ {product.rating}</p>
      <button className="mt-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
        View Product
      </button>
    </div>
  );
};

export default ProductCard;
