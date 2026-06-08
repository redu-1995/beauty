import React from "react";

export default function SkincareRoutine() {
  // Ordered layering pipeline data mapping out standard aesthetic steps
  const routineSteps = [
    {
      stepNumber: "01",
      phase: "Cleanse",
      title: "Gentle Purifying",
      description: "Wash away impurities, sweat, and excess sebum to create a pristine, receptive canvas for your active topicals.",
      icon: "fa-solid fa-soap",
    },
    {
      stepNumber: "02",
      phase: "Treat",
      title: "Targeted Serums",
      description: "Apply highly concentrated active formulas deep into tissues to address concerns like dark spots, acne, or fine lines.",
      icon: "fa-solid fa-droplet",
    },
    {
      stepNumber: "03",
      phase: "Moisturize",
      title: "Barrier Hydration",
      description: "Lock in core hydration and seal down your treatments with a rich lipid cream to support skin cell elasticity.",
      icon: "fa-solid fa-sparkles",
    },
    {
      stepNumber: "04",
      phase: "Protect",
      title: "Shield Defense",
      description: "Defend your skin barrier from intense environmental stressors and aging radiation with a lightweight daily SPF layer.",
      icon: "fa-solid fa-shield-halved",
    }
  ];

  return (
    <section className="w-full bg-[#FFFBF7] py-16 px-6 lg:px-12 border-t border-b border-[#F1E7DE]">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-2">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#A47E6C] font-bold bg-[#FBE7D6]/50 px-3 py-1.5 rounded-full inline-block">
            Layering Guide
          </span>
          <h2 className="font-serif text-[#4A3B32] font-bold text-2xl sm:text-3xl tracking-tight">
            Simple Daily Routine
          </h2>
          <p className="text-[#705A4F] text-xs sm:text-sm font-medium max-w-md mx-auto">
            Maximize your results by mastering the essential sequence of premium dermal care.
          </p>
        </div>

        {/* Dynamic Responsive Visual Timeline Container */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          
          {/* Decorative connecting backbone bridge line (Hidden on mobile stack) */}
          <div className="absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-[#F2E3D5] z-0 hidden md:block"></div>

          {routineSteps.map((step, index) => (
            <div 
              key={step.stepNumber} 
              className="flex flex-col items-center md:items-start text-center md:text-left group relative z-10 space-y-4"
            >
              {/* Timeline Node Bubble Pod */}
              <div className="w-14 h-14 rounded-2xl bg-white border border-[#F2E3D5] flex items-center justify-center text-[#E07A5F] group-hover:bg-[#E07A5F] group-hover:text-white group-hover:border-[#E07A5F] transition-all duration-300 shadow-2xs">
                <i className={`${step.icon} text-lg`}></i>
              </div>

              {/* Step Metric & Label Matrix */}
              <div className="flex flex-col space-y-1.5 px-2">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <span className="text-[10px] font-sans font-bold text-[#A47E6C] tracking-wider uppercase">
                    Step {step.stepNumber}
                  </span>
                  <span className="text-[11px] font-serif font-extrabold text-[#E07A5F] bg-[#FBE7D6]/30 px-2 py-0.5 rounded-md uppercase">
                    {step.phase}
                  </span>
                </div>
                
                <h3 className="font-serif font-bold text-base text-[#4A3B32]">
                  {step.title}
                </h3>
                
                <p className="text-[#705A4F] text-xs leading-relaxed font-medium max-w-[260px] md:max-w-none mx-auto md:mx-0">
                  {step.description}
                </p>
              </div>

              {/* Mobile Decorative Chevron Arrow Indicator (Hidden on last step and desktop) */}
              {index !== routineSteps.length - 1 && (
                <div className="text-[#F2E3D5] pt-2 md:hidden">
                  <i className="fa-solid fa-chevron-down text-sm"></i>
                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}