import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();  // Access the product ID from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch the product data based on the product ID
    const fetchProductData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/fashion/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, [id]);  // Re-run when the product ID changes

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className="text-lg text-gray-700 mt-2">{product.description}</p>
          <p className="text-xl font-semibold mt-4">Price: ${product.price}</p>
          
          <div className="mt-6">
            <button className="bg-black text-white px-6 py-3 rounded-lg text-lg">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
