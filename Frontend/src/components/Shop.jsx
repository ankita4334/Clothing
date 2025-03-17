import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Shop = () => {
  const [fashion, setFashion] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/fashion")
      .then((res) => {
        console.log(res.data);
        setFashion(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h2 className="text-center text-3xl font-bold my-8">Fashion</h2>
      <hr className="mb-8 border-gray-300" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {fashion.length > 0 ? (
            fashion.map((val, index) => (
              <div
                key={index}
                className="bg-white shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
              >
                {/* Bigger Image */}
                <img
                  src={val.image}
                  alt={val.name}
                  className="w-full h-92 object-cover"
                />

                {/* Bigger Card Body */}
                <div className="p-6">
                  <h5 className="text-xl font-semibold">{val.name}</h5>
                  <p className="text-gray-700 text-lg mt-2">Price: ${val.price}</p>

                  {/* Button with Better Styling */}
                  <Link className="btn btn-neutral rounded-lg px-6 py-3 text-lg font-semibold hover:bg-gray-900 hover:scale-105 transition" to={"/shop"}>
                    Shop Now
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 w-full">No items available at the moment.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Shop;
