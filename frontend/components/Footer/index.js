import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-5 relative mt-auto">
      <div className="flex justify-around max-w-[1700px]">
        {/* INFO Section */}
        <div>
          <h3 className="mb-2 font-bold">INFO</h3>
          <ul className="list-none p-0">
            <li className="mb-1"><Link href="/about">ABOUT</Link></li>
            <li className="mb-1"><Link href="/us">US</Link></li>
            <li className="mb-1"><Link href="/career">CAREER</Link></li>
            <li className="mb-1"><Link href="/affiliate">AFFILIATE</Link></li>
            <li className="mb-1"><Link href="/contact">CONTACT</Link></li>
          </ul>
        </div>
        
        {/* SOCIAL Section */}
        <div>
          <h3 className="mb-2 font-bold">SOCIAL</h3>
          <ul className="list-none p-0">
            <li className="mb-1"><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">FACEBOOK</a></li>
            <li className="mb-1"><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">INSTAGRAM</a></li>
            <li className="mb-1"><a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">TIKTOK</a></li>
            <li className="mb-1"><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LINKEDIN</a></li>
          </ul>
        </div>
        
        {/* SERVICE Section */}
        <div>
          <h3 className="mb-2 font-bold">SERVICE</h3>
          <ul className="list-none p-0">
            <li className="mb-1"><Link href="/shipping">SHIPPING & RETURNS</Link></li>
            <li className="mb-1"><Link href="/privacy">COOKIE & PRIVACY POLICY</Link></li>
            <li className="mb-1"><Link href="/terms">TERMS OF SERVICE</Link></li>
            <li className="mb-1"><Link href="/b2b">B2B</Link></li>
          </ul>
        </div>
      </div>

      {/* LARGE LOGO Section */}
      <div className="w-full flex justify-center mt-16">
        <div className="text-white text-8xl md:text-9xl font-bold tracking-tighter" style={{ fontFamily: 'sans-serif', letterSpacing: '-0.05em' }}>
          VASAVI
        </div>
      </div>
    </footer>
  );
};

export default Footer;
