'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full bg-black text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-10">
          <Link
            href="/collection"
            className="text-sm font-medium tracking-wider hover:text-gray-300 transition-colors"
          >
            COLLECTIONS
          </Link>
          <Link
            href="/"
            className="text-sm font-medium tracking-wider hover:text-gray-300 transition-colors"
          >
            CATEGORIES
          </Link>
          <Link
            href="/"
            className="text-sm font-medium tracking-wider hover:text-gray-300 transition-colors"
          >
            LOOKBOOK
          </Link>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/">
            <div className="relative h-8 w-24">
              <Image
                src="/assets/images/logo.png"
                alt="VASAVI"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        <div className="flex space-x-8">
          <Link
            href="/"
            className="text-sm font-medium tracking-wider hover:text-gray-300 transition-colors"
          >
            ABOUT US
          </Link>
          <Link
            href="/"
            className="text-sm font-medium tracking-wider hover:text-gray-300 transition-colors"
          >
            WISHLIST
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
