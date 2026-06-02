import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/cards/ProductCard";
import ProductCarousel from "../components/sections/ProductCarousel";
import { PRODUCTS_BY_TYPE, ALL_PRODUCTS } from "../data/products";

export default function Products() {
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Featured");
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Category Filtering
  let displayedProducts = activeCategory
    ? PRODUCTS_BY_TYPE[activeCategory]
    : ALL_PRODUCTS;

  // Search Filtering
  displayedProducts = displayedProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sorting Logic
  if (selectedSort === "Price: L-H") {
    displayedProducts = [...displayedProducts].sort(
      (a, b) => Number(a.price) - Number(b.price)
    );
  }

  if (selectedSort === "Price: H-L") {
    displayedProducts = [...displayedProducts].sort(
      (a, b) => Number(b.price) - Number(a.price)
    );
  }

  if (selectedSort === "Newest") {
    displayedProducts = [...displayedProducts].reverse();
  }

  return (
    <div className="w-full flex flex-col bg-white">

      {/* Header Banner */}
      <div className="w-full bg-[#F5E6D3] text-center py-10 px-4 border-b border-[#EADBC8]">
        <h1 className="text-2xl md:text-3xl font-serif font-bold text-[#4A3B32] uppercase tracking-widest">
          Beauty Collection
        </h1>

        <p className="text-xs sm:text-sm text-[#705A4F] mt-2 font-medium tracking-wide">
          Explore Skincare, Makeup, Perfumes and Self-Care Essentials
        </p>
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 md:px-6 py-6">

        {/* Breadcrumb + Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">

          <div>
            <div className="text-xs font-semibold flex items-center gap-2">

              <Link
                to="/"
                className="text-[#705A4F] hover:text-[#E07A5F] transition"
              >
                Home
              </Link>

              <span className="text-[#A47E6C]">&gt;</span>

              <Link
                to="/products"
                className="text-[#E07A5F]"
              >
                Products
              </Link>

            </div>

            <p className="text-xs text-[#A47E6C] mt-1">
              Showing {displayedProducts.length} products
            </p>
          </div>

          {/* Search + Sort */}
          <div className="flex flex-wrap items-center gap-3">

            {/* Search */}
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-[#FFF5EB] border border-[#EADBC8] rounded-full px-4 py-2 text-xs text-[#4A3B32] w-56 focus:outline-none"
            />

            {/* Sort Dropdown */}
            <div className="relative">

              <button
                onClick={() => setSortOpen(!sortOpen)}
                className="bg-[#FFF5EB] border border-[#EADBC8] rounded-lg px-4 py-2 text-xs text-[#4A3B32] flex items-center gap-1 font-medium cursor-pointer"
              >
                Sort By:
                <span className="text-[#E07A5F]">
                  {selectedSort}
                </span>
                ▾
              </button>

              {sortOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-[#EADBC8] rounded-lg shadow-lg z-20">

                  {[
                    "Featured",
                    "Newest",
                    "Price: L-H",
                    "Price: H-L",
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setSelectedSort(option);
                        setSortOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-xs hover:bg-[#FFF5EB]"
                    >
                      {option}
                    </button>
                  ))}

                </div>
              )}

            </div>

          </div>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Sidebar */}
          <aside className="lg:col-span-3">

            <div className="bg-[#FFF5EB] border border-[#EADBC8] rounded-2xl p-5">

              <h3 className="text-xs font-bold uppercase tracking-wider text-[#4A3B32] border-b border-[#EADBC8] pb-3 mb-4">
                Categories
              </h3>

              <ul className="space-y-3 text-sm">

                <li
                  onClick={() => setActiveCategory(null)}
                  className={`cursor-pointer font-medium transition ${
                    !activeCategory
                      ? "text-[#E07A5F]"
                      : "text-[#705A4F] hover:text-[#E07A5F]"
                  }`}
                >
                  All Products
                </li>

                <li
                  onClick={() => setActiveCategory("skincare")}
                  className={`cursor-pointer font-medium transition ${
                    activeCategory === "skincare"
                      ? "text-[#E07A5F]"
                      : "text-[#705A4F] hover:text-[#E07A5F]"
                  }`}
                >
                  Skincare
                </li>

                <li
                  onClick={() => setActiveCategory("makeup")}
                  className={`cursor-pointer font-medium transition ${
                    activeCategory === "makeup"
                      ? "text-[#E07A5F]"
                      : "text-[#705A4F] hover:text-[#E07A5F]"
                  }`}
                >
                  Makeup
                </li>

                <li
                  onClick={() => setActiveCategory("haircare")}
                  className={`cursor-pointer font-medium transition ${
                    activeCategory === "haircare"
                      ? "text-[#E07A5F]"
                      : "text-[#705A4F] hover:text-[#E07A5F]"
                  }`}
                >
                  Hair Care
                </li>

                <li
                  onClick={() => setActiveCategory("perfumes")}
                  className={`cursor-pointer font-medium transition ${
                    activeCategory === "perfumes"
                      ? "text-[#E07A5F]"
                      : "text-[#705A4F] hover:text-[#E07A5F]"
                  }`}
                >
                  Perfumes
                </li>

              </ul>

            </div>

          </aside>

          {/* Products */}
          <main className="lg:col-span-9">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

              {displayedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  image={product.image}
                  category={product.category}
                  name={product.name}
                  price={product.price}
                />
              ))}

            </div>

            {/* Empty State */}
            {displayedProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-[#A47E6C] font-medium">
                  No products found.
                </p>
              </div>
            )}

          </main>

        </div>

      </div>

      {/* Featured Product Carousel */}
      <ProductCarousel />

    </div>
  );
}