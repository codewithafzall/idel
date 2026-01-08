"use client";

import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import whiteLine from "../../images/white-line.svg";
import blueLine from "../../images/blue-line.svg";
import product1 from "../../images/minimal.webp";
import product2 from "../../images/geeta.webp";
import product3 from "../../images/aluk.webp";
import home1 from "../../images/home-1.webp";
import home2 from "../../images/home-2.webp";

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
    const sectionRef = useRef(null);
    const cardRef = useRef(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const card = cardRef.current;
        if (!section || !card) return;

        const ctx = gsap.context(() => {
            // Set a solid baseline so the animation is deterministic
            gsap.set(card, {
                maxWidth: "80rem", 
                width: "100%",
                borderRadius: "1rem",
                marginTop: "6rem", // matches mt-24 initially
                transformOrigin: "center top",
                scaleX: 1,
                scaleY: 1,
            });

            gsap.to(card, {
                maxWidth: "100vw",
                marginTop: "0rem",
                scaleX: 1.02,
                scaleY: 1.12,
                borderRadius: "0.25rem",
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top bottom",
                    end: "top center",
                    scrub: true,
                    invalidateOnRefresh: true,
                },
            });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative z-20 overflow-hidden">
            {/* EXPANDING CARD */}
            <div
                ref={cardRef}
                className="mx-auto bg-blue rounded-xl py-12 px-10 overflow-hidden"
            >
                <p className="uppercase text-white flex-center gap-x-4 font-bold">
                    <span>
                        <Image src={whiteLine} alt="vector" />
                    </span>
                    Our Products
                </p>

                <h2 className="text-white text-center mx-auto mt-4 lg:mt-7">
                    Crafted Aluminium Systems,<br/> Designed to Endure
                </h2>
                <p className="text-white mt-2 text-center">
                    Explore IDEL's advanced lift & slide solutions built for seamless living.
                </p>

                <div className="text-white grid grid-cols-1 sm:grid-cols-3 place-items-center gap-8 mt-8 lg:mt-16">
                    {/* PRODUCT 1 */}
                    <div className="flex flex-col items-center">
                        <div className="group relative overflow-hidden rounded-lg">
                            <Image
                                src={product1}
                                width={430}
                                height={570}
                                alt="Minimal"
                                className="rounded-lg object-cover group-hover:scale-110 duration-1000"
                            />

                            <div className="absolute inset-8 rounded-lg bg-white flex flex-col items-center justify-center text-center px-6 scale-0 transition-transform duration-700 group-hover:scale-100">
                                <p className="text-black mt-3">
                                    Sleek, unobtrusive profiles that maximise views and light. Built for
                                    modern, minimal architecture.
                                </p>
                                <Link href="/product#product-1">
                                    <button className="mt-6 border border-blue text-blue font-semibold px-6 py-3 rounded-xl transition">
                                        View the Product
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <p className="text-center mt-5">Minimal System</p>
                    </div>

                    {/* PRODUCT 2 */}
                    <div className="flex flex-col items-center">
                        <div className="group relative overflow-hidden rounded-lg">
                            <Image
                                src={product2}
                                width={430}
                                height={570}
                                alt="Aluk"
                                className="rounded-lg object-cover group-hover:scale-110 duration-1000"
                            />

                            <div className="absolute inset-8 rounded-lg bg-white flex flex-col items-center justify-center text-center px-6 scale-0 transition-transform duration-700 group-hover:scale-100">
                                <p className="text-black mt-3">
                                    European-engineered, heavy-duty systems for long-span durability.
                                    Ideal for large-scale residential and commercial facades.
                                </p>
                                <Link href="/product#product-3">
                                    <button className="mt-6 border border-blue text-blue font-semibold px-6 py-3 rounded-xl transition">
                                        View the Product
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <p className="text-center mt-5">Aluk Series</p>
                    </div>

                    {/* PRODUCT 3 */}
                    <div className="flex flex-col items-center">
                        <div className="group relative overflow-hidden rounded-lg">
                            <Image
                                src={product3}
                                width={430}
                                height={570}
                                alt="Geeta Series"
                                className="rounded-lg object-cover group-hover:scale-110 duration-1000"
                            />

                            <div className="absolute inset-8 rounded-lg bg-white flex flex-col items-center justify-center text-center px-6 scale-0 transition-transform duration-700 group-hover:scale-100">
                                <p className="text-black mt-3">
                                    Versatile and lightweight, ideal for everyday performance. Balancing
                                    strength with affordability.
                                </p>
                                <Link href="/product#product-2">
                                    <button className="mt-6 border border-blue text-blue font-semibold px-6 py-3 rounded-xl transition">
                                        View the Product
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <p className="text-center mt-5">Geeta Series</p>
                    </div>
                </div>
            </div>

            {/* ABOUT SECTION */}
            <div className="container flex justify-between items-end gap-x-24 mt-40 mb-14">
                <div className="w-8/12">
                    <p className="uppercase flex items-center gap-x-4 font-bold text-blue">
                        <span>
                            <Image src={blueLine} alt="vector" />
                        </span>
                        About Us
                    </p>
                    <h2 className="mt-3">
                        Over Two Decades of <br /> Aluminium Expertise.
                    </h2>
                    <p className="leading-7 mt-2 mb-7">
                        With 25+ years of hands-on fabrication and installation experience,
                        IDEL is trusted by leading developers and architects across India.
                    </p>
                    <Image src={home1} width={700} height={319} alt="" className="w-full" />
                </div>

                <div className="w-4/12">
                    <Image src={home2} alt="" className="w-full" />
                </div>
            </div>
        </section>
    );
};

export default Products;
