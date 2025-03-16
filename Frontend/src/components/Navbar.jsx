import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 sticky top-0 z-10 bg-white shadow-md px-6">
        {/* Left side - Brand and Navigation Links */}
        <div className="flex-1 flex space-x-6">
          <Link to="/" className="btn btn-ghost mt-3 text-4xl" style={{ fontFamily: "Courgette" }}>
            Bliss
          </Link>
          <ul className="menu menu-horizontal space-x-4 text-2xl">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Center - Search Bar */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              placeholder="Search for products..."
              className="input input-bordered w-full text-lg px-4 py-2 rounded-full"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white px-4 py-1 rounded-full hover:bg-black-600">
              Search
            </button>
          </div>
        </div>

        {/* Right side - Cart and Profile */}
        <div className="flex-none ml-2 flex space-x-3">
          {/* Cart */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div tabIndex={0} className="card card-compact dropdown-content bg-base-100 z-10 mt-3 w-52 shadow">
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">View cart</button>
                </div>
              </div>
            </div>
          </div>

          {/* Profile */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-14 rounded-full">
                <img alt="Profile" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-64 p-4 shadow">
              <li>
                <Link to="/login" className="justify-between">
                  Profile
                  <Link to="/register" className="badge">New</Link>
                </Link>
              </li>
              <li><Link to="/settings">Settings</Link></li>
              <li><Link to="/login">Logout</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
