// src/components/layout/Navbar.jsx

import React from "react";
import { NavLink, Link } from "react-router-dom";
import logoImg from "../../assets/images/logo/logo.png";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-[#F1E7DE]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logoImg}
            alt="YV. Beauty Logo"
            className="w-12 h-12 rounded-full object-cover"
          />

          <div className="flex flex-col leading-tight">
            <span className="font-serif font-bold text-xl text-[#4A3B32]">
              YV. Beauty
            </span>

            <span className="text-[10px] uppercase tracking-[0.25em] text-[#A47E6C] font-semibold">
              Premium Cosmetics
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#E07A5F]"
                : "text-[#4A3B32] hover:text-[#E07A5F] transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "text-[#E07A5F]"
                : "text-[#4A3B32] hover:text-[#E07A5F] transition"
            }
          >
            Shop
          </NavLink>

          <NavLink
            to="/categories"
            className={({ isActive }) =>
              isActive
                ? "text-[#E07A5F]"
                : "text-[#4A3B32] hover:text-[#E07A5F] transition"
            }
          >
            Categories
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-[#E07A5F]"
                : "text-[#4A3B32] hover:text-[#E07A5F] transition"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-[#E07A5F]"
                : "text-[#4A3B32] hover:text-[#E07A5F] transition"
            }
          >
            Contact
          </NavLink>
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

          {/* Search */}
          <button
            className="text-[#4A3B32] hover:text-[#E07A5F] transition"
            aria-label="Search"
          >
            <i className="fa-solid fa-magnifying-glass text-base"></i>
          </button>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative text-[#4A3B32] hover:text-[#E07A5F] transition"
            aria-label="Shopping Cart"
          >
            <i className="fa-solid fa-bag-shopping text-base"></i>

            <span className="absolute -top-2 -right-2 bg-[#E07A5F] text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
              2
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#4A3B32] hover:text-[#E07A5F] transition"
            aria-label="Open Menu"
          >
            <i className="fa-solid fa-bars text-lg"></i>
          </button>

        </div>

      </div>
    </nav>
  );
}