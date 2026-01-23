'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import blueLine from "../images/blue-line.svg";
import service from "../images/service.webp";
import line from '../images/line.webp';
import logo1 from "../images/design-story.webp";
import logo2 from "../images/kdah.webp"
import logo3 from "../images/malik.webp"
import logo4 from "../images/runwal.webp"
import logo5 from "../images/studio.webp"
import logo6 from "../images/draw.webp"
import logo7 from "../images/zyj.png";
import banner from "../images/service-banner.webp"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Form from '../components/Form';
import { PageWrapper } from '../components/PageWrapper';

gsap.registerPlugin(ScrollTrigger);

const page = () => {

    const logos = [logo1, logo2, logo5, logo3, logo6, logo4, logo7];

    const services = [
        {
            id: 1,
            title: 'Design Support',
            subtitle: "Where function meets finesse.",
            description:
                'We design modern, efficient, and visually refined aluminium systems tailored to your space, specs, and style.',
            number: '01',
        },
        {
            id: 2,
            title: 'Fabrication Excellence',
            subtitle: "Precision that performs.",
            description:
                'Manufacturing with high-grade aluminium profiles using best-in-class equipment to ensure lasting strength and alignment.',
            number: '02',
        },
        {
            id: 3,
            title: 'Installation Services',
            subtitle: "On-site execution, done right.",
            description:
                'Our expert teams install with accuracy and care — aligning perfectly with project timelines, tolerances, and technical requirements.',
            number: '03',
        },
        {
            id: 4,
            title: 'After-Sales Support',
            subtitle: "Support that stays.",
            description:
                'We offer post-installation servicing and maintenance exclusively for IDEL-installed systems — ensuring long-term performance and client satisfaction.',
            number: '04',
        },
    ];

    const skyRef = useRef(null);
    const cardsOuterRef = useRef(null);
    const cardsInnerRef = useRef(null);

    useEffect(() => {
        const sky = skyRef.current;
        const outer = cardsOuterRef.current;
        const inner = cardsInnerRef.current;

        if (!sky || !outer || !inner) return;

        ScrollTrigger.matchMedia({
            // Desktop only
            "(min-width: 768px)": () => {
                const totalScroll =
                    inner.scrollHeight - outer.clientHeight;

                gsap.to(inner, {
                    y: -totalScroll,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: sky,
                        start: 'top top',
                        end: () => `+=${inner.scrollHeight}`,
                        pin: true,
                        scrub: true,
                        anticipatePin: 1,
                    },
                });
            },

            "(max-width: 767px)": () => {
                gsap.set(inner, { clearProps: "all" });
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);


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
                    <h2>Precision in Every Detail.  <br />Crafted for Performance.</h2>
                </div>
            </div>

            <div className='container flex flex-col sm:flex-row justify-between items-center gap-x-24 mt-7 sm:mt-20 sm:mb-14'>
                <div className='sm:w-7/12'>
                    <p className='uppercase flex items-center gap-x-4 font-bold text-blue'>
                        <span><Image src={blueLine} alt='vector' /></span>
                        Why IDEL
                    </p>
                    <h2 className='mt-3 hidden sm:block'>
                        Crafting High-Performance <br />
                        Aluminium Doors & Windows
                    </h2>
                    <h2 className='mt-3 sm:hidden'>
                        Crafting High-Performance
                        Aluminium Doors & Windows
                    </h2>
                    <p className='leading-7 mt-2 mb-7'>
                        With over 25 years of industry expertise, IDEL delivers advanced façade and fenestration solutions designed for durability, precision, and architectural excellence.
                        <br /><br />
                        From minimal slimline systems to custom-engineered profiles, we handle complex fenestration challenges with confidence.
                    </p>
                </div>
                <div className='sm:w-5/12'>
                    <Image src={service} alt='service' className='w-full' />
                </div>
            </div>

            <div className="container overflow-hidden my-8 sm:my-20">
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

            <div ref={skyRef} className='bg-sky py-10 sm:py-20 overflow-hidden'>
                <div className='container flex flex-col sm:flex-row justify-between items-start gap-x-24'>

                    <div className='sm:w-[55%]'>
                        <p className='uppercase flex items-center gap-x-4 font-bold text-blue'>
                            <span><Image src={blueLine} alt='vector' /></span>
                            Our Services
                        </p>
                        <h2 className='mt-3'>
                            End-to-End Expertise, <br />
                            Built Around You
                        </h2>
                        <p className='leading-7 mt-4 mb-7 w-10/12'>
                            We partner with you across every stage, shaping spaces with technical insight, aesthetic sensibility, and hands-on execution.
                        </p>
                    </div>

                    <div ref={cardsOuterRef} className='sm:w-[45%] sm:h-160 overflow-hidden'>
                        <div ref={cardsInnerRef}>
                            {services.map((service, index) => (
                                <div
                                    key={service.id}
                                    className={`bg-blue h-64 sm:h-72 rounded-2xl px-3 sm:px-6 py-8 flex flex-col justify-between ${index !== 0 ? 'mt-10' : ''
                                        }`}
                                >
                                    <div className='flex-center text-white gap-x-4 w-full'>
                                        <small className='text-lg'>Services</small>
                                        <Image
                                            className='h-0.5 flex-1 object-cover max-w-45 sm:max-w-87'
                                            src={line}
                                            alt='line'
                                        />
                                        <p className='rounded-full flex-center text-black w-10 h-10 bg-[#D9D9D9]'>
                                            {service.number}
                                        </p>
                                    </div>

                                    <div className='text-white'>
                                        <small className='text-2xl sm:text-4xl block'>{service.title}</small>
                                        <p className='leading-7 mt-4'>{service.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
            <Form />
        </main>
        </PageWrapper>
    );
};

export default page;
