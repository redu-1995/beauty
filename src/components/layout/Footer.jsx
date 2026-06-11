import React from "react";
import { Link } from "react-router-dom"; // Imported Link for SPA routing


export default function Footer() {
  return (
    <footer className="w-full bg-[#EAE0D5] border-t border-[#DFD3C3] text-[#4A3B32]">

      {/* Upper Footer Layout Grid */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-10 md:py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">

        {/* Column 1: Brand Info & Social Connect Matrix */}
        <div className="lg:col-span-4 space-y-4 text-left">
          <div className="flex items-center gap-3">

            <span className="text-lg sm:text-xl font-bold font-serif tracking-wide">
              YV. Beauty
            </span>
          </div>

          <p className="text-sm text-[#705A4F] leading-relaxed max-w-sm">
            Carefully curated, premium skincare and cosmetics designed to elevate
            your daily self-care routine and highlight your natural radiance.
          </p>

          {/* Social Icons Media Row Actions (Kept original as requested) */}
          <div className="flex gap-3 pt-1">
            <a
              href="https://wa.me/2519XXXXXXXX" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#E07A5F] shadow-2xs cursor-pointer hover:bg-[#E07A5F] hover:text-white transition duration-300"
              aria-label="Chat with YV. Beauty on WhatsApp"
            >
              <i className="fa-brands fa-whatsapp text-base"></i>
            </a>

            <a
              href="https://t.me/YVbeauty1" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#E07A5F] shadow-2xs cursor-pointer hover:bg-[#E07A5F] hover:text-white transition duration-300"
              aria-label="Join YV. Beauty on Telegram"
            >
              <i className="fa-brands fa-telegram text-base"></i>
            </a>

            <a
              href="https://facebook.com/YVBeauty" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#E07A5F] shadow-2xs cursor-pointer hover:bg-[#E07A5F] hover:text-white transition duration-300"
              aria-label="Follow YV. Beauty on Facebook"
            >
              <i className="fa-brands fa-facebook-f text-sm"></i>
            </a>
          </div>
        </div>

        {/* Column 2: Core Store Nav Link Matrix (Modified to use Link) */}
        <div className="lg:col-span-2 space-y-3 text-left">
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#4A3B32]">
            Shop Collections
          </h3>

          <ul className="space-y-2 text-sm font-medium">
            <li>
              <Link
                to="/products"
                className="text-[#705A4F] hover:text-[#E07A5F] transition duration-200"
              >
                All Products
              </Link>
            </li>
            <li>
              <Link
                to="/skincare"
                className="text-[#705A4F] hover:text-[#E07A5F] transition duration-200"
              >
                Skincare Vault
              </Link>
            </li>
            <li>
              <Link
                to="/makeup"
                className="text-[#705A4F] hover:text-[#E07A5F] transition duration-200"
              >
                Makeup Cosmetics
              </Link>
            </li>
            <li>
              <Link
                to="/perfumes"
                className="text-[#705A4F] hover:text-[#E07A5F] transition duration-200"
              >
                Luxury Perfumes
              </Link>
            </li>
            <li>
              <Link
                to="/haircare"
                className="text-[#705A4F] hover:text-[#E07A5F] transition duration-200"
              >
                Hair Care
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Corporate Directory Nav Links (Modified to use Link) */}
        <div className="lg:col-span-2 space-y-3 text-left">
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#4A3B32]">
            Company
          </h3>

          <ul className="space-y-2 text-sm font-medium">
            <li>
              <Link
                to="/about"
                className="text-[#705A4F] hover:text-[#E07A5F] transition duration-200"
              >
                About Our House
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-[#705A4F] hover:text-[#E07A5F] transition duration-200"
              >
                Contact & Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Quick Ordering Channel Information Block */}
        <div className="lg:col-span-4 space-y-3 text-left">
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#4A3B32]">
            How To Order
          </h3>

          <p className="text-sm text-[#705A4F] leading-relaxed">
            Found your favorite routine items? Click the ordering links on any product card to chat directly with us on <strong>Telegram</strong> or <strong>WhatsApp</strong> for seamless instant delivery across Addis Ababa.
          </p>

          <div className="bg-white/40 border border-[#DFD3C3] rounded-xl p-3 flex items-center gap-2.5 max-w-sm">
            <i className="fa-solid fa-truck-sparkles text-[#E07A5F] text-xs"></i>
            <span className="text-xs font-medium text-[#4A3B32]">
              ⚡ Fast city-wide delivery within 24-48 hours.
            </span>
          </div>
        </div>

      </div>

      {/* Lower Bottom Legal Copyright Footer Bar */}
      <div className="border-t border-[#DFD3C3] bg-[#DFD3C3]/30 px-5 sm:px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">

          <p className="text-xs font-medium text-[#705A4F] tracking-wide">
            &copy; {new Date().getFullYear()} YV. Beauty Collection Inc. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] sm:text-xs text-[#705A4F] font-bold tracking-wider uppercase opacity-80 select-none">
            <span>Direct Social Checkout</span>
            <div className="hidden sm:block h-3 w-px bg-[#4A3B32]/20"></div>
            <span>100% Authentic Products</span>
          </div>

        </div>
      </div>

    </footer>
  );
}