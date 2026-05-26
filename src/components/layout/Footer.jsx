import React from "react";
import logoImg from "../../assets/images/logo/logo.png";
// src/components/layout/Footer.jsx


export default function Footer() {
  return (
    <footer className="w-full bg-[#EAE0D5] border-t border-[#DFD3C3] text-[#4A3B32]">

      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-10 md:py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">

        {/* Brand Info */}
        <div className="lg:col-span-4 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full overflow-hidden bg-white p-0.5 shadow-sm">
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

          <p className="text-sm text-[#705A4F] leading-normal max-w-sm">
            Carefully curated, premium skincare and cosmetics designed to elevate
            your daily self-care routine and highlight your natural radiance.
          </p>

          {/* Social Icons */}
         
                <div className="flex gap-3 pt-2">

  {/* WhatsApp Link */}
  <a
    href="#"
    className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#E07A5F] shadow-xs cursor-pointer hover:bg-[#E07A5F] hover:text-white transition duration-300"
    aria-label="WhatsApp"
  >
    <i className="fa-brands fa-whatsapp text-base"></i>
  </a>

  {/* Telegram Link */}
  <a
    href="#"
    className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#E07A5F] shadow-xs cursor-pointer hover:bg-[#E07A5F] hover:text-white transition duration-300"
    aria-label="Telegram"
  >
    <i className="fa-brands fa-telegram text-base"></i>
  </a>

  {/* Facebook Link */}
  <a
    href="#"
    className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#E07A5F] shadow-xs cursor-pointer hover:bg-[#E07A5F] hover:text-white transition duration-300"
    aria-label="Facebook"
  >
    <i className="fa-brands fa-facebook-f text-sm"></i>
  </a>

</div>
        </div>

        {/* Shop Links */}
        <div className="lg:col-span-2 space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#4A3B32]">
            Shop
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
                href="/categories"
                className="text-[#705A4F] hover:text-[#E07A5F] transition duration-200"
              >
                Skincare
              </a>
            </li>

            <li>
              <a
                href="/categories"
                className="text-[#705A4F] hover:text-[#E07A5F] transition duration-200"
              >
                Makeup
              </a>
            </li>

            <li>
              <a
                href="/categories"
                className="text-[#705A4F] hover:text-[#E07A5F] transition duration-200"
              >
                Perfumes
              </a>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="lg:col-span-2 space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#4A3B32]">
            Company
          </h3>

          <ul className="space-y-2 text-sm font-medium">
            <li>
              <a
                href="/about"
                className="text-[#705A4F] hover:text-[#E07A5F] transition duration-200"
              >
                About Us
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-[#705A4F] hover:text-[#E07A5F] transition duration-200"
              >
                Contact Us
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-[#705A4F] hover:text-[#E07A5F] transition duration-200"
              >
                FAQ Help
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-[#705A4F] hover:text-[#E07A5F] transition duration-200"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="lg:col-span-4 space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#4A3B32]">
            Join Our Newsletter
          </h3>

          <p className="text-sm text-[#705A4F] leading-normal">
            Subscribe to get early access to special beauty product drops,
            shade alerts, and exclusive offers.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row w-full max-w-md gap-3 sm:gap-0 mt-2"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="w-full bg-white border border-[#DFD3C3] sm:rounded-l-xl rounded-xl px-4 py-3 text-sm text-[#4A3B32] placeholder-[#A47E6C] focus:outline-none focus:border-[#E07A5F] transition"
              required
            />

            <button
              type="submit"
              className="bg-[#E07A5F] text-white font-semibold text-sm px-5 py-3 sm:rounded-r-xl rounded-xl border border-[#E07A5F] hover:bg-[#d0694e] transition duration-300 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Lower Footer */}
      <div className="border-t border-[#DFD3C3] bg-[#DFD3C3]/30 px-5 sm:px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">

          {/* Copyright */}
          <p className="text-xs font-medium text-[#705A4F] tracking-wide">
            &copy; {new Date().getFullYear()} YV. Beauty Collection Inc.
            All rights reserved.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] sm:text-xs text-[#705A4F] font-semibold tracking-wider uppercase opacity-80">
            <span>Secure Checkout</span>

            <div className="hidden sm:block h-4 w-px bg-[#4A3B32]/20"></div>

            <span>100% Authentic Products</span>
          </div>

        </div>
      </div>

    </footer>
  );
}