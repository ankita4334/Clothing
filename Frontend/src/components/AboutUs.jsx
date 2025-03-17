import React from "react";

const AboutUs = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 mt-5">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-black mt-9">About Our Creative Studio</h1>
          <p className="text-sm text-gray-600 leading-relaxed">
            At Lumina Designs, we blend innovation with craftsmanship to create extraordinary digital experiences. 
            Founded in 2015, our team of passionate designers and developers has been transforming ideas into 
            impactful visual solutions for clients across 15+ countries. We specialize in UI/UX design, brand 
            identity, and interactive web experiences that captivate audiences and drive results.
          </p>
          <a href="/shop"><button className="text-blue-600 hover:underline font-semibold">
            EXPLORE OUR WORK →
          </button></a>
        </div>
        <div className="md:w-1/2 relative">
          <div className="absolute ml-60 mb-10 w-72 h-56 bg-blue-950 shadow-lg z-10 ">
          </div>
          <div className="relative z-20">
            <img
              src="image/l6.jpg"
              alt="Creative Studio"
              className="w-80 h-110 mt-10 ml-40"
            />
          </div>
          <div className="absolute bottom-[-40px] left-[calc(30%-10rem)] w-190 h-48 bg-orange-200 shadow-lg p-6 z-10  flex items-center justify-center ">
          </div>
        </div>
      </div>
    </section>
  );
};


export default AboutUs;
