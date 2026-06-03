import React, { useState } from "react";

export default function ContactFAQ() {
  // Array matrix containing your core consumer query segments
  const faqData = [
    {
      id: 1,
      question: "How long does delivery take?",
      answer: "Delivery typically takes 1–3 business days. For orders within Addis Ababa, we often arrange same-day or next-day delivery depending on when your order is confirmed.",
    },
    {
      id: 2,
      question: "Are your products authentic?",
      answer: "Yes, 100%. Authenticity is our core promise. All skincare, makeup, and perfumes are imported directly and sourced exclusively from trusted suppliers that meet our strict quality standards.",
    },
    {
      id: 3,
      question: "Can I return products?",
      answer: "We accept returns within 7 days of delivery, provided the product remains completely unopened, unused, and in its original premium packaging with seals intact due to hygiene requirements.",
    },
  ];

  // Track the ID of the currently expanded accordion item (null means all are closed)
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle open/close state logic safely
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#FFFBF7] py-16 px-6 lg:px-12 border-t border-b border-[#F1E7DE]">
      <div className="max-w-3xl mx-auto flex flex-col space-y-10">
        
        {/* Section Heading Stack */}
        <div className="text-center space-y-2">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#A47E6C] font-bold bg-[#FBE7D6]/50 px-3 py-1.5 rounded-full inline-block">
            Clear Your Doubts
          </span>
          <h2 className="font-serif text-[#4A3B32] font-bold text-2xl sm:text-3xl tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-[#705A4F] text-xs sm:text-sm font-medium max-w-md mx-auto">
            Got questions? We have quick, direct answers to help you navigate your beauty shopping smoothly.
          </p>
        </div>

        {/* Accordion List Container Stack */}
        <div className="space-y-4">
          {faqData.map((faq) => {
            const isOpen = activeIndex === faq.id;
            
            return (
              <div 
                key={faq.id}
                className="bg-white border border-[#F2E3D5] rounded-2xl overflow-hidden hover:border-[#E07A5F] transition-colors duration-300 shadow-xs"
              >
                {/* Accordion Trigger Header Click Box */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left font-serif text-sm sm:text-base font-bold text-[#4A3B32] hover:text-[#E07A5F] transition-colors duration-200 cursor-pointer select-none"
                >
                  <span>{faq.question}</span>
                  
                  {/* Rotating Action Arrow Pod */}
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border border-[#F2E3D5] transition-transform duration-300 ${isOpen ? "rotate-180 bg-[#E07A5F] text-white border-[#E07A5F]" : "text-[#A47E6C] bg-[#FFFBF7]"}`}>
                    <i className="fa-solid fa-chevron-down text-[10px]"></i>
                  </div>
                </button>

                {/* Sliding Dynamic Answer Panel Container */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[200px] border-t border-[#F1E7DE]/50" : "max-h-0"}`}
                >
                  <div className="p-6 text-sm text-[#705A4F] font-medium leading-relaxed bg-[#FFFBF7]/30 text-left">
                    {faq.answer}
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