// pages/index.js
'use client'
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';



export default function Home() {
  
  return (
    <div className="container mx-auto px-4 max-w-6xl">
      
      <Head>
        <title>Fashion Collections</title>
        <meta name="description" content="Fashion collections and categories" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-8">
        {/* Header Section */}
        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold tracking-wider mb-2">COLLECTIONS</h1>
          <p className="text-sm text-gray-500">Inspired By The Rugged, Serene Landscapes Of Ladakh, This Jacket Seamlessly BLENDS</p>
        </header>

        {/* Collections Section */}
        <section className="mb-16">
          {/* Techno Collection */}
          <div className="relative mb-4">
            <div className="w-full h-64 relative overflow-hidden">
              <Image 
                src="/assets/images/collection_1.jpg" 
                alt="Techno Collection"
                layout="fill"
                objectFit="cover"
                className="brightness-90"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-5xl font-bold text-white tracking-widest">TECHNO</h2>
              </div>
            </div>
          </div>

          {/* Julley Ladakh Collection */}
          <div className="relative mb-4">
            <div className="w-full h-64 relative overflow-hidden">
              <Image 
                src="/images/julley-collection.jpg" 
                alt="Julley Ladakh Collection"
                layout="fill"
                objectFit="cover"
                className="brightness-90"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-5xl font-bold text-white tracking-widest">JULLEY LADAKH</h2>
              </div>
            </div>
          </div>

          {/* Disrupt Collection */}
          <div className="relative mb-4">
            <div className="w-full h-64 relative overflow-hidden">
              <Image 
                src="/images/disrupt-collection.jpg" 
                alt="Disrupt Collection"
                layout="fill"
                objectFit="cover"
                className="brightness-90"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-5xl font-bold text-red-600 tracking-widest">DISRUPT.</h2>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Header */}
        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold tracking-wider mb-2">CATEGORIES</h1>
          <p className="text-sm text-gray-500">BROWSE OUR EXCLUSIVE DESIGNS IN FASHION TECHNOLOGY</p>
        </header>

        {/* Categories Grid Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Top Sellers */}
          <div className="col-span-full relative h-64 overflow-hidden">
            <Image 
              src="/images/top-sellers.jpg" 
              alt="Top Sellers"
              layout="fill"
              objectFit="cover"
              className="brightness-90"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-5xl font-bold text-white tracking-widest">TOP SELLERS</h2>
            </div>
          </div>

          {/* Jackets */}
          <div className="relative h-64 overflow-hidden">
            <Image 
              src="/images/jackets.jpg" 
              alt="Jackets"
              layout="fill"
              objectFit="cover"
              className="brightness-90"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white tracking-widest">JACKETS</h2>
            </div>
          </div>

          {/* Corsets */}
          <div className="relative h-64 overflow-hidden">
            <Image 
              src="/images/corsets.jpg" 
              alt="Corsets"
              layout="fill"
              objectFit="cover"
              className="brightness-90"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white tracking-widest">CORSETS</h2>
            </div>
          </div>

          {/* Bottoms */}
          <div className="relative h-64 overflow-hidden">
            <Image 
              src="/images/bottoms.jpg" 
              alt="Bottoms"
              layout="fill"
              objectFit="cover"
              className="brightness-90"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white tracking-widest">BOTTOMS</h2>
            </div>
          </div>

          {/* Sweaters */}
          <div className="relative h-64 overflow-hidden">
            <Image 
              src="/images/sweaters.jpg" 
              alt="Sweaters"
              layout="fill"
              objectFit="cover"
              className="brightness-90"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white tracking-widest">SWEATERS</h2>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}