import React from "react";
import MakeupHero from "../components/modules/makeup/MakeupHero";
import MakeupCategoryFilters from "../components/modules/makeup/MakeupCategoryFilters";
import MakeupFeatured from "../components/modules/makeup/MakeupFeatured";
import MakeupBestSellers from "../components/modules/makeup/MakeupBestSellers";
import MakeupProductsGrid from "../components/modules/makeup/MakeupProductsGrid";
import MakeupShopByConcern from "../components/modules/makeup/MakeupShopByConcern";
import MakeupTrending from "../components/modules/makeup/MakeupTrending";
import MakeupTestimonials from "../components/modules/makeup/MakeupTestimonials";
function Makeup() {

  return (
    <div>
    <MakeupHero/>
    <MakeupFeatured/>
    <MakeupBestSellers/>
    <MakeupProductsGrid/>
    <MakeupShopByConcern/>
    <MakeupTrending/>
    <MakeupTestimonials/>
    </div>
  );
}

export default Makeup;