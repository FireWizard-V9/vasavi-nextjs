'use client'
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function ProductDetail() {
    const [selectedSize, setSelectedSize] = useState('');

    const productImages = [
        '/images/jacket-main.jpg',
        '/images/jacket-thumb-1.jpg',
        '/images/jacket-thumb-2.jpg',
        '/images/jacket-thumb-3.jpg',
        '/images/jacket-thumb-4.jpg',
    ];

    return (
        <div className="min-h-screen bg-white">
            <Head>
                <title>Ebon Aura Leather Jacket | Julley Ladakh</title>
                <meta name="description" content="Ebon Aura Leather Jacket from the Julley Ladakh Collection" />
            </Head>

            {/* Navigation */}
            <header className="py-4 px-6 flex justify-between items-center ">
                <Link href="/" className="text-sm font-medium">
                    ← BACK
                </Link>
                <div className="text-sm font-medium">
                    CATEGORIES/JULLEY LADAKH/JACKETS
                </div>
            </header>

            {/* Product Content */}
            <main className="container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Product Images Section */}
                    <div className="flex lg:w-[45%]">
                        {/* Main Image */}
                        <div className="w-full lg:w-[435px]">
                            <div className="aspect-[3/4] relative">
                                <Image
                                    src='/assets/images/collection_3.jpg'
                                    alt="Ebon Aura Leather Jacket - Main View"
                                    layout="fill"
                                    objectFit="cover"
                                    className="bg-gray-100"
                                />
                            </div>
                        </div>

                        {/* Thumbnails */}
                        <div className="hidden lg:flex flex-col gap-5 w-[113px]  pl-4">
                            <div className="aspect-square relative w-80% h-[130px]">
                                <Image
                                    src='/assets/images/productinfo_1.jpg'
                                    alt={'Ebon Aura Leather Jacket - View '}
                                    layout="fill"
                                    objectFit="cover"
                                    className="bg-gray-100"
                                />
                            </div>
                            <div className="aspect-square relative w-80% h-[130px]">
                                <Image
                                    src='/assets/images/productinfo_2.jpg'
                                    alt={'Ebon Aura Leather Jacket - View '}
                                    layout="fill"
                                    objectFit="cover"
                                    className="bg-gray-100"
                                />
                            </div>
                            <div className="aspect-square relative w-80% h-[130px]">
                                <Image
                                    src='/assets/images/productinfo_1.jpg'
                                    alt={'Ebon Aura Leather Jacket - View '}
                                    layout="fill"
                                    objectFit="cover"
                                    className="bg-gray-100"
                                />
                            </div>
                            <div className="aspect-square relative w-80% h-[130px]">
                                <Image
                                    src='/assets/images/productinfo_2.jpg'
                                    alt={'Ebon Aura Leather Jacket - View '}
                                    layout="fill"
                                    objectFit="cover"
                                    className="bg-gray-100"
                                />
                            </div>

                        </div>
                    </div>

                    {/* Product Details Section */}
                    <div className="lg:w-1/2">
                        <h1 className="text-9xl font-bold leading-[8rem] tracking-tight font-[theater]">
                            EBON AURA
                        </h1>
                        <h1 className="text-9xl font-bold leading-[8rem] tracking-tight font-[theater] ">
                        LEATHER JACKET
                        </h1>

                        <div className="mt-8 mb-6">
                            <p className="text-6xl font-normal ">RS.12,999.00</p>
                        </div>

                        {/* Size Selector */}
                        <div className="relative mb-4">
                            <select
                                className="w-full border border-black py-3 px-4 appearance-none bg-white pr-10 cursor-pointer"
                                value={selectedSize}
                                onChange={(e) => setSelectedSize(e.target.value)}
                            >
                                <option value="" disabled>SELECT A SIZE</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                <ChevronDown size={20} />
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 mb-8">
                            <button className="w-full bg-black text-white py-3 px-4 font-medium">
                                ADD TO BAG
                            </button>
                            <button className="whitespace-nowrap font-normal text-lg">
                                ADD TO WISHLIST
                            </button>
                        </div>

                        {/* Made With Love */}
                        <div className="mb-4">
                            <p className="font-medium text-lg">MADE WITH LOVE BY 19 PEOPLE</p>
                        </div>

                        {/* Product Description */}
                        <div className="text-gray-500 mb-8 text-lg font-normal">
                            <p className="uppercase">
                                INSPIRED BY THE RUGGED, SERENE LANDSCAPES OF LADAKH, THIS JACKET
                                SEAMLESSLY BLENDS THE BOLDNESS OF BLACK LEATHER WITH THE REFINED
                                SOFTNESS OF GREY SUEDE. A PERFECT EMBODIMENT OF THE COLLECTION'S
                                ESSENCE, IT SPEAKS TO THE UNTAMED BEAUTY AND RAW ELEGANCE OF THE
                                REGION.
                            </p>
                        </div>

                        {/* Size Info Section */}
                        <div className="border-t border-b py-4 mb-8">
                            <button className="flex items-center justify-between w-full font-medium">
                                SIZE INFO
                                <ChevronDown size={20} />
                            </button>
                        </div>

                        {/* Shop All Button */}
                        <div>
                            <button className="border border-black py-3 px-6 font-medium">
                                SHOP ALL NEW ARRIVALS
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}