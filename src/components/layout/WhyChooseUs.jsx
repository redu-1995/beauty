// src/components/home/WhyChooseUs.jsx

import React from "react";

const features = [
  {
    id: 1,
    icon: "fa-gem",
    title: "Premium Quality",
    description:
      "Carefully selected beauty products crafted to enhance your daily self-care routine.",
  },
  {
    id: 2,
    icon: "fa-shield-heart",
    title: "Authentic Products",
    description:
      "Every item is sourced from trusted brands to ensure quality and reliability.",
  },
  {
    id: 3,
    icon: "fa-truck-fast",
    title: "Fast Delivery",
    description:
      "Quick and secure delivery to bring your favorite beauty essentials directly to you.",
  },
  {
    id: 4,
    icon: "fa-user-check",
    title: "Beauty Experts",
    description:
      "Dedicated support and recommendations to help you find products that fit your needs.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-[#FAF7F4] py-16 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">

          <span className="text-sm uppercase tracking-[0.3em] text-[#A47E6C] font-semibold">
            Why Choose Us
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold font-serif text-[#4A3B32]">
            Beauty You Can Trust
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-[#A47E6C]">
            We combine quality, authenticity, and customer care to provide
            an exceptional beauty shopping experience.
          </p>

        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300"
            >

              {/* Icon */}
              <div className="w-16 h-16 mx-auto rounded-full bg-[#FBE7D6] flex items-center justify-center mb-5">
                <i
                  className={`fa-solid ${feature.icon} text-2xl text-[#E07A5F]`}
                ></i>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#4A3B32]">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-relaxed text-[#A47E6C]">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}