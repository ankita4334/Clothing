import React, { useState } from "react";
import registerImage from "../assets/register1.jpg"; 
import loginImage from "../assets/login1.jpg"; 

function AuthModal() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="flex max-w-[800px] h-[500px] bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500">
          {/* Image Section */}
          <div
            className={`max-w-1/2 h-full flex items-center justify-center transition-all duration-500 ${
              isLogin ? "order-2" : "order-1"
            }`}
          >
            <img
              src={isLogin ? loginImage : registerImage}
              alt="Auth Illustration"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Form Section */}
          <div
            className={`w-1/2 p-10 flex flex-col justify-center transition-all duration-500 ${
              isLogin ? "order-1" : "order-2"
            }`}
          >
            <h2 className="text-center text-3xl font-bold text-gray-700">
              {isLogin ? "Login" : "Register"}
            </h2>

            {/* Form Fields */}
            <form className="mt-6">
              {!isLogin && (
                <>
                  <div className="mb-4">
                    <label className="block text-gray-700">Full Name</label>
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      className="w-full px-2 py-2 border-b border-gray-500 focus:border-gray-700 focus:outline-none bg-transparent"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Username</label>
                    <input
                      type="text"
                      placeholder="Your Username"
                      className="w-full px-2 py-2 border-b border-gray-500 focus:border-gray-700 focus:outline-none bg-transparent"
                    />
                  </div>
                </>
              )}

              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-2 py-2 border-b border-gray-500 focus:border-gray-700 focus:outline-none bg-transparent"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  placeholder="Your Password"
                  className="w-full px-2 py-2 border-b border-gray-500 focus:border-gray-700 focus:outline-none bg-transparent"
                />
              </div>

              {isLogin && (
                <div className="text-right text-sm">
                  <a href="#" className="text-gray-700 hover:underline">
                    Forgot Password?
                  </a>
                </div>
              )}

              {/* Submit Button */}
              <button className="w-full mt-4 bg-gray-800 text-white py-2 rounded-md hover:opacity-90">
                {isLogin ? "Login" : "Register"}
              </button>
            </form>

            {/* Switch Between Forms */}
            <div className="mt-4 text-center">
              <p className="text-gray-800">
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-gray-00 font-bold ml-1"
                >
                  {isLogin ? "Register" : "Login"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthModal;
