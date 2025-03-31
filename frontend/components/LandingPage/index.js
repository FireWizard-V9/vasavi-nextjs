"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import NewCollection from "../NewCollection";

export default function LandingPage() {
  const products = [
    {
      id: 1,
      name: "LOREM IPSUM T SHIRT",
      variant: "T PINK",
      price: "2,799 ₹",
      image: "/assets/images/logo.png",
    },
    {
      id: 2,
      name: "LOREM IPSUM",
      variant: "DRAFT 1",
      price: "2,799 ₹",
      image: "/assets/images/logo.png",
    },
    {
      id: 3,
      name: "LOREM IPSUM",
      variant: "DRAFT 1",
      price: "2,799 ₹",
      image: "/assets/images/logo.png",
    },
    {
      id: 4,
      name: "LOREM IPSUM",
      variant: "DRAFT 1",
      price: "2,799 ₹",
      image: "/assets/images/logo.png",
    },
    // Adding additional products to demonstrate scrolling
    {
      id: 5,
      name: "LOREM IPSUM",
      variant: "DRAFT 2",
      price: "3,299 ₹",
      image: "/assets/images/logo.png",
    },
    {
      id: 6,
      name: "LOREM IPSUM",
      variant: "DRAFT 2",
      price: "3,299 ₹",
      image: "/assets/images/logo.png",
    },
    {
      id: 7,
      name: "LOREM IPSUM",
      variant: "LIMITED",
      price: "3,699 ₹",
      image: "/assets/images/logo.png",
    },
    {
      id: 8,
      name: "LOREM IPSUM",
      variant: "SPECIAL",
      price: "4,299 ₹",
      image: "/assets/images/logo.png",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white mt-14 ">
      {/* Hero Section */}
      <section className="bg-black relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/landing-page-image.png"
            alt="Vasavi fashion models"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="relative w-64 h-32">
            <Image
              src="/assets/images/logo.png"
              alt="VASAVI logo"
              fill
              className="object-contain"
            />
          </div>
          <h2 className="text-white text-sm tracking-widest uppercase mt-4">
            DISRUPT THE ORDINARY
          </h2>
        </div>
      </section>

      <NewCollection products={products} />

      {/* About Us Section */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-start gap-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white md:w-1/3 md:sticky md:top-8">
            ABOUT US
          </h2>
          <div className="md:w-2/3 space-y-6">
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              VASAVI IS THE STREETWEAR BRAND FOR THOSE WHO WEAR THEIR STORY WITH
              PRIDE, HANDMADE AND CRAFTED WITH FEARLESS CREATIVES. EACH PIECE
              REFLECTS UNAPOLOGETIC AUTHENTICITY FOR THOSE WHO REFUSE TO BLEND
              IN
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              AT VASAVI, WE BELIEVE THAT CLOTHING ISN'T JUST FABRIC—IT'S A
              STATEMENT. BREAK THE MOLD WITH VASAVI; EACH PIECE IS CRAFTED TO
              REFLECT YOUR BOLD SPIRIT AND UNIQUE IDENTITY. FOR THOSE WHO DARE
              TO BE DIFFERENT, OUR DESIGNS LET YOU WEAR YOUR TRUE SELF AND MAKE
              A STATEMENT.
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              VASAVI IS THE FUTURE OF FASHION INNOVATION. OUR VISION IS TO
              CREATE HAUTE COUTURE INFUSED WITH CUTTING-EDGE TECHNOLOGY. WE
              BELIEVE IN SMART, SUSTAINABLE, AND STYLISH CLOTHING THAT'S
              TAILORED SPECIFICALLY FOR THOSE WHO WANT TO LIVE BOLDLY.
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              OUR DESIGNS ARE BOLD, OUR TECHNOLOGY IS QUIET, AND OUR IMPACT IS
              LASTING. THE VASAVI COMMITMENT IS TO PROVIDE THE HIGHEST QUALITY
              GARMENTS THAT BLEND SOPHISTICATED AESTHETICS WITH PRACTICAL DESIGN
              AND DIGITAL FUNCTIONALITY. EACH PIECE SYMBOLIZES THE CONVERGENCE
              OF FASHION, TECHNOLOGY, AND SUSTAINABILITY THAT TRANSFORMS
              ORDINARY INTO EXTRAORDINARY.
            </p>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-16 px-4">
        <h2 className="text-4xl font-bold mb-12 px-4">OUR AI FEATURES</h2>
        <div className="flex flex md:flex-row gap-8 justify-center px-4">
          <Image
            src="/assets/images/placeholder.webp"
            alt="Vasavi fashion models"
            height={500}
            width={500}
            priority
            className="object-cover"
          />
        </div>
      </section>
    </div>
  );
}
