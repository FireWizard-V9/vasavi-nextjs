// components/Navbar/index.js
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    const updateCartCount = () => {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        try {
          const cartItems = JSON.parse(storedCart);
          const count = cartItems.reduce((total, item) => total + item.quantity, 0);
          setCartCount(count);
        } catch (e) {
          console.error("Failed to parse cart data:", e);
          setCartCount(0);
        }
      }
    };
    updateCartCount();
    window.addEventListener('storage', updateCartCount);
    window.addEventListener('cartUpdated', updateCartCount);
    
    return () => {
      window.removeEventListener('storage', updateCartCount);
      window.removeEventListener('cartUpdated', updateCartCount);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-zinc-950 text-white py-4 px-6 font-[neuehaas] font-light text-md z-50">
      <div className="container mx-auto flex justify-between items-center ">
        <div className="flex space-x-10">
          <Link
            href="/collections"
            className=" tracking-wider hover:text-gray-300 transition-colors"
          >
            COLLECTIONS
          </Link>
          <Link
            href="/categories"
            className=" tracking-wider hover:text-gray-300 transition-colors"
          >
            CATEGORIES
          </Link>
          <Link
            href="/lookbook"
            className=" tracking-wider hover:text-gray-300 transition-colors"
          >
            LOOKBOOK
          </Link>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/">
            <div className="relative h-8 w-24">
              <h1 className="font-[theater] text-5xl">VASAVI</h1>
            </div>
          </Link>
        </div>

        <div className="flex space-x-8">
          <Link
            href="/"
            className=" tracking-wider hover:text-gray-300 transition-colors"
          >
            ABOUT US
          </Link>
          <Link
            href="/wishlist"
            className=" tracking-wider hover:text-gray-300 transition-colors"
          >
            WISHLIST
          </Link>
          <Link href="/cart" className="relative flex items-center text-[19px]">
            <FontAwesomeIcon icon={faCartShopping} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
