"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import blueLine from "../../images/blue-line.svg";
import arrow from "../../images/arrow.svg";

import Project1 from "../../images/project-1.webp";
import Project2 from "../../images/del-1.webp";
import Project3 from "../../images/nicmar-1.webp";
import Project4 from "../../images/ecr-2.webp";
import Project5 from "../../images/dombivli-1.webp";
import Project6 from "../../images/seq-1.webp";

const images = [
    { src: Project4, title: "Jyothika & Suriya's Bungalow at Chennai", projectId: 10 },
    { src: Project1, title: "Mr. Pramod Dhanuka's Bungalow at Amby Valley", projectId: 1 },
    { src: Project2, title: "Residential Building by ZYJ Developers", projectId: 2 },
    { src: Project3, title: "NICMAR", projectId: 5 },
    { src: Project5, title: "Bungalow at Dombivli", projectId: 4 },
    { src: Project6, title: "Sequoia", projectId: 6 },
];

export default function ProjectsSwiper() {
    const router = useRouter();
    const [active, setActive] = useState(0);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const [activeWidth, setActiveWidth] = useState(50);
    const [inactiveWidth, setInactiveWidth] = useState(25);
    const [activeHeight, setActiveHeight] = useState(400);
    const [inactiveHeight, setInactiveHeight] = useState(250);

    const swiperRef = useRef(null);

    useEffect(() => {
        const updateWidths = () => {
            const width = window.innerWidth;
            
            if (width < 768) {
                setIsMobile(true);
                setActiveHeight(400);
                setInactiveHeight(250);
            } else {
                setIsMobile(false);
                if (width < 1024) {
                    setActiveWidth(50);
                    setInactiveWidth(30);
                } else {
                    setActiveWidth(50);
                    setInactiveWidth(25);
                }
            }
        };

        updateWidths();
        window.addEventListener("resize", updateWidths);
        return () => window.removeEventListener("resize", updateWidths);
    }, []);

    const handleSlideClick = (idx, projectId) => {
        if (isMobile) {
            if (active === idx) {
                // If already active, navigate to projects page
                router.push(`/projects#project-${projectId}`);
            } else {
                // Otherwise, just expand
                setActive(idx);
            }
        } else {
            // On desktop, click navigates directly
            router.push(`/projects#project-${projectId}`);
        }
    };

    return (
        <section className="pt-14 pb-10 relative">
            <div className="container flex flex-col sm:flex-row justify-between items-center">
                <div>
                    <p className="uppercase flex gap-x-4 font-bold text-blue">
                        <span>
                            <Image src={blueLine} alt="vector" />
                        </span>
                        Our Projects
                    </p>
                    <h2 className="mt-3">
                        Creating Engaging Stories <br /> That Attract Educate
                    </h2>
                </div>

                <p className="leading-7 mt-2 mb-7 sm:text-right hidden sm:block">
                    Showcasing some of our most iconic residential
                    <br />
                    and commercial installations engineered
                    <br />
                    for performance, delivered with precision.
                </p>

                <p className="leading-7 mt-2 mb-7 sm:hidden">
                    Showcasing some of our most iconic residential
                    <br />
                    and commercial installations engineered
                    <br />
                    for performance, delivered with precision.
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
                    direction={isMobile ? "vertical" : "horizontal"}
                    className={isMobile ? "h-150 overflow-visible" : "overflow-visible"}
                >
                    {images.map((item, idx) => {
                        const widthPercent = !isMobile && active === idx 
                            ? `${activeWidth}%` 
                            : !isMobile 
                            ? `${inactiveWidth}%` 
                            : "100%";
                        
                        const heightPx = isMobile && active === idx 
                            ? `${activeHeight}px` 
                            : isMobile 
                            ? `${inactiveHeight}px` 
                            : "auto";

                        return (
                            <SwiperSlide
                                key={idx}
                                style={{
                                    width: widthPercent,
                                    height: heightPx,
                                    transition: isMobile 
                                        ? "height 300ms ease" 
                                        : "width 300ms ease",
                                }}
                            >
                                <div
                                    className="relative rounded-xl overflow-hidden cursor-pointer h-full"
                                    onMouseEnter={() => !isMobile && setActive(idx)}
                                    onMouseLeave={() => !isMobile && setActive(0)}
                                    onClick={() => handleSlideClick(idx, item.projectId)}
                                >
                                    <div
                                        className={`w-full bg-black flex items-center justify-center ${
                                            isMobile ? "h-full" : "h-112.5 md:h-137.5"
                                        }`}
                                        style={{
                                            transition: "transform 300ms ease",
                                            transform:
                                                active === idx ? "scale(1.02)" : "scale(1)",
                                        }}
                                    >
                                        <Image
                                            src={item.src}
                                            alt={item.title}
                                            className="object-cover z-10 w-full h-full"
                                        />
                                    </div>

                                    <small
                                        className={`absolute inline-block bottom-10 left-6 text-white z-20 text-3xl ${
                                            active === idx ? "w-4/6" : "w-5/6"
                                        } transition-ease`}
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
                    disabled={isBeginning}
                >
                    <Image
                        src={arrow}
                        alt="Prev"
                        className={`w-10 transition ${
                            isMobile ? "rotate-90" : "rotate-180"
                        } ${isBeginning ? "opacity-30" : "opacity-100"}`}
                    />
                </button>

                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    disabled={isEnd}
                >
                    <Image
                        src={arrow}
                        alt="Next"
                        className={`w-10 transition ${
                            isMobile ? "-rotate-90" : ""
                        } ${isEnd ? "opacity-30" : "opacity-100"}`}
                    />
                </button>
            </div>
        </section>
    );
}