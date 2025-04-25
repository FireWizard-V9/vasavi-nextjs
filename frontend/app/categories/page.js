"use client";
import { useState, useEffect } from "react";
import CategorySection from "@/components/CategorySection";
import React from "react";
import Link from "next/link";
import { getProductsByCategory, getAllProducts } from "@/lib/ProductService";

const Products = () => {
  return (
    <div className="min-h-screen bg-black text-white mt-14">
      <header className="py-4 px-6 flex justify-between items-center">
        <Link href="/" className="text-sm font-medium">
          ← BACK
        </Link>
        <Link href="collections" className="text-sm font-medium">
          Collections
        </Link>
      </header>

      <CategorySection />
    </div>
  );
};

export default Products;
