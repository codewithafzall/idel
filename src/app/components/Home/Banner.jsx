'use client';
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
    <section ref={heroRef} className="heroWrap relative z-10" suppressHydrationWarning>
      <div className="heroBg">
        <video
          className="heroVideo"
          src="/banner.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
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
        <button className="bg-[#4B5AAA] rounded-lg uppercase px-9 py-3 mt-6">
          Enquire Now
        </button>
      </div>
    </section>
  );
}
