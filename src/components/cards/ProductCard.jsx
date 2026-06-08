import React from "react";

export default function ProductCard({ image, category, name, price }) {
  // Target business channel contact handles
  const BUSINESS_PHONE = "251912345678"; // Your actual business phone string 
  const TELEGRAM_USERNAME = "YourBeautyShopHandle"; // Your premium cosmetic shop handle

  // Direct contact API redirection message handler
  const handleInstantOrder = (platform) => {
    const baseMessage = 
      `Hello! I would like to order the following skincare product from your store:\n\n` +
      `✨ Product: ${name}\n` +
      `💰 Price: ${price} ETB\n\n` +
      `Please let me know how to proceed with payment and delivery details!`;

    const encodedMessage = encodeURIComponent(baseMessage);

    if (platform === "whatsapp") {
      window.open(`https://wa.me/${BUSINESS_PHONE}?text=${encodedMessage}`, "_blank");
    } else if (platform === "telegram") {
      window.open(`https://t.me/${TELEGRAM_USERNAME}?text=${encodedMessage}`, "_blank");
    }
  };

  return (
    <div className="bg-white rounded-2xl p-3 sm:p-4 border border-[#F2E3D5] flex flex-col hover:border-[#E07A5F] hover:shadow-xs transition duration-300 group relative">
      
      {/* Product Image Frame Container */}
      <div className="w-full aspect-[4/5] bg-[#FFFBF7] rounded-xl overflow-hidden mb-4 relative border border-[#F1E7DE]/30">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          draggable="false"
        />
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
          {price}
        </span>
      </div>

      {/* Direct Social Messaging Actions - Mobile Responsive Split Grid */}
     <div className="grid grid-cols-2 gap-2 pt-2 mt-auto border-t border-[#F1E7DE]/40">

        {/* Telegram */}
        <button
          type="button"
          onClick={() => handleInstantOrder(product, "telegram")}
          className="w-full bg-[#FFFBF7] text-[#4A3B32] border border-[#F2E3D5] hover:bg-[#4A3B32] hover:text-white hover:border-[#4A3B32] py-2 rounded-xl text-[10px] font-serif font-bold transition flex items-center justify-center gap-1 leading-none whitespace-nowrap overflow-hidden"
        >
          <i className="fa-brands fa-telegram text-[10px] flex-shrink-0"></i>
          <span className="truncate">Telegram</span>
        </button>

        {/* WhatsApp */}
        <button
          type="button"
          onClick={() => handleInstantOrder(product, "whatsapp")}
          className="w-full bg-[#E07A5F] text-white hover:bg-[#d0694e] py-2 rounded-xl text-[10px] font-serif font-bold transition flex items-center justify-center gap-1 leading-none whitespace-nowrap overflow-hidden"
        >
          <i className="fa-brands fa-whatsapp text-[10px] flex-shrink-0"></i>
          <span className="truncate">WhatsApp</span>
        </button>

      </div>

    </div>
  );
}