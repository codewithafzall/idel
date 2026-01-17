'use client';
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function Banner() {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const bg = hero.querySelector('.heroBg');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        bg,
        { scale: 1 },
        {
          scale: 1.1,
          ease: 'none',
          scrollTrigger: {
            trigger: hero,
            start: 'top top',
            end: '+=200',
            scrub: true,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        }
      );

      requestAnimationFrame(() => ScrollTrigger.refresh());
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={heroRef} className="heroWrap hidden sm:block relative z-10" suppressHydrationWarning>
        <div className="heroBg">
          <video
            className="heroVideo"
            src="/banner-desktop.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/banner-desktop-poster.webp"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Content */}
        <div className="container relative text-white top-1/2 -translate-y-1/2">
          <h1 className="uppercase">Where Design</h1>
          <h1 className="uppercase mt-2">Meets Precision</h1>
          <p className="w-1/2 leading-6 mt-3">
            Experience next-generation aluminium systems, engineered for longevity,
            luxury, and unmatched performance.
          </p>
           <Link href="/contact">
          <button className="bg-[#29367D] rounded-lg uppercase px-9 py-3 mt-6">
            Enquire Now
          </button>
          </Link>
        </div>
      </section>


      <section className="hero block sm:hidden relative z-10">
        <div className="h-screen">
          <video
            className="h-screen object-cover w-full"
            src="/banner-mobile.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/banner-mobile-poster.webp"
          />
        </div>

        {/* Content */}
        <div className="container absolute text-white top-30">
          <h1 className="uppercase">Where Design</h1>
          <h1 className="uppercase">Meets Precision</h1>
          <p className="leading-6 mt-2">
            Experience next-generation aluminium systems, engineered for longevity,
            luxury, and unmatched performance.
          </p>
          <Link href="/contact">
          <button className='rounded-lg bg-transparent border-2 border-white py-2 px-3 mt-3'>
            ENQUIRE NOW
          </button>
          </Link>
        </div>
      </section>
    </>
  );
}