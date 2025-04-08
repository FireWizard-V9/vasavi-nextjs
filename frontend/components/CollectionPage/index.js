'use client'
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function JulleyLadakhPage() {
  const collectionItems = [
    { id: 1, name: 'BOXED BREEZE', price: '₹2,599.00', collec_name:'DISRUPT', image: '/assets/images/collecpage_1.jpg' },
    { id: 2, name: 'KHADELLA', price: '₹3,499.00',collec_name:'TOP SELLERS', image: '/assets/images/collecpage_2.jpg' },
    { id: 3, name: 'SLEEK MODE', price: '₹2,800.00', collec_name:'TOP SELLERS', image: '/assets/images/collecpage_3.jpg' },
    { id: 4, name: 'CHILLINOS', price: '₹2,800.00', collec_name:'TOP SELLERS', image: '/assets/images/collecpage_4.jpg' },
    { id: 5, name: 'DREAMWAVE', price: '₹3,800.00', collec_name:'TOP SELLERS', image: '/assets/images/collecpage_5.jpg' },
    { id: 6, name: 'EMBODY GRACE', price: '₹3,599.00',collec_name:'TOP SELLERS', image: '/assets/images/collecpage_6.jpg' },
    { id: 7, name: 'CROPPED TUNDRA GUARD', price: '₹8,000.00', collec_name:'TOP SELLERS', image: '/assets/images/collecpage_7.jpg' },
    { id: 8, name: 'PARACHUTE PANTS', price: '₹2,999.00', collec_name:'TOP SELLERS', image: '/assets/images/collecpage_8.jpg' },
    
  ];

  return (
    <>
      
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Julley Ladakh Collection | VASAVI</title>
        <meta name="description" content="Experience the serenity of Ladakh through our exclusive fashion collection" />
      </Head>

     {/* Navigation */}
     <header className=" m-8 flex justify-between items-center mt-14 bg-black text-white  ">
        <Link href="/" className="text-sm font-medium ">
          ← BACK
        </Link>
        <div className="text-sm font-medium">
          CATEGORIES/JULLEY LADAKH/JACKETS
        </div>
      </header>
      

     

      {/* Julley Ladakh Hero Section */}
      <section className="relative">
        <div className="relative w-full h-screen">
          <Image 
            src="/assets/images/julley_1.jpg" 
            alt="Julley Ladakh" 
            layout="fill"
            objectFit="cover"
            priority
            className='z-0'
          />

          <div className="absolute inset-0 flex flex-col justify-between">
            {/* Title */}
            <div className="mt-32 px-6 text-center">
              <h1 className="text-9xl font-bold text-white tracking-tight font-[theater]">JULLEY LADAKH</h1>
            </div>

            {/* Action Buttons */}
            <div className="flex w-full">
              <Link href="/experience" className="w-1/2 bg-orange-600 py-6 px-4 text-start">
                <span className="text-5xl font-medium font-[theater] ml-9 ">EXPERIENCE THE SERENITY OF LADAKH</span>
              </Link>
              <Link href="/collection" className="w-1/2 bg-orange-600 py-6 px-4 text-end">
                <span className="text-5xl font-medium font-[theater] mr-9">EXPLORE OUR COLLECTION</span>
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
              HOW IT WAS<br />DONE?
            </h2>

            <div className="mb-8">
              <p className="font-medium mb-2">MADE WITH LOVE BY 19 PEOPLE</p>
              <p className="text-sm opacity-80 max-w-lg">
                INSPIRED BY THE RUGGED, SERENE LANDSCAPES OF LADAKH, THIS COLLECTION 
                SEAMLESSLY BLENDS THE BOLDNESS OF BLACK LEATHER WITH THE REFINED 
                SOFTNESS OF GREY SUEDE. A PERFECT EMBODIMENT OF THE COLLECTION'S 
                ESSENCE, IT SPEAKS TO THE UNTAMED BEAUTY AND RAW ELEGANCE OF THE 
                REGION.
              </p>
            </div>

            <div>
              <p className="font-medium mb-2">MADE WITH LOVE BY 19 PEOPLE</p>
              <p className="text-sm opacity-80 max-w-lg">
                INSPIRED BY THE RUGGED, SERENE LANDSCAPES OF LADAKH, THIS COLLECTION
                SEAMLESSLY BLENDS THE BOLDNESS OF BLACK LEATHER WITH THE REFINED
                SOFTNESS OF GREY SUEDE. A PERFECT EMBODIMENT OF THE COLLECTION'S
                ESSENCE, IT SPEAKS TO THE UNTAMED BEAUTY AND RAW ELEGANCE OF THE
                REGION.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-5 mt-8 lg:mt-0">
            <div className="relative aspect-square">
              <Image 
                src="/assets/images/julley_2.jpg" 
                alt="Ladakh Stupa" 
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative aspect-square">
              <Image 
                src="/assets/images/julley_4.jpg" 
                alt="Prayer Flags" 
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative aspect-square ">
              <Image 
                src="/assets/images/julley_3.jpg" 
                alt="Traditional House" 
                layout="fill"
                objectFit="cover"
                className='ml-52 mt-5'
              />
            </div>
            
          </div>
        </div>
      </section>

      {/* Brand Logo */}
      <section className="py-8 px-7 mr-12 flex justify-end">
        <Image src="/assets/images/logo.png" alt="VASAVI" width={150} height={80} />
      </section>

      {/* Explore Our Collection Section */}
      <section className="py-16 px-6 bg-black">
        <h2 className="text-8xl font-bold mb-16 ml-4 leading-tight font-[theater]">
          EXPLORE OUR<br />COLLECTION
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {collectionItems.map((item) => (
            <div key={item.id} className="flex flex-col">
              <div className="relative aspect-[3/4] bg-gray-100">
                <Image 
                  src={item.image} 
                  alt={item.name} 
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="mt-2 flex flex-col">
                <span className="text-sm font-sm font-[theater] text-zinc-600 text-center ">{item.collec_name}</span>
                <span className="text-sm font-normal text-center ">{item.name}</span>
                <span className="text-sm opacity-70 text-center">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
</>
  );
}