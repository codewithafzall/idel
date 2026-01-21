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

import khar1 from "../images/khar-1.webp";
import khar2 from "../images/khar-2.webp";

import seq1 from "../images/seq-1.webp";
import seq2 from "../images/seq-2.webp";

import domb1 from "../images/dombivli-1.webp";
import domb2 from "../images/dombivli-2.webp";
import domb3 from "../images/dombivli-3.webp";

import jain1 from "../images/jain-1.webp";
import jain2 from "../images/jain-2.webp";
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

import runwal1 from "../images/runwal-1.webp";
import runwal2 from "../images/runwal-2.webp";

const Page = () => {
  const [open, setOpen] = useState(false);
  const [slides, setSlides] = useState([]);
  const [index, setIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("all");
  const [isAnimating, setIsAnimating] = useState(false);

  // ✅ UPDATED: category is now an ARRAY so one project can belong to multiple categories
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
      title: "Bungalow at Dombivli",
      cover: domb2,
      gallery: [domb3, domb2, domb1],
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
      title: "NICMAR",
      cover: nicmar2,
      gallery: [
        { image: nicmar2, caption: "VS1 Facade" },
        { image: nicmar4, caption: "VS1 Facade" },
        { image: nicmar3, caption: "VS1 Facade" },
        { image: nicmar1, caption: "Curtain Wall Structure" },
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
      title: "Private Building at Khar",
      cover: jain2,
      gallery: [jain1, jain2, jain3],
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
          poster: duplex1,
          caption: "Project Walkthrough",
        },
      ],
      hasVideo: true,
      category: ["premium-residences"],
    },
  ];

  const filterButtons = [
    { id: "all", label: "All Projects" },
    { id: "premium-bungalows", label: "Premium Bungalows" },
    { id: "premium-residences", label: "Premium Residences" },
    { id: "premium-buildings", label: "Premium Buildings" },
    { id: "institutes", label: "Institutes" },
    { id: "facades", label: "Facades" },
    // { id: "celebrity-homes", label: "Celebrity Homes" },
  ];

  // ✅ UPDATED: use includes() because category is now an array
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
  );
};

export default Page;
