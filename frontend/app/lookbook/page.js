"use client";
import { getAllProducts } from "@/lib/ProductService";
import Image from "next/image";
import Link from "next/link";

export default function Lookbook() {
  const products = getAllProducts();

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-[1440px] mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl text-white font-bold text-center mb-12">
          LOOKBOOK
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="relative aspect-[3/4] overflow-hidden">
              <Link href={`/product/${product.id}`} className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-75 transition duration-300">
              <Image
                src={product.imageSrc}
                alt={product.name}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}