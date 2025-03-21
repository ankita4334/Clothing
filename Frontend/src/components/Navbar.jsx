import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../services/AuthService";
import AuthModal from "./AuthModal";

const Navbar = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const navigate = useNavigate();

  const { isLoggedIn, user, cartCount } = useContext(AppContent);

  // const { isLoggedIn, user, cartCount } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/" className="hover:text-gray-700">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-gray-700">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-700">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-700">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="text-3xl font-bold flex items-center gap-2"
            style={{ fontFamily: "Courgette" }}
          >
            Bliss <i className="fa-brands fa-bluesky"></i>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/" className="hover:text-gray-700">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-gray-700">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-700">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-700">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex items-center gap-4">
          {/* Search Field */}
          <label className="input flex items-center gap-2 border rounded px-2 py-1">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              required
              placeholder="Search"
              className="outline-none"
            />
          </label>
          {/* Cart Icon */}
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <Link to="/cart" className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {cartCount > 0 && (
                <span className="badge badge-sm indicator-item">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
          {/* Signup Button */}
          {isLoggedIn ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Profile"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/profile" className="hover:text-gray-700">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/orders" className="hover:text-gray-700">
                    Orders
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="hover:text-gray-700"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="btn btn-outline"
            >
              Register
            </button>
          )}
        </div>
      </div>
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
};

export default Navbar;
