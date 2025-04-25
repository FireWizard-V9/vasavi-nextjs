"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import NewCollection from "../NewCollection";
import { motion, useScroll, useTransform } from "framer-motion";

export default function LandingPage() {
  // Refs for scroll animations
  const storyRef = useRef(null);
  const missionRef = useRef(null);
  const aboutRef = useRef(null);
  const aiRef = useRef(null);
  
  // Story section scroll-linked blur
  const { scrollYProgress: storyProgress } = useScroll({
    target: storyRef,
    offset: ["start center", "end center"]
  });
  
  const storyBlur = useTransform(
    storyProgress,
    [0, 0, 1.5],
    ["blur(5px)", "blur(0px)", "blur(5px)"]
  );
  
  // Mission section scroll-linked blur
  const { scrollYProgress: missionProgress } = useScroll({
    target: missionRef,
    offset: ["start center", "end center"]
  });
  
  const missionBlur = useTransform(
    missionProgress,
    [0, 0.5, 1],
    ["blur(5px)", "blur(0px)", "blur(5px)"]
  );
  
  // About section scroll-linked blur
  const { scrollYProgress: aboutProgress } = useScroll({
    target: aboutRef,
    offset: ["start center", "end center"]
  });
  
  const aboutBlur = useTransform(
    aboutProgress,
    [0, 0.5, 1],
    ["blur(5px)", "blur(0px)", "blur(5px)"]
  );
  
  // AI features section scroll-linked blur
  const { scrollYProgress: aiProgress } = useScroll({
    target: aiRef,
    offset: ["start center", "end center"]
  });
  
  const aiBlur = useTransform(
    aiProgress,
    [0, 0.5, 1],
    ["blur(5px)", "blur(0px)", "blur(5px)"]
  );
  
  // Shorter, snappier transition for animations
  const fastTransition = { duration: 0.7 };

  return (
    <div className="min-h-screen bg-black text-white mt-14">
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

      {/* Our Story Section with scroll-linked blur */}
      <motion.section 
        id="our-story"
        ref={storyRef} 
        className="py-16 px-4 sm:px-8 max-w-7xl mx-auto"
        style={{ filter: storyBlur }}
        transition={fastTransition}
      >
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          OUR STORY
        </h2>
        <div className="flex justify-center">
          <div className="w-full max-w-4xl space-y-6">
            <p className="text-2xl md:text-3xl text-white leading-tight font-bold mb-6 text-center">
              THE SILENCE IS ABOUT TO SHATTER. WHAT COMES NEXT WILL REWRITE EVERYTHING YOU THOUGHT YOU KNEW.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              THE TIME IS ALMOST HERE. UNITED SOULS, BOUND BY THE THREADS OF TIME, ARE ABOUT TO WITNESS SOMETHING EXTRAORDINARY. DEEP IN THE HEART OF FORGOTTEN STREETS, SOMETHING IS STIRRING. AN UNTOLD STORY IS ABOUT TO BE REVEALED. A TALE OF UNSEEN FORCES, UNSPOKEN SECRETS, AND A WORLD WAITING TO AWAKEN FROM ITS SLUMBER. THIS TIME THEY ARE LIMITLESS… THIS TIME ITS DISRUPTION.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Our Mission Section with scroll-linked blur */}
      <motion.section 
        ref={missionRef} 
        className="py-16 px-4 sm:px-8 max-w-7xl mx-auto bg-black"
        style={{ filter: missionBlur }}
        transition={fastTransition}
      >
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          OUR MISSION
        </h2>
        <div className="flex justify-center">
          <div className="w-full max-w-4xl space-y-6">
            <p className="text-2xl md:text-3xl text-white leading-tight font-bold mb-6 text-center">
              AT VASAVI, OUR MISSION IS TO UNCOVER HIDDEN TALENT WHO HAVE YET LACKED OPPORTUNITIES
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              VASAVI PROVIDES A PLATFORM FOR ARTISTS AND CREATORS TO SHOWCASE THEIR UNIQUE VISIONS. BY COLLABORATING WITH VISIONARY DESIGNERS, WE CREATE BOLD, DISRUPTIVE FASHION THAT SYMBOLIZES INDIVIDUALITY AND SELF-EXPRESSION. WE EMPOWER DIVERSE VOICES AND TRANSFORM THE FASHION LANDSCAPE.
            </p>
          </div>
        </div>
      </motion.section>

      {/* About Us Section with scroll-linked blur */}
      <motion.section 
        ref={aboutRef}
        className="py-16 px-4 sm:px-8 max-w-7xl mx-auto"
        style={{ filter: aboutBlur }}
        transition={fastTransition}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
          ABOUT US
        </h2>
        <div className="flex justify-center">
          <div className="w-full max-w-4xl space-y-6">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium">
              VASAVI IS THE STREETWEAR BRAND FOR THOSE WHO WEAR THEIR STORY WITH
              PRIDE. HANDMADE AND CRAFTED WITH FEARLESS CREATIVES, EACH PIECE
              REFLECTS UNAPOLOGETIC AUTHENTICITY FOR THOSE WHO REFUSE TO BLEND
              IN
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium">
              AT VASAVI, WE BELIEVE THAT CLOTHING ISN&apos;T JUST
              FABRIC-IT&apos;S A STATEMENT. BREAK THE MOLD WITH VASAVI. EACH
              PIECE IS CRAFTED TO REFLECT YOUR BOLD SPIRIT AND UNIQUE IDENTITY.
              FOR THOSE WHO DARE TO BE DIFFERENT, OUR DESIGNS LET YOU WEAR YOUR
              TRUE SELF AND MAKE A STATEMENT.
            </p>
          </div>
        </div>
      </motion.section>

      {/* AI Features Section with scroll-linked blur */}
      <motion.section 
        ref={aiRef}
        className="py-16 px-4"
        style={{ filter: aiBlur }}
        transition={fastTransition}
      >
        <h2 className="text-4xl font-bold mb-12 px-4 text-center">OUR AI FEATURES</h2>
        <div className="flex flex-col items-center justify-center gap-8 px-4">
          <Image
            src="/assets/images/comingsoon.jpg"
            alt="Vasavi fashion models"
            height={500}
            width={500}
            priority
            className="object-cover"
          />
        </div>
      </motion.section>
    </div>
  );
}
