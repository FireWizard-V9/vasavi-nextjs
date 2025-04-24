"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getAllCollections } from "@/lib/collectionService";

export default function Collection() {
  const collections = getAllCollections();

  return (
    <>
      {/* Navigation */}
      <header className="m-8 flex justify-between items-center mt-15">
        <Link href="/" className="text-sm font-medium">
          ← BACK
        </Link>
        <Link href="/categories" className="text-sm font-medium">
          CATEGORIES
        </Link>
      </header>
      <div className="container mx-auto px-4 max-w-6xl">
        <Head>
          <title>Fashion Collections</title>
          <meta
            name="description"
            content="Fashion collections and categories"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="py-8">
          {/* Header Section */}
          <header className="text-center mb-8">
            <h1 className="text-8xl font-bold font-[theater] tracking-tight mb-10">
              COLLECTIONS
            </h1>
            <p className="text-xl text-gray-500">
              Inspired By The Rugged, Serene Landscapes Of Ladakh, This Jacket{" "}
            </p>
            <p className="text-xl text-gray-500 text-center">
              Seamlessly BLENDS{" "}
            </p>
          </header>

          {/* Collections Section */}
          <section className="mb-20">
            {/* Techno Collection */}
            <div className="relative mb-4">
              <div className="w-full h-[27rem] relative overflow-hidden">
                <Image
                  src="/assets/images/collection_1.jpg"
                  alt="Techno Collection"
                  layout="fill"
                  objectFit="cover"
                  className=""
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Link href="/collection/techno">
                    <h2 className="text-9xl font-bold text-white tracking-tight font-[theater] mt-[20rem]">
                      TECHNO
                    </h2>
                  </Link>
                </div>
              </div>
            </div>

            {/* Julley Ladakh Collection */}
            <div className="relative mb-4">
              <div className="w-full h-[27rem] relative overflow-hidden">
                <Image
                  src="/assets/images/collection_2.jpg"
                  alt="Julley Ladakh Collection"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center center"
                  className=""
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Link href="/collection/julley-ladakh">
                    <h2 className="text-9xl font-bold text-white tracking-tight font-[theater] mt-[15rem]">
                      JULLEY LADAKH
                    </h2>
                  </Link>
                </div>
              </div>
            </div>

            {/* Disrupt Collection */}
            <div className="relative mb-4">
              <div className="w-full h-[27rem] relative overflow-hidden">
                <Image
                  src="/assets/images/collection_3.jpg"
                  alt="Disrupt Collection"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top center"
                  className=""
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Link href="/collection/disrupt">
                    <h2 className="text-9xl font-[theater] font-bold text-red-600 tracking-tight mt-[20rem]">
                      DISRUPT.
                    </h2>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Categories Header */}
          <header className="text-center mb-8">
            <h1 className="text-8xl font-bold font-[theater] tracking-tight mb-10">
              CATEGORIES
            </h1>
            <p className="text-xl text-gray-500">
              Inspired By The Rugged, Serene Landscapes Of Ladakh, This Jacket{" "}
            </p>
            <p className="text-xl text-gray-500 text-center">
              Seamlessly BLENDS{" "}
            </p>
          </header>

          {/* Categories Grid Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {/* Top Sellers */}
            <div className="col-span-full relative h-[27rem] overflow-hidden">
              <Image
                src="/assets/images/collection_1.jpg"
                alt="Top Sellers"
                layout="fill"
                objectFit="cover"
                className=""
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-9xl font-bold text-white tracking-tight font-[theater] mt-[23rem]">
                  TOP SELLERS
                </h2>
              </div>
            </div>

            {/* Jackets */}
            <div className="relative h-[23rem] overflow-hidden">
              <Image
                src="/assets/images/collection_4.jpg"
                alt="Jackets"
                layout="fill"
                objectFit="cover"
                className=""
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Link href="/collection/julley-ladakh">
                  <h2 className="text-9xl font-bold text-white tracking-tight font-[theater] mt-[11rem]">JULLEY LADAKH</h2>
                </Link>
              </div>
            </div>

            {/* Corsets */}
            <div className="relative h-[23rem] overflow-hidden">
              <Image
                src="/assets/images/collection_5.jpg"
                alt="Corsets"
                layout="fill"
                objectFit="cover"
                className=""
              />
              <div className="absolute inset-0 flex items-center justify-start">
                <h2 className="text-9xl font-bold text-white tracking-tight font-[theater] mt-[19rem]">
                  CORSETS
                </h2>
              </div>
            </div>

            {/* Bottoms */}
            <div className="relative h-[23rem] overflow-hidden">
              <Image
                src="/assets/images/collection_6.jpg"
                alt="Bottoms"
                layout="fill"
                objectFit="cover"
                className=""
              />
              <div className="absolute inset-0 flex items-center justify-start">
                <h2 className="text-9xl font-bold text-white tracking-tight font-[theater] mt-[19rem]">
                  BOTTOMS
                </h2>
              </div>
            </div>

            {/* Sweaters */}
            <div className="relative h-[23rem] overflow-hidden">
              <Image
                src="/assets/images/collection_7.jpg"
                alt="Sweaters"
                layout="fill"
                objectFit="cover"
                className=""
              />
              <div className="absolute inset-0 flex items-center justify-start">
                <h2 className="text-9xl font-bold text-white tracking-tight font-[theater] mt-[19rem]">
                  SWEATERS
                </h2>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
