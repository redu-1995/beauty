import React, { useState } from "react";
import PerfumeHero from "../components/modules/perfume/PerfumeHero";
import FragranceFamilyFilter from "../components/modules/perfume/FragranceFamilyFilter";
import FeaturedFragrances from "../components/modules/perfume/FeaturedFragrances";
import PerfumeCollection from "../components/modules/perfume/PerfumeCollection";
import SignatureScentFinder from "../components/modules/perfume/SignatureScentFinder";
import PerfumeNotesEducation from "../components/modules/perfume/PerfumeNotesEducation.jsx";
import WhyChooseFragrances from "../components/modules/perfume/WhyChooseFragrances.jsx";
import PerfumeReviews from "../components/modules/perfume/PerfumeReviews.jsx";
import PerfumeFAQ from "../components/modules/perfume/PerfumeFAQ.jsx";
function Perfume() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div>
     <PerfumeHero />
     <FragranceFamilyFilter activeFamily={activeCategory} onFamilyChange={setActiveCategory} />
     <FeaturedFragrances />
     <PerfumeCollection activeFamily={activeCategory} onFamilyChange={setActiveCategory} />
    <SignatureScentFinder />
    <PerfumeNotesEducation />
    <WhyChooseFragrances />
    <PerfumeReviews />
    <PerfumeFAQ/>
    </div>
  );
}

export default Perfume;