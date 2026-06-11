// src/components/layout/Navbar.jsx

import React, { useState } from "react"; // 🟢 Added useState
import { NavLink, Link } from "react-router-dom";
import logoImg from "../../assets/images/logo/logo.png";

export default function Navbar() {
  // 🟢 State to track if mobile menu drawer is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Helper function to dynamically class styling for active links
  const getLinkClass = ({ isActive }) =>
    isActive
      ? "text-[#E07A5F] font-semibold"
      : "text-[#4A3B32] hover:text-[#E07A5F] transition-colors duration-200";

  return (
    <nav className="w-full bg-white border-b border-[#F1E7DE] relative z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
        
          <div className="flex flex-col leading-tight">
            <span className="font-serif font-bold text-xl text-[#4A3B32]">
              YV. Beauty
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#A47E6C] font-semibold">
              Premium Cosmetics
            </span>
          </div>
        </Link>

        {/* Desktop Navigation (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <NavLink to="/" className={getLinkClass}>Home</NavLink>
          <NavLink to="/products" className={getLinkClass}>Shop</NavLink>
          <NavLink to="/categories" className={getLinkClass}>Categories</NavLink>
          <NavLink to="/about" className={getLinkClass}>About</NavLink>
          <NavLink to="/contact" className={getLinkClass}>Contact</NavLink>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* CTA Button */}
          <Link
            to="/products"
            className="hidden lg:flex items-center bg-[#E07A5F] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#d0694e] transition"
          >
            Shop Now
          </Link>

        

          {/* 🟢 Mobile Menu Toggle Button (Swaps icons based on open state) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#4A3B32] hover:text-[#E07A5F] transition cursor-pointer p-1"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? (
              <i className="fa-solid fa-xmark text-xl"></i> // X icon when open
            ) : (
              <i className="fa-solid fa-bars text-lg"></i> // Hamburger when closed
            )}
          </button>
        </div>
      </div>

      {/* 🟢 Mobile Dropdown Menu Panel Overlay */}
      <div
        className={`md:hidden absolute left-0 w-full bg-white border-b border-[#F1E7DE] shadow-lg transition-all duration-300 ease-in-out origin-top ${
          isMenuOpen 
            ? "opacity-100 scale-y-100 visible" 
            : "opacity-0 scale-y-95 invisible pointer-events-none"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4 text-sm font-medium bg-white">
          <NavLink to="/" className={getLinkClass} onClick={() => setIsMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/products" className={getLinkClass} onClick={() => setIsMenuOpen(false)}>
            Shop
          </NavLink>
          <NavLink to="/categories" className={getLinkClass} onClick={() => setIsMenuOpen(false)}>
            Categories
          </NavLink>
          <NavLink to="/about" className={getLinkClass} onClick={() => setIsMenuOpen(false)}>
            About
          </NavLink>
          <NavLink to="/contact" className={getLinkClass} onClick={() => setIsMenuOpen(false)}>
            Contact
          </NavLink>
          
          {/* Mobile Specific CTA Button inside the menu drawer */}
          <Link
            to="/products"
            onClick={() => setIsMenuOpen(false)}
            className="w-full text-center bg-[#E07A5F] text-white py-3 rounded-xl text-sm font-semibold hover:bg-[#d0694e] transition mt-2 block"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </nav>
  );
}