import React from 'react'

const Home = () => {
  return (
<>
<div className="main">
<div className="carousel w-full h-[650px]">
        {/** Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="image/jiwon.jpg"
            className="w-full" />
          <div className="absolute left-5 top-1/2 -translate-y-1/2 text-black space-y-4 ml-20">
            <h2 className="text-3xl font-bold">Discover the World</h2>
            <p className="text-lg">Explore new destinations with us.</p>
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
            src="image/j2.jpg"
            className="w-full" />
          <div className="absolute left-5 top-1/2 -translate-y-1/2 text-black space-y-4 ml-20">
            <h2 className="text-3xl font-bold">Adventure Awaits</h2>
            <p className="text-lg">Unleash the explorer in you.</p>
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
            src="image/j3.jpg"
            className="w-full" />
          <div className="absolute left-5 top-1/2 -translate-y-1/2 text-black space-y-4 ml-20">
            <h2 className="text-3xl font-bold">Capture Memories</h2>
            <p className="text-lg">Make every moment unforgettable.</p>
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
            src="image/j1.jpg"
            className="w-full" />
          <div className="absolute left-5 top-1/2 -translate-y-1/2 text-black space-y-4 ml-20">
            <h2 className="text-3xl font-bold">Start Your Journey</h2>
            <p className="text-lg">Your dream destination awaits.</p>
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
