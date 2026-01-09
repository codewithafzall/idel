"use client";

import React, { useState } from "react";
import Image from "next/image";

import blueLine from "../images/blue-line.svg";
import click from "../images/click.png";

import ambey1 from "../images/aambey-1.webp";
import ambey2 from "../images/aambey-2.webp";
import ambey3 from "../images/aambey-3.webp";

import del1 from "../images/dell-1.webp";
import del2 from "../images/dell-2.webp";
import del3 from "../images/dell-3.webp";

import nicmar1 from "../images/nicmar-1.webp";
import nicmar2 from "../images/nicmar-2.webp";
import nicmar3 from "../images/nicmar-3.webp";
import nicmar4 from "../images/nicmar-4.webp";

import pent1 from "../images/pent-1.webp";
import pent2 from "../images/pent-2.webp";
import pent3 from "../images/pent-3.webp";

import karjat1 from "../images/karjat-1.webp";
import karjat2 from "../images/karjat-2.webp";
import karjat3 from "../images/karjat-3.webp";

import cartier1 from "../images/cartier-1.webp";
import cartier2 from "../images/cartier-2.webp";
import cartier3 from "../images/cartier-3.webp";

import dhanuka1 from "../images/dhanuka-1.webp";
import dhanuka2 from "../images/dhanuka-2.webp";
import dhanuka3 from "../images/dhanuka-3.webp";

import khar1 from "../images/khar-1.webp";
import khar2 from "../images/khar-2.webp";
import khar3 from "../images/khar-3.webp";

import seq1 from "../images/seq-1.webp";
import seq2 from "../images/seq-2.webp";
import seq3 from "../images/seq-3.webp";

import joy1 from "../images/joy-1.webp";
import joy2 from "../images/joy-2.webp";

import domb1 from "../images/dombivli-1.webp";
import domb2 from "../images/dombivli-2.webp";
import domb3 from "../images/dombivli-3.webp";

const page = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeProject, setActiveProject] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const projects = [
        {
            id: 1,
            title: "Ambey Valley",
            cover: ambey1,
            gallery: [ambey1, ambey2, ambey3],
        },
        {
            id: 2,
            title: "Del House",
            cover: del1,
            gallery: [del1, del2, del3],
        },
        {
            id: 3,
            title: "Dhanuka Bhawan",
            cover: dhanuka1,
            gallery: [dhanuka1, dhanuka2, dhanuka3],
        },
        {
            id: 4,
            title: "Dombivli Apartment",
            cover: domb1,
            gallery: [domb1, domb2, domb3],
        },
        {
            id: 5,
            title: "Joy Legend",
            cover: joy1,
            gallery: [joy1, joy2],
        },
        {
            id: 6,
            title: "Nicmar",
            cover: nicmar1,
            gallery: [nicmar1, nicmar2, nicmar3, nicmar4],
        },
        {
            id: 7,
            title: "Penthouse at Khar",
            cover: pent1,
            gallery: [pent1, pent2, pent3],
        },
        {
            id: 8,
            title: "Sequoia",
            cover: seq1,
            gallery: [seq1, seq2, seq3],
        },
        {
            id: 9,
            title: "Karjat",
            cover: karjat1,
            gallery: [karjat1, karjat2, karjat3],
        },
        {
            id: 10,
            title: "Cartier",
            cover: cartier1,
            gallery: [cartier1, cartier2, cartier3],
        },
        {
            id: 11,
            title: "Celebrity House at Khar",
            cover: khar1,
            gallery: [khar1, khar2, khar3],
        },
    ];

    const openLightbox = (project) => {
        setActiveProject(project);
        setCurrentIndex(0);
        setIsOpen(true);
    };

    const closeLightbox = () => {
        setIsOpen(false);
        setActiveProject(null);
    };

    return (
        <main>
            <div className="project-hero text-white">
                <div className="container pt-44 pb-32">
                    <h2>
                        Precision in Every Pane. <br />
                        Purpose in Every Project.
                    </h2>
                </div>
            </div>

            <div className="container py-14">
                <p className="uppercase flex gap-x-4 font-bold text-blue items-center">
                    <Image src={blueLine} alt="vector" />
                    Featured Products
                </p>

                <h2 className="mt-4">
                    Explore The Collection <br /> of Our Projects
                </h2>

                <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-7">
                    {projects.map((project) => (
                        <div key={project.id}>
                            <div
                                onClick={() => openLightbox(project)}
                                className="relative group cursor-pointer aspect-9/10 overflow-hidden rounded-lg"
                            >
                                <Image
                                    src={project.cover}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                <Image
                                    src={click}
                                    alt="click"
                                    className="absolute top-1/2 left-1/2 w-14 h-14 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-10"
                                />
                            </div>

                            <p className="mt-3">{project.title}</p>
                        </div>
                    ))}
                </div>
            </div>

            {isOpen && activeProject && (
                <div className="fixed inset-0 bg-[#404040] z-50 flex items-center justify-center">
                    <button
                        className="absolute top-6 right-6 text-white text-4xl"
                        onClick={closeLightbox}
                    >
                        &times;
                    </button>

                    <button
                        className="absolute left-6 text-white text-5xl"
                        onClick={() =>
                            setCurrentIndex(
                                (currentIndex - 1 + activeProject.gallery.length) %
                                activeProject.gallery.length
                            )
                        }
                    >
                        ‹
                    </button>

                    <div className="relative w-[90vw] max-w-5xl aspect-4/3">
                        <Image
                            src={activeProject.gallery[currentIndex]}
                            alt={activeProject.title}
                            fill
                            className="object-contain"
                        />
                    </div>

                    <button
                        className="absolute right-6 text-white text-5xl"
                        onClick={() =>
                            setCurrentIndex(
                                (currentIndex + 1) % activeProject.gallery.length
                            )
                        }
                    >
                        ›
                    </button>
                </div>
            )}
        </main>
    );
};

export default page;
