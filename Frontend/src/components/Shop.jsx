import React from "react";
import { FaStar, FaShoppingCart, FaHeart } from "react-icons/fa";

const Shop = () => {
  // Dummy Clothing Data (Virtual Try-On Compatible)
  const clothes = [
    { id: 1, name: "Casual T-Shirt", image: "image/tshirt.jpeg", price: "₹300" },
    { id: 2, name: "Denim Jacket", image: "/image/djacket.jpeg", price: "₹450" },
    { id: 3, name: "Summer Dress", image: "/image/summer.jpeg", price: "₹350" },
    { id: 4, name: "Hoodie", image: "/image/hoodie.jpeg", price: "₹500" },
    { id: 5, name: "Formal Suit", image: "/image/suit.jpeg", price: "₹1800" },
    { id: 6, name: "Joggers", image: "/image/jogger.jpeg", price: "₹300" },
  ];

  return (
    <section className="container mx-auto p-6">
      <h2 className="text-4xl font-bold text-center mb-8">Virtual Try-On Shop</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {clothes.map((item) => (
          <div key={item.id} className="card bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300 w-80">
            {/* Product Image */}
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-56 object-cover rounded-lg"
              />
              <span className="absolute top-2 left-2 px-3 py-1 text-xs font-semibold rounded-lg bg-green-500 text-white">
                In Stock
              </span>
            </div>

            {/* Product Details */}
            <div className="mt-3">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-500 text-sm">Clothing</p>

              {/* Ratings */}
              <div className="flex items-center text-yellow-400 mt-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="fill-current" />
                ))}
                <span className="ml-2 text-gray-600">(120 reviews)</span>
              </div>

              {/* Add to cart */}
              <div className="flex justify-between items-center mt-3">
                <span className="text-xl font-bold text-gray-900">{item.price}</span>
                <FaShoppingCart className="mr-2" /> 
              </div>

              {/* Actions */}
              <div className="flex justify-between items-center mt-3">
                <button className="btn bg-gray-800 text-white flex items-center px-4 py-2 rounded-lg hover:bg-gray-900">
                  Shop Now
                </button>
                <button className="text-gray-600 hover:text-red-500 transition">
                  <FaHeart size={24} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shop;
