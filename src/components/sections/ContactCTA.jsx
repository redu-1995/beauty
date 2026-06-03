import React from "react";

export default function ContactCTA() {
  // Direct trigger handler to smooth-scroll back to your Contact Form anchor target
  const handleScrollToForm = () => {
    window.scrollTo({
      top: 200, // Adjusts smoothly to bring the center form into immediate viewport focus
      behavior: "smooth"
    });
  };

  return (
    <section className="w-full bg-white py-16 px-6 lg:px-12 overflow-hidden">
      {/* Outer Card Wrapper Shell with Warm Palette Blend */}
      <div className="max-w-5xl mx-auto bg-[#FFFBF7] border border-[#F1E7DE] rounded-3xl p-8 md:p-14 text-center relative overflow-hidden shadow-xs">
        
        {/* Soft Background Accent Glows */}
        <div className="absolute w-72 h-72 rounded-full bg-[#FBE7D6] opacity-40 blur-3xl -top-20 -right-20 pointer-events-none"></div>
        <div className="absolute w-72 h-72 rounded-full bg-[#FFF3EE] opacity-50 blur-3xl -bottom-20 -left-20 pointer-events-none"></div>

        {/* Content Column Layout Stack */}
        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center space-y-6">
          
          {/* Subtle Decorative Group Sparkle */}
          <div className="w-10 h-10 rounded-full bg-white border border-[#F2E3D5] flex items-center justify-center text-[#E07A5F] shadow-2xs select-none">
            <i className="fa-solid fa-wand-magic-sparkles text-xs"></i>
          </div>

          {/* Main Action Header */}
          <h2 className="font-serif text-[#4A3B32] font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
            Need Beauty Advice?
          </h2>

          {/* Supporting Core Brand Subtext */}
          <p className="text-[#705A4F] text-sm sm:text-base leading-relaxed font-medium max-w-md">
            Our team is ready to help you find the perfect products for your needs. Reach out to us, and let's craft your ideal self-care routine together.
          </p>

          {/* Core Interactive Action Button Trigger */}
          <div className="pt-4 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleScrollToForm}
              className="inline-block w-full sm:w-auto bg-[#E07A5F] text-white px-10 py-4 rounded-xl font-serif font-bold text-sm tracking-wide shadow-xs hover:bg-[#d0694e] hover:shadow-md hover:scale-[1.02] active:scale-[0.99] transition-all duration-300 text-center cursor-pointer select-none"
            >
              Contact Us Today
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}