import React, { useState } from "react";
import HaircareHero from "../components/modules/haircare/HaircareHero";
import HaircareCategoryFilter from "../components/modules/haircare/HaircareCategoryFilter";
import HaircareProductsGrid from "../components/modules/haircare/HaircareProductsGrid";

function Haircare() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div>
      <HaircareHero />
      <HaircareCategoryFilter
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <HaircareProductsGrid
        activeCategory={activeCategory}
        activeType="all"
      />
    </div>
  );
}

export default Haircare;