// components/ProductDetails/index.js
"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import AIAgentIcon from "../AIAgentsIcon";
import { useParams } from "next/navigation";
import { useCart } from "@/lib/CartContext";

// Your productDatabase remains the same
const productDatabase = {
  "ebon-aura": {
    name: "EBON AURA LEATHER JACKET",
    type: "leather jacket",
    price: "RS.12,999.00",
    collection: "Julley Ladakh",
    id: "ebon-aura",
    description: "INSPIRED BY THE RUGGED, SERENE LANDSCAPES OF LADAKH, THIS JACKET SEAMLESSLY BLENDS THE BOLDNESS OF BLACK LEATHER WITH THE REFINED SOFTNESS OF GREY SUEDE.",
    imageSrc: "/assets/images/collection_3.jpg"
  },
  "shanti-noir": {
    name: "SHANTI NOIR JACKET",
    type: "leather jacket",
    price: "RS.9,999.00",
    collection: "Julley Ladakh",
    id: "shanti-noir",
    description: "A STATEMENT PIECE THAT CAPTURES THE ESSENCE OF TRANQUILITY MERGED WITH BOLD DESIGN, CRAFTED WITH PREMIUM MATERIALS FOR LASTING COMFORT.",
    imageSrc: "/assets/images/shanti_noir.jpg"
  },
  "tundra-guard": {
    name: "TUNDRA GUARD JACKET",
    type: "insulated jacket",
    price: "RS.9,999.00",
    collection: "Julley Ladakh",
    id: "tundra-guard",
    description: "DESIGNED FOR THE HARSH WINTERS OF THE HIMALAYAS, THIS JACKET PROVIDES EXCEPTIONAL WARMTH WITHOUT COMPROMISING ON STYLE OR MOBILITY.",
    imageSrc: "/assets/images/collection_4.jpg"
  },
  "echoes-of-past": {
    name: "ECHOES OF PAST JACKET",
    type: "vintage jacket",
    price: "RS.3,299.00",
    collection: "Disrupt",
    id: "echoes-of-past",
    description: "A MODERN INTERPRETATION OF VINTAGE DESIGN, THIS JACKET TELLS A STORY OF HERITAGE WHILE EMBRACING CONTEMPORARY SENSIBILITIES.",
    imageSrc: "/assets/images/echoes_of_past.jpg"
  },
  "sashimi": {
    name: "SASHIMI JACKET",
    type: "jacket",
    price: "RS.2,699.00",
    collection: "Disrupt",
    id: "sashimi",
    description: "A BOLD STATEMENT PIECE WITH UNIQUE CUTS AND PATTERNS INSPIRED BY JAPANESE PRECISION AND ARTISTRY.",
    imageSrc: "/assets/images/sashimi.webp"
  },
  "trippulse": {
    name: "TRIPPULSE JACKET",
    type: "jacket",
    price: "RS.3,699.00",
    collection: "Jackets",
    id: "trippulse",
    description: "DESIGNED FOR THE MODERN EXPLORER, THIS JACKET FEATURES INNOVATIVE MATERIALS AND CUTTING-EDGE DESIGN.",
    imageSrc: "/assets/images/trippulse.webp"
  },
  "warpnet": {
    name: "WARPNET JACKET",
    type: "jacket",
    price: "RS.3,499.00",
    collection: "Jackets",
    id: "warpnet",
    description: "A FUTURISTIC TAKE ON CLASSIC OUTERWEAR, FEATURING A UNIQUE TEXTURED PATTERN AND ADVANCED FUNCTIONALITY.",
    imageSrc: "/assets/images/warpnet.webp"
  },
  "zip-go": {
    name: "ZIP & GO JACKET",
    type: "jacket",
    price: "RS.2,699.00",
    collection: "Disrupt",
    id: "zip-go",
    description: "THE ULTIMATE CONVENIENCE IN OUTERWEAR, DESIGNED FOR QUICK TRANSITIONS AND EVERYDAY VERSATILITY.",
    imageSrc: "/assets/images/zipgo.webp"
  },
  "blue-cargo": {
    name: "BLUE CARGO PANTS",
    type: "bottoms",
    price: "RS.2,899.00",
    collection: "Bottoms",
    id: "blue-cargo",
    description: "FUNCTIONAL AND STYLISH CARGO PANTS IN A VIBRANT BLUE SHADE, PERFECT FOR BOTH UTILITY AND FASHION.",
    imageSrc: "/assets/images/collection_6.jpg"
  },
  "chillinos": {
    name: "CHILLINOS PANTS",
    type: "bottoms",
    price: "RS.2,399.00",
    collection: "Best Sellers",
    id: "chillinos",
    description: "RELAXED YET REFINED PANTS THAT COMBINE THE COMFORT OF CASUAL WEAR WITH THE POLISH OF DRESS PANTS.",
    imageSrc: "/assets/images/collecpage_4.jpg"
  },
  "parachute-pants": {
    name: "PARACHUTE PANTS",
    type: "bottoms",
    price: "RS.2,399.00",
    collection: "Best Sellers",
    id: "parachute-pants",
    description: "INSPIRED BY VINTAGE UTILITY WEAR, THESE PANTS FEATURE A LOOSE FIT AND MULTIPLE POCKETS FOR STYLE AND FUNCTION.",
    imageSrc: "/assets/images/collecpage_8.jpg"
  },
  "ember-slate": {
    name: "EMBER SLATE PANTS",
    type: "bottoms",
    price: "RS.2,900.00",
    collection: "Bottoms",
    id: "ember-slate",
    description: "SOPHISTICATED PANTS IN A RICH SLATE COLOR WITH SUBTLE EMBER UNDERTONES, DESIGNED FOR VERSATILE STYLING.",
    imageSrc: "/assets/images/ember.webp"
  },
  "dark-knight": {
    name: "DARK KNIGHT PANTS",
    type: "bottoms",
    price: "RS.3,000.00",
    collection: "Bottoms",
    id: "dark-knight",
    description: "SLEEK, ALL-BLACK PANTS WITH MODERN DETAILING AND A TAILORED FIT FOR A BOLD, CONTEMPORARY LOOK.",
    imageSrc: "/assets/images/dark_knight.webp"
  },
  "rogue-split": {
    name: "ROGUE SPLIT PANTS",
    type: "bottoms",
    price: "RS.3,800.00",
    collection: "Bottoms",
    id: "rogue-split",
    description: "INNOVATIVE SPLIT-LEG DESIGN CREATES A UNIQUE SILHOUETTE THAT CHALLENGES TRADITIONAL PANT CONSTRUCTION.",
    imageSrc: "/assets/images/rogue.webp"
  },
  "corsetica": {
    name: "CORSETICA CORSET",
    type: "corset",
    price: "RS.1,699.00",
    collection: "Disrupt",
    id: "corsetica",
    description: "A MODERN TAKE ON TRADITIONAL CORSETRY, FEATURING CLEAN LINES AND CONTEMPORARY MATERIALS FOR EVERYDAY WEARABILITY.",
    imageSrc: "/assets/images/corsetica.webp"
  },
  "elysian-curve": {
    name: "ELYSIAN CURVE CORSET",
    type: "corset",
    price: "RS.3,499.00",
    collection: "Best Sellers",
    id: "elysian-curve",
    description: "INSPIRED BY CLASSICAL AESTHETICS, THIS CORSET CREATES A GRACEFUL SILHOUETTE WITH PREMIUM FABRICS AND EXPERT CONSTRUCTION.",
    imageSrc: "/assets/images/elysian.webp"
  },
  "embody-grace": {
    name: "EMBODY GRACE CORSET",
    type: "corset",
    price: "RS.3,599.00",
    collection: "Best Sellers",
    id: "embody-grace",
    description: "ELEGANTLY DESIGNED TO ENHANCE THE NATURAL FORM, THIS CORSET COMBINES COMFORT WITH SOPHISTICATED STYLE.",
    imageSrc: "/assets/images/collecpage_6.jpg"
  },
  "raw-allure": {
    name: "RAW ALLURE CORSET",
    type: "corset",
    price: "RS.2,399.00",
    collection: "Corsets",
    id: "raw-allure",
    description: "EMBRACING TEXTURAL CONTRAST AND UNFINISHED EDGES, THIS CORSET BRINGS AN EDGY, ARTISTIC APPROACH TO TRADITIONAL FORMS.",
    imageSrc: "/assets/images/rawallure.webp"
  },
  "serene-drape": {
    name: "SERENE DRAPE CORSET",
    type: "corset",
    price: "RS.4,699.00",
    collection: "Corsets",
    id: "serene-drape",
    description: "FLOWING LINES AND LUXURIOUS FABRICS CREATE A SENSE OF CALM ELEGANCE IN THIS UNIQUELY DRAPED CORSET DESIGN.",
    imageSrc: "/assets/images/serene.webp"
  },
  "boxed-breeze": {
    name: "BOXED BREEZE",
    type: "disrupt",
    price: "₹2,599.00",
    collection: "disrupt",
    id: "boxed-breeze",
    description: "FLOWING LINES AND LUXURIOUS FABRICS CREATE A SENSE OF CALM ELEGANCE IN THIS UNIQUELY DRAPED CORSET DESIGN.",
    imageSrc: "/assets/images/collecpage_1.jpg"
  },
  "boxed-breeze": {
  name: "BOXED BREEZE",
  type: "disrupt",
  price: "₹2,599.00",
  collection: "disrupt",
  id: "boxed-breez",
  description: "FLOWING LINES AND LUXURIOUS FABRICS CREATE A SENSE OF CALM ELEGANCE IN THIS UNIQUELY DRAPED CORSET DESIGN.",
  imageSrc: "/assets/images/collecpage_1.jpg"
},
"khadella": {
  name: "KHADELLA JACKET",
  type: "jacket",
  price: "RS.3,499.00",
  collection: "Julley Ladakh",
  id: "khadella",
  description: "A PREMIUM JACKET INSPIRED BY TRADITIONAL LADAKHI CRAFTSMANSHIP, FEATURING AUTHENTIC DESIGN ELEMENTS AND DURABLE MATERIALS FOR MOUNTAIN ENVIRONMENTS.",
  imageSrc: "/assets/images/collecpage_2.jpg"
},
"sleek-mode": {
  name: "SLEEK MODE JACKET",
  type: "jacket",
  price: "RS.2,800.00",
  collection: "Julley Ladakh",
  id: "sleek-mode",
  description: "MINIMALIST DESIGN MEETS MOUNTAIN FUNCTIONALITY IN THIS SLEEK JACKET THAT TRANSITIONS EFFORTLESSLY FROM URBAN SETTINGS TO RUGGED LANDSCAPES.",
  imageSrc: "/assets/images/collecpage_3.jpg"
},
"dreamwave": {
  name: "DREAMWAVE JACKET",
  type: "jacket",
  price: "RS.3,800.00",
  collection: "Julley Ladakh",
  id: "dreamwave",
  description: "FLOWING LINES AND ETHEREAL DESIGN ELEMENTS CAPTURE THE SPIRITUAL ESSENCE OF LADAKH'S MOUNTAIN LANDSCAPES IN THIS STATEMENT PIECE.",
  imageSrc: "/assets/images/collecpage_5.jpg"
},
"cropped-tundra-guard": {
  name: "CROPPED TUNDRA GUARD",
  type: "jacket",
  price: "RS.8,000.00",
  collection: "Julley Ladakh",
  id: "cropped-tundra-guard",
  description: "A MODERN CROPPED VERSION OF OUR CLASSIC TUNDRA GUARD, DESIGNED FOR VERSATILITY WHILE MAINTAINING THE WARMTH AND PROTECTION OF THE ORIGINAL.",
  imageSrc: "/assets/images/collecpage_7.jpg"
},
};

