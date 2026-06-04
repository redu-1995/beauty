// src/pages/Categories.jsx

import React from "react";
import CategoryCollectionCard from "../components/cards/CategoryCollectionCard";

import {
  MAIN_COLLECTIONS,
  POPULAR_PRODUCTS_BY_CATEGORY,
} from "../data/categoriesPreviewData";

import categoryHeaderImg from "../assets/images/products/serumImg.png";
import ethiopianBotanicalImg from "../assets/images/products/serumImg.png";

export default function Categories() {
  return (
    <div className="w-full bg-white flex flex-col">

      {/* Hero Section */}
      <div className="w-full bg-[#EAE0D5]/60 grid grid-cols-1 md:grid-cols-2 items-center border-b border-[#DFD3C3]">
        <div className="p-8 md:p-12 lg:p-16 space-y-3 text-left">
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-[#4A3B32]">
            Shop By Category
          </h1>

          <p className="text-sm text-[#705A4F] leading-relaxed max-w-md font-medium">
            Explore beauty products carefully organized for your skincare,
            makeup, haircare, and fragrance needs.
          </p>
        </div>

        <div className="h-48 md:h-64 w-full">
          <img
            src={categoryHeaderImg}
            alt="Beauty category showcase"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto w-full px-4 md:px-6 py-12 space-y-12">

        {/* Category Collection Cards */}
        <section>
          <h2 className="text-xl md:text-2xl font-serif font-bold text-[#4A3B32] mb-8 text-center">
            Browse Our Collections
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {MAIN_COLLECTIONS.map((cat) => (
              <CategoryCollectionCard
                key={cat.id}
                title={cat.title}
                description={cat.description}
                image={cat.image}
                link={cat.link}
              />
            ))}
          </div>
        </section>

        {/* Ethiopian Beauty Banner */}
        <section className="w-full bg-white border border-[#DFD3C3] rounded-2xl p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden">
          <div className="space-y-2 text-center sm:text-left">
            <h2 className="text-lg font-serif font-bold text-[#4A3B32]">
              Traditional Ethiopian Beauty Secrets
            </h2>

            <p className="text-sm font-medium text-[#E07A5F]">
              Discover natural ingredients inspired by Ethiopia's rich beauty
              traditions.
            </p>
          </div>

          <div className="w-full sm:w-48 h-20 rounded-xl overflow-hidden bg-[#FFF5EB] flex items-center justify-center p-2">
            <img
              src={ethiopianBotanicalImg}
              alt="Ethiopian botanicals"
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </section>

        {/* Popular Products */}
        <section className="w-full text-center space-y-8">

          <h2 className="text-xl md:text-2xl font-serif font-bold text-[#4A3B32]">
            Popular Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {Object.keys(POPULAR_PRODUCTS_BY_CATEGORY).map((categoryName) => (
              <div key={categoryName} className="space-y-4">

                <h3 className="text-sm font-bold text-[#4A3B32] border-b border-[#DFD3C3] pb-2 uppercase tracking-wider">
                  {categoryName}
                </h3>

                <div className="space-y-3">
                  {POPULAR_PRODUCTS_BY_CATEGORY[categoryName].map(
                    (product) => (
                      <div
                        key={product.id}
                        className="bg-[#FFF5EB] border border-[#F2E3D5] rounded-xl p-3 flex items-center gap-3 hover:border-[#E07A5F] hover:shadow-sm transition-all duration-300 cursor-pointer"
                      >

                        <div className="w-16 h-16 rounded-lg bg-white overflow-hidden flex-shrink-0">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-[#4A3B32] line-clamp-2">
                            {product.name}
                          </p>

                          {product.price && (
                            <p className="text-xs text-[#E07A5F] font-bold mt-1">
                              ETB {product.price}
                            </p>
                          )}
                        </div>

                      </div>
                    )
                  )}
                </div>

              </div>
            ))}
          </div>

        </section>

      </div>
    </div>
  );
}