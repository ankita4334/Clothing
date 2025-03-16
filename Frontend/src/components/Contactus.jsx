import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const Contactus = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900">Contact Us</h2>
          <p className="text-gray-600">We would love to hear from you!</p>
        </div>

        {/* Form Section */}
        <div className="flex justify-center">
          <div className="card w-full max-w-md bg-white shadow-xl p-6 rounded-lg">
            <form>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input type="text" placeholder="Enter your full name" className="input input-bordered w-full" required />
              </div>
              
              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Email Address</span>
                </label>
                <input type="email" placeholder="Enter your email" className="input input-bordered w-full" required />
              </div>

              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Subject</span>
                </label>
                <input type="text" placeholder="Enter subject" className="input input-bordered w-full" required />
              </div>

              <button className="btn bg-black text-white w-full mt-5 hover:bg-gray-800">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-10">
          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-3xl text-gray-700 mb-2" />
            <h5 className="text-lg font-semibold">Our Address</h5>
            <p className="text-gray-600">123 Main Street, City, Country</p>
          </div>
          <div className="flex flex-col items-center">
            <FaEnvelope className="text-3xl text-gray-700 mb-2" />
            <h5 className="text-lg font-semibold">Email</h5>
            <p className="text-gray-600">support@example.com</p>
          </div>
          <div className="flex flex-col items-center">
            <FaPhone className="text-3xl text-gray-700 mb-2" />
            <h5 className="text-lg font-semibold">Phone</h5>
            <p className="text-gray-600">+123 456 7890</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
