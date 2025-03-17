import { useAuth } from "../store/auth";
import { FaShoppingCart } from "react-icons/fa"; // Import cart icon

export const Fashion = () => {
  const { fashion } = useAuth();

  return (
    <>
      <h2 className="text-center text-3xl font-bold my-6">Fashion</h2>
      <hr className="mb-6" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {fashion && fashion.length > 0 ? (
            fashion.map((val, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition transform duration-300 relative"
                style={{ height: "420px" }} // Increased card height
              >
                {/* Add to Cart Icon at Top Right */}
                <div className="absolute top-3 right-3 bg-gray-200 p-2 rounded-full cursor-pointer hover:bg-gray-300 transition">
                  <FaShoppingCart className="text-gray-700 text-lg" />
                </div>

                {/* Image */}
                <div className="h-72">
                  <img
                    src={val.image}
                    alt={val.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Card Body */}
                <div className="p-4 text-center flex flex-col justify-between h-28">
                  <h5 className="text-lg font-semibold">{val.name}</h5>
                  <p className="text-gray-700 text-sm">Price: ${val.price}</p>

                  {/* Tailwind Button */}
                  <a
                    href={val.link}
                    target="_blank"
                    className="mt-3 inline-block bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
                  >
                    Shop Now
                  </a>
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

export default Fashion;
