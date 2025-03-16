import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    { name: "Men's Fashion", img: "image/mens.jpeg", link: "/shop" },
    { name: "Women's Fashion", img: "image/womens.jpeg", link: "/shop" },
    { name: "Kid's Fashion", img: "image/kids.jpeg", link: "/shop" },
    { name: "Sports Fashion", img: "image/sport.jpeg", link: "/shop" },
  ];

  return (
    <div className="py-16 px-6 md:px-20 bg-gray-100">
      <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-10">
        Explore Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <Link key={index} to={category.link} className="no-underline">
            <div className="card bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <img src={category.img} alt={category.name} className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
