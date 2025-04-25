"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { getAllProducts } from "@/lib/ProductService";

const CategorySection = () => {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Get all products on component mount
  useEffect(() => {
    const allProducts = getAllProducts();
    setProducts(allProducts);
    setFilteredProducts(allProducts);
  }, []);

  // Get unique product types for category tabs
  const productTypes = [
    "ALL",
    ...new Set(products.map((product) => product.type.toUpperCase())),
  ];

  // Handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);

    if (category === "ALL") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.type.toUpperCase() === category
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      {/* Category Navigation */}
      <div className="flex justify-center overflow-x-auto mb-8 pb-2 no-scrollbar">
        <div className="flex gap-5">
          {productTypes.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`flex-none px-6 py-3 text-sm font-medium uppercase whitespace-nowrap transition-colors ${
                activeCategory === category
                  ? "bg-gray-800 text-white"
                  : "bg-white text-black border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Display */}
      <div >
        <h1 className="text-3xl md:text-5xl font-bold mb-8">
          {activeCategory === "ALL" ? "All Products" : activeCategory}
        </h1>

        {filteredProducts.length === 0 ? (
          <p className="text-center py-12 text-gray-500">
            No products found in this category.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="mb-8 group">
                <Link href={`/product/${product.id}`} className="block">
                  <div className="relative aspect-[3/4] mb-3 bg-gray-100 overflow-hidden">
                    <Image
                      src={product.imageSrc}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105 duration-300"
                    />
                    <div className="absolute bottom-0 left-0 bg-black bg-opacity-60 text-white text-xs px-3 py-1">
                      {product.collection}
                    </div>
                  </div>

                  <div className="space-y-1 text-center">
                    <h3 className="text-sm  font-medium uppercase tracking-wider">
                      {product.name}
                    </h3>

                    <p className="text-sm text-gray-100 font-medium">{product.price}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategorySection;
