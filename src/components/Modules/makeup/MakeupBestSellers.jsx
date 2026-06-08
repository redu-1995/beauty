import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ProductCard from "../../cards/ProductCard";

// 📦 Curated Dataset for the Makeup Bestsellers Matrix
const bestsellerData = [
  {
    id: "bs-01",
    name: "Velvet Matte Weightless Foundation",
    category: "Face",
    price: "1,250",
    image: "https://images.unsplash.com/photo-1631730359575-38e4755d772b?q=80&w=600",
    tag: "Top Rated"
  },
  {
    id: "bs-02",
    name: "Satin Hydrating Lip Terracotta",
    category: "Lips",
    price: "850",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=600",
    tag: "Bestseller"
  },
  {
    id: "bs-03",
    name: "Flawless HD Crease-Proof Concealer",
    category: "Face",
    price: "720",
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=600",
    tag: "Trending"
  },
  {
    id: "bs-04",
    name: "Volumizing Waterproof Silk Mascara",
    category: "Eyes",
    price: "680",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=600",
    tag: "Must-Have"
  },
  {
    id: "bs-05",
    name: "Ultra-Pigmented 12-Color Eyeshadow Palette",
    category: "Eyes",
    price: "1,400",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=600",
    tag: "Top Rated"
  }
];

export default function MakeupBestSellers() {
  // Initialize Embla with your standard configurations and loop autoplay support
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
              Most Loved
            </span>
            <h2 className="font-serif text-[#4A3B32] font-bold text-2xl sm:text-3xl tracking-tight">
              Best Sellers
            </h2>
            <p className="text-[#705A4F] text-xs sm:text-sm font-medium max-w-md">
              The community's holy grail cosmetics, curated and proven to elevate your signature beauty routine.
            </p>
          </div>
          
          {/* Subtle Swipe Helper Prompt Hint for Desktop/Mobile users */}
          <div className="hidden sm:flex items-center gap-2 text-xs font-serif font-bold text-[#A47E6C] select-none opacity-80">
            <span>Swipe to browse</span>
            <i className="fa-solid fa-arrow-right-long animate-pulse"></i>
          </div>
        </div>

        {/* 🎠 Embla Carousel Viewport Framework Structure */}
        <div className="w-full overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex -ml-4 md:-ml-6 items-stretch">
            {bestsellerData.map((product) => (
              <div 
                key={product.id}
                className="flex-[0_0_50%] sm:flex-[0_0_33.333%] lg:flex-[0_0_25%] pl-4 md:pl-6 min-w-0"
              >
                {/* Leveraging your updated ProductCard component. 
                  This will render perfectly aligned buttons and exact brand color schemes automatically!
                */}
                <ProductCard
                  image={product.image}
                  category={product.category}
                  name={product.name}
                  price={product.price}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}