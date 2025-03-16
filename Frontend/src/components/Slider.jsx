import React from "react";

const Slider = () => {
  return (
    <div className="carousel w-full h-[400px]">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img src="image/jiwon.jpg" className="w-full object-cover" alt="Banner 1" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-40">
          <h2 className="text-4xl font-bold text-white drop-shadow-lg">Exclusive Fashion Deals</h2>
          <p className="text-lg text-white mt-2 drop-shadow-md">Discover the latest trends in fashion.</p>
          <button className="btn bg-black text-white px-6 py-2 mt-4 hover:bg-gray-900">Shop Now</button>
        </div>
        <a href="#slide3" className="absolute left-2 top-1/2 btn btn-circle">❮</a> 
        <a href="#slide2" className="absolute right-2 top-1/2 btn btn-circle">❯</a>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img src="/image/banner2.jpg" className="w-full object-cover" alt="Banner 2" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-40">
          <h2 className="text-4xl font-bold text-white drop-shadow-lg">New Arrivals</h2>
          <p className="text-lg text-white mt-2 drop-shadow-md">Stay ahead of the style game.</p>
          <button className="btn bg-black text-white px-6 py-2 mt-4 hover:bg-gray-900">Explore Now</button>
        </div>
        <a href="#slide1" className="absolute left-2 top-1/2 btn btn-circle">❮</a> 
        <a href="#slide3" className="absolute right-2 top-1/2 btn btn-circle">❯</a>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img src="/image/banner3.jpg" className="w-full object-cover" alt="Banner 3" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-40">
          <h2 className="text-4xl font-bold text-white drop-shadow-lg">Exclusive Discounts</h2>
          <p className="text-lg text-white mt-2 drop-shadow-md">Limited-time offers just for you.</p>
          <button className="btn bg-black text-white px-6 py-2 mt-4 hover:bg-gray-900">Grab Deals</button>
        </div>
        <a href="#slide2" className="absolute left-2 top-1/2 btn btn-circle">❮</a> 
        <a href="#slide1" className="absolute right-2 top-1/2 btn btn-circle">❯</a>
      </div>
    </div>
  );
};

export default Slider;
