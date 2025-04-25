"use client";
import { createContext, useContext, useState, useEffect } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState([]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedWishlist = localStorage.getItem("wishlist");
      if (savedWishlist) {
        try {
          setWishlistItems(JSON.parse(savedWishlist));
        } catch (error) {
          console.error("Failed to parse wishlist from localStorage:", error);
        }
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
    }
  }, [wishlistItems]);

  const addToWishlist = (product) => {
    const existingProduct = wishlistItems.find(
      (item) => item.id === product.id
    );

    if (!existingProduct) {
      setWishlistItems((prev) => [...prev, product]);
      return true;
    }
    return false;
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems((prev) => {
      const updatedWishlist = prev.filter((item) => item.id !== productId);
      return updatedWishlist;
    });
  };

  const isInWishlist = (productId) => {
    return wishlistItems.some((item) => item.id === productId);
  };

  const clearWishlist = () => {
    setWishlistItems([]);
    if (typeof window !== "undefined") {
      localStorage.removeItem("wishlist");
    }
  };

  const value = {
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    clearWishlist,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}
