import { Link } from "react-router-dom"; // Imported Link for SPA routing
import { createWhatsAppUrl } from "../../utils/whatsapp";


export default function Footer() {
  const whatsappUrl = createWhatsAppUrl("Hello! I have a question for YV. Beauty.");

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
            {whatsappUrl && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#9F422F] shadow-2xs transition duration-300 hover:bg-[#AD4B37] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A3B32]"
                aria-label="Chat with YV. Beauty on WhatsApp"
              >
                <i className="fa-brands fa-whatsapp text-base"></i>
              </a>
            )}

            <a
              href="https://t.me/YVbeauty1" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#9F422F] shadow-2xs transition duration-300 hover:bg-[#AD4B37] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A3B32]"
              aria-label="Join YV. Beauty on Telegram"
            >
              <i className="fa-brands fa-telegram text-base"></i>
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
            Delivery across Addis Ababa typically takes 1–3 business days. Unopened, unused items in their original sealed packaging may be returned within 7 days of delivery.
          </p>

          <Link to="/contact" className="inline-flex min-h-11 items-center text-sm font-semibold text-[#9F422F] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A3B32]">
            Questions about delivery or returns?
          </Link>
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