// src/components/home/Testimonials.jsx

import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Hana M.",
    role: "Verified Customer",
    review:
      "The skincare products exceeded my expectations. My skin feels healthier and more radiant than ever.",
  },
  {
    id: 2,
    name: "Sara T.",
    role: "Beauty Enthusiast",
    review:
      "Amazing quality products and excellent customer service. I always find exactly what I need.",
  },
  {
    id: 3,
    name: "Bethlehem K.",
    role: "Regular Customer",
    review:
      "Fast delivery, authentic products, and beautiful packaging. Highly recommended for beauty lovers.",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-white py-16 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12">

          <span className="text-sm uppercase tracking-[0.3em] text-[#A47E6C] font-semibold">
            Testimonials
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold font-serif text-[#4A3B32]">
            What Our Customers Say
          </h2>

          <p className="mt-4 text-[#A47E6C] max-w-2xl mx-auto">
            Discover why beauty lovers trust us for premium skincare,
            makeup, and self-care essentials.
          </p>

        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#FAF7F4] rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
            >

              {/* Stars */}
              <div className="flex gap-1 mb-5 text-[#E07A5F]">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>

              {/* Review */}
              <p className="text-[#705A4F] leading-relaxed italic">
                "{testimonial.review}"
              </p>

              {/* Customer */}
              <div className="mt-6 border-t border-[#E8D8CB] pt-4">

                <h4 className="font-semibold text-[#4A3B32]">
                  {testimonial.name}
                </h4>

                <p className="text-sm text-[#A47E6C]">
                  {testimonial.role}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}