import React from "react";

export default function MakeupShopByConcern({ activeConcern, onConcernChange }) {
  // Visual configuration matrix for target skincare/makeup concerns
  const concerns = [
    {
      id: "oily",
      title: "Oily Skin Essentials",
      description: "Mattifying formulas designed to control shine and blur pores cleanly all day.",
      icon: "fa-solid fa-droplet-slash",
      bgImage: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=400"
    },
    {
      id: "dry",
      title: "Dry Skin Hydrators",
      description: "Dewy, moisture-infused bases that prevent caking and flaky patches.",
      icon: "fa-solid fa-cloud-rain",
      bgImage: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=400"
    },
    {
      id: "longwear",
      title: "24H Long-Lasting",
      description: "Smudge-proof, transfer-resistant staples engineered to survive long hours.",
      icon: "fa-solid fa-clock",
      bgImage: "https://images.unsplash.com/photo-1631730359575-38e4755d772b?q=80&w=400"
    },
    {
      id: "natural",
      title: "Clean & Natural Look",
      description: "Weightless, sheer pigments for that effortless, second-skin radiance.",
      icon: "fa-solid fa-sparkles",
      bgImage: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=400"
    }
  ];

  return (
    <section className="w-full bg-[#FFFBF7] py-16 px-6 lg:px-12 border-t border-[#F1E7DE]">
      <div className="max-w-7xl mx-auto flex flex-col space-y-10">
        
        {/* Section Heading Label */}
        <div className="text-left space-y-2">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#A47E6C] font-bold bg-[#FBE7D6]/50 px-3 py-1.5 rounded-full inline-block select-none">
            Tailored Beauty
          </span>
          <h2 className="font-serif text-[#4A3B32] font-bold text-2xl sm:text-3xl tracking-tight">
            Shop by Concern
          </h2>
          <p className="text-[#705A4F] text-xs sm:text-sm font-medium max-w-md">
            Skip the guesswork. Choose your personal skin priority to view the exact products engineered for your goals.
          </p>
        </div>

        {/* Responsive Grid Layout Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {concerns.map((concern) => {
            const isSelected = activeConcern === concern.id;

            return (
              <div
                key={concern.id}
                onClick={() => onConcernChange && onConcernChange(isSelected ? "all" : concern.id)}
                className={`group relative rounded-3xl overflow-hidden p-6 h-64 flex flex-col justify-end border cursor-pointer transition-all duration-500 select-none shadow-xs hover:shadow-md
                  ${
                    isSelected
                      ? "border-[#E07A5F] ring-2 ring-[#E07A5F]"
                      : "border-[#F2E3D5] hover:border-[#E07A5F]"
                  }
                `}
              >
                {/* Visual Ambient Dark Photographic Overlay Background Asset */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={concern.bgImage}
                    alt={concern.title}
                    className="w-full h-full object-cover transition-transform duration-750 scale-105 group-hover:scale-100 opacity-20 group-hover:opacity-30 blend-luminosity"
                    draggable="false"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FFFBF7] via-[#FFFBF7]/90 to-transparent"></div>
                </div>

                {/* Card Content Layer */}
                <div className="relative z-10 space-y-2 flex flex-col items-start text-left">
                  {/* Icon Badge Indicator */}
                  <div className={`p-2.5 rounded-xl border mb-1 transition-colors duration-300
                    ${
                      isSelected
                        ? "bg-[#E07A5F] text-white border-[#E07A5F]"
                        : "bg-white text-[#A47E6C] border-[#F2E3D5] group-hover:text-[#E07A5F] group-hover:border-[#E07A5F]"
                    }
                  `}>
                    <i className={`${concern.icon} text-sm`}></i>
                  </div>

                  {/* Concern Title Text */}
                  <h3 className="font-serif font-bold text-[#4A3B32] text-sm sm:text-base group-hover:text-[#E07A5F] transition-colors duration-200">
                    {concern.title}
                  </h3>

                  {/* Descriptive Context Snippet Label */}
                  <p className="text-[#705A4F] font-sans text-xs font-medium leading-relaxed">
                    {concern.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}