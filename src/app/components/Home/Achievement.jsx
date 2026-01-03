'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import blueLine from "../../images/blue-line.svg";
import sketch from "../../images/sketch.webp";
import PartnerLogo from "../../images/partner-logo.webp";
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const Achievement = () => {
    
    const sectionRef = useRef(null);
    const yearsRef = useRef(null);
    const architectsRef = useRef(null);
    const projectsRef = useRef(null);
    const feedbackRef = useRef(null);
    const logos = [PartnerLogo, PartnerLogo, PartnerLogo, PartnerLogo]

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

            animateCounter(yearsRef.current, 15);
            animateCounter(architectsRef.current, 10, "+");
            animateCounter(projectsRef.current, 200, "+");
            animateCounter(feedbackRef.current, 18, "%");

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="relative" ref={sectionRef}>
            <div className="container flex flex-col md:flex-row items-center gap-x-2 pt-20 pb-10">

                <div className="md:w-1/2">
                    <p className="uppercase flex items-center gap-x-4 font-bold text-blue">
                        <span><Image src={blueLine} alt="vector" /></span>Our Achievement
                    </p>
                    <h2 className="mt-3">
                        Proven Excellence in <br />Fenestration & Design
                    </h2>
                    <p className="leading-7 mt-2 mb-7">
                        We deliver high-quality fenestration solutions backed by decades of industry expertise. Our work reflects precision, innovation, and a commitment to client satisfaction.
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
                            <p>Leading Architects &<br /> Developers Served</p>
                        </div>
                    </div>

                    <div>
                        <div className="p-4">
                            <h2 ref={projectsRef}>0+</h2>
                            <p>Projects Successfully<br /> Delivered</p>
                        </div>
                        <div className="border-dashed border-t border-[#b1b1b1] p-4">
                            <h2 ref={feedbackRef}>0%</h2>
                            <p>Positive Feedback Rate<br /> Across Projects</p>
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
                className="w-full h-96 sm:h-80 lg:h-120 xl:h-140 object-cover"
            />

            <div className="container pt-14 pb-10">
                <p className="uppercase flex-center gap-x-4 font-bold text-blue">
                    <span><Image src={blueLine} alt="vector" /></span>Our Clients
                </p>
                <h2 className="text-center mt-3">Trusted by the Best</h2>

                <div className="container overflow-hidden my-20">
                    <div className="flex items-center gap-x-20 animate-[marquee_20s_linear_infinite]">
                        {[...logos, ...logos].map((item, index) => (
                            <Image
                                key={index}
                                src={item}
                                alt="partner-logo"
                                className="shrink-0"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievement;

