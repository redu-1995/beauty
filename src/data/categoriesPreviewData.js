// src/data/categoriesPreviewData.js

// 1. Import your local, optimized media assets directly
import skincareImg from "../assets/images/categories/skincareImg.webp"; // Example names, adjust to your actual files
import makeupImg from "../assets/images/categories/makeupImg.webp";
import perfumeImg from "../assets/images/categories/perfumeImg.webp";
import haircareImg from "../assets/images/categories/haircareImg.webp";
import HydroCloricImg from "../assets/images/products/HydroCloricImg.webp"
import VitaminCImg from "../assets/images/products/VitaminCImg.webp"
import MatteLiquidImg from "../assets/images/products/MatteLiquidImg.webp"
import ValvetLipImg from "../assets/images/products/ValvetLipImg.webp"
import ArganOilImg from "../assets/images/products/ArganOilImg.webp"
import EtherealImg from "../assets/images/products/EtherealImg.webp"

export const MAIN_COLLECTIONS = [
  { 
    id: "skin", 
    title: "Skincare", 
    description: "Nourishing products for healthy glowing skin.", 
    image: skincareImg 
  },
  { 
    id: "make", 
    title: "Makeup", 
    description: "Everyday beauty essentials for every custom look.", 
    image: makeupImg 
  },
  { 
    id: "perf", 
    title: "Perfumes", 
    description: "Elegant fragrances with deep, lasting impressions.", 
    image: perfumeImg 
  },
  { 
    id: "hair", 
    title: "Hair Care", 
    description: "Nourishing essential oils and gentle shampoos.", 
    image: haircareImg 
  }
];

export const POPULAR_PRODUCTS_BY_CATEGORY = {
  "Skincare": [
    { id: "s1", name: "Vitamin C Brightening Serum", image: VitaminCImg },
    { id: "s2", name: "Hyaluronic Acid Plumping Gel", image: HydroCloricImg },
    { id: "s3", name: "Retinol Renewal Night Cream", image: VitaminCImg }
  ],
  "Makeup": [
    { id: "m1", name: "Matte Liquid Foundation", image: MatteLiquidImg },
    { id: "m2", name: "Velvet Lip Orchid Tint", image: ValvetLipImg }
  ],
  "Perfumes": [
    { id: "p1", name: "Oud Horizon Eau de Parfum", image: VitaminCImg },
    { id: "p2", name: "Sandalwood Citrus Blossom", image: VitaminCImg }
  ],
  "Hair Care": [
    { id: "h1", name: "Organic Rosemary Growth Oil", image: VitaminCImg },
    { id: "h2", name: "Argan Oil Repair Mask", image: ArganOilImg }
  ]
};