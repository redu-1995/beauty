// src/components/home/FeaturedProducts.jsx

import React from "react";
import { Link } from "react-router-dom";
import { ALL_PRODUCTS } from "../../data/products";

export default function FeaturedProducts() {
  const featuredProducts = ALL_PRODUCTS.slice(0, 4);

  return (
    <section className="w-full bg-white py-16 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm uppercase tracking-[0.3em] text-[#A47E6C] font-semibold">
            Best Sellers
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold font-serif text-[#4A3B32]">
            Featured Products
          </h2>

          <p className="mt-4 text-[#A47E6C] max-w-2xl mx-auto">
            Explore our most loved beauty products carefully selected
            to enhance your everyday beauty routine.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-[#FAF7F4] rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >

              {/* Product Image */}
              <div className="relative overflow-hidden">

                {/* Badge */}
                <span className="absolute top-4 left-4 z-10 bg-[#E07A5F] text-white text-xs font-medium px-3 py-1 rounded-full">
                  Featured
                </span>

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="p-5">

                <span className="text-xs uppercase tracking-wider text-[#A47E6C]">
                  {product.category}
                </span>

                <h3 className="mt-2 text-lg font-semibold text-[#4A3B32] line-clamp-2 min-h-[56px]">
                  {product.name}
                </h3>

                <p className="mt-2 text-sm text-[#A47E6C] line-clamp-2">
                  {product.description}
                </p>

                <div className="mt-4 flex items-center justify-between">

                  <span className="text-xl font-bold text-[#E07A5F]">
                    ETB {product.price}
                  </span>

                  <button className="bg-[#E07A5F] text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-[#d0694e] transition">
                    View
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* View All Products */}
        <div className="flex justify-center mt-10">
          <Link
            to="/products"
            className="bg-[#E07A5F] text-white px-8 py-3 rounded-xl font-medium hover:bg-[#d0694e] transition"
          >
            View All Products
          </Link>
        </div>

      </div>
    </section>
  );
}