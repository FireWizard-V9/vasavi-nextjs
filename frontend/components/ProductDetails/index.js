// components/ProductDetails/index.js
"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Heart, HeartOff } from "lucide-react";
import { useParams } from "next/navigation";
import { useCart } from "@/lib/CartContext";
import { getProduct } from "@/lib/ProductService";
import { useWishlist } from "@/lib/WishListContext";

export default function ProductDetail({ productId }) {
  const [selectedSize, setSelectedSize] = useState("M");
  const [productInfo, setProductInfo] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);
  const [addedToWishlist, setAddedToWishlist] = useState(false);
  const params = useParams();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  // Use the provided productId or get it from the URL params
  const id = productId || params?.productId || "ebon-aura";

  useEffect(() => {
    // Fetch product info from the product service
    const product = getProduct(id);
    if (product) {
      setProductInfo(product);
      // Check if product is already in wishlist
      if (isInWishlist(product.id)) {
        setAddedToWishlist(true);
      }
    }
  }, [id, isInWishlist]);

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

  const handleWishlist = () => {
    if (!productInfo) return;

    if (addedToWishlist) {
      // Remove from wishlist
      removeFromWishlist(productInfo.id);
      setAddedToWishlist(false);
    } else {
      // Add to wishlist
      const success = addToWishlist(productInfo);
      setAddedToWishlist(success);

      // Show feedback temporarily
      if (success) {
        // Optional: Show some added feedback that auto-dismisses
      }
    }
  };

  // Show loading state if product is not found
  if (!productInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading product...
      </div>
    );
  }

  // Split the product name for large display styling
  const nameParts = productInfo.name.split(" ");
  const firstLine = nameParts.slice(0, 2).join(" ");
  const secondLine = nameParts.slice(2).join(" ");

  return (
    <div className="min-h-screen bg-white mt-13 relative">
      <Head>
        <title>
          {productInfo.name} | {productInfo.collection}
        </title>
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
              <button
                onClick={handleWishlist}
                className="flex items-center whitespace-nowrap font-normal text-lg gap-2 hover:text-gray-700"
              >
                {addedToWishlist ? (
                  <>
                    <HeartOff size={20} />
                    REMOVE FROM WISHLIST
                  </>
                ) : (
                  <>
                    <Heart size={20} />
                    ADD TO WISHLIST
                  </>
                )}
              </button>
            </div>

            {/* Made With Love */}
            <div className="mb-4">
              <p className="font-medium text-lg">MADE WITH LOVE BY 19 PEOPLE</p>
            </div>

            {/* Product Description */}
            <div className="text-gray-500 mb-8 text-lg font-normal">
              <p className="uppercase">{productInfo.description}</p>
            </div>

            {/* Size Info Section */}
            {/* <div className="border-t border-b py-4 mb-8">
              <button className="flex items-center justify-between w-full font-medium">
                SIZE INFO
                <ChevronDown size={20} />
              </button>
            </div> */}

            {/* Shop All Button */}
            {/* <div>
              <button className="border border-black py-3 px-6 font-medium">
                SHOP ALL NEW ARRIVALS
              </button>
            </div> */}
          </div>
        </div>
      </main>

    
    </div>
  );
}
