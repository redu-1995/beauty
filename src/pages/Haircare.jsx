import React, { useState } from "react";
import HaircareHero from "../components/Modules/haircare/HaircareHero.jsx";
import HaircareCategoryFilter from "../components/Modules/haircare/HaircareCategoryFilter.jsx";
import HaircareProductsGrid from "../components/Modules/haircare/HaircareProductsGrid.jsx";
import FeaturedHaircareProducts from "../components/Modules/haircare/FeaturedHaircareProducts.jsx";
import HairRoutineGuide from "../components/Modules/haircare/HairRoutineGuide.jsx";
import CustomerReviews from "../components/Modules/haircare/CustomerReviews.jsx";
import HaircareFAQ from "../components/Modules/haircare/HaircareFAQ.jsx";
import ConsultationCTA from "../components/Modules/haircare/ConsultationCTA.jsx";
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