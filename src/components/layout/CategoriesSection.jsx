// src/components/sections/CategoriesSection.jsx

import CategoryCollectionCard from "../cards/CategoryCollectionCard";

import skincareImg from "../../assets/images/categories/skincareImg.webp";
import makeupImg from "../../assets/images/categories/makeupImg.webp";
import haircareImg from "../../assets/images/categories/haircareImg.webp";
import perfumeImg from "../../assets/images/categories/perfumeImg.webp";

export default function CategoriesSection() {
  return (
    <section className="bg-[#FFFBF7] py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="mb-6 text-center font-serif text-2xl font-bold text-[#4A3B32] md:text-3xl">
          Shop By Category
        </h2>

        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">

          <CategoryCollectionCard
            title="Skincare"
            description="Premium skincare essentials."
            image={skincareImg}
            link="/skincare"
          />

          <CategoryCollectionCard
            title="Makeup"
            description="Makeup products for every style."
            image={makeupImg}
            link="/makeup"
          />

          <CategoryCollectionCard
            title="Haircare"
            description="Hair care solutions for healthy hair."
            image={haircareImg}
            link="/haircare"
          />

          <CategoryCollectionCard
            title="Perfumes"
            description="Luxury fragrances and scents."
            image={perfumeImg}
            link="/perfumes"
          />

        </div>

      </div>
    </section>
  );
}