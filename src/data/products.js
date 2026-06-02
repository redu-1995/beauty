import HydroCloricImg from "../assets/images/products/HydroCloricImg.webp"
import serumImg from "../assets/images/products/serumImg.png"; 
import VitaminCImg from "../assets/images/products/VitaminCImg.webp"
import MatteLiquidImg from "../assets/images/products/MatteLiquidImg.webp"
import ValvetLipImg from "../assets/images/products/ValvetLipImg.webp"
import ArganOilImg from "../assets/images/products/ArganOilImg.webp"
import EtherealImg from "../assets/images/products/EtherealImg.webp"

export const PRODUCTS_BY_TYPE = {
  skincare: [
    {
      id: "skin-1",
      category: "Skincare",
      name: "Vitamin C Brightening Serum",
      price: "1400",
      image: VitaminCImg,
      description: "Brightens skin tone and reduces dark spots."
    },
    {
      id: "skin-2",
      category: "Skincare",
      name: "Hyaluronic Acid Hydrating Cream",
      price: "1650",
      image: HydroCloricImg,
      description: "Deeply hydrates and plumps the skin canvas."
    }
  ],
  makeup: [
    {
      id: "make-1",
      category: "Makeup",
      name: "Matte Liquid Foundation",
      price: "1800",
      image: MatteLiquidImg,
      description: "Flawless full coverage with a natural matte finish."
    },
    {
      id: "make-2",
      category: "Makeup",
      name: "Velvet Lip Tint",
      price: "950",
      image: ValvetLipImg,
      description: "Long-lasting, weightless terracotta lip shade."
    }
  ],
  haircare: [
    {
      id: "hair-1",
      category: "Haircare",
      name: "Argan Oil Repair Shampoo",
      price: "1200",
      image: ArganOilImg,
      description: "Restores moisture and shine to damaged hair strands."
    }
  ],
  perfumes: [
    {
      id: "perf-1",
      category: "Perfumes",
      name: "Ethereal Bloom Eau de Parfum",
      price: "3200",
      image: EtherealImg,
      description: "A luxury, long-lasting floral and warm wood scent."
    }
  ]
};

// Optional: A helper array containing absolutely everything combined together
export const ALL_PRODUCTS = [
  ...PRODUCTS_BY_TYPE.skincare,
  ...PRODUCTS_BY_TYPE.makeup,
  ...PRODUCTS_BY_TYPE.haircare,
  ...PRODUCTS_BY_TYPE.perfumes
];