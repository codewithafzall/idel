"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

/* Lightbox */
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";

/* Assets */
import blueLine from "../images/blue-line.svg";
import click from "../images/click.png";
import banner from "../images/project-banner.webp";

import ambey1 from "../images/aambey-1.webp";
import ambey2 from "../images/aambey-2.webp";
import ambey3 from "../images/aambey-3.webp";

import del1 from "../images/del-1.webp";
import del2 from "../images/del-2.webp";

import nicmar1 from "../images/nicmar-1.webp";
import nicmar2 from "../images/nicmar-2.webp";
import nicmar3 from "../images/nicmar-3.webp";
import nicmar4 from "../images/nicmar-4.webp";
import nicmar5 from "../images/nicmar-5.webp";

import khar1 from "../images/khar-1.webp";
import khar2 from "../images/khar-2.webp";

import seq1 from "../images/seq-1.webp";
import seq2 from "../images/seq-2.webp";

import domb1 from "../images/dombivli-1.webp";
import domb2 from "../images/dombivli-2.webp";
import domb3 from "../images/dombivli-3.webp";
import domb4 from "../images/dombivli-4.webp";

import jain1 from "../images/jain-1.webp";
import jain3 from "../images/jain-3.webp";

import walk1 from "../images/walk-1.webp";
import walk2 from "../images/walk-2.webp";
import walk3 from "../images/walk-3.webp";

import ecr1 from "../images/ecr-1.webp";
import ecr2 from "../images/ecr-2.webp";
import ecr3 from "../images/ecr-3.webp";
import ecr4 from "../images/ecr-4.webp";

import duplex1 from "../images/duplex-1.webp";
import duplex2 from "../images/duplex-2.webp";
import duplexCover from "../images/duplex-cover.webp";

import runwal1 from "../images/runwal-1.webp";
import runwal2 from "../images/runwal-2.webp";

import devang1 from "../images/devang-1.webp";
import devang3 from "../images/devang-3.webp";
import devang4 from "../images/devang-4.webp";
import devangCover from "../images/devang-cover.webp";

import cartier1 from "../images/cartier-1.webp";

import gandhi1 from "../images/gandhi-1.webp";

import mulk1 from "../images/mulk-1.webp";
import mulk2 from "../images/mulk-2.webp";

import ambani1 from "../images/ambani-1.webp";
import ambani2 from "../images/ambani-2.webp";

import khemka1 from "../images/khemka-1.webp";

import jainpt1 from "../images/jain-pt-1.webp";
import jainpt2 from "../images/jain-pt-2.webp";

import balwas1 from "../images/balwas-1.webp";
import balwas2 from "../images/balwas-2.webp";
import balwas3 from "../images/balwas-3.webp";
import balwas4 from "../images/balwas-4.webp";
import balwas5 from "../images/balwas-5.webp";
import balwas6 from "../images/balwas-6.webp";
import balwas7 from "../images/balwas-7.webp";

import c1 from "../images/c-1.webp";
import c2 from "../images/c-2.webp";
import cCover from "../images/c-cover.webp";

import smita1 from "../images/smita-1.webp";

import vidit1 from "../images/vidit-1.webp";
import vidit2 from "../images/vidit-2.webp"; 
import vidit3 from "../images/vidit-3.webp"; 

import sewani1 from "../images/sewani-1.webp";
import sewani2 from "../images/sewani-2.webp";

import tressoro1 from "../images/tressoro-1.webp";
import tressoro2 from "../images/tressoro-2.webp";
import tressoro3 from "../images/tressoro-3.webp";
import tressoro4 from "../images/tressoro-4.webp";

import indigo1 from "../images/indigo-1.webp";
import indigo2 from "../images/indigo-2.webp";
import indigo3 from "../images/indigo-3.webp";

import shri1 from "../images/shri-1.webp";
import shri2 from "../images/shri-2.webp";
import shri3 from "../images/shri-3.webp";
import shri4 from "../images/shri-4.webp";
import shri5 from "../images/shri-5.webp";


import { PageWrapper } from "../components/PageWrapper";

