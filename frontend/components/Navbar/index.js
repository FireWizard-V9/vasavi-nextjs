"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white py-4 px-6 font-[neuehaas] font-light text-md z-50">
      <div className="container mx-auto flex justify-between items-center ">
        <div className="flex space-x-10">
          <Link
            href="/collection"
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
            href="/"
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
            href="/"
            className=" tracking-wider hover:text-gray-300 transition-colors"
          >
            WISHLIST
          </Link>
          <Link href="/cart" className="relative flex items-center text-[19px]">
          <FontAwesomeIcon icon={faCartShopping} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
