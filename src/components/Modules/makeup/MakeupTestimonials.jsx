import React from "react";

// 📦 Authentic Community Review Data Matrix
const reviewData = [
  {
    id: "rev-01",
    rating: 5,
    quote: "Finding the right foundation shade here in Addis used to be a guessing game, but this Velvet Matte formula matches my skin tone flawlessly! It is completely weightless and holds up beautifully under the afternoon sun without getting oily.",
    author: "Selamawit T.",
    location: "Addis Ababa",
    tag: "Verified Buyer",
    profile: "Skin Type: Oily / Shade: Warm Honey"
  },
  {
    id: "rev-02",
    rating: 5,
    quote: "I am absolutely obsessed with the Hydrating Lip Terracotta! The pigment is rich, and it keeps my lips smooth and moisturized for hours. I placed my order directly through Telegram and received it the very same afternoon.",
    author: "Danait K.",
    location: "Bole",
    tag: "Verified Buyer",
    profile: "Skin Concern: Sensitive / Dry Lips"
  },
  {
    id: "rev-03",
    rating: 5,
    quote: "The 12-Color Eyeshadow Palette is highly pigmented with almost zero fallout. Plus, the vegan blending brushes are incredibly soft and feel like a luxury boutique brand. Highly recommend their customer service!",
    author: "Meron A.",
    location: "CmC",
    tag: "Verified Buyer",
    profile: "Beauty Preference: Bold Makeup Look"
  }
];

export default function MakeupTestimonials() {
  return (
    <section className="w-full bg-white py-16 px-6 lg:px-12 border-t border-[#F1E7DE]">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#A47E6C] font-bold bg-[#FBE7D6]/50 px-3 py-1.5 rounded-full inline-block select-none">
            Community Love
          </span>
          <h2 className="font-serif text-[#4A3B32] font-bold text-2xl sm:text-3xl tracking-tight">
            What Our Glow Girls Say
          </h2>
          <p className="text-[#705A4F] text-xs sm:text-sm font-medium">
            Real feedback from real customers. Discover why our weightless formulations are becoming daily essentials.
          </p>
        </div>

        {/* Testimonials Responsive Grid Matrix Layout Framework */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {reviewData.map((review) => (
            <div 
              key={review.id}
              className="bg-[#FFFBF7] border border-[#F2E3D5] rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#E07A5F] hover:shadow-xs transition-all duration-300 relative group h-full text-left"
            >
              {/* Top Block: Ratings & Content */}
              <div className="space-y-4">
                
                {/* Star Ratings Row Layout + Verified Ribbon Badge */}
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-1 text-[#E07A5F] text-[11px]">
                    {[...Array(review.rating)].map((_, index) => (
                      <i key={index} className="fa-solid fa-star"></i>
                    ))}
                  </div>
                  <span className="text-[9px] font-sans font-bold uppercase tracking-wider text-[#A47E6C] bg-white border border-[#F2E3D5] px-2 py-0.5 rounded-md flex items-center gap-1 shadow-2xs select-none">
                    <i className="fa-solid fa-circle-check text-[#25D366]"></i> {review.tag}
                  </span>
                </div>

                {/* Main Quote Frame Content Block */}
                <p className="font-serif italic text-[#4A3B32] text-xs sm:text-sm leading-relaxed relative pt-2">
                  <span className="absolute -top-1 -left-1 text-3xl text-[#FBE7D6] font-serif leading-none select-none pointer-events-none">“</span>
                  <span className="relative z-10">{review.quote}</span>
                </p>
              </div>

              {/* Bottom Block: Author Profile Metas */}
              <div className="pt-6 mt-6 border-t border-[#F1E7DE]/50 space-y-1.5 mt-auto">
                <div>
                  <h4 className="font-serif font-extrabold text-[#4A3B32] text-xs sm:text-sm">
                    {review.author}
                  </h4>
                  <span className="text-[10px] font-sans font-bold text-[#A47E6C] tracking-wide">
                    {review.location}
                  </span>
                </div>
                
                {/* Skin Context Tag (Builds trust for online shoppers) */}
                <div className="text-[9px] font-sans font-semibold text-[#705A4F] bg-[#FBE7D6]/30 border border-[#F1E7DE]/40 px-2 py-1 rounded-md inline-block">
                  {review.profile}
                </div>
              </div>

              {/* Decorative Subtle Back-card flourish shape */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-[#FBE7D6]/20 to-transparent rounded-tr-3xl pointer-events-none"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}