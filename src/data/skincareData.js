// 1. Import your local images from the assets folder
import ArganOilImg from "../assets/images/products/ArganOilImg.webp";
// import CleanserImg from "../assets/images/products/CleanserImg.webp";
// import MoisturizerImg from "../assets/images/products/MoisturizerImg.webp";
// import SunscreenImg from "../assets/images/products/SunscreenImg.webp";

export const skincareProducts = [
  {
    id: 1,
    name: "Organic Argan Nourishing Facial Oil",
    price: "1,850 ETB",
    tag: "Pure Luxury",
    image: ArganOilImg,
    category: "Serums", // Matches filter category key exactly
    skinTypes: ["Dry", "Sensitive"], // Array allows multiple type matching
    isFeatured: true, // Used to pull directly into the Featured section
    concern: "dry-skin" // Matches your Shop By Concern target queries
  },
  {
    id: 2,
    name: "Salicylic Acid Pore Clarifying Cleanser",
    price: "950 ETB",
    tag: "Best Seller",
    image: ArganOilImg, // Swap with your actual cleanser image asset later
    category: "Cleansers",
    skinTypes: ["Oily", "Combination"],
    isFeatured: true,
    concern: "acne"
  },
  {
    id: 3,
    name: "Ceramide Barrier Deep Repair Moisturizer",
    price: "1,450 ETB",
    tag: "Top Rated",
    image: ArganOilImg,
    category: "Moisturizers",
    skinTypes: ["Dry", "Combination", "Sensitive"],
    isFeatured: true,
    concern: "sensitive-skin"
  },
  {
    id: 4,
    name: "Vitamin C Radiance Brightening Booster",
    price: "1,600 ETB",
    tag: "Glow",
    image: ArganOilImg,
    category: "Serums",
    skinTypes: ["Dry", "Oily", "Combination"],
    isFeatured: true,
    concern: "dark-spots"
  },
  {
    id: 5,
    name: "Hyaluronic Acid Matte Sunscreen SPF 50+",
    price: "1,250 ETB",
    tag: "Daily Essential",
    image: ArganOilImg,
    category: "Sunscreens",
    skinTypes: ["Oily", "Combination"],
    isFeatured: false,
    concern: "oily-skin"
  },
  {
    id: 6,
    name: "Overnight Retinol Fine-Line Renewal Mask",
    price: "2,100 ETB",
    tag: "Anti-Aging",
    image: ArganOilImg,
    category: "Masks",
    skinTypes: ["Dry", "Oily", "Combination"],
    isFeatured: false,
    concern: "aging"
  }
];