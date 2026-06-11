import React, { useState } from "react";
import HaircareHero from "../components/modules/haircare/HaircareHero";
import HaircareCategoryFilter from "../components/modules/haircare/HaircareCategoryFilter";
import HaircareProductsGrid from "../components/modules/haircare/HaircareProductsGrid";
import FeaturedHaircareProducts from "../components/modules/haircare/FeaturedHaircareProducts";
import HairRoutineGuide from "../components/modules/haircare/HairRoutineGuide";
import CustomerReviews from "../components/modules/haircare/CustomerReviews";
import HaircareFAQ from "../components/modules/haircare/HaircareFAQ";
import ConsultationCTA from "../components/modules/haircare/ConsultationCTA";
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
      <FeaturedHaircareProducts/>
      
      <HairRoutineGuide/>

      <CustomerReviews/>
      <HaircareFAQ/>
      <ConsultationCTA/>
    </div>
  );
}

export default Haircare;