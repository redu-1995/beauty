import React from "react";

const hairReviews = [
  {
    id: "hair-rev-01",
    rating: 5,
    quote: "My hair feels much healthier, thicker, and softer after only a few weeks of using the Rosemary & Biotin Shampoo. It completely transformed my itchy scalp, and the fresh botanical scent is incredible!",
    author: "Ruhama D.",
    location: "Addis Ababa",
    tag: "Verified Purchase",
    profile: "Hair Type: Fine / Thinning"
  },
  {
    id: "hair-rev-02",
    rating: 5,
    quote: "The Shea Butter Mask is an absolute lifesaver for coarse, high-porosity curls. It gives my hair instant slip in the shower, makes detangling a breeze, and completely locks out frizz even in humid weather.",
    author: "Aida M.",
    location: "Bole",
    tag: "Verified Purchase",
    profile: "Hair Type: Coarse / 4C Curls"
  },
  {
    id: "hair-rev-03",
    rating: 5,
    quote: "I was skeptical about hair oils because my scalp tends to get greasy, but the Premium Castor Oil blend is incredibly lightweight. My split ends look sealed, and I've noticed much less breakage on my wash days.",
    author: "Lydia T.",
    location: "Megenagna",
    tag: "Verified Purchase",
    profile: "Hair Type: Dry / Split Ends"
  }
];

export default function CustomerReviews() {
  return (
    <section className="w-full bg-white py-16 px-6 lg:px-12 border-t border-[#F1E7DE]">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        
        {/* Section Header Labels */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#A47E6C] font-bold bg-[#FBE7D6]/50 px-3 py-1.5 rounded-full inline-block select-none">
            Real Experiences
          </span>
          <h2 className="font-serif text-[#4A3B32] font-bold text-2xl sm:text-3xl tracking-tight">
            Loved by Our Community
          </h2>
          <p className="text-[#705A4F] text-xs sm:text-sm font-medium">
            Read authentic reviews from women who have successfully unlocked healthier, shinier, and stronger hair with our routine.
          </p>
        </div>

        {/* 3-Column Layout Matrix Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {hairReviews.map((review) => (
            <div 
              key={review.id}
              className="bg-[#FFFBF7] border border-[#F2E3D5] rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#E07A5F] hover:shadow-2xs transition-all duration-300 relative group h-full text-left"
            >
              {/* Upper Section: Stars, Badges, and Text */}
              <div className="space-y-4">
                
                {/* Stars Row and Verified Ribbon */}
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-1 text-[#E07A5F] text-[11px]">
                    {[...Array(review.rating)].map((_, index) => (
                      <i key={index} className="fa-solid fa-star"></i>
                    ))}
                  </div>
                  <span className="text-[9px] font-sans font-bold uppercase tracking-wider text-[#A47E6C] bg-white border border-[#F2E3D5] px-2 py-0.5 rounded-md flex items-center gap-1 shadow-2xs select-none">
                    <i className="fa-solid fa-badge-check text-[#25D366]"></i> {review.tag}
                  </span>
                </div>

                {/* Main Testimonial Block Quote text */}
                <p className="font-serif italic text-[#4A3B32] text-xs sm:text-sm leading-relaxed relative pt-2">
                  <span className="absolute -top-1 -left-1 text-3xl text-[#FBE7D6] font-serif leading-none select-none pointer-events-none">“</span>
                  <span className="relative z-10">{review.quote}</span>
                </p>
              </div>

              {/* Lower Section: User Meta Attributes Profiles */}
              <div className="pt-6 mt-6 border-t border-[#F1E7DE]/50 space-y-1.5 mt-auto">
                <div>
                  <h4 className="font-serif font-extrabold text-[#4A3B32] text-xs sm:text-sm">
                    {review.author}
                  </h4>
                  <span className="text-[10px] font-sans font-bold text-[#A47E6C] tracking-wide">
                    {review.location}
                  </span>
                </div>
                
                {/* Hair Profile Badge (Reduces purchasing friction for targeted hair textures) */}
                <div className="text-[9px] font-sans font-semibold text-[#705A4F] bg-[#FBE7D6]/30 border border-[#F1E7DE]/40 px-2 py-1 rounded-md inline-block">
                  {review.profile}
                </div>
              </div>

              {/* Background Accent Shading Flare */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-[#FBE7D6]/20 to-transparent rounded-tr-3xl pointer-events-none"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}