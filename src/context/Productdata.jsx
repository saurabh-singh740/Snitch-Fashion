import React, { useState, useEffect } from "react";
import { FaStar, FaShoppingCart, FaTimes, FaCartPlus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Categories
const categories = {
  All: [],
  "T-Shirts": ["T-Shirt", "Tee", "Polo"],
  Shirts: ["Shirt", "Plaid", "Check", "Linen"],
  Bottomwear: ["Jeans", "Jogers", "Shorts", "Trousers"],
};

const priceRanges = [
  { label: "All", min: 0, max: Infinity },
  { label: "Under ₹1000", min: 0, max: 999 },
  { label: "₹1000 - ₹2000", min: 1000, max: 2000 },
  { label: "Above ₹2000", min: 2001, max: Infinity },
];

const products = [
  { id: 1, name: "Black Oversized T-Shirt", price: "₹999", image: "./images/1.jpg" },
  { id: 2, name: "Regular Fit Zipper Polo T-Shirt", price: "₹1299", image: "./images/2.jpg" },
  { id: 3, name: "Abstract Regular Fit Shirt", price: "₹1799", image: "./images/3.jpg" },
  { id: 4, name: "Regular Fit Stretch Jaquard Polo", price: "₹1999", image: "./images/4.jpg" },
  { id: 5, name: "Regular Fit Stretch Green Polo", price: "₹2299", image: "./images/5.jpg" },
  { id: 6, name: "Black stylish T-Shirt", price: "₹1499", image: "./images/6.jpg" },
  { id: 7, name: "Snap Button Regular Fit Polo T-Shirt", price: "₹2399", image: "./images/7.jpg" },
  { id: 8, name: "Relaxed Fit T-Shirt ", price: "₹1599", image: "./images/8.jpg" },
  { id: 9, name: "Tropical Blue Shirt", price: "₹1399", image: "./images/9.jpg" },
  { id: 10, name: "Gingham Regular Fit Linen", price: "₹1299", image: "./images/10.jpg" },
  { id: 11, name: "Regular Fit Plaid 100% Cotton Shirt", price: "₹999", image: "./images/11.jpg" },
  { id: 12, name: "White Check Shirt", price: "₹1799", image: "./images/12.jpg" },
  { id: 13, name: "Regular Fit Beige Half Shirt", price: "₹2999", image: "./images/13.jpg" },
  { id: 14, name: "Regular Fit 100% Viscose Abstraction", price: "₹3499", image: "./images/14.jpg" },
  { id: 15, name: "Regular Fit Black Shirt", price: "₹1299", image: "./images/15.jpg" },
  { id: 16, name: "Linen Blend Stripes Slim Fit Shirt", price: "₹599", image: "./images/16.jpg" },
  { id: 17, name: "Regular Fit Stripes Linen Blend Shirt", price: "₹1699", image: "./images/17.jpg" },
  { id: 18, name: "Regular Fit Stripe Shirt", price: "₹1399", image: "./images/18.jpg" },
  { id: 19, name: "Regular Fit T-shirt", price: "₹3999", image: "./images/19.jpg" },
  { id: 20, name: "Regular Fit Shorts", price: "₹499", image: "./images/20.jpg" },
  { id: 21, name: "Oversized Crushed Seersucker Shirt", price: "₹1099", image: "./images/21.jpg" },
  { id: 22, name: "Tie-Dye Tee", price: "₹899", image: "./images/22.jpg" },
  { id: 23, name: "Mesh Layered Shirt", price: "₹1499", image: "./images/23.jpg" },
  { id: 24, name: "Gingham Regular Fit Linen Blend ", price: "₹1299", image: "./images/24.jpg" },
  { id: 25, name: "Regular Fit Zipper Polo T-Shirt", price: "₹2299", image: "./images/25.jpg" },
  { id: 26, name: "Regular Fit Linen Blend Stripes Shirt", price: "₹1499", image: "./images/26.jpg" },
  { id: 27, name: "Black Polo T-shirt", price: "₹1899", image: "./images/27.jpg" },
  { id: 28, name: "Regular Fit Jogers", price: "₹1599", image: "./images/28.jpg" },
  { id: 29, name: "Baggy Denim jeans", price: "₹1199", image: "./images/29.jpg" },
  { id: 30, name: "Regular Fit Trousers", price: "₹1699", image: "./images/30.jpg" }
];

const ProductData = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [showAnimation, setShowAnimation] = useState(true);
  const [popup, setPopup] = useState("");
  const [shopItem, setShopItem] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState("");
  const [paymentDetails, setPaymentDetails] = useState("");
  const [animatingProduct, setAnimatingProduct] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowAnimation(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handlePayment = () => {
    if (!selectedPayment) {
      alert("Please select a payment method.");
      return;
    }

    if (selectedPayment === "card") {
      const cardNumber = paymentDetails.trim();
      const cardRegex = /^\d{16}$/;
      if (!cardRegex.test(cardNumber)) {
        alert("Please enter a valid 16-digit card number.");
        return;
      }
    }

    if (selectedPayment === "upi") {
      const upi = paymentDetails.trim();
      const upiRegex = /^[\w.-]{2,}@[a-zA-Z]{2,}$/;
      if (!upiRegex.test(upi)) {
        alert("Please enter a valid UPI ID (example: name@bank).");
        return;
      }
    }

    alert("Payment Successful! Thank you for shopping.");
    setShopItem(null);
    setSelectedPayment("");
    setPaymentDetails("");
  };

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
    setPopup("Item added to cart successfully!");
    setTimeout(() => setPopup(""), 2000);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((acc, item) => acc + parseInt(item.price.replace("₹", "")), 0);
  };

  const filterByCategory = (product) => {
    if (selectedCategory === "All") return true;
    return categories[selectedCategory].some((keyword) =>
      product.name.toLowerCase().includes(keyword.toLowerCase())
    );
  };

  const filterByPrice = (product) => {
    const price = parseInt(product.price.replace("₹", ""));
    const range = priceRanges.find((r) => r.label === selectedPrice);
    return price >= range.min && price <= range.max;
  };

  const filteredProducts = products.filter(
    (product) => filterByCategory(product) && filterByPrice(product)
  );

  const renderStars = (rating = 4) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={`text-sm ${i <= Math.floor(rating) ? "text-yellow-400" : "text-gray-500"}`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="bg-[#0f0f0f] min-h-screen text-white px-8 pt-8 pb-14">
      {popup && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-2 rounded shadow-lg z-50">
          {popup}
        </div>
      )}

      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-4">
          <select
            className="bg-gray-800 text-white px-4 py-2 rounded"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {Object.keys(categories).map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <select
            className="bg-gray-800 text-white px-4 py-2 rounded"
            value={selectedPrice}
            onChange={(e) => setSelectedPrice(e.target.value)}
          >
            {priceRanges.map((range) => (
              <option key={range.label} value={range.label}>{range.label}</option>
            ))}
          </select>
        </div>

        <button
          className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600 font-semibold"
          onClick={() => alert(`Items in Cart: ${cartItems.length}\nTotal: ₹${getTotalPrice()}`)}
        >
          Cart ({cartItems.length})
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-gray-900 rounded-lg shadow-md p-4 hover:scale-105 transition transform"
          >
            <img src={product.image} alt={product.name} className="h-48 w-full object-cover rounded mb-4" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-yellow-300 font-bold mb-2">{product.price}</p>
            <div className="flex mb-2">{renderStars()}</div>
            <div className="flex gap-3">
              <button
                className="text-sm text-yellow-400 flex items-center gap-1"
                onClick={() => setAnimatingProduct(product)}
              >
                <FaShoppingCart /> Shop Now
              </button>
              <button
                className="text-sm text-green-400 flex items-center gap-1"
                onClick={() => addToCart(product)}
              >
                <FaCartPlus /> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {animatingProduct && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
            initial={{ scale: 0.2, rotate: 0, opacity: 0 }}
            animate={{ scale: 2, rotate: 1080, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            onAnimationComplete={() => {
              setAnimatingProduct(null);
              setShopItem(animatingProduct);
            }}
          >
            <motion.img
              src="./shirt.png"
              alt={animatingProduct.name}
              className="w-48 h-48 rounded-lg object-cover"
              initial={{ rotateY: 0 }}
              animate={{ rotateY: 360 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ transformStyle: "preserve-3d" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {shopItem && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-xl w-full max-w-lg p-8 relative animate-fadeIn">
            <button onClick={() => setShopItem(null)} className="absolute top-4 right-4 text-gray-700 hover:text-black">
              <FaTimes size={20} />
            </button>
            <h2 className="text-2xl font-bold mb-2">{shopItem.name}</h2>
            <img src={shopItem.image} alt={shopItem.name} className="w-full h-48 object-cover rounded mb-4" />
            <p className="text-lg font-semibold mb-4">Price: {shopItem.price}</p>
            <div className="space-y-4">
              <label className="block mb-1 font-medium">Select Payment Method:</label>
              <select
                className="w-full border rounded px-3 py-2"
                value={selectedPayment}
                onChange={(e) => setSelectedPayment(e.target.value)}
              >
                <option value="">-- Select Payment --</option>
                <option value="cod">Cash on Delivery</option>
                <option value="card">Credit/Debit Card</option>
                <option value="upi">UPI (Google Pay, PhonePe)</option>
              </select>

              {(selectedPayment === "card" || selectedPayment === "upi") && (
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2 mt-2"
                  placeholder={selectedPayment === "card" ? "Enter Card Number" : "Enter UPI ID"}
                  value={paymentDetails}
                  onChange={(e) => setPaymentDetails(e.target.value)}
                />
              )}

              <button
                className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-900 transition"
                onClick={handlePayment}
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductData;