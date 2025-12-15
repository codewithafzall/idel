'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

import blueLine from "../images/blue-line.svg";
import service from "../images/service.webp";
import line from '../images/line.webp';
import logo from '../images/partner-logo.webp';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Form from '../components/Form';

gsap.registerPlugin(ScrollTrigger);

const page = () => {

    const logos = [logo, logo, logo, logo, logo, logo];

    const services = [
        {
            id: 1,
            title: 'Design Support',
            description:
                'We create modern, functional, and visually refined designs tailored to your space and requirements.',
            number: '01',
        },
        {
            id: 2,
            title: 'Fabrication Excellence',
            description:
                'Precision manufacturing using high-quality aluminium systems to ensure strength, durability, and accuracy.',
            number: '02',
        },
        {
            id: 3,
            title: 'Installation Services',
            description:
                'Expert installation executed with technical accuracy, ensuring smooth performance and perfect alignment.',
            number: '03',
        },
        {
            id: 4,
            title: 'After-Sales Support',
            description:
                'Dedicated post-installation support to maintain long-term performance and customer satisfaction.',
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

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <main>

            <div className='service-hero text-white'>
                <div className='container pt-44 pb-32'>
                    <h2>
                        Precision-Driven Services <br />
                        Tailored to Your Needs
                    </h2>
                </div>
            </div>

            <div className='container flex justify-between items-center gap-x-24 mt-20 mb-14'>
                <div className='w-7/12'>
                    <p className='uppercase flex items-center gap-x-4 font-bold text-blue'>
                        <span><Image src={blueLine} alt='vector' /></span>
                        Why IDEL
                    </p>
                    <h2 className='mt-3'>
                        Crafting High-Performance <br />
                        Aluminium Doors & Windows
                    </h2>
                    <p className='leading-7 mt-2 mb-7'>
                        With over 25 years of industry expertise, IDEL delivers advanced façade and fenestration solutions designed for durability, precision, and architectural excellence.
                        <br /><br />
                        From minimal slimline systems to custom-engineered profiles, we handle complex fenestration challenges with confidence.
                    </p>
                </div>
                <div className='w-5/12'>
                    <Image src={service} alt='service' className='w-full' />
                </div>
            </div>

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

            <div ref={skyRef} className='bg-sky py-20 overflow-hidden'>
                <div className='container flex justify-between items-start gap-x-24'>

                    <div className='w-[55%]'>
                        <p className='uppercase flex items-center gap-x-4 font-bold text-blue'>
                            <span><Image src={blueLine} alt='vector' /></span>
                            Our Services
                        </p>
                        <h2 className='mt-3'>
                            Creating Engaging Stories <br />
                            That Attract Educate
                        </h2>
                        <p className='leading-7 mt-4 mb-7 w-10/12'>
                            We help you shape your project with design-led solutions that enhance aesthetics while maintaining practical efficiency and long-term reliability.
                        </p>
                    </div>

                    <div ref={cardsOuterRef} className='w-[45%] h-160 overflow-hidden'>
                        <div ref={cardsInnerRef}>
                            {services.map((service, index) => (
                                <div
                                    key={service.id}
                                    className={`bg-blue h-72 rounded-2xl px-6 py-8 flex flex-col justify-between ${
                                        index !== 0 ? 'mt-10' : ''
                                    }`}
                                >
                                    <div className='flex-center text-white gap-x-4 w-full'>
                                        <small className='text-lg'>Services</small>
                                        <Image
                                            className='h-0.5 flex-1 object-cover max-w-87'
                                            src={line}
                                            alt='line'
                                        />
                                        <p className='rounded-full flex-center text-black w-10 h-10 bg-[#D9D9D9]'>
                                            {service.number}
                                        </p>
                                    </div>

                                    <div className='text-white'>
                                        <small className='text-4xl'>{service.title}</small>
                                        <p className='leading-7 mt-4'>{service.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
            <Form/>
        </main>
    );
};

export default page;
