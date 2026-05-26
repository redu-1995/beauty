import React, { useState } from "react";
import { ChevronDown, ShoppingBag, Search } from "lucide-react";
import logoImg from "../../assets/images/logo/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false);

  return (
    <nav className="w-full bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50 border-b border-[#F3E3D3]">
      
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">

        {/* Logo Section */}
        <div className="flex items-center gap-4 cursor-pointer">
          
          {/* Logo */}
          <div className="w-24 h-24 rounded-full overflow-hidden bg-[#EADBC8] shadow-inner flex items-center justify-center">
            <img
              src={logoImg}
              alt="Beauty Logo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Brand Name */}
          <div>
            <h1 className="text-3xl font-bold text-[#4A3B32] tracking-wide font-serif leading-none">
              Beauty
            </h1>

            <p className="text-sm text-[#B08968] tracking-[3px] uppercase mt-1">
              Cosmetics
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10 text-[16px] font-medium">
          
          <li>
            <a
              href="/"
              className="text-[#E07A5F] relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#FF40C4] hover:after:w-full after:transition-all after:duration-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="/products"
              className="text-[#E07A5F] hover:text-[#4A3B32] transition duration-300"
            >
              Shop
            </a>
          </li>

          {/* Categories Dropdown */}
          <li className="relative group py-2">

  {/* Categories Button */}
  <button className="flex items-center gap-1 text-[#E07A5F] hover:text-[#4A3B32] transition duration-300">
    Categories

    <ChevronDown
      size={18}
      className="transition-transform duration-300 group-hover:rotate-180"
    />
  </button>

  {/* Dropdown */}
  <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-[#F3E3D3] py-3 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
    
    <a
      href="/skincare"
      className="block px-5 py-3 text-[#4A3B32] hover:bg-[#FBE7D6] transition"
    >
      Skincare
    </a>

    <a
      href="/haircare"
      className="block px-5 py-3 text-[#4A3B32] hover:bg-[#FBE7D6] transition"
    >
      Haircare
    </a>

    <a
      href="/makeup"
      className="block px-5 py-3 text-[#4A3B32] hover:bg-[#FBE7D6] transition"
    >
      Makeup
    </a>
  </div>
</li>
          <li>
            <a
              href="/about"
              className="text-[#E07A5F] hover:text-[#4A3B32] transition duration-300"
            >
              About Us
            </a>
          </li>
        </ul>

        {/* Right Icons */}
        <div className="hidden md:flex items-center gap-5">
          
          {/* Search */}
          <button className="w-11 h-11 rounded-full bg-[#FBE7D6] flex items-center justify-center hover:bg-[#F5D2C4] transition shadow-sm">
            <Search size={20} className="text-[#4A3B32]" />
          </button>

          {/* Cart */}
          <button className="relative w-11 h-11 rounded-full bg-[#E07A5F] flex items-center justify-center hover:bg-[#C96A52] transition shadow-md">
            <ShoppingBag size={20} className="text-white" />

            {/* Cart Badge */}
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#FF40C4] text-white text-xs flex items-center justify-center">
              2
            </span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <span
            className={`w-7 h-0.5 bg-[#4A3B32] rounded transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>

          <span
            className={`w-7 h-0.5 bg-[#4A3B32] rounded transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>

          <span
            className={`w-7 h-0.5 bg-[#4A3B32] rounded transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-[#F3E3D3] px-6 py-6 shadow-lg">
          
          <ul className="flex flex-col gap-5 text-[16px] font-medium">
            
            <li>
              <a href="/" className="text-[#E07A5F]">
                Home
              </a>
            </li>

            <li>
              <a
                href="/products"
                className="text-[#E07A5F]"
              >
                Shop
              </a>
            </li>

            {/* Mobile Categories */}
            <li>

  {/* Categories Button */}
  <button
    onClick={() =>
      setMobileCategoriesOpen(!mobileCategoriesOpen)
    }
    className="flex items-center justify-between w-full text-[#E07A5F]"
  >
    <span>Categories</span>

    <ChevronDown
      size={18}
      className={`transition-transform duration-300 ${
        mobileCategoriesOpen ? "rotate-180" : ""
      }`}
    />
  </button>

  {/* Dropdown */}
  {mobileCategoriesOpen && (
    <div className="mt-4 ml-4 flex flex-col gap-4 text-[#4A3B32]">
      <a href="/skincare">Skincare</a>

      <a href="/haircare">Haircare</a>

      <a href="/makeup">Makeup</a>
    </div>
  )}
</li>
            <li>
              <a
                href="/about"
                className="text-[#E07A5F]"
              >
                About Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}