import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ProductCard from "../../cards/ProductCard";
import { globalHaircareProducts } from "../../../data/haircareData";

export default function FeaturedHaircareProducts() {
  // 🔍 Extract only the items explicitly marked as featured favorites from your data layer
  const featuredHaircare = globalHaircareProducts.filter((product) => product.isFeatured);

  // Initialize Embla with smooth looping and interaction-aware autoplay features
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true, 
      align: "start",
      skipSnaps: false
    }, 
    [
      Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
    ]
  );

  return (
    <section className="w-full bg-white py-16 px-6 lg:px-12 border-t border-b border-[#F1E7DE]">
      <div className="max-w-7xl mx-auto flex flex-col space-y-10">
        
        {/* Section Header Text */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="text-left space-y-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#A47E6C] font-bold bg-[#FBE7D6]/50 px-3 py-1.5 rounded-full inline-block select-none">
              Boutique Highlights
            </span>
            <h2 className="font-serif text-[#4A3B32] font-bold text-2xl sm:text-3xl tracking-tight">
              Featured Haircare
            </h2>
            <p className="text-[#705A4F] text-xs sm:text-sm font-medium max-w-md">
              Discover our top-rated essentials, fresh new arrivals, and salon-grade professional treatments.
            </p>
          </div>
          
          {/* Swipe Indicator Prompt for Shoppers */}
          <div className="hidden sm:flex items-center gap-2 text-xs font-serif font-bold text-[#A47E6C] select-none opacity-80">
            <span>Swipe to view highlights</span>
            <i className="fa-solid fa-arrow-right-long animate-pulse"></i>
          </div>
        </div>

        {/* 🎠 Embla Carousel Track Wrapper Viewport */}
        <div className="w-full overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex -ml-4 md:-ml-6 items-stretch">
            {featuredHaircare.map((product) => (
              <div 
                key={product.id}
                className="flex-[0_0_50%] sm:flex-[0_0_33.333%] lg:flex-[0_0_25%] pl-4 md:pl-6 min-w-0"
              >
                {/* Clean, centralized ProductCard component rendering */}
                <ProductCard
                  image={product.image}
                  category={product.category}
                  name={product.name}
                  price={product.price}
                  tag={product.tag}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}