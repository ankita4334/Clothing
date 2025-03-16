import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-16 px-6 md:px-20">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800">About Us</h2>
        <p className="text-lg text-gray-600 mt-2">
          Discover our journey and what makes us unique.
        </p>
      </div>

      {/* Company Info */}
      <div className="max-w-5xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h3 className="text-3xl font-semibold text-gray-800">Who We Are</h3>
        <p className="text-gray-600 mt-4 leading-relaxed">
          At <strong>AVATAR</strong>, we are committed to providing the latest trends in fashion with
          a perfect blend of quality and affordability. Our journey began with a vision to
          redefine fashion and make it accessible to everyone.
        </p>
      </div>

      {/* Mission & Vision Section */}
      <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
          <p className="text-gray-600 mt-2">
            To inspire confidence and self-expression through high-quality, stylish, and affordable fashion.
          </p>
        </div>

        <div className="bg-white p-6 shadow-md rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-800">Our Vision</h3>
          <p className="text-gray-600 mt-2">
            To become a global leader in the fashion industry, setting trends and making fashion accessible to all.
          </p>
        </div>
      </div>

      {/* Virtual Try-On Section */}
      <div className="mt-12 max-w-5xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h3 className="text-3xl font-semibold text-gray-800 text-center">Virtual Try-On</h3>
        <p className="text-gray-600 mt-4 leading-relaxed">
          Experience the future of shopping with our innovative <strong>Virtual Try-On</strong> feature. Using advanced
          AI and augmented reality, you can try on clothes virtually before making a purchase. Whether it's casual wear,
          formal attire, or accessories, our technology helps you find the perfect fit.
        </p>
        <p className="text-gray-600 mt-4 leading-relaxed">
          Additionally, our <strong>Avatar Integration</strong> allows you to create a digital version of yourself,
          customize your look, and see how different outfits will appear on you in real time. Say goodbye to guesswork
          and shop with confidence!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
