import React from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import Categories from "./Categories";
import AboutUs from "./AboutUs";
import Feature from "./Feature";
import AboutHome from "./AboutHome";

const Home = () => {
  return (
    <>
      <div className="main">
        {/* Fix: Added 'overflow-hidden' to prevent scrolling */}
        <div className="carousel w-full h-[700px] overflow-hidden rounded-md">
          
          {/* Slide 1 */}
          <div id="slide1" className="carousel-item relative w-full h-full flex items-center justify-center transition-all duration-700 ease-in-out">
            <img src="image/jiwon.jpg" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
            <div className="absolute left-10 md:left-20 top-1/2 -translate-y-1/2 text-white drop-shadow-2xl space-y-4 max-w-lg">
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Fashion Changing Always</h2>
              <p className="text-lg md:text-xl font-medium">
                Discover the latest trends and elevate your style with our exclusive collection.
              </p>
              <Link className="btn btn-neutral rounded-lg px-6 py-3 text-lg font-semibold hover:bg-gray-900 hover:scale-105 transition" to={"/shop"}>
                Shop Now
              </Link>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle bg-white/20 backdrop-blur-lg text-white border-none hover:bg-white/40">❮</a>
              <a href="#slide2" className="btn btn-circle bg-white/20 backdrop-blur-lg text-white border-none hover:bg-white/40">❯</a>
            </div>
          </div>

          {/* Slide 2 */}
          <div id="slide2" className="carousel-item relative w-full h-full flex items-center justify-center transition-all duration-700 ease-in-out">
            <img src="image/j4.jpg" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
            <div className="absolute left-10 md:left-20 top-1/2 -translate-y-1/2 text-white drop-shadow-2xl space-y-4 max-w-lg">
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Wear the Future, Own the Streets</h2>
              <p className="text-lg md:text-xl font-medium">
                Timeless elegance meets modern fashion. Step into luxury with our handpicked styles.
              </p>
              <Link className="btn btn-neutral rounded-lg px-6 py-3 text-lg font-semibold hover:bg-gray-900 hover:scale-105 transition" to={"/shop"}>
                Shop Now
              </Link>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle bg-white/20 backdrop-blur-lg text-white border-none hover:bg-white/40">❮</a>
              <a href="#slide3" className="btn btn-circle bg-white/20 backdrop-blur-lg text-white border-none hover:bg-white/40">❯</a>
            </div>
          </div>

          {/* Slide 3 */}
          <div id="slide3" className="carousel-item relative w-full h-full flex items-center justify-center transition-all duration-700 ease-in-out">
            <img src="image/j2.jpg" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
            <div className="absolute left-10 md:left-20 top-1/2 -translate-y-1/2 text-white drop-shadow-2xl space-y-4 max-w-lg">
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Where Elegance Meets Everyday Glam</h2>
              <p className="text-lg md:text-xl font-medium">
                Unleash your street style. Bold, edgy, and effortlessly cool – just like you.
              </p>
              <Link className="btn btn-neutral rounded-lg px-6 py-3 text-lg font-semibold hover:bg-gray-900 hover:scale-105 transition" to={"/shop"}>
                Shop Now
              </Link>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle bg-white/20 backdrop-blur-lg text-white border-none hover:bg-white/40">❮</a>
              <a href="#slide4" className="btn btn-circle bg-white/20 backdrop-blur-lg text-white border-none hover:bg-white/40">❯</a>
            </div>
          </div>

          {/* Slide 4 */}
          <div id="slide4" className="carousel-item relative w-full h-full flex items-center justify-center transition-all duration-700 ease-in-out">
            <img src="image/l1.jpg" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
            <div className="absolute left-10 md:left-20 top-1/2 -translate-y-1/2 text-white drop-shadow-2xl space-y-4 max-w-lg">
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Fashion with a Conscience</h2>
              <p className="text-lg md:text-xl font-medium">
                Simplicity with a touch of sophistication. Find your perfect minimal look.
              </p>
              <Link className="btn btn-neutral rounded-lg px-6 py-3 text-lg font-semibold hover:bg-gray-900 hover:scale-105 transition" to={"/shop"}>
                Shop Now
              </Link>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle bg-white/20 backdrop-blur-lg text-white border-none hover:bg-white/40">❮</a>
              <a href="#slide1" className="btn btn-circle bg-white/20 backdrop-blur-lg text-white border-none hover:bg-white/40">❯</a>
            </div>
          </div>

        </div>
      </div>
      <Hero />
      
      <Categories />
    <AboutHome/>
     <Feature/>
    </>
  );
};

export default Home;
