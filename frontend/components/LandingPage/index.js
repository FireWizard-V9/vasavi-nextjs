import React from "react";
import Image from "next/image";
import Link from "next/link";
const LandingPage = () => {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <Image
            src="/assets/images/landing-page-image.png"
            alt="Vasavi fashion models"
            fill
            priority
            quality={100}
            className="object-cover"
          />
        </div>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="relative w-64 h-32">
          <Link href='/'>
          <Image
            src="/assets/images/logo.png"
            alt="VASAVI logo"
            fill
            className="object-contain"
          />
          </Link>
        </div>

        <h2 className="text-white text-sm tracking-widest uppercase mt-4">
          DISTRUPT THE ORDINARY
        </h2>
      </div>
    </div>
  );
};

export default LandingPage;
