'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import blueLine from "../../images/blue-line.svg";
import sketch from "../../images/sketch.webp";
import logo1 from "../../images/design-story.webp";
import logo2 from "../../images/kdah.webp"
import logo3 from "../../images/malik.webp"
import logo4 from "../../images/runwal.webp"
import logo5 from "../../images/studio.webp"
import logo6 from "../../images/draw.webp"
import logo7 from "../../images/zyj.png";
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const Achievement = () => {

    const sectionRef = useRef(null);
    const yearsRef = useRef(null);
    const architectsRef = useRef(null);
    const projectsRef = useRef(null);
    const feedbackRef = useRef(null);
    const logos = [logo1, logo2, logo5, logo3, logo6, logo4, logo7]

    useEffect(() => {
        const ctx = gsap.context(() => {

            const animateCounter = (el, end, suffix = "") => {
                gsap.fromTo(
                    el,
                    { innerText: 0 },
                    {
                        innerText: end,
                        duration: 2,
                        ease: "power2.out",
                        snap: { innerText: 1 },
                        onUpdate: () => {
                            el.innerText = `${el.innerText}${suffix}`;
                        },
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 70%",
                            once: true
                        }
                    }
                );
            };

            animateCounter(yearsRef.current, 25, "+");
            animateCounter(architectsRef.current, 10, "+");
            animateCounter(projectsRef.current, 200, "+");
            animateCounter(feedbackRef.current, 95, "%");

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="relative mt-7 sm:mt-0" ref={sectionRef}>
            <div className="container flex flex-col md:flex-row items-center gap-x-2 pt-20 pb-10">

                <div className="md:w-1/2">
                    <p className="uppercase flex items-center gap-x-4 font-bold text-blue">
                        <span><Image src={blueLine} alt="vector" /></span>Our Achievement
                    </p>
                    <h2 className="mt-3">
                        Trusted by India’s <br />Leading Architects & Builders.
                    </h2>
                    <p className="leading-7 mt-2 mb-7">
                        From boutique bungalows to large-scale developments, we deliver lasting value, innovation, and peace of mind through expert fenestration solutions.
                    </p>
                </div>

                <div className="flex max-sm:w-full">

                    <div className="border-dashed border-r border-[#b1b1b1]">
                        <div className="p-4">
                            <h2 ref={yearsRef}>0</h2>
                            <p>Years of Industry<br /> Experience</p>
                        </div>
                        <div className="border-dashed border-t border-[#b1b1b1] p-4">
                            <h2 ref={architectsRef}>0+</h2>
                            <p>Architect & <br />Developer Partnerships</p>
                        </div>
                    </div>

                    <div>
                        <div className="p-4">
                            <h2 ref={projectsRef}>0+</h2>
                            <p className='hidden sm:block'>Projects Successfully<br /> Delivered</p>
                            <p className='block sm:hidden'>Projects Successfully Delivered</p>
                        </div>
                        <div className="border-dashed border-t border-[#b1b1b1] p-4">
                            <h2 ref={feedbackRef}>0%</h2>
                            <p>Client <br />Satisfaction Rate</p>
                        </div>
                    </div>

                </div>
            </div>

            <Image src={sketch} alt="sketch" className="absolute right-0 top-6" />

            <video
                src="/scene.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-80 sm:h-80 lg:h-120 xl:h-140 object-cover mt-7 sm:mt-0"
            />

            <div className="container mt-7 sm:mt-0 sm:pt-14 sm:pb-10">
                <p className="uppercase flex-center gap-x-4 font-bold text-blue">
                    <span><Image src={blueLine} alt="vector" /></span>Our Clients
                </p>
                <h2 className="text-center mt-3">Trusted by the Best</h2>

                <div className="overflow-hidden my-6 sm:my-20">
                    <div className="flex w-max items-center gap-x-10 sm:gap-x-20 animate-[marquee_20s_linear_infinite]">
                        {[...logos, ...logos].map((item, index) => (
                            <Image
                                key={index}
                                src={item}
                                alt="partner-logo"
                                className="shrink-0 w-28 sm:w-40"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievement;

