// src/components/layout/Navbar.jsx
import React from "react";
import { NavLink, Link } from "react-router-dom";
import logoImg from "../../assets/images/logo/logo.png"; // Adjust path to your logo asset

export default function Navbar() {
  return (
    <nav className="w-full bg-white px-6 py-4 flex items-center justify-between border-b border-gray-100">
      
      {/* Brand Logo & Name */}
      <Link to="/" className="flex items-center gap-3 group">
        <img 
          src={logoImg} 
          alt="YV. Beauty Logo" 
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col leading-tight">
          <span className="font-serif font-bold text-lg text-[#4A3B32]">Beauty</span>
          <span className="text-[9px] uppercase tracking-widest text-[#A47E6C] font-semibold">Cosmetics</span>
        </div>
      </Link>

      {/* Navigation Menu Links */}
      <div className="flex items-center gap-6 md:gap-8 text-xs font-semibold">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `transition-colors duration-200 ${isActive ? "text-[#E07A5F]" : "text-[#4A3B32] hover:text-[#E07A5F]"}`
          }
        >
          Home
        </NavLink>
        
        <NavLink 
          to="/products" 
          className={({ isActive }) => 
            `transition-colors duration-200 ${isActive ? "text-[#E07A5F]" : "text-[#4A3B32] hover:text-[#E07A5F]"}`
          }
        >
          Shop/Products
        </NavLink>

        {/* 🟢 Direct static Link to Categories Page with NO dropdown mechanics */}
        <NavLink 
          to="/categories" 
          className={({ isActive }) => 
            `transition-colors duration-200 ${isActive ? "text-[#E07A5F]" : "text-[#4A3B32] hover:text-[#E07A5F]"}`
          }
        >
          Categories
        </NavLink>

        <NavLink 
          to="/about" 
          className={({ isActive }) => 
            `transition-colors duration-200 ${isActive ? "text-[#E07A5F]" : "text-[#4A3B32] hover:text-[#E07A5F]"}`
          }
        >
          About us
        </NavLink>
      </div>

      {/* Right Side Action Icons (Search & Cart Badge) */}
      <div className="flex items-center gap-4">
        <button className="text-[#4A3B32] hover:text-[#E07A5F] transition cursor-pointer" aria-label="Search">
          <i className="fa-solid fa-magnifying-glass text-sm"></i>
        </button>
        <Link to="/cart" className="relative text-[#4A3B32] hover:text-[#E07A5F] transition" aria-label="Shopping Cart">
          <i className="fa-solid fa-bag-shopping text-sm"></i>
          <span className="absolute -top-1.5 -right-1.5 bg-[#E07A5F] text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center scale-90">
            2
          </span>
        </Link>
      </div>

    </nav>
  );
}