const Page = () => {
  const [open, setOpen] = useState(false);
  const [slides, setSlides] = useState([]);
  const [index, setIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("all");
  const [isAnimating, setIsAnimating] = useState(false);

  
  const projects = [
    {
      id: 10,
      title: "Jyothika & Suriya's Bungalow at Chennai",
      cover: ecr2,
      gallery: [ecr2, ecr1, ecr3, ecr4],
      category: ["celebrity-homes", "premium-bungalows"],
    },
    {
      id: 1,
      title: "Aamby Valley",
      cover: ambey1,
      gallery: [ambey1, ambey2, ambey3],
      category: ["premium-bungalows"],
    },
    {
      id: 7,
      title: "Karan Johar's Apartment",
      cover: khar1,
      gallery: [khar1, khar2],
      category: ["celebrity-homes", "premium-residences"],
    },
    {
      id: 12,
      title: "The Residence by Runwal Developers",
      cover: runwal1,
      gallery: [
        { image: runwal1, caption: "Amenity Floor" },
        { image: runwal2, caption: "Amenity Floor" },
      ],
      customCaptions: true,
      category: ["premium-residences"],
    },
    {
      id: 4,
      title: "Mr. Patil's Bungalow",
      cover: domb2,
      gallery: [domb3, domb2, domb4, domb1],
      category: ["premium-bungalows"],
    },
    {
      id: 2,
      title: "Residential Building by ZYJ Developers",
      cover: del1,
      gallery: [del1, del2],
      category: ["premium-buildings"],
    },
    {
      id: 5,
      title: "NICMAR University",
      cover: nicmar2,
      gallery: [
        { image: nicmar2, caption: "VS1 Facade" },
        { image: nicmar4, caption: "VS1 Facade" },
        { image: nicmar3, caption: "VS1 Facade" },
        { image: nicmar1, caption: "Curtain Wall Structure" },
        { image: nicmar5, caption: "Curtain Wall Structure" },
      ],
      customCaptions: true,
      category: ["institutes", "facades"],
    },
    {
      id: 6,
      title: "Sequoia",
      cover: seq1,
      gallery: [seq1, seq2],
      category: ["premium-buildings"],
    },
    {
      id: 8,
      title: "Jain House",
      cover: jain1,
      gallery: [jain1, jain3],
      category: ["premium-bungalows"],
    },
    {
      id: 9,
      title: "Residential Apartment at Walkeshwar",
      cover: walk1,
      gallery: [walk1, walk2, walk3],
      category: ["premium-residences"],
    },
    {
      id: 11,
      title: "Duplex at IndiaBulls Skyforest",
      cover: duplex1,
      gallery: [
        duplex1,
        duplex2,
        {
          type: "video",
          videoUrl: "/duplex-video.mp4",
          poster: duplexCover,
          caption: "Project Walkthrough",
        },
      ],
      hasVideo: true,
      category: ["premium-residences"],
    },
    {
      id: 15,
      title: "Cartier Building",
      cover: cartier1,
      gallery: [cartier1],
      category: ["premium-buildings"],
    },
    {
      id: 16,
      title: "Mrs. Gandhi's Residence",
      cover: gandhi1,
      gallery: [gandhi1],
      category: ["premium-residences"],
    },
    {
      id: 17,
      title: "Hotel Mulk",
      cover: mulk1,
      gallery: [mulk1, mulk2],
      category: ["hospitality"],
    },
    {
      id: 18,
      title: "Kokilaben Dhirubhai Ambani Hospital",
      cover: ambani1,
      gallery: [ambani1, ambani2],
      category: ["institutes"],
    },
    {
      id: 13,
      title: "Mr. Devang Parikh's Bungalow",
      cover: devang1,
      gallery: [
        devang1,
        {
          type: "video",
          videoUrl: "/devang-video.mp4",
          poster: devangCover,
          caption: "Project Walkthrough",
        },
        devang3,
        devang4
      ],
      hasVideo: true,
      category: ["premium-bungalows"],
    },
    {
      id: 19,
      title: "Mr. Khemka's Residence",
      cover: khemka1,
      gallery: [khemka1],
      category: ["premium-residences"],
    },
    {
      id: 20,
      title: "Mr. Jain's Penthouse",
      cover: jainpt1,
      gallery: [jainpt1, jainpt2],
      category: ["premium-residences"],
    },
    {
      id: 21,
      title: "Mr. Balwa's Bungalow",
      cover: balwas1,
      gallery: [balwas1, balwas2],
      category: ["premium-bungalows"],
    },
    {
      id: 14,
      title: "C House by the Sea",
      cover: c1,
      gallery: [
        c1,
        c2,
        {
          type: "video",
          videoUrl: "/sea-video.mp4",
          poster: cCover,
          caption: "Project Walkthrough",
        },
      ],
      hasVideo: true,
      category: ["premium-bungalows"],
    },
    {
      id: 22,
      title: "Mrs. Smita Bansal's Residence",
      cover: smita1,
      gallery: [smita1],
      category: ["premium-residences"],
    },
    {
      id: 3,
      title: "Mr. Vidit Jhunjhunwala Apartment",
      cover: vidit1,
      gallery: [vidit1, vidit2, vidit3],
      category: ["premium-residences"],
    },
    {
      id: 23,
      title: "Mr. Sewani's Residence",
      cover: sewani1,
      gallery: [sewani1, sewani2],
      category: ["premium-residences"],
    },
    {
      id: 24,
      title: "Tressoro at Colaba",
      cover: tressoro1,
      gallery: [tressoro1, tressoro2, tressoro3, tressoro4],
      category: ["stores-offices"],
    },
    {
      id: 25,
      title: "Indigo Jewellery",
      cover: indigo1,
      gallery: [indigo1, indigo2, indigo3],
      category: ["stores-offices"],
    },
    {
      id: 26,
      title: "Dr. Srivastava's Bungalow",
      cover: shri1,
      gallery: [shri1, shri2, shri3, shri4, shri5],
      category: ["premium-bungalows"],
    },
  ];

  const filterButtons = [
    { id: "all", label: "All Projects" },
    { id: "premium-bungalows", label: "Premium Bungalows" },
    { id: "premium-residences", label: "Premium Residences" },
    { id: "premium-buildings", label: "Premium Buildings" },
    { id: "stores-offices", label: "Stores & Offices" },
    { id: "institutes", label: "Institutes" },
    { id: "facades", label: "Facades" },
    { id: "hospitality", label: "Hospitality" },
    // { id: "celebrity-homes", label: "Celebrity Homes" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category.includes(activeFilter));

  const handleFilterChange = (filterId) => {
    if (filterId !== activeFilter) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveFilter(filterId);
        setIsAnimating(false);
      }, 300);
    }
  };

  // Scroll to project on load if hash is present
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const projectId = hash.replace("#project-", "");
      const element = document.getElementById(`project-${projectId}`);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
          element.classList.add("highlight-project");
          setTimeout(() => {
            element.classList.remove("highlight-project");
          }, 2000);
        }, 100);
      }
    }
  }, []);

  const openLightbox = (project) => {
    const processedSlides = project.gallery.map((item) => {
      if (item && item.type === "video") {
        return {
          type: "video",
          width: 1920,
          height: 1080,
          sources: [
            {
              src: item.videoUrl,
              type: "video/mp4",
            },
          ],
          poster:
            typeof item.poster === "string" ? item.poster : item.poster?.src,
          title: item.caption || project.title,
        };
      }

      if (item && item.image) {
        return {
          src: item.image.src,
          title: item.caption || project.title,
        };
      }

      return {
        src: item.src,
        title: project.title,
      };
    });

    setSlides(processedSlides);
    setIndex(0);
    setOpen(true);
  };

  return (
    <PageWrapper>
      <main>
        <div className="pt-40 sm:pt-0 text-white relative overflow-hidden h-88 sm:h-auto">
          <Image
            src={banner}
            alt="Product Hero Background"
            fill
            priority
            className="object-cover"
            placeholder="blur"
          />

          <div className="container pt-44 pb-32 relative z-10">
            <h2>
              Precision in Every Pane. <br />
              Purpose in Every Project.
            </h2>
          </div>
        </div>

        {/* Projects */}
        <div className="container py-14">
          <p className="uppercase flex mt-7 sm:mt-0 gap-x-4 font-bold text-blue items-center">
            <Image src={blueLine} alt="vector" />
            Featured Projects
          </p>

          <h2 className="mt-4">
            Framing Every  <br /> Space With Precision.
          </h2>

          {/* Filter Buttons */}
          <div className="mt-14 filter flex flex-wrap gap-3 justify-start lg:justify-between items-center">
            {filterButtons.map((button) => (
              <button
                key={button.id}
                onClick={() => handleFilterChange(button.id)}
                className={`text-sm lg:text-lg px-4 py-3 lg:px-5 lg:py-4 rounded transition-all duration-300 border ${activeFilter === button.id
                  ? "bg-blue text-white border-blue shadow-lg"
                  : "bg-transparent border-blue text-blue hover:bg-blue/10 hover:scale-105"
                  }`}
              >
                {button.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div
            className={`mt-14 grid grid-cols-1 md:grid-cols-3 gap-7 transition-all duration-300 ${isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
          >
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                id={`project-${project.id}`}
                className="transition-all duration-300"
                style={{
                  animation: isAnimating
                    ? "none"
                    : `fadeInUp 0.5s ease-out ${idx * 0.1}s both`,
                }}
              >
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
                    className="absolute bottom-3 right-3 w-8 h-8 sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-14 sm:h-14 sm:opacity-0 sm:group-hover:opacity-100 sm:transition-all sm:duration-300"
                  />
                </div>

                <p className="mt-3">{project.title}</p>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>

        {/* Lightbox */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides}
          index={index}
          plugins={[Counter, Video]}
          styles={{
            container: { backgroundColor: "rgba(0,0,0,0.9)" },
          }}
          render={{
            slideFooter: ({ slide }) => (
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "20px",
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                  color: "white",
                  textAlign: "center",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                {slide.title}
              </div>
            ),
          }}
        />
      </main>
    </PageWrapper>
  );
};

export default Page;
