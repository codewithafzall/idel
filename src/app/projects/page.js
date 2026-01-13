"use client";

import React, { useState } from "react";
import Image from "next/image";

/* Lightbox */
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";

/* Assets */
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

const Page = () => {
  const [open, setOpen] = useState(false);
  const [slides, setSlides] = useState([]);
  const [index, setIndex] = useState(0);

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
    setSlides(project.gallery.map((img) => ({ src: img.src })));
    setIndex(0);
    setOpen(true);
  };

  return (
    <main>
      {/* Hero */}
      <div className="project-hero pt-40 text-white">
        <div className="container pb-32">
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
                  className="absolute bottom-3 right-3 w-8 h-8 sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-14 sm:h-14 sm:opacity-0 sm:group-hover:opacity-100 sm:transition-all sm:duration-300"
                />
              </div>

              <p className="mt-3">{project.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
        plugins={[Counter]}
        styles={{
          container: { backgroundColor: "rgba(0,0,0,0.9)" },
        }}
      />
    </main>
  );
};

export default Page;
