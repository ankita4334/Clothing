import React from 'react'



const Home = () => {
  return (
<>
<div className="main">
<div className="carousel w-full h-[700px]">
        {/** Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="image/jiwon.jpg"
            className="w-full" />
          <div className="absolute left-5 top-1/2 -translate-y-1/2 text-black space-y-4 ml-20">
              
     
            <h2 className="text-3xl font-bold">Fashion Changing Always</h2>
            <p className="text-lg">Discover the latest trends and elevate your style with our exclusive collection</p>
            <button className="btn btn-neutral rounded-lg hover:bg-gray-700">Shop Now </button>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        {/** Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="image/j1.jpg"
            className="w-full" />
          <div className="absolute left-5 top-1/2 -translate-y-1/2 text-black space-y-4 ml-20">
            <h2 className="text-3xl font-bold">Wear the Future, Own the Streets</h2>
            <p className="text-lg">Timeless elegance meets modern fashion. Step into luxury with our handpicked styles</p>
            <button className="btn btn-neutral rounded-lg hover:bg-gray-700">Shop Now </button>

          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        {/** Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="image/jiwon.jpg"
            className="w-full" />
          <div className="absolute left-5 top-1/2 -translate-y-1/2 text-black space-y-4 ml-20">
            <h2 className="text-3xl font-bold">Where Elegance Meets Everyday Glam</h2>
            <p className="text-lg">MUnleash your street style. Bold, edgy, and effortlessly cool-just like you</p>
            <button className="btn btn-neutral rounded-lg hover:bg-gray-700">Shop Now </button>

          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        {/** Slide 4 */}
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="image/j2.jpg"
            className="w-full" />
          <div className="absolute left-5 top-1/2 -translate-y-1/2 text-black space-y-4 ml-20">
            <h2 className="text-3xl font-bold">Fashion with a Conscience</h2>
            <p className="text-lg">Simplicity with a touch of sophistication  Find your perfect minimal look</p> 
            
            <button className="btn btn-neutral rounded-lg hover:bg-gray-700">Shop Now </button>

          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
      </div>

</>
  )
}

export default Home
