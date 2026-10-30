"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import whiteLine from "../images/white-line.svg";
import blueLine from "../images/blue-line.svg";
import banner from "../images/contact-banner.webp";
import { PageWrapper } from "../components/PageWrapper";

const steps = [
  {
    id: "01",
    title: "Enquiry Received",
    text: "Your details have reached our team and your enquiry is now in safe hands.",
  },
  {
    id: "02",
    title: "Expert Consultation",
    text: "One of our fenestration specialists will get in touch with you shortly to understand your requirements.",
  },
  {
    id: "03",
    title: "Tailored Solution",
    text: "We'll recommend the right systems for your space, designed around your vision and budget.",
  },
];

const ThankYou = () => {
  const { width, height } = useWindowSize();

  // Confetti needs the real window size, which only exists in the browser.
  // Render it after mount so server HTML and first client render match.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <PageWrapper>
      <main>
        {mounted && width > 0 && height > 0 && (
          <Confetti
            width={width}
            height={height}
            numberOfPieces={300}
            gravity={0.25}
            recycle={false}
            colors={["#29367D", "#D9AB3D", "#4B5AAA", "#F0F7F8", "#ffffff"]}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              zIndex: 60,
              pointerEvents: "none",
            }}
          />
        )}

        {/* HERO */}
        <div className="pt-40 sm:pt-0 text-white relative overflow-hidden h-88 sm:h-auto">
          <Image
            src={banner}
            alt="Thank You Background"
            fill
            priority
            className="object-cover"
            placeholder="blur"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/30 to-transparent" />

          <div className="container pt-44 pb-32 relative z-10">
            <p className="uppercase flex gap-x-4 font-bold items-center">
              <span>
                <Image src={whiteLine} alt="vector" />
              </span>
              Thank You
            </p>
            <h2 className="mt-4">
              Thank You For <br />
              Reaching Out.
            </h2>
            <p className="mt-4 max-w-xl">
              Your enquiry has been submitted successfully. Our team will be in
              touch with you shortly.
            </p>
          </div>
        </div>

        {/* WHAT HAPPENS NEXT */}
        <div className="bg-sky py-14">
          <p className="uppercase flex gap-x-4 font-bold text-blue items-center justify-center">
            <span>
              <Image src={blueLine} alt="vector" />
            </span>
            What Happens Next
          </p>

          <h2 className="text-center mt-4 px-4">We'll Take It From Here</h2>

          <div className="container grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 mt-10 sm:mt-14">
            {steps.map((step) => (
              <div
                key={step.id}
                className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col gap-y-3 transition-transform duration-500 hover:-translate-y-1"
              >
                <span className="bg-blue text-white font-bold rounded-full w-12 h-12 flex-center">
                  {step.id}
                </span>
                <small className="text-xl sm:text-2xl font-semibold text-blue">
                  {step.title}
                </small>
                <small className="text-lg text-gray-600">{step.text}</small>
              </div>
            ))}
          </div>

          {/* CONTACT STRIP */}
          <div className="container mt-10">
            <div className="bg-blue text-white rounded-2xl p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <small className="text-2xl sm:text-3xl font-extrabold block">
                  Need to speak with us sooner?
                </small>
                <small className="text-lg opacity-80 block mt-2">
                  Our team is happy to help with any questions about your project.
                </small>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 shrink-0">
                <a
                  href="tel:+919819247835"
                  className="bg-white text-blue rounded-lg font-semibold px-6 py-3 text-center transition-transform duration-300 hover:scale-105"
                >
                  +91 9819247835
                </a>
                <a
                  href="mailto:info@idelindia.com"
                  className="border-2 border-white rounded-lg font-semibold px-6 py-3 text-center transition-colors duration-300 hover:bg-white hover:text-[#29367D]"
                >
                  info@idelindia.com
                </a>
              </div>
            </div>
          </div>

          {/* CTAS */}
          <div className="container flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a
              href="/"
              className="bg-blue text-white rounded-lg uppercase px-9 py-3 w-full sm:w-auto text-center transition-transform duration-300 hover:scale-105"
            >
              Back To Home
            </a>
            <a
              href="/projects"
              className="border-blue text-blue rounded-lg uppercase px-9 py-3 w-full sm:w-auto text-center transition-transform duration-300 hover:scale-105"
            >
              Explore Our Projects
            </a>
          </div>
        </div>
      </main>
    </PageWrapper>
  );
};

export default ThankYou;
