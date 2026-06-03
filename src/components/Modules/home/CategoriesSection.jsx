import React from "react";
import { Link } from "react-router-dom";
import { CATEGORIES } from "../../../data/categories";

export default function CategoriesSection() {
  return (
    <section className="w-full bg-[#FAF7F4] py-16 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm uppercase tracking-[0.3em] text-[#A47E6C] font-semibold">
            Categories
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold font-serif text-[#4A3B32]">
            Shop By Category
          </h2>

          <p className="mt-4 text-[#A47E6C] max-w-xl mx-auto">
            Discover premium beauty essentials carefully selected
            for every style and self-care routine.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {CATEGORIES.slice(0, 4).map((category) => (
            <Link
              key={category.id}
              to={`/categories/${category.id}`}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Category Image */}
              <div className="overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Category Info */}
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-[#4A3B32]">
                  {category.name}
                </h3>

                {category.description && (
                  <p className="text-sm text-[#A47E6C] mt-2">
                    {category.description}
                  </p>
                )}

                <span className="inline-block mt-4 text-[#E07A5F] font-medium">
                  Explore →
                </span>
              </div>
            </Link>
          ))}

        </div>

        {/* View All Categories */}
        <div className="flex justify-center mt-10">
          <Link
            to="/categories"
            className="bg-[#E07A5F] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#d0694e] transition"
          >
            View All Categories
          </Link>
        </div>

      </div>
    </section>
  );
}