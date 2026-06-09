import React from "react";

export default function HairConcernCards({ activeConcern, onConcernChange }) {
  // Editorial hair concern matrix mapping issues to actionable click cues
  const concerns = [
    {
      id: "hair-fall",
      title: "Fight Hair Fall",
      actionText: "Strengthen Roots",
      icon: "fa-solid fa-shield-halved",
      description: "Fortifying botanical treatments engineered to reduce breakage and anchor hair follicles.",
      isHeroCard: true // Takes a prominent background style to draw attention
    },
    {
      id: "scalp",
      title: "Scalp Care & Dandruff",
      actionText: "Purify Scalp",
      icon: "fa-solid fa-seedling",
      description: "Soothing formulas infused with tea tree and mint to eliminate flakes and balance oil secretion."
    },
    {
      id: "dryness",
      title: "Deep Dryness Relief",
      actionText: "Restore Hydration",
      icon: "fa-solid fa-droplet",
      description: "Rich lipid-replenishing conditioners that restore deep shine and elasticity to brittle hair."
    },
    {
      id: "frizz",
      title: "Frizz Control & Shine",
      actionText: "Smooth Cuticle",
      icon: "fa-solid fa-wind",
      description: "Weightless humidity shields that smooth down stray flyaways without flattening your natural volume."
    },
    {
      id: "split-ends",
      title: "Repair Split Ends",
      actionText: "Seal Damage",
      icon: "fa-solid fa-wand-magic-sparkles",
      description: "Advanced micro-keratin infusions that temporarily bind frayed cuticles together for immediate length retention."
    }
  ];

  return (
    <section className="w-full bg-[#FFFBF7] py-16 px-6 lg:px-12 border-t border-[#F1E7DE]">
      <div className="max-w-7xl mx-auto flex flex-col space-y-10">
        
        {/* Section Heading */}
        <div className="text-left space-y-2">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#A47E6C] font-bold bg-[#FBE7D6]/50 px-3 py-1.5 rounded-full inline-block select-none">
            Targeted Therapy
          </span>
          <h2 className="font-serif text-[#4A3B32] font-bold text-2xl sm:text-3xl tracking-tight">
            Shop by Hair Concern
          </h2>
          <p className="text-[#705A4F] text-xs sm:text-sm font-medium max-w-md">
            Skip generic browsing. Choose your primary hair goal to see the exact professional formulations designed to solve it.
          </p>
        </div>

        {/* Asymmetrical Layout Grid Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 items-stretch">
          {concerns.map((item) => {
            const isSelected = activeConcern === item.id;

            return (
              <div
                key={item.id}
                onClick={() => onConcernChange && onConcernChange(isSelected ? "all" : item.id)}
                className={`group flex flex-col justify-between p-6 sm:p-8 rounded-3xl border cursor-pointer select-none transition-all duration-400
                  ${item.isHeroCard ? "md:col-span-3" : "md:col-span-3 lg:col-span-2"}
                  ${
                    isSelected
                      ? "border-[#E07A5F] ring-2 ring-[#E07A5F] bg-white shadow-xs"
                      : item.isHeroCard
                      ? "bg-[#4A3B32] border-[#4A3B32] text-white shadow-xs hover:bg-[#3D3029]"
                      : "bg-white border-[#F2E3D5] hover:border-[#E07A5F] hover:shadow-2xs"
                  }
                `}
              >
                {/* Top Block: Icon and Headings */}
                <div className="space-y-4 text-left">
                  <div className={`p-3 rounded-xl border text-sm w-max transition-colors duration-300
                    ${
                      isSelected
                        ? "bg-[#E07A5F] text-white border-[#E07A5F]"
                        : item.isHeroCard
                        ? "bg-white/10 text-[#FBE7D6] border-white/20 group-hover:bg-white/20"
                        : "bg-[#FFFBF7] text-[#A47E6C] border-[#F2E3D5] group-hover:text-[#E07A5F] group-hover:border-[#E07A5F]"
                    }
                  `}>
                    <i className={item.icon}></i>
                  </div>

                  <div className="space-y-1">
                    <h3 className={`font-serif font-bold text-base sm:text-lg tracking-tight transition-colors duration-200
                      ${isSelected ? "text-[#E07A5F]" : item.isHeroCard ? "text-white" : "text-[#4A3B32] group-hover:text-[#E07A5F]"}
                    `}>
                      {item.title}
                    </h3>
                    <p className={`text-xs leading-relaxed font-sans font-medium
                      ${item.isHeroCard && !isSelected ? "text-[#FFFBF7]/80" : "text-[#705A4F]"}
                    `}>
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Block: Call to Action Link Row */}
                <div className="pt-6 mt-6 border-t border-[#F1E7DE]/30 flex items-center justify-between w-full mt-auto">
                  <span className={`text-[11px] font-sans font-bold uppercase tracking-wider
                    ${item.isHeroCard && !isSelected ? "text-[#E07A5F]" : "text-[#A47E6C] group-hover:text-[#E07A5F]"}
                  `}>
                    {item.actionText}
                  </span>
                  
                  <div className={`flex items-center gap-1.5 text-xs font-serif font-bold transition-transform duration-300 group-hover:translate-x-1
                    ${isSelected ? "text-[#E07A5F]" : item.isHeroCard ? "text-white" : "text-[#4A3B32] group-hover:text-[#E07A5F]"}
                  `}>
                    <span>Explore Products</span>
                    <i className="fa-solid fa-arrow-right text-[10px]"></i>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}