import React, { useEffect, useRef } from "react";

function Pslider() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const cardWidth = 350; // Adjusted width for 4 cards per view
        const visibleWidth = carouselRef.current.clientWidth;
        const totalScrollWidth = carouselRef.current.scrollWidth;

        if (carouselRef.current.scrollLeft + visibleWidth >= totalScrollWidth) {
          // Reset to the first card smoothly
          setTimeout(() => {
            carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
          }, 1000);
        } else {
          // Move by 1 card width at a time
          carouselRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="relative w-[90%] overflow-hidden">
        <div
          ref={carouselRef}
          className="flex space-x-6 p-6 overflow-x-auto scroll-smooth"
          style={{
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            display: "flex",
            width: "100%",
            overflowX: "scroll",
            whiteSpace: "nowrap",
          }}
        >
          {/* Card 1 */}
          <div className="carousel-item w-[350px] h-[500px] relative flex-shrink-0 transition-transform duration-300 hover:scale-105">
            <img
              src="image/s1.jpg"
              alt="Top"
              className="rounded-lg w-full h-full object-cover"
            />
            <button className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-70 text-black px-10 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:bg-black hover:text-white hover:scale-110">
              Top
            </button>
          </div>

          {/* Card 2 */}
          <div className="carousel-item w-[350px] h-[500px] relative flex-shrink-0 transition-transform duration-300 hover:scale-105">
            <img
              src="image/s2.jpg"
              alt="Bottomwear"
              className="rounded-lg w-full h-full object-cover"
            />
            <button className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-70 text-black px-10 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:bg-black hover:text-white hover:scale-110">
              Bottoms
            </button>
          </div>

          {/* Card 3 */}
          <div className="carousel-item w-[350px] h-[500px] relative flex-shrink-0 transition-transform duration-300 hover:scale-105">
            <img
              src="image/s3.jpg"
              alt="T-shirt"
              className="rounded-lg w-full h-full object-cover"
            />
            <button className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-70 text-black px-10 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:bg-black hover:text-white hover:scale-110">
              T-shirt
            </button>
          </div>

          {/* Card 4 */}
          <div className="carousel-item w-[350px] h-[500px] relative flex-shrink-0 transition-transform duration-300 hover:scale-105">
            <img
              src="image/s4.jpg"
              alt="Outwear"
              className="rounded-lg w-full h-full object-cover"
            />
            <button className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-70 text-black px-10 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:bg-black hover:text-white hover:scale-110">
              Outwear
            </button>
          </div>

          {/* Card 5 */}
          <div className="carousel-item w-[350px] h-[500px] relative flex-shrink-0 transition-transform duration-300 hover:scale-105">
            <img
              src="image/s5.jpg"
              alt="Innerwear"
              className="rounded-lg w-full h-full object-cover"
            />
            <button className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-70 text-black px-10 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:bg-black hover:text-white hover:scale-110">
              Innerwear
            </button>
          </div>

          {/* Card 6 */}
          <div className="carousel-item w-[350px] h-[500px] relative flex-shrink-0 transition-transform duration-300 hover:scale-105">
            <img
              src="image/s6.jpg"
              alt="Shorts"
              className="rounded-lg w-full h-full object-cover"
            />
            <button className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-70 text-black px-10 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:bg-black hover:text-white hover:scale-110">
              Shorts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pslider;