export default function ProductDetail({ productId }) {
  const [selectedSize, setSelectedSize] = useState("M");
  const [productInfo, setProductInfo] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);
  const params = useParams();
  const { addToCart } = useCart();
  
  // Use the provided productId or get it from the URL params
  const id = productId || params?.productId || "ebon-aura";
  
  useEffect(() => {
    // Fetch product info based on ID
    const product = productDatabase[id];
    if (product) {
      setProductInfo(product);
    }
  }, [id]);

  const handleAddToCart = () => {
    if (productInfo && selectedSize) {
      addToCart(productInfo, selectedSize);
      setAddedToCart(true);
      
      // Reset the "Added to Cart" message after 3 seconds
      setTimeout(() => {
        setAddedToCart(false);
      }, 3000);
    }
  };

  // Show loading state if product is not found
  if (!productInfo) {
    return <div className="min-h-screen flex items-center justify-center">Loading product...</div>;
  }

  // Split the product name for large display styling
  const nameParts = productInfo.name.split(' ');
  const firstLine = nameParts.slice(0, 2).join(' ');
  const secondLine = nameParts.slice(2).join(' ');

  return (
    <div className="min-h-screen bg-white mt-13 relative">
      <Head>
        <title>{productInfo.name} | {productInfo.collection}</title>
        <meta
          name="description"
          content={`${productInfo.name} from the ${productInfo.collection} Collection`}
        />
      </Head>

      {/* Navigation */}
      <header className="py-4 px-6 flex justify-between items-center ">
        <Link href="/products" className="text-sm font-medium">
          ← BACK
        </Link>
        <div className="text-sm font-medium">
          CATEGORIES/{productInfo.collection}/{productInfo.type.toUpperCase()}
        </div>
      </header>

      {/* Product Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Image Section - Centered */}
          <div className="flex justify-center lg:w-[45%] mx-auto">
            {/* Main Image */}
            <div className="w-full max-w-md">
              <div className="aspect-[3/4] relative">
                <Image
                  src={productInfo.imageSrc}
                  alt={`${productInfo.name} - Main View`}
                  layout="fill"
                  objectFit="cover"
                  className="bg-gray-100"
                />
              </div>
            </div>
          </div>

          {/* Product Details Section */}
          <div className="lg:w-1/2">
            <h1 className="text-9xl font-bold leading-[8rem] tracking-tight font-[theater]">
              {firstLine}
            </h1>
            <h1 className="text-9xl font-bold leading-[8rem] tracking-tight font-[theater] ">
              {secondLine}
            </h1>

            <div className="mt-8 mb-6">
              <p className="text-6xl font-normal ">{productInfo.price}</p>
            </div>

            {/* Size Selector */}
            <div className="relative mb-4">
              <select
                className="w-full border border-black py-3 px-4 appearance-none bg-white pr-10 cursor-pointer"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                <option value="" disabled>
                  SELECT A SIZE
                </option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <ChevronDown size={20} />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <button 
                onClick={handleAddToCart} 
                className="w-full bg-black text-white py-3 px-4 font-medium"
              >
                {addedToCart ? "ADDED TO CART!" : "ADD TO CART"}
              </button>
              <button className="whitespace-nowrap font-normal text-lg">
                ADD TO WISHLIST
              </button>
            </div>

            {/* Made With Love */}
            <div className="mb-4">
              <p className="font-medium text-lg">MADE WITH LOVE BY 19 PEOPLE</p>
            </div>

            {/* Product Description */}
            <div className="text-gray-500 mb-8 text-lg font-normal">
              <p className="uppercase">
                {productInfo.description}
              </p>
            </div>

            {/* Size Info Section */}
            <div className="border-t border-b py-4 mb-8">
              <button className="flex items-center justify-between w-full font-medium">
                SIZE INFO
                <ChevronDown size={20} />
              </button>
            </div>

            {/* Shop All Button */}
            <div>
              <button className="border border-black py-3 px-6 font-medium">
                SHOP ALL NEW ARRIVALS
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* AI Agent Floating Icon */}
      <AIAgentIcon productInfo={productInfo} />
    </div>
  );
}
