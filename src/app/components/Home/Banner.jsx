'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {

    const heroRef = useRef(null);

    useEffect(() => {
        const hero = heroRef.current;

        gsap.fromTo(
            hero,
            { backgroundSize: '100%' },
            {
                backgroundSize: '108%',
                ease: 'none',
                scrollTrigger: {
                    trigger: hero,
                    start: 'top top',
                    end: '+=100', 
                    scrub: true,
                    pin: true,        
                    anticipatePin: 1,
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <div ref={heroRef} className="hero relative z-10">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            <div className="container relative text-white top-1/2 -translate-y-1/2">
                <h1 className="uppercase">Where Design</h1>
                <h1 className="uppercase mt-2">Meets Precision</h1>
                <p className="w-1/2 leading-6 mt-3">
                    Experience next-generation aluminium systems, engineered for longevity, luxury, and unmatched performance.
                </p>
                <button className="bg-[#1267de] rounded-lg uppercase px-9 py-3 mt-6">
                    Enquire Now
                </button>
            </div>
        </div>
    );
};

export default Banner;
