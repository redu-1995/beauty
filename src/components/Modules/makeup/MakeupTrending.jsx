import React from "react";
import ProductCard from "../../cards/ProductCard";

// 📦 Curated Dataset for the Viral Social Media Matrix
const viralProductsData = [
  {
    id: "viral-01",
    name: "High-Shine Plumping Lip Tint Oil",
    category: "Lips",
    price: "780",
    image: "https://images.unsplash.com/photo-1619451334792-150fd785ee74?q=80&w=600",
    tag: "🔥 TikTok Viral",
    views: "2.4M views this week"
  },
  {
    id: "viral-02",
    name: "Velvet Matte Weightless Foundation",
    category: "Face",
    price: "1,250",
    image: "https://images.unsplash.com/photo-1631730359575-38e4755d772b?q=80&w=600",
    tag: "📈 Trending Now",
    views: "94k orders saved"
  },
  {
    id: "viral-03",
    name: "Flawless HD Crease-Proof Concealer",
    category: "Face",
    price: "720",
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=600",
    tag: "👑 Best Seller",
    views: "Top rated item"
  }
];

export default function MakeupTrending() {
  return (
    <section className="w-full bg-[#FFFBF7] py-16 px-6 lg:px-12 border-t border-[#F1E7DE]">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        
        {/* Section Headline Block with Sparkle Hype */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="text-left space-y-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#E07A5F] font-bold bg-[#FBE7D6] px-3 py-1.5 rounded-full inline-block select-none animate-pulse">
              Trending Social Favorites
            </span>
            <h2 className="font-serif text-[#4A3B32] font-bold text-2xl sm:text-3xl tracking-tight">
              As Seen On Your Feed
            </h2>
            <p className="text-[#705A4F] text-xs sm:text-sm font-medium max-w-md">
              The viral beauty essentials blowing up on TikTok and Instagram. Grab yours before they sell out again!
            </p>
          </div>
        </div>

        {/* Asymmetrical Layout Split: 1 Large Left Hype Card + 2 Right Grid Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* Left Column: Premium Promotional Social Hype Feature Card */}
          <div className="bg-[#4A3B32] rounded-3xl p-8 flex flex-col justify-between text-left relative overflow-hidden group min-h-[380px] lg:min-h-full">
            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-2 text-white bg-white/10 px-3 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider w-max border border-white/20">
                <i className="fa-brands fa-tiktok text-[#25F4EE]"></i> Viral Sensation
              </div>
              <h3 className="font-serif text-white font-bold text-2xl sm:text-3xl leading-tight max-w-xs">
                The Lip Oil Everyone Is Talking About
              </h3>
              <p className="text-[#FFFBF7]/80 font-sans text-xs sm:text-sm max-w-xs leading-relaxed">
                Formulated with natural cherry seed extract to give you a glassy, mirror-like high shine finish without any sticky residue.
              </p>
            </div>

            <div className="pt-6 relative z-10">
              <span className="text-[11px] font-sans font-extrabold text-[#E07A5F] tracking-widest uppercase block mb-2">
                🔥 Selling Out Fast
              </span>
              <p className="text-[#FFFBF7] font-serif text-lg font-bold">
                Get Instant Access Via Telegram
              </p>
            </div>

            {/* Subtle background abstract aesthetic shapes for mood lighting */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#E07A5F]/20 rounded-full blur-2xl transition-transform duration-700 group-hover:scale-110 pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none"></div>
          </div>

          {/* Right Columns: Reuses your standardized ProductCard components */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 items-stretch">
            {viralProductsData.map((product) => (
              <div key={product.id} className="relative flex flex-col h-full group">
                
                {/* Visual Live Social Views Counter Sub-Header Banner */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-1 bg-white/90 backdrop-blur-xs border border-[#F2E3D5] px-2 py-1 rounded-md text-[9px] font-sans font-extrabold text-[#705A4F] shadow-2xs select-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-ping"></span>
                  {product.views}
                </div>

                {/* Main Shared Product Card Component Asset Layout */}
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