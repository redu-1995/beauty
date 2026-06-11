import React from "react";
import logoImg from "../../assets/images/logo/logo.png";

export default function Footer() {
  return (
    <footer className="w-full bg-[#EAE0D5] border-t border-[#DFD3C3] text-[#4A3B32]">

      {/* Upper Footer Layout Grid */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-10 md:py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">

        {/* Column 1: Brand Info & Social Connect Matrix */}
        <div className="lg:col-span-4 space-y-4 text-left">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full overflow-hidden bg-white p-0.5 shadow-xs">
              <img
                src={logoImg}
                alt="YV. Beauty Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <span className="text-lg sm:text-xl font-bold font-serif tracking-wide">
              YV. Beauty
            </span>
          </div>

          <p className="text-sm text-[#705A4F] leading-relaxed max-w-sm">
            Carefully curated, premium skincare and cosmetics designed to elevate
            your daily self-care routine and highlight your natural radiance.
          </p>

          {/* Social Icons Media Row Actions */}
          <div className="flex gap-3 pt-1">
            {/* WhatsApp Link Channel */}
            <a
              href="https://wa.me/2519XXXXXXXX" // Swap with your actual WhatsApp business number link
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#E07A5F] shadow-2xs cursor-pointer hover:bg-[#E07A5F] hover:text-white transition duration-300"
              aria-label="Chat with YV. Beauty on WhatsApp"
            >
              <i className="fa-brands fa-whatsapp text-base"></i>
            </a>

            {/* Telegram Link Channel */}
            <a
              href="https://t.me/YVbeauty1" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#E07A5F] shadow-2xs cursor-pointer hover:bg-[#E07A5F] hover:text-white transition duration-300"
              aria-label="Join YV. Beauty on Telegram"
            >
              <i className="fa-brands fa-telegram text-base"></i>
            </a>

            {/* Facebook Link Channel */}
            <a
              href="https://facebook.com/YVBeauty" // Swap with your actual Facebook page path
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#E07A5F] shadow-2xs cursor-pointer hover:bg-[#E07A5F] hover:text-white transition duration-300"
              aria-label="Follow YV. Beauty on Facebook"
            >
              <i className="fa-brands fa-facebook-f text-sm"></i>
            </a>
          </div>
        </div>

        {/* Column 2: Core Store Nav Link Matrix */}
        <div className="lg:col-span-2 space-y-3 text-left">
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#4A3B32]">
            Shop Collections
          </h3>

          <ul className="space-y-2 text-sm font-medium">
            <li>
              <a
                href="/products"
                className="text-[#705A4F] hover:text-[#E07A5F] transition duration-200"
              >
                All Products
              </a>
            </li>
            <li>
              <a
                href="/skincare"
                className="text-[#705A4F] hover:text-[#E07A5F] transition duration-200"
              >
                Skincare Vault
              </a>
            </li>
            <li>
              <a
                href="/makeup"
                className="text-[#705A4F] hover:text-[#E07A5F] transition duration-200"
              >
                Makeup Cosmetics
              </a>
            </li>
            <li>
              <a
                href="/perfumes"
                className="text-[#705A4F] hover:text-[#E07A5F] transition duration-200"
              >
                Luxury Perfumes
              </a>
            </li>
            <li>
              <a
                href="/haircare"
                className="text-[#705A4F] hover:text-[#E07A5F] transition duration-200"
              >
                Hair Care
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Corporate Directory Nav Links */}
        <div className="lg:col-span-2 space-y-3 text-left">
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#4A3B32]">
            Company
          </h3>

          <ul className="space-y-2 text-sm font-medium">
            <li>
              <a
                href="/about"
                className="text-[#705A4F] hover:text-[#E07A5F] transition duration-200"
              >
                About Our House
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-[#705A4F] hover:text-[#E07A5F] transition duration-200"
              >
                Contact & Support
              </a>
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

          {/* Dynamic Copyright Tracker */}
          <p className="text-xs font-medium text-[#705A4F] tracking-wide">
            &copy; {new Date().getFullYear()} YV. Beauty Collection Inc. All rights reserved.
          </p>

          {/* Verified Store Trust Anchors */}
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