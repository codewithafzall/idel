"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import whiteLine from "../../images/white-line.svg";
import blueLine from "../../images/blue-line.svg";
import product1 from "../../images/ClearViewLT.png";
import product2 from "../../images/V45.png";
import product3 from "../../images/27mm.png";
import home1 from "../../images/home-1.webp";
import home2 from "../../images/home-2.webp";

gsap.registerPlugin(ScrollTrigger);

const Products = () => {

    const [activeCard, setActiveCard] = useState(null);
    const isMobile =
        typeof window !== "undefined" &&
        window.matchMedia("(max-width: 767px)").matches;


    return (
        <section className="relative z-20 overflow-hidden">
            {/* EXPANDING CARD */}
            <div className="mx-auto container bg-blue rounded-xl mt-14 px-4 sm:px-10 overflow-hidden">
                <p className="uppercase text-white flex-center gap-x-4 font-bold mt-14 sm:mt-0">
                    <span>
                        <Image src={whiteLine} alt="vector" />
                    </span>
                    Our Products
                </p>

                <h2 className="text-white hidden sm:block text-center mx-auto mt-4 lg:mt-7">
                    Crafted Aluminium Systems,<br /> Designed to Endure
                </h2>

                <h2 className="text-white block sm:hidden text-center mx-auto mt-4 lg:mt-7">
                    Crafted Aluminium Systems, Designed to Endure
                </h2>
                <p className="text-white mt-2 text-center">
                    Explore IDEL's advanced lift & slide solutions built for seamless living.
                </p>

                <div className="text-white grid grid-cols-1 sm:grid-cols-3 place-items-center gap-8 mt-8 lg:mt-16">
                    {/* PRODUCT 1 */}
                    <div className="flex flex-col items-center">
                        <div onClick={() => {
                            if (isMobile) {
                                setActiveCard(activeCard === 1 ? null : 1);
                            }
                        }} className="group relative overflow-hidden rounded-lg">
                            <div className="bg-white px-10 py-14">
                                <Image
                                    src={product1}
                                    width={430}
                                    height={570}
                                    alt="Minimal"
                                    className="rounded-lg object-cover group-hover:scale-110 duration-1000"
                                />
                            </div>

                            <div
                                className={`absolute inset-8 rounded-lg bg-white flex flex-col items-center justify-center text-center px-6 transition-transform duration-700
                                ${isMobile && activeCard === 1 ? "scale-100" : "scale-0"}
                                sm:group-hover:scale-100
                            `}
                            >

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

                    {/* PRODUCT 3 */}
                    <div className="flex flex-col items-center">
                        <div onClick={() => {
                            if (isMobile) {
                                setActiveCard(activeCard === 3 ? null : 3);
                            }
                        }} className="group relative overflow-hidden rounded-lg">
                            <div className="bg-white px-10 py-14">
                                <Image
                                    src={product3}
                                    width={430}
                                    height={570}
                                    alt="Geeta Series"
                                    className="rounded-lg object-cover group-hover:scale-110 duration-1000"
                                />
                            </div>

                            <div
                                className={`absolute inset-8 rounded-lg bg-white flex flex-col items-center justify-center text-center px-6 transition-transform duration-700
                                ${isMobile && activeCard === 3 ? "scale-100" : "scale-0"}
                                sm:group-hover:scale-100
                            `}
                            >

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

                    {/* PRODUCT 2 */}
                    <div className="flex flex-col items-center">
                        <div onClick={() => {
                            if (isMobile) {
                                setActiveCard(activeCard === 2 ? null : 2);
                            }
                        }}
                            className="group relative overflow-hidden rounded-lg">
                            <div className="bg-white px-10 py-14">
                                <Image
                                    src={product2}
                                    width={430}
                                    height={570}
                                    alt="Aluk"
                                    className="rounded-lg object-cover group-hover:scale-110 duration-1000"
                                />
                            </div>

                            <div
                                className={`absolute inset-8 rounded-lg bg-white flex flex-col items-center justify-center text-center px-6 transition-transform duration-700
                                            ${isMobile && activeCard === 2 ? "scale-100" : "scale-0"}
                                            sm:group-hover:scale-100
                                        `}
                            >

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

                        <p className="text-center mt-5 mb-10 sm:mb-0">Aluk Series</p>
                    </div>
                </div>
            </div>

            {/* ABOUT SECTION */}
            <div className="container flex flex-col sm:flex-row justify-between items-end gap-x-24 mt-10 sm:mt-14 mb-14">
                <div className="w-full sm:w-8/12">
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
                    <Image src={home1} width={700} height={319} alt="" className="w-full rounded-lg" />
                </div>

                <div className="w-full sm:w-4/12">
                    <Image src={home2} alt="" className="w-full mt-7 sm:mt-0" />
                </div>
            </div>
        </section>
    );
};

export default Products;
