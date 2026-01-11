"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import blueLine from "../../images/blue-line.svg";
import build from "../../images/build.webp";
import customize from "../../images/customize.webp";
import consult from "../../images/consult.webp";
import support from "../../images/support.webp";

const Process = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const process = [
        { id: 1, image: consult, title: "Consult", desc: "We understand your needs and recommend the best-fit system." },
        { id: 2, image: customize, title: "Customize", desc: "Tailor-made designs engineered to your space, use and budget." },
        { id: 3, image: build, title: "Build", desc: "Precision fabrication with strict QC and industry benchmarks." },
        { id: 4, image: support, title: "Support", desc: "Smooth on-site execution, after-sales and AMC guidance." },
    ];

    return (
        <section className="bg-sky pt-14 pb-20">
            <div className="container">
                {/* HEADER */}
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <div>
                        <p className="uppercase flex gap-x-4 font-bold text-blue">
                            <span>
                                <Image src={blueLine} alt="vector" />
                            </span>
                            Our Process
                        </p>

                        <h2 className="mt-3">
                            A Seamless Journey <br /> from Concept to Completion.
                        </h2>
                    </div>

                    <p className="leading-7 mt-2 mb-7 sm:text-right hidden sm:block">
                        Our team ensures clarity, efficiency, and confidence
                        <br /> at every stage of your project, from product
                        <br /> selection to post-installation support.
                    </p>

                    <p className="leading-7 mt-2 mb-7 sm:text-right block sm:hidden">
                        Our team ensures clarity, efficiency, and confidence at every stage of your project, from product selection to post-installation support.
                    </p>
                </div>

                {/* 📱 MOBILE — SWIPER */}
                <div className="block sm:hidden mt-10">
                    <Swiper
                        spaceBetween={16}
                        slidesPerView={1.15}
                        onSlideChange={() => setActiveIndex(null)}
                    >
                        {process.map((item, index) => (
                            <SwiperSlide key={item.id}>
                                <div
                                    className="relative overflow-hidden rounded-xl cursor-pointer bg-white p-10"
                                    onClick={() =>
                                        setActiveIndex(activeIndex === index ? null : index)
                                    }
                                >
                                    {/* BLUE OVERLAY */}
                                    <div
                                        className={`absolute inset-0 bg-blue transform origin-top transition-transform duration-800 ease-out
                                            ${activeIndex === index ? "scale-y-100" : "scale-y-0"}
                                        `}
                                    />

                                    {/* CONTENT */}
                                    <div className="relative z-10">
                                        <Image src={item.image} alt={item.title} className="mx-auto" />

                                        <h4
                                            className={`text-center text-4xl mt-12 font-semibold transition-colors duration-500
                                                ${activeIndex === index ? "text-white" : "text-black"}
                                            `}
                                        >
                                            {item.title}
                                        </h4>

                                        <small
                                            className={`text-center inline-block text-lg mt-5 leading-5.5 transition-colors duration-500
                                                ${activeIndex === index ? "text-white" : "text-black"}
                                            `}
                                        >
                                            {item.desc}
                                        </small>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* 🖥 DESKTOP — GRID */}
                <div className="hidden sm:grid grid-cols-4 gap-x-5 mt-14">
                    {process.map((item) => (
                        <div
                            key={item.id}
                            className="group relative overflow-hidden rounded-xl cursor-pointer bg-white py-10 px-5 transition-colors duration-500"
                        >
                            {/* BLUE HOVER OVERLAY */}
                            <div className="absolute inset-0 bg-blue transform scale-y-0 origin-top transition-transform duration-800 ease-out group-hover:scale-y-100" />

                            {/* CONTENT */}
                            <div className="relative z-10">
                                <Image src={item.image} alt={item.title} className="mx-auto" />

                                <h4 className="text-center text-4xl mt-12 font-semibold text-black transition-colors duration-500 group-hover:text-white">
                                    {item.title}
                                </h4>

                                <small className="text-center inline-block text-lg mt-5 leading-5.5 text-black transition-colors duration-500 group-hover:text-white">
                                    {item.desc}
                                </small>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
