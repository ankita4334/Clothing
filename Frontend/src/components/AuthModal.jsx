import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppContent } from "../context/AppContext";
import { login, register } from "../services/AuthService";
import registerImage from "../assets/register1.jpg";
import loginImage from "../assets/login1.jpg";
import { useNavigate } from "react-router-dom";

function AuthModal({ isOpen, onClose }) {
  const [isSignup, setIsSignup] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { setIsLoggedIn, setUserData } = useContext(AppContent);

  const toggleForm = () => {
    setIsSignup(!isSignup);
    setFormData({ name: "", email: "", password: "" });
    setErrors({});
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateFields = () => {
    let newErrors = {};
    if (isSignup && !formData.name.trim()) newErrors.name = "Name is required!";
    if (!formData.email.trim()) newErrors.email = "Email is required!";
    if (!formData.password.trim())
      newErrors.password = "Password cannot be empty!";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    if (!validateFields()) return;

    setLoading(true);
    setErrors({});

    try {
      const response = isSignup
        ? await register(formData)
        : await login(formData);

      if (isSignup) {
        toast.success("Signup Successful! Please Verify your Email!");
        onClose();
        navigate(`/verify?email=${formData.email}`);
      } else {
        setIsLoggedIn(true);
        setUserData(response.user);
        toast.success("Login successful!");
        onClose();
      }
    } catch (error) {
      console.error("Auth Error:", error);
      const formattedErrors = error.errors?.reduce((acc, curr) => {
        acc[curr.field] = curr.message;
        return acc;
      }, {});

      setErrors(formattedErrors || {});
      toast.error(error.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-100 bg-opacity-50 z-50">
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
              isSignup ? "order-2" : "order-1"
            }`}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
            >
              ×
            </button>
            <h2 className="text-center text-3xl font-bold text-gray-700">
              {isSignup ? "Register" : "Login"}
            </h2>

            {/* Form Fields */}
            <form className="mt-6" onSubmit={handleSubmit}>
              {isSignup && (
                <>
                  <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-2 py-2 border-b border-gray-500 focus:border-gray-700 focus:outline-none bg-transparent"
                    />
                    {errors.name && (
                      <span className="error">{errors.name}</span>
                    )}
                  </div>
                </>
              )}

              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-2 py-2 border-b border-gray-500 focus:border-gray-700 focus:outline-none bg-transparent"
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  placeholder="Your Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-2 py-2 border-b border-gray-500 focus:border-gray-700 focus:outline-none bg-transparent"
                />
                {errors.password && (
                  <span className="error">{errors.password}</span>
                )}
              </div>

              {!isSignup && (
                <div className="text-right text-sm">
                  <a
                    href="#"
                    className="text-gray-700 hover:underline"
                    onClick={(e) => {
                      e.preventDefault();
                      onClose();
                      navigate("/forgetPassword");
                    }}
                  >
                    Forgot Password?
                  </a>
                </div>
              )}

              {/* Submit Button */}
              <button
                className="w-full mt-4 bg-gray-800 text-white py-2 rounded-md hover:opacity-90"
                disabled={loading}
              >
                {loading ? "Processing..." : isSignup ? "Sign Up" : "Login"}
              </button>
            </form>

            {/* Switch Between Forms */}
            <div className="mt-4 text-center">
              <p className="text-gray-800">
                {isSignup
                  ? "Already have an account?"
                  : "Don't have an account?"}{" "}
                <button
                  onClick={toggleForm}
                  className="text-gray-00 font-bold ml-1"
                >
                  {isSignup ? "Login" : "Sign Up"}
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
