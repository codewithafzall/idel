"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import blueLine from "../../images/blue-line.svg";
import stars from "../../images/stars.png";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "— Aum Realtors, Santacruz",
      feedback:
        "IDEL delivered exceptional precision and unmatched build quality. Their team was transparent, reliable, and truly committed to timelines.",
      image: stars,
    },
    {
      id: 2,
      name: "— Vista Builders, Andheri",
      feedback:
        "IDEL’s craftsmanship and attention to detail were outstanding. The entire process was smooth and highly professional.",
      image: stars,
    },
    {
      id: 3,
      name: "— Prime Spaces Developers, Thane",
      feedback:
        "Their technical expertise and commitment to timelines made our project seamless and stress-free.",
      image: stars,
    },
    {
      id: 4,
      name: "— Urban Arch Consultants, Bandra",
      feedback:
        "Exceptional precision, high-quality finishes, and absolute transparency throughout the project.",
      image: stars,
    },
  ];

  return (
    <section className="bg-sky py-20">
      <div className="container">
        <div className="flex justify-between items-start flex-col md:flex-row">
          <div>
            <p className="uppercase flex gap-x-4 font-bold text-blue">
              <span>
                <Image src={blueLine} alt="vector" />
              </span>
              Testimonials
            </p>
            <h2 className="mt-3">Our Customers Say</h2>
          </div>

          <p className="leading-7 mt-4 md:mt-0">
            We guide you toward the most effective solutions <br />
            for your space with expert insights and<br />
            transparent recommendations.
          </p>
        </div>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false, 
          }}
          className="mt-12"
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white rounded-xl p-8 flex flex-col items-start h-72">
                <div className="mb-5">
                  <Image src={item.image} alt="stars" className="w-28" />
                </div>
                <p className="text-lg leading-7">{item.feedback}</p>
                <p className="font-semibold mt-6">{item.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
