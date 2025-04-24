"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getCollection } from "@/lib/collectionService";

export default function CollectionPage({ collectionId = "julley-ladakh" }) {
  const [collection, setCollection] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch collection data based on ID
    try {
      const collectionData = getCollection(collectionId);
      
      if (collectionData) {
        setCollection(collectionData);
      } else {
        setError("Collection not found");
      }
    } catch (err) {
      setError("Error loading collection");
      console.error("Failed to load collection:", err);
    } finally {
      setLoading(false);
    }
  }, [collectionId]);

  if (loading) {
    return <div className="min-h-screen bg-black text-white flex items-center justify-center">Loading collection...</div>;
  }

  if (error || !collection) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">{error || "Collection not found"}</h2>
        <Link href="/collections" className="text-orange-600 hover:underline">
          Browse all collections
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-black text-white">
        <Head>
          <title>{collection.title} Collection | VASAVI</title>
          <meta
            name="description"
            content={`Experience ${collection.title} through our exclusive fashion collection`}
          />
        </Head>

        {/* Navigation */}
        <header className="m-8 flex justify-between items-center mt-14 bg-black text-white">
          <Link href="/" className="text-sm font-medium">
            ← BACK
          </Link>
          <div className="text-sm font-medium">
            CATEGORIES/{collection.title}/JACKETS
          </div>
        </header>

        {/* Collection Hero Section */}
        <section className="relative">
          <div className="relative w-full h-screen">
            <Image
              src={collection.heroImage}
              alt={collection.title}
              layout="fill"
              objectFit="cover"
              priority
              className="z-0"
            />

            <div className="absolute inset-0 flex flex-col justify-between">
              {/* Title */}
              <div className="mt-32 px-6 text-center">
                <Link href="/">
                  <h1 className="text-9xl font-bold text-white tracking-tight font-[theater]">
                    {collection.title}
                  </h1>
                </Link>
              </div>

              {/* Action Buttons */}
              <div className="flex w-full">
                <Link
                  href={collection.leftCtaLink}
                  className="w-1/2 bg-orange-600 py-6 px-4 text-start"
                >
                  <span className="text-5xl font-medium font-[theater] ml-9">
                    {collection.leftCtaText}
                  </span>
                </Link>
                <Link
                  href={collection.rightCtaLink}
                  className="w-1/2 bg-orange-600 py-6 px-4 text-end"
                >
                  <span className="text-5xl font-medium font-[theater] mr-9">
                    {collection.rightCtaText}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How It Was Done Section */}
        <section className="py-16 px-6">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 pr-6">
              <h2 className="text-8xl font-bold mb-16 leading-tight font-[theater] ml-4">
                HOW IT WAS
                <br />
                DONE?
              </h2>

              <div className="mb-8">
                <p className="font-medium mb-2 ml-4">MADE WITH LOVE BY 19 PEOPLE</p>
                <p className="text-sm opacity-80 max-w-lg ml-4">
                  {collection.description}
                </p>
              </div>
            </div>

            <div className="lg:w-1/2 grid grid-cols-2 gap-5 mt-8 lg:mt-0">
              {collection.detailImages.map((image, index) => (
                <div key={index} className="relative aspect-square">
                  <Image
                    src={image}
                    alt={`${collection.title} Detail ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Logo */}
        <section className="py-8 px-7 mr-12 flex justify-end">
          <Image
            src="/assets/images/logo.png"
            alt="VASAVI"
            width={150}
            height={80}
          />
        </section>

        {/* Explore Our Collection Section */}
        <section className="py-16 px-6 bg-black">
          <h2 className="text-8xl font-bold mb-16 ml-4 leading-tight font-[theater]">
            EXPLORE OUR
            <br />
            COLLECTION
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {collection.items.map((item) => (
              <div key={item.id} className="flex flex-col">
                <Link href={`/product/${item.productId}`}>
                  <div className="relative aspect-[3/4] bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="mt-2 flex flex-col">
                    <span className="text-sm font-sm font-[theater] text-zinc-600 text-center">
                      {item.collec_name}
                    </span>
                    <span className="text-sm font-normal text-center">
                      {item.name}
                    </span>
                    <span className="text-sm opacity-70 text-center">
                      {item.price}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
