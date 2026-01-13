"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import blueLine from "../../images/blue-line.svg";
import arrow from "../../images/arrow.svg";

import Project1 from "../../images/project-1.webp";
import Project2 from "../../images/project-2.webp";
import Project3 from "../../images/project-3.webp";
import Project4 from "../../images/project-4.webp";
import Project5 from "../../images/project-5.webp";
import Project6 from "../../images/cartier-2.webp";

const images = [
    { src: Project1, title: "Bungalow by Ar. Soumya Raja at Aamby Valley" },
    { src: Project2, title: "Residential Building at Bandra" },
    { src: Project3, title: "NICMAR" },
    { src: Project5, title: "Dhanuka Bhawan" },
    { src: Project6, title: "Cartier" },
];

export default function ProjectsSwiper() {
    const [active, setActive] = useState(0);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const swiperRef = useRef(null);

    return (
        <section className="pt-14 pb-10 relative">
            <div className="container flex flex-col sm:flex-row justify-between items-center">
                <div>
                    <p className="uppercase flex gap-x-4 font-bold text-blue">
                        <span><Image src={blueLine} alt="vector" /></span>Our Projects
                    </p>
                    <h2 className="mt-3">
                        Creating Engaging Stories <br /> That Attract Educate
                    </h2>
                </div>
                <p className="leading-7 mt-2 mb-7 sm:text-right hidden sm:block">
                    Showcasing some of our most iconic residential<br /> and commercial installations engineered<br /> for performance, delivered with precision.
                </p>
                <p className="leading-7 mt-2 mb-7 sm:hidden">
                    Showcasing some of our most iconic residential<br /> and commercial installations engineered<br /> for performance, delivered with precision.
                </p>
            </div>

            <div className="w-full px-5 md:px-20 mt-7 sm:mt-14 relative">
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) => {
                        setIsBeginning(swiper.isBeginning);
                        setIsEnd(swiper.isEnd);
                    }}
                    slidesPerView="auto"
                    spaceBetween={20}
                    className="overflow-visible"
                >
                    {images.map((item, idx) => {
                        let activeWidth = 50;
                        let inactiveWidth = 25;

                        if (typeof window !== "undefined") {
                            if (window.innerWidth < 768) {
                                activeWidth = 80;
                                inactiveWidth = 50;
                            } else if (window.innerWidth < 1024) {
                                activeWidth = 50;
                                inactiveWidth = 30;
                            }
                        }

                        const widthPercent = active === idx ? `${activeWidth}%` : `${inactiveWidth}%`;

                        return (
                            <SwiperSlide
                                key={idx}
                                style={{
                                    width: widthPercent,
                                    transition: "width 300ms ease",
                                }}
                            >
                                <div
                                    className="relative rounded-xl overflow-hidden cursor-pointer"
                                    onMouseEnter={() => setActive(idx)}
                                    onMouseLeave={() => setActive(0)}
                                >
                                    <div
                                        className="w-full h-112.5 md:h-137.5 bg-black flex items-center justify-center"
                                        style={{
                                            transition: "transform 300ms ease",
                                            transform: active === idx ? "scale(1.02)" : "scale(1)",
                                        }}
                                    >
                                        <Image
                                            src={item.src}
                                            alt={item.title}
                                            className="object-cover z-10 w-full h-full"
                                        />
                                    </div>

                                    <small
                                        className={`absolute inline-block bottom-10 left-6 text-white z-20 text-3xl ${active === idx ? "w-4/6" : "w-5/6"} transition-ease`}
                                    >
                                        {item.title}
                                    </small>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
            <div className="flex justify-center gap-x-4 mt-5">
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className=""
                    disabled={isBeginning}
                >
                    <Image
                        src={arrow}
                        alt="Prev"
                        className={`w-10 rotate-180 transition ${isBeginning ? "opacity-30" : "opacity-100"
                            }`}
                    />
                </button>

                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className=""
                    disabled={isEnd}
                >
                    <Image
                        src={arrow}
                        alt="Next"
                        className={`w-10 transition ${isEnd ? "opacity-30" : "opacity-100"
                            }`}
                    />
                </button>
            </div>
        </section>
    );
}
