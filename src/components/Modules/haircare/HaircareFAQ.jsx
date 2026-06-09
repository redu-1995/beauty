import React, { useState } from "react";

export default function HaircareFAQ() {
  // Local tracking index state for expanded card toggle rows
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // 📦 Curated Dataset addressing explicit hair customer buying hesitations
  const faqData = [
    {
      question: "How often should I use hair oil?",
      answer: "For general hydration and growth support, applying hair oil 1–2 times a week as a pre-shampoo treatment works best. If you have extremely dry or curly textured ends, you can warm 2-3 small drops between your palms and smooth them over your hair ends daily to seal in moisture and prevent split ends."
    },
    {
      question: "Which products help with dandruff?",
      answer: "Our Tea Tree & Peppermint Scalp Detoxing Scrub along with the Rosemary & Biotin Volumizing Shampoo are engineered precisely to combat flakes. Tea tree carries natural antimicrobial benefits that target dandruff at the source, while peppermint cools and immediately calms root itching."
    },
    {
      question: "What is best for curly hair?",
      answer: "Curly textures thrive on deep moisture and gentle structures. The ultimate curly ritual pairs our Coconut Milk Moisture Curl Defining Cream (to shape and bundle spirals without stiffness) with our Shea Butter Deep Conditioning Mask once a week to prevent structural dryness and frizz."
    },
    {
      question: "Are these formulas safe for color-treated or relaxed hair?",
      answer: "Yes, absolutely! Our entire haircare catalog is strictly free from harsh sulfates, parabens, and stripping alcohols. They wash and treat your hair cleanly without fading your salon pigments or compromising treated cuticle structures."
    }
  ];

  return (
    <section className="w-full bg-[#FFFBF7] py-16 px-6 lg:px-12 border-t border-[#F1E7DE]">
      <div className="max-w-4xl mx-auto flex flex-col space-y-10">
        
        {/* Section Heading Label */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#A47E6C] font-bold bg-[#FBE7D6]/50 px-3 py-1.5 rounded-full inline-block select-none">
            Have Questions?
          </span>
          <h2 className="font-serif text-[#4A3B32] font-bold text-2xl sm:text-3xl tracking-tight">
            Haircare FAQ
          </h2>
          <p className="text-[#705A4F] text-xs sm:text-sm font-medium">
            Clear, straightforward guidance to help you get the absolute most out of your healthy hair journey.
          </p>
        </div>

        {/* Accordion Core Row Container Layout Stack */}
        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = expandedIndex === index;

            return (
              <div
                key={index}
                className="bg-white border border-[#F2E3D5] rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#E07A5F]"
              >
                {/* Accordion Toggle Trigger Header Button Header */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left gap-4 cursor-pointer select-none focus:outline-hidden"
                >
                  <span className="font-serif font-bold text-[#4A3B32] text-sm sm:text-base group-hover:text-[#E07A5F] transition-colors duration-200">
                    {faq.question}
                  </span>
                  
                  {/* Circular Dynamic Arrow Indicator Shape */}
                  <div className={`w-6 h-6 rounded-full border border-[#F2E3D5] flex items-center justify-center text-[10px] shrink-0 transition-transform duration-300
                    ${isOpen ? "bg-[#E07A5F] border-[#E07A5F] text-white rotate-180" : "bg-[#FFFBF7] text-[#A47E6C]"}
                  `}>
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                </button>

                {/* Smooth Expandable Answer Panel Container */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden
                    ${isOpen ? "max-h-48 border-t border-[#F1E7DE]/50 bg-[#FFFBF7]/30" : "max-h-0"}
                  `}
                >
                  <p className="p-6 text-[#705A4F] font-sans text-xs sm:text-sm font-medium leading-relaxed text-left">
                    {faq.answer}
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