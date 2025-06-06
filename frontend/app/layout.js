// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/lib/CartContext";
import { WishlistProvider } from "@/lib/WishListContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vasavi",
  description: "A Luxurious Street Wear Brand",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen w-screen overflow-x-hidden flex flex-col`}
      >
        <CartProvider>
          <WishlistProvider>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}