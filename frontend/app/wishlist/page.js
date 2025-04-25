// app/wishlist/page.js
"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/CartContext";
import { Trash2, ShoppingCart } from "lucide-react";
import { useWishlist } from "@/lib/WishListContext";

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [selectedSizes, setSelectedSizes] = useState({});
  const [addedToCartId, setAddedToCartId] = useState(null);

  const handleSizeChange = (productId, size) => {
    setSelectedSizes(prev => ({
      ...prev,
      [productId]: size
    }));
  };

  const handleAddToCart = (product) => {
    const size = selectedSizes[product.id] || "M"; // Default to M if no size selected
    addToCart(product, size);
    
    // Show feedback
    setAddedToCartId(product.id);
    setTimeout(() => {
      setAddedToCartId(null);
    }, 2000);
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-white py-12 px-4">
        <div className="max-w-6xl mt-29 mx-auto">
          <h1 className="text-5xl font-bold mb-12 font-[theater] mt-20">YOUR WISHLIST</h1>
          <div className="text-center py-16">
            <p className="text-xl mb-8">Your wishlist is empty</p>
            <Link href="/categories" className="bg-black text-white py-3 px-6 font-medium">
              CONTINUE SHOPPING
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12 mt-5">
          <h1 className="text-5xl font-bold font-[theater] ">YOUR WISHLIST</h1>
          <button 
            onClick={clearWishlist}
            className="text-gray-500 flex items-center gap-2 hover:text-black"
          >
            <Trash2 size={18} />
            Clear Wishlist
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlistItems.map(product => (
            <div key={product.id} className="border border-gray-200 p-4">
              <div className="relative aspect-[3/4] mb-4 group">
                <Link href={`/products/${product.id}`}>
                  <Image
                    src={product.imageSrc}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="bg-gray-100"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                </Link>
              </div>
              
              <Link href={`/products/${product.id}`} className="block mb-2">
                <h3 className="font-medium text-lg">{product.name}</h3>
              </Link>
              
              <p className="text-lg mb-3">{product.price}</p>
              
              <div className="flex gap-2 mb-4">
                <select
                  className="border border-gray-300 px-2 py-1"
                  value={selectedSizes[product.id] || "M"}
                  onChange={(e) => handleSizeChange(product.id, e.target.value)}
                >
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </select>
                
                <button
                  onClick={() => handleAddToCart(product)}
                  className="flex-1 bg-black text-white py-1 px-4 text-sm flex items-center justify-center gap-2"
                >
                  {addedToCartId === product.id ? (
                    "ADDED!"
                  ) : (
                    <>
                      <ShoppingCart size={16} />
                      ADD TO CART
                    </>
                  )}
                </button>
              </div>
              
              <button
                onClick={() => removeFromWishlist(product.id)}
                className="text-gray-500 text-sm hover:text-black"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/products" className="border border-black py-3 px-6 font-medium inline-block">
            CONTINUE SHOPPING
          </Link>
        </div>
      </div>
    </div>
  );
}