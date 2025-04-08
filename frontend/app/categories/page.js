import CategorySection from "@/components/CategorySection";
import React from "react";
import Link from "next/link";

const Products = () => {
  const categoryData = [
    {
      title: "JACKETS",
      products: [
        {
          id: 1,
          title: "BOXED BREEZE",
          price: "₹2,599.00",
          imageSrc: "/assets/images/cl1.jpeg",
          badge: "BESTSIFT",
          link: "/products/boxed-breeze",
        },
        {
          id: 2,
          title: "KHADELLA",
          price: "₹3,499.00",
          imageSrc: "/assets/images/collection_2.jpg",
          badge: "BEST SELLERS",
          link: "/products/khadella",
        },
        {
          id: 3,
          title: "SLEEK MODE",
          price: "₹2,800.00",
          imageSrc: "/assets/images/collection_3.jpg",
          badge: "BEST SELLERS",
          link: "/products/sleek-mode",
        },
        {
          id: 4,
          title: "CHILLINOS",
          price: "₹2,800.00",
          imageSrc: "/assets/images/collection_4.jpg",
          badge: "BEST SELLERS",
          link: "/products/chillinos",
        },
        {
          id: 5,
          title: "DREAMWAVE",
          price: "₹2,699.00",
          imageSrc: "/assets/images/cl1.jpeg",
          badge: "BEST SELLERS",
          link: "/products/dreamwave",
        },
        {
          id: 6,
          title: "EMBODY GRACE",
          price: "₹1,599.00",
          imageSrc: "/assets/images/collection_2.jpg",
          badge: "BEST SELLERS",
          link: "/products/embody-grace",
        },
        {
          id: 7,
          title: "CROPPED TUNDRA GUARD",
          price: "₹3,899.00",
          imageSrc: "/assets/images/collection_3.jpg",
          badge: "BEST SELLERS",
          link: "/products/cropped-tundra-guard",
        },
        {
          id: 8,
          title: "PARACHUTE PANTS",
          price: "₹2,599.00",
          imageSrc: "/assets/images/collection_4.jpg",
          badge: "BEST SELLERS",
          link: "/products/parachute-pants",
        },
      ],
    },
    {
      title: "BOTTOMS",
      products: [
        {
          id: 1,
          title: "BOXED BREEZE",
          price: "₹2,599.00",
          imageSrc: "/assets/images/cl1.jpeg",
          badge: "BESTSIFT",
          link: "/products/boxed-breeze",
        },
        {
          id: 2,
          title: "KHADELLA",
          price: "₹3,499.00",
          imageSrc: "/assets/images/collection_2.jpg",
          badge: "BEST SELLERS",
          link: "/products/khadella",
        },
        {
          id: 3,
          title: "SLEEK MODE",
          price: "₹2,800.00",
          imageSrc: "/assets/images/collection_3.jpg",
          badge: "BEST SELLERS",
          link: "/products/sleek-mode",
        },
        {
          id: 4,
          title: "CHILLINOS",
          price: "₹2,800.00",
          imageSrc: "/assets/images/collection_4.jpg",
          badge: "BEST SELLERS",
          link: "/products/chillinos",
        },
        {
          id: 5,
          title: "DREAMWAVE",
          price: "₹2,699.00",
          imageSrc: "/assets/images/cl1.jpeg",
          badge: "BEST SELLERS",
          link: "/products/dreamwave",
        },
        {
          id: 6,
          title: "EMBODY GRACE",
          price: "₹1,599.00",
          imageSrc: "/assets/images/collection_2.jpg",
          badge: "BEST SELLERS",
          link: "/products/embody-grace",
        },
        {
          id: 7,
          title: "CROPPED TUNDRA GUARD",
          price: "₹3,899.00",
          imageSrc: "/assets/images/collection_3.jpg",
          badge: "BEST SELLERS",
          link: "/products/cropped-tundra-guard",
        },
        {
          id: 8,
          title: "PARACHUTE PANTS",
          price: "₹2,599.00",
          imageSrc: "/assets/images/collection_4.jpg",
          badge: "BEST SELLERS",
          link: "/products/parachute-pants",
        },
      ],
    },
    {
      title: "CORSETS",
      products: [
        {
          id: 1,
          title: "BOXED BREEZE",
          price: "₹2,599.00",
          imageSrc: "/assets/images/cl1.jpeg",
          badge: "BESTSIFT",
          link: "/products/boxed-breeze",
        },
        {
          id: 2,
          title: "KHADELLA",
          price: "₹3,499.00",
          imageSrc: "/assets/images/collection_2.jpg",
          badge: "BEST SELLERS",
          link: "/products/khadella",
        },
        {
          id: 3,
          title: "SLEEK MODE",
          price: "₹2,800.00",
          imageSrc: "/assets/images/collection_3.jpg",
          badge: "BEST SELLERS",
          link: "/products/sleek-mode",
        },
        {
          id: 4,
          title: "CHILLINOS",
          price: "₹2,800.00",
          imageSrc: "/assets/images/collection_4.jpg",
          badge: "BEST SELLERS",
          link: "/products/chillinos",
        },
        {
          id: 5,
          title: "DREAMWAVE",
          price: "₹2,699.00",
          imageSrc: "/assets/images/cl1.jpeg",
          badge: "BEST SELLERS",
          link: "/products/dreamwave",
        },
        {
          id: 6,
          title: "EMBODY GRACE",
          price: "₹1,599.00",
          imageSrc: "/assets/images/collection_2.jpg",
          badge: "BEST SELLERS",
          link: "/products/embody-grace",
        },
        {
          id: 7,
          title: "CROPPED TUNDRA GUARD",
          price: "₹3,899.00",
          imageSrc: "/assets/images/collection_3.jpg",
          badge: "BEST SELLERS",
          link: "/products/cropped-tundra-guard",
        },
        {
          id: 8,
          title: "PARACHUTE PANTS",
          price: "₹2,599.00",
          imageSrc: "/assets/images/collection_4.jpg",
          badge: "BEST SELLERS",
          link: "/products/parachute-pants",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white mt-13">
      <header className="py-4 px-6 flex justify-between items-center">
        <Link href="/" className="text-sm font-medium">
          ← BACK
        </Link>
        <div className="text-sm font-medium">
          CATEGORIES/JULLEY LADAKH/JACKETS
        </div>
      </header>

      <CategorySection categoryData={categoryData} />
    </div>
  );
};

export default Products;
