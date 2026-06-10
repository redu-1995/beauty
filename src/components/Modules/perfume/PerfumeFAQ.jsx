import React, { useState } from "react";

export default function PerfumeFAQ() {
  // Local tracking index state for expanded accordion rows
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // 📦 Curated Dataset addressing explicit customer fragrance queries
  const faqData = [
    {
      question: "How long does the fragrance last?",
      answer: "Because we formulate our collection with highly concentrated, pure biological aromatic oils, our fragrances typically last between 8 to 12+ hours on the skin. Deeper families featuring woody or oriental base notes (like Oud or Amber) tend to linger even longer, extending onto clothing until your next wash cycle."
    },
    {
      question: "What is the difference between Eau de Parfum and Eau de Toilette?",
      answer: "The primary difference lies in the concentration of aromatic perfume oils. Eau de Toilette (EDT) generally contains 5% to 15% oil concentration, making it light and perfect for a fresh morning spritz. Eau de Parfum (EDP) carries a richer 15% to 20% concentration, providing a deeper profile with enhanced longevity and stronger sillage for all-day or evening wear."
    },
    {
      question: "Are your perfumes authentic?",
      answer: "Yes, 100%. Every single bottle in our collection is an authentic boutique creation blended and packaged right here in Addis Ababa. We source our rare botanical extractions directly from certified global distributors and never use cutting agents, synthetic dilution compounds, or harsh water fillers."
    },
    {
      question: "Which fragrance is best for everyday wear?",
      answer: "For an effortless, clean, and professional daily option, we highly recommend our fresh or light floral compositions—such as the Sicilian Bergamot & Sea Salt Breeze. These blend beautifully close to the skin, keeping you revived and confident without overpowering small workspaces or office environments."
    }
  ];

  return (
    <section className="w-full bg-[#FFFBF7] py-16 px-6 lg:px-12 border-t border-[#F1E7DE]">
      <div className="max-w-4xl mx-auto flex flex-col space-y-10">
        
        {/* Section Heading Label */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#A47E6C] font-bold bg-[#FBE7D6]/50 px-3 py-1.5 rounded-full inline-block select-none">
            Olfactory Guidance
          </span>
          <h2 className="font-serif text-[#4A3B32] font-bold text-2xl sm:text-3xl tracking-tight">
            Fragrance Questions
          </h2>
          <p className="text-[#705A4F] text-xs sm:text-sm font-medium">
            Clear, detailed insights into concentrations, wear times, and selecting your ultimate signature bottle.
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
                {/* Accordion Toggle Trigger Button Header */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left gap-4 cursor-pointer select-none focus:outline-hidden"
                >
                  <span className="font-serif font-bold text-[#4A3B32] text-sm sm:text-base transition-colors duration-200">
                    {faq.question}
                  </span>
                  
                  {/* Circular Dynamic Chevron Indicator Shape */}
                  <div className={`w-6 h-6 rounded-full border border-[#F2E3D5] flex items-center justify-center text-[10px] shrink-0 transition-transform duration-300
                    ${isOpen ? "bg-[#E07A5F] border-[#E07A5F] text-white rotate-180" : "bg-[#FFFBF7] text-[#A47E6C]"}
                  `}>
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                </button>

                {/* Smooth Expandable Answer Panel Container */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden
                    ${isOpen ? "max-h-56 border-t border-[#F1E7DE]/50 bg-[#FFFBF7]/30" : "max-h-0"}
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