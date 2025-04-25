"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import NewCollection from "../NewCollection";

export default function LandingPage() {
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

      <NewCollection />

      {/* About Us Section */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-start gap-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white md:w-1/3 md:sticky md:top-8">
            ABOUT US
          </h2>
          <div className="md:w-2/3 space-y-6">
            <p className="text-base md:text-lg text-gray-300 leading-relaxed font-medium">
              VASAVI IS THE STREETWEAR BRAND FOR THOSE WHO WEAR THEIR STORY WITH
              PRIDE. HANDMADE AND CRAFTED WITH FEARLESS CREATIVES, EACH PIECE
              REFLECTS UNAPOLOGETIC AUTHENTICITY FOR THOSE WHO REFUSE TO BLEND
              IN
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed font-medium">
              AT VASAVI, WE BELIEVE THAT CLOTHING ISN&apos;T JUST
              FABRIC-IT&apos;S A STATEMENT. BREAK THE MOLD WITH VASAVI. EACH
              PIECE IS CRAFTED TO REFLECT YOUR BOLD SPIRIT AND UNIQUE IDENTITY.
              FOR THOSE WHO DARE TO BE DIFFERENT, OUR DESIGNS LET YOU WEAR YOUR
              TRUE SELF AND MAKE A STATEMENT.
            </p>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-16 px-4">
        <h2 className="text-4xl font-bold mb-12 px-4">OUR AI FEATURES</h2>
        <div className="flex  md:flex-row gap-8 justify-center px-4">
          <Image
            src="/assets/images/comingsoon.jpg"
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
