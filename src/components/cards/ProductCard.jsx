// src/components/cards/ProductCard.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { createWhatsAppUrl } from "../../utils/whatsapp";

export default function ProductCard({ image, category, name, price }) {
  const [imageFailed, setImageFailed] = useState(false);
  const orderUrl = createWhatsAppUrl(
    `Hello! I would like to order ${name} for ${price} ETB. Please share payment and delivery details.`,
  );

  return (
    <div className="bg-white rounded-2xl p-3 sm:p-4 border border-[#F2E3D5] flex flex-col hover:border-[#E07A5F] hover:shadow-xs transition duration-300 group relative">
      
      {/* Product Image Frame Container */}
      <div className="w-full aspect-[4/5] bg-[#FFFBF7] rounded-xl overflow-hidden mb-4 relative border border-[#F1E7DE]/30">
        {imageFailed ? (
          <div role="img" aria-label={`${name} image unavailable`} className="flex h-full w-full flex-col items-center justify-center gap-2 px-3 text-center text-sm text-[#705A4F]">
            <i className="fa-regular fa-image text-2xl" aria-hidden="true"></i>
            <span>Image unavailable</span>
          </div>
        ) : (
          <img
            src={image}
            alt={name}
            loading="lazy"
            decoding="async"
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            draggable="false"
          />
        )}
      </div>

      {/* Product Information Context Labels */}
      <div className="flex flex-col items-start text-left space-y-1 flex-1">
        <span className="text-[10px] font-sans font-bold text-[#A47E6C] uppercase tracking-wider">
          {category}
        </span>
        <h3 className="font-serif font-bold text-[#4A3B32] text-xs sm:text-sm md:text-base leading-snug group-hover:text-[#E07A5F] transition-colors duration-200 line-clamp-2 min-h-[2.5rem]">
          {name}
        </h3>
        <span className="font-sans font-bold text-[#A47E6C] text-xs sm:text-sm pt-1">
          {price} ETB
        </span>
      </div>

      <div className="mt-auto border-t border-[#F1E7DE]/40 pt-2">
        {orderUrl ? (
          <a
            href={orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Order ${name} for ${price} ETB on WhatsApp in a new tab`}
            className="flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#AD4B37] px-2 py-2 text-center text-xs font-semibold text-white transition hover:bg-[#913D2E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A3B32]"
          >
            <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>Order on WhatsApp
          </a>
        ) : (
          <Link
            to="/contact"
            className="flex min-h-11 w-full items-center justify-center rounded-lg border border-[#C85D45] px-2 py-2 text-center text-xs font-semibold text-[#9F422F] transition hover:bg-[#FFF3EE] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A3B32]"
          >
            Ask about this product
          </Link>
        )}
      </div>

    </div>
  );
}