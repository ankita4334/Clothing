import { useEffect, useRef } from "react";
import { useAuth } from "../store/auth";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa"; 
import { useNavigate } from "react-router-dom";

export const Shop = () => {

const {fashion}=useAuth();
  const audioRef = useRef(null);
  const navigate = useNavigate();


  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) =>
        console.log("Autoplay blocked:", error)
      );
    }

  }, []); 




  return (
    <>
      {/* Hidden Audio Element */}
      <audio ref={audioRef} loop>
        <source src="/apt.mp3" type="audio/mpeg" />
      </audio>

      <h2 className="text-center text-3xl font-bold my-6">Fashion</h2>
      <hr className="mb-6" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {fashion && fashion.length > 0 ? (
            fashion.map((val, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition transform duration-300 relative"
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
                </div>

                {/* Card Body */}
                <div className="p-4 text-center flex flex-col justify-between h-28">
                  <h5 className="text-lg font-semibold">{val.name}</h5>
                  <p className="text-gray-700 text-sm">Price: ${val.price}</p>

                  {/* Tailwind Button */}
                 
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 w-full">
              No fashion items available at the moment.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Shop;
