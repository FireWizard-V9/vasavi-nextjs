import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { getNewProducts } from "@/lib/ProductService";

const NewCollection = () => {
  const [products, setProducts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    // Fetch new products from the productService
    const newProducts = getNewProducts();
    setProducts(newProducts);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    // Function to handle scroll events
    const handleScroll = () => {
      if (!scrollContainer) return;

      const scrollPosition = scrollContainer.scrollLeft;
      const containerWidth = scrollContainer.clientWidth;

      // Calculate which page we're on based on scroll position
      const newIndex = Math.round(scrollPosition / containerWidth);

      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    };

    // Add scroll event listener
    scrollContainer.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, [activeIndex]);

  const totalSlides = Math.ceil(products.length / 4);

  const scrollToIndex = (index) => {
    if (scrollContainerRef.current) {
      const newIndex = Math.max(0, Math.min(index, totalSlides - 1));
      setActiveIndex(newIndex);
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.clientWidth * newIndex,
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    scrollToIndex(activeIndex + 1);
  };

  const handlePrev = () => {
    scrollToIndex(activeIndex - 1);
  };

  return (
    <section className="py-16 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-4xl font-bold mb-12 px-4">NEW COLLECTION</h2>

        {/* Scroll Container */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch", // Better touch scrolling for iOS
            }}
          >
            {/* We'll create "pages" of 4 products each */}
            {Array.from({ length: totalSlides }).map((_, pageIndex) => (
              <div
                key={`page-${pageIndex}`}
                className="flex min-w-full snap-center"
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                  {products
                    .slice(pageIndex * 4, (pageIndex + 1) * 4)
                    .map((product) => (
                      <Link
                        href={`/product/${product.id}`}
                        key={product.id}
                        className="flex flex-col"
                      >
                        <div className="bg-gray-800 aspect-square relative">
                          <Image
                            src={product.imageSrc}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="mt-2 text-center">
                          <h3 className="text-sm font-medium uppercase">
                            {product.name}
                          </h3>
                          <p className="text-sm">{product.collection}</p>
                          <p className="text-sm">{product.price}</p>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {activeIndex > 0 && (
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-black bg-opacity-50 rounded-full p-1"
              aria-label="Previous products"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {activeIndex < totalSlides - 1 && (
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-black bg-opacity-50 rounded-full p-1"
              aria-label="Next products"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>

        {/* Dots Navigation */}
        {totalSlides > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(totalSlides)].map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`h-2 w-2 rounded-full ${
                  i === activeIndex ? "bg-white" : "bg-gray-600"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              ></button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default NewCollection;
