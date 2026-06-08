import React from "react";

export default function SkincareReviews() {
  const reviews = [
    {
      id: 1,
      name: "Melat Bekele",
      rating: 5,
      date: "Verified Buyer",
      productUsed: "Organic Argan Nourishing Oil",
      text: "My skin feels absolutely amazing after using these products. I struggle with really dry skin during the windy seasons in Addis, but this oil completely restored my skin barrier. It looks glowing without feeling greasy at all!"
    },
    {
      id: 2,
      name: "Yonas Alemu",
      rating: 5,
      date: "Verified Buyer",
      productUsed: "Pore Clarifying Cleanser",
      text: "Finding a cleanser that controls my oily skin without stripping it completely dry used to be impossible. This formula is incredibly gentle but keeps my breakouts completely at bay. A staple in my routine now."
    },
    {
      id: 3,
      name: "Fasika Tesfaye",
      rating: 5,
      date: "Verified Buyer",
      productUsed: "Ceramide Repair Moisturizer",
      text: "I have incredibly sensitive skin that gets red and irritated very easily. This moisturizer has been a total lifesaver. It feels so soothing the second you apply it, and the texture feels like pure luxury."
    }
  ];

  return (
    <section className="w-full bg-white py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-2">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#A47E6C] font-bold bg-[#FBE7D6]/50 px-3 py-1.5 rounded-full inline-block">
            Real Results
          </span>
          <h2 className="font-serif text-[#4A3B32] font-bold text-2xl sm:text-3xl tracking-tight">
            Loved By Our Community
          </h2>
          <p className="text-[#705A4F] text-xs sm:text-sm font-medium max-w-md mx-auto">
            See how our tailored skincare formulations are helping others achieve their healthiest, most radiant skin yet.
          </p>
        </div>

        {/* 3-Column Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div 
              key={review.id}
              className="bg-[#FFFBF7] border border-[#F2E3D5] rounded-2xl p-6 flex flex-col justify-between hover:border-[#E07A5F] transition-colors duration-300 relative"
            >
              <div className="space-y-4">
                {/* Visual Gold Star Rating Bar */}
                <div className="flex items-center gap-1 text-[#E07A5F]">
                  {[...Array(review.rating)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star text-xs"></i>
                  ))}
                </div>

                {/* Core Review Statement Text */}
                <p className="text-[#4A3B32] font-serif italic text-sm leading-relaxed font-medium">
                  "{review.text}"
                </p>
              </div>

              {/* Reviewer Meta Footer Block */}
              <div className="border-t border-[#F1E7DE] pt-4 mt-6 flex flex-col space-y-1.5 text-left">
                <div className="flex items-center justify-between">
                  <span className="font-serif font-bold text-sm text-[#4A3B32]">
                    {review.name}
                  </span>
                  <span className="text-[9px] text-[#A47E6C] font-bold uppercase tracking-wider bg-white border border-[#F1E7DE] px-2 py-0.5 rounded-md">
                    {review.date}
                  </span>
                </div>
                
                {/* Interactive Product Reference Badge */}
                <div className="text-[10px] text-[#705A4F] font-semibold flex items-center gap-1.5">
                  <i className="fa-solid fa-square-check text-[#E07A5F] text-[11px]"></i>
                  <span>Purchased: <strong className="text-[#E07A5F] font-medium">{review.productUsed}</strong></span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}