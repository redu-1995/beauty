import React from "react";
import MakeupHero from "../components/modules/makeup/MakeupHero";
import MakeupCategoryFilters from "../components/modules/makeup/MakeupCategoryFilters";
import MakeupFeatured from "../components/modules/makeup/MakeupFeatured";
import MakeupBestSellers from "../components/modules/makeup/MakeupBestSellers";
function Makeup() {

  return (
    <div>
    <MakeupHero/>
    <MakeupFeatured/>
    <MakeupBestSellers/>
    </div>
  );
}

export default Makeup;