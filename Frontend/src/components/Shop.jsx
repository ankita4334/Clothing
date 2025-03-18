<<<<<<< HEAD
import { useEffect, useState, useRef } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

export const Fashion = () => {
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    category: searchParams.get("category") || "",
    subCategory: ""
  });
  const [products, setProducts] = useState([]);
=======
import { useEffect, useRef } from "react";
import { useAuth } from "../store/auth";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa"; 
import { useNavigate } from "react-router-dom";

export const Shop = () => {

const {fashion}=useAuth();
>>>>>>> b9a33e6f4cdce1fa3aabb7361deacc2a472a682b
  const audioRef = useRef(null);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const params = new URLSearchParams(filters);
        const response = await fetch(`http://localhost:3000/fashion/${params}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    
    fetchProducts();
  }, [filters]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) =>
        console.log("Autoplay blocked:", error)
      );
    }
<<<<<<< HEAD
  }, []);
=======

  }, []); 



>>>>>>> b9a33e6f4cdce1fa3aabb7361deacc2a472a682b

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/apt.mp3" type="audio/mpeg" />
      </audio>

      <h2 className="text-center text-3xl font-bold my-6">Fashion</h2>
      <hr className="mb-6" />

      <div className="container mx-auto px-4">
        {/* Filter Controls */}
        <div className="flex gap-4 mb-8">
          <select 
            onChange={(e) => setFilters({...filters, category: e.target.value})}
            className="p-2 border rounded"
            value={filters.category}
          >
            <option value="">All Categories</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
            <option value="sport">Sport</option>
          </select>

          <select
            onChange={(e) => setFilters({...filters, subCategory: e.target.value})}
            className="p-2 border rounded"
            value={filters.subCategory}
          >
            <option value="">All Types</option>
            <option value="tops">Tops</option>
            <option value="pants">Pants</option>
            <option value="innerwear">Innerwear</option>
            <option value="footwear">Footwear</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition transform duration-300 relative"
<<<<<<< HEAD
                style={{ height: "420px" }}
              >
                <div className="absolute top-3 right-3 bg-gray-200 p-2 rounded-full cursor-pointer hover:bg-gray-300 transition">
                  <FaShoppingCart className="text-gray-700 text-lg" />
                </div>

                <div className="h-72">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
=======
                style={{ height: "500px" }} // Increased card height
              >
                {/* Icons Container */}
                <div className="absolute top-3 right-3 flex gap-2">
                  {/* Wishlist Icon (Black Outline Heart) */}
                  <div className="bg-gray-200 p-2 rounded-full cursor-pointer hover:bg-gray-300 transition">
                    <FaRegHeart className="text-black text-lg" />
                  </div>

                  
                </div>

                {/* Image */}
                <div className="h-92 cursor-pointer" onClick={() => navigate(`/product/${index}`)}>
                  <img src={val.image} alt={val.name} className="w-full h-full object-cover" />
>>>>>>> b9a33e6f4cdce1fa3aabb7361deacc2a472a682b
                </div>

                <div className="p-4 text-center flex flex-col justify-between h-28">
<<<<<<< HEAD
                  <h5 className="text-lg font-semibold">{product.name}</h5>
                  <p className="text-gray-700 text-sm">Price: ${product.price}</p>
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
                  >
                    Shop Now
                  </a>
=======
                  <h5 className="text-lg font-semibold">{val.name}</h5>
                  <p className="text-gray-700 text-sm">Price: ${val.price}</p>

                  {/* Tailwind Button */}
                 
>>>>>>> b9a33e6f4cdce1fa3aabb7361deacc2a472a682b
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 w-full">
              No fashion items available for the selected filters.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

<<<<<<< HEAD
export default Fashion;
=======
export default Shop;
>>>>>>> b9a33e6f4cdce1fa3aabb7361deacc2a472a682b
