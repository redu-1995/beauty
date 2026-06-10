import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ProductCard from "../../cards/ProductCard";
import { globalPerfumeProducts } from "../../../data/perfumeData";

export default function FeaturedFragrances() {
  // 🔍 Extract only the signature formulations marked as featured bestsellers
  const featuredScents = globalPerfumeProducts.filter((product) => product.isFeatured);

  // Initialize Embla with smooth looping, custom snapping, and hover-pausing autoplay
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true, 
      align: "start",
      skipSnaps: false
    }, 
    [
      Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true })
    ]
  );

  return (
    <section className="w-full bg-[#FFFBF7] py-16 px-6 lg:px-12 border-b border-[#F1E7DE]">
      <div className="max-w-7xl mx-auto flex flex-col space-y-10">
        
        {/* Section Header Labels */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="text-left space-y-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#A47E6C] font-bold bg-[#FBE7D6]/50 px-3 py-1.5 rounded-full inline-block select-none">
              Les Étoiles
            </span>
            <h2 className="font-serif text-[#4A3B32] font-bold text-2xl sm:text-3xl tracking-tight">
              Featured Fragrances
            </h2>
            <p className="text-[#705A4F] text-xs sm:text-sm font-medium max-w-md">
              Step into our curated house favorites—highly celebrated masterworks renowned for their rich silage and timeless elegance.
            </p>
          </div>
          
          {/* Desktop Carousel Swipe Guidance Action Prompt */}
          <div className="hidden sm:flex items-center gap-2 text-xs font-serif font-bold text-[#A47E6C] select-none opacity-80">
            <span>Swipe to discover</span>
            <i className="fa-solid fa-arrow-right-long animate-pulse"></i>
          </div>
        </div>

        {/* 🎠 Embla Carousel Track Viewport */}
        <div className="w-full overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex -ml-4 md:-ml-6 items-stretch">
            {featuredScents.map((perfume) => (
              <div 
                key={perfume.id}
                className="flex-[0_0_50%] sm:flex-[0_0_33.333%] lg:flex-[0_0_25%] pl-4 md:pl-6 min-w-0"
              >
                {/* Clean mapping to your unified global ProductCard */}
                <ProductCard
                  image={perfume.image}
                  category={perfume.category}
                  name={perfume.name}
                  price={perfume.price}
                  tag={perfume.tag}
                  // Internal Telegram/WhatsApp order trigger paths are inherited seamlessly!
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}