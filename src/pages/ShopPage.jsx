import React from "react";
import ProductData from "../context/ProductData";

const ShopPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* ✅ Full-width black header */}
      <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white z-50 shadow-md">
        <h1 className="text-3xl font-bold py-5 text-center tracking-wide">
          Products Section
        </h1>
      </div>

      {/* ✅ Push content below the fixed bar */}
      <div className="pt-24 px-6">
        <ProductData />
      </div>
    </div>
  );
};

export default ShopPage;