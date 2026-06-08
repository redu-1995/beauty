import React from "react";
import { skincareProducts } from "../../../data/skincareData";

export default function FeaturedSkincare({ products }) {
  // Fall back to the filtered list from state props, or default to the featured central matrix data
  const displayList = products || skincareProducts.filter((product) => product.isFeatured);

  const BUSINESS_PHONE = "251912245679"; 
  const TELEGRAM_USERNAME = "YourBeautyShopHandle"; 

  const handleInstantOrder = (product, platform) => {
    const baseMessage = 
      `Hello! I would like to order the following skincare product from your store:\n\n` +
      `✨ Product: ${product.name}\n` +
      `💰 Price: ${product.price}\n\n` +
      `Please let me know how to proceed with payment and delivery details!`;

    const encodedMessage = encodeURIComponent(baseMessage);

    if (platform === "whatsapp") {
      window.open(`https://wa.me/${BUSINESS_PHONE}?text=${encodedMessage}`, "_blank");
    } else if (platform === "telegram") {
      window.open(`https://t.me/${TELEGRAM_USERNAME}?text=${encodedMessage}`, "_blank");
    }
  };

  return (
    <section id="skincare-grid" className="w-full bg-[#FFFBF7] py-16 px-6 lg:px-12 border-t border-[#F1E7DE]">
      <div className="max-w-7xl mx-auto flex flex-col space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="text-left space-y-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#A47E6C] font-bold bg-[#FBE7D6]/50 px-3 py-1.5 rounded-full inline-block">
              Our Favorites
            </span>
            <h2 className="font-serif text-[#4A3B32] font-bold text-2xl sm:text-3xl tracking-tight">
              Featured Products
            </h2>
            <p className="text-[#705A4F] text-xs sm:text-sm font-medium max-w-md">
              Handpicked formulation staples engineered to deliver visible, glowing results for your daily regimen.
            </p>
          </div>
        </div>

        {/* Product Grid Matrix Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch">
          {displayList.map((product) => (
            <div 
              key={product.id}
              className="bg-white border border-[#F2E3D5] rounded-2xl p-3 sm:p-4 flex flex-col justify-between hover:border-[#E07A5F] hover:shadow-md transition-all duration-300 group relative h-full"
            >
              {/* Top Section: Image + Info */}
              <div className="flex flex-col flex-1">
                {/* Image Frame Container Shell */}
                <div className="w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#FFFBF7] border border-[#F1E7DE]/30 relative mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    draggable="false"
                  />

                  {/* Ribbon Badge */}
                  {product.tag && (
                    <span className="absolute top-2 left-2 bg-[#E07A5F] text-white font-serif font-bold text-[9px] tracking-wide uppercase px-2 py-0.5 rounded-md shadow-2xs select-none">
                      {product.tag}
                    </span>
                  )}
                </div>

                {/* Title & Metrics */}
                <div className="flex flex-col items-start text-left space-y-1 mb-4">
                  <span className="text-[9px] uppercase font-bold tracking-wider text-[#A47E6C]">
                    {product.category || "Skincare"}
                  </span>
                  <h3 className="font-serif font-bold text-[#4A3B32] text-xs sm:text-sm md:text-base leading-snug group-hover:text-[#E07A5F] transition-colors duration-200 line-clamp-2">
                    {product.name}
                  </h3>
                  <span className="font-sans font-extrabold text-[#E07A5F] text-xs sm:text-sm pt-0.5">
                    {product.price}
                  </span>
                </div>
              </div>

              {/* Bottom Section: Perfectly Aligned Elegant Social Grid Buttons */}
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 mt-auto border-t border-[#F1E7DE]/40">
                
                {/* Telegram Button */}
                <button
                  type="button"
                  onClick={() => handleInstantOrder(product, "telegram")}
                  className="w-full bg-[#FFFBF7] text-[#4A3B32] border border-[#F2E3D5] hover:bg-[#4A3B32] hover:text-white hover:border-[#4A3B32] py-2.5 rounded-xl text-[11px] font-serif font-bold transition-colors duration-200 cursor-pointer flex items-center justify-center gap-2 select-none leading-none"
                >
                  <i className="fa-brands fa-telegram text-xs flex items-center justify-center"></i>
                  <span className="leading-none">Telegram</span>
                </button>

                {/* WhatsApp Button */}
                <button
                  type="button"
                  onClick={() => handleInstantOrder(product, "whatsapp")}
                  className="w-full bg-[#E07A5F] text-white hover:bg-[#d0694e] py-2.5 rounded-xl text-[9.5px] font-serif font-bold transition-colors duration-200 cursor-pointer flex items-center justify-center gap-2 select-none leading-none"
                >
                  <i className="fa-brands fa-whatsapp text-xs flex items-center justify-center"></i>
                  <span className="leading-none">WhatsApp</span>
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}