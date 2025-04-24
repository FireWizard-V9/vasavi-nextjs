import CategorySection from "@/components/CategorySection";
import React from "react";
import Link from "next/link";

const Products = () => {
  const categoryData = [
    {
      title: "JACKETS",
      products: [
        {
          id: 1,
          title: "ECHOES OF PAST",
          price: "₹3,299.00",
          imageSrc: "/assets/images/echoes_of_past.jpg",
          badge: "DISRUPT",
          productId: "echoes-of-past"
        },
        {
          id: 2,
          title: "SHANTI NOIR",
          price: "₹9,999.00",
          imageSrc: "/assets/images/shanti_noir.jpg",
          badge: "JACKETS",
          productId: "shanti-noir"
        },
        {
          id: 3,
          title: "EBON AURA",
          price: "₹12,999.00",
          imageSrc: "/assets/images/collection_3.jpg",
          badge: "JACKETS",
          productId: "ebon-aura"
        },
        {
          id: 4,
          title: "TUNDRA GUARD",
          price: "₹9,999.00",
          imageSrc: "/assets/images/collection_4.jpg",
          badge: "JACKETS",
          productId: "tundra-guard"
        },
        {
          id: 5,
          title: "SASHIMI",
          price: "₹2,699.00",
          imageSrc: "/assets/images/sashimi.webp",
          badge: "DISRUPT",
          productId: "sashimi"
        },
        {
          id: 6,
          title: "TRIPPULSE",
          price: "₹3,699.00",
          imageSrc: "/assets/images/trippulse.webp",
          badge: "JACKETS",
          productId: "trippulse"
        },
        {
          id: 7,
          title: "WARPNET",
          price: "₹3,499.00",
          imageSrc: "/assets/images/warpnet.webp",
          badge: "JACKETS",
          productId: "warpnet"
        },
        {
          id: 8,
          title: "ZIP GO",
          price: "₹2,699.00",
          imageSrc: "/assets/images/zipgo.webp",
          badge: "DISRUPT",
          productId: "zip-go"
        },
      ],
    },
    {
      title: "BOTTOMS",
      products: [
        {
          id: 1,
          title: "BLUE CARGO",
          price: "₹2,899.00",
          imageSrc: "/assets/images/collection_6.jpg",
          badge: "BOTTOMS",
          ProductId: "blue-cargo",
        },
        {
          id: 2,
          title: "CHILLINOS",
          price: "₹2,399.00",
          imageSrc: "/assets/images/collecpage_4.jpg",
          badge: "BEST SELLERS",
          productId: "chillinos",
          
        },
        {
          id: 3,
          title: "PARACHUTE PANTS",
          price: "₹2,399.00",
          imageSrc: "/assets/images/collecpage_8.jpg",
          badge: "BEST SELLERS",
          productId: "parachute-pants",
        },
        {
          id: 4,
          title: "EMBER SLATE",
          price: "₹2,900.00",
          imageSrc: "/assets/images/ember.webp",
          badge: "BOTTOMS",
          productId: "ember-slate",
        },
        {
          id: 5,
          title: "DARK KNIGHT",
          price: "₹3,000.00",
          imageSrc: "/assets/images/dark_knight.webp",
          badge: "BOTTOMS",
          productId: "dark-knight",
        },
        {
          id: 6,
          title: "ROGUE SPLIT",
          price: "₹3,800.00",
          imageSrc: "/assets/images/rogue.webp",
          badge: "BOTTOMS",
          productId: "rogue-split",
        },
      ],
    },
    {
      title: "CORSETS",
      products: [
        {
          id: 1,
          title: "CORSETICA",
          price: "₹1,699.00",
          imageSrc: "/assets/images/corsetica.webp",
          badge: "DISRUPT",
          productId: "corsetica",
        },
        {
          id: 2,
          title: "ELYSIAN CURVE",
          price: "₹3,499.00",
          imageSrc: "/assets/images/elysian.webp",
          badge: "BEST SELLERS",
          productId: "elysian-curve",
        },
        {
          id: 3,
          title: "EMBODY GRACE",
          price: "₹3,599.00",
          imageSrc: "/assets/images/collecpage_6.jpg",
          badge: "BEST SELLERS",
         productId: "embody-grace",
        },
        {
          id: 4,
          title: "RAW ALLURE",
          price: "₹2,399.00",
          imageSrc: "/assets/images/rawallure.webp",
          badge: "CORSETS",
          productId: "raw-allure",
        },
        {
          id: 5,
          title: "SERENE DRAPE",
          price: "₹4,699.00",
          imageSrc: "/assets/images/serene.webp",
          badge: "CORSETS",
          productId: "serene-drape",
        },
      ],
    },
    // Keep your other categories as they are, just add productId to each product
  ];

  return (
    <div className="min-h-screen bg-black text-white mt-13">
      <header className="py-4 px-6 flex justify-between items-center">
        <Link href="/" className="text-sm font-medium">
          ← BACK
        </Link>
        <Link href="collections" className="text-sm font-medium">
          Collections
        </Link>
      </header>

      <CategorySection categoryData={categoryData} />
    </div>
  );
};

export default Products;