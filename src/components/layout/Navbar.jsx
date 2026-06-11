// src/components/layout/Navbar.jsx

import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import logoImg from "../../assets/images/logo/logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // 🟢 Premium Effect: Detect scrolling to turn Navbar floating/translucent
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamic class matching for luxury hover transitions and active indicator underlines
  const getLinkClass = ({ isActive }) =>
    `relative py-1 text-sm font-medium tracking-wide transition-all duration-300 ease-out after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#E07A5F] after:transition-transform after:duration-300 after:ease-out hover:after:origin-bottom-left hover:after:scale-x-100 ${
      isActive
        ? "text-[#E07A5F] after:scale-x-100 font-semibold"
        : "text-[#4A3B32] hover:text-[#E07A5F]"
    }`;

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/85 backdrop-blur-md shadow-xs py-3 border-b border-[#F1E7DE]/50"
          : "bg-white py-5 border-b border-[#F1E7DE]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        
        {/* Left Section: Interactive Brand Identity Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-3 group" 
          onClick={() => setIsMenuOpen(false)}
        >
          {/* Logo Container with a luxury brand scale transition */}
          <div className="w-10 h-10 rounded-full overflow-hidden bg-[#FBF8F5] p-0.5 border border-[#F1E7DE] transition-transform duration-500 group-hover:scale-105">
            <img
              src={logoImg}
              alt="YV. Beauty Logo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <div className="flex flex-col leading-tight">
            <span className="font-serif font-bold text-xl text-[#4A3B32] tracking-wide group-hover:text-[#E07A5F] transition-colors duration-300">
              YV. Beauty
            </span>
            <span className="text-[9px] uppercase tracking-[0.28em] text-[#A47E6C] font-semibold">
              Premium Cosmetics
            </span>
          </div>
        </Link>

        {/* Center Section: Editorial Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <NavLink to="/" className={getLinkClass}>Home</NavLink>
          <NavLink to="/products" className={getLinkClass}>Shop</NavLink>
          <NavLink to="/categories" className={getLinkClass}>Categories</NavLink>
          <NavLink to="/about" className={getLinkClass}>About</NavLink>
          <NavLink to="/contact" className={getLinkClass}>Contact</NavLink>
        </div>

        {/* Right Section: Action Elements */}
        <div className="flex items-center gap-4">
          {/* Luxury CTA Button with fluid hover fill */}
          <Link
            to="/products"
            className="hidden lg:inline-flex items-center justify-center bg-[#4A3B32] text-[#FFFBF7] px-7 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#E07A5F] hover:text-white transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
          >
            Shop Now
          </Link>

          {/* Mobile Menu Action Toggle Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#4A3B32] hover:text-[#E07A5F] transition-colors duration-200 cursor-pointer p-1.5 rounded-full hover:bg-[#FBF8F5]"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? (
              <i className="fa-solid fa-xmark text-xl"></i>
            ) : (
              <i className="fa-solid fa-bars text-lg"></i>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Overlay (Luxury Soft Fade & Slide Reveal) */}
      <div
        className={`md:hidden absolute left-0 w-full bg-white/95 backdrop-blur-lg border-b border-[#F1E7DE] shadow-xl transition-all duration-300 ease-in-out origin-top ${
          isMenuOpen
            ? "opacity-100 scale-y-100 visible"
            : "opacity-0 scale-y-95 invisible pointer-events-none"
        }`}
      >
        <div className="px-8 py-6 flex flex-col gap-5 text-sm font-medium">
          <NavLink to="/" className={getLinkClass} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
          <NavLink to="/products" className={getLinkClass} onClick={() => setIsMenuOpen(false)}>Shop</NavLink>
          <NavLink to="/categories" className={getLinkClass} onClick={() => setIsMenuOpen(false)}>Categories</NavLink>
          <NavLink to="/about" className={getLinkClass} onClick={() => setIsMenuOpen(false)}>About</NavLink>
          <NavLink to="/contact" className={getLinkClass} onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
          
          <Link
            to="/products"
            onClick={() => setIsMenuOpen(false)}
            className="w-full text-center bg-[#E07A5F] text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#d0694e] transition-all duration-200 mt-2 block shadow-sm"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </nav>
  );
}