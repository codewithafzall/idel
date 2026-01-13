"use client"
import React, { useState } from 'react';
import whiteLine from "../images/white-line.svg";
import blueLine from "../images/blue-line.svg";
import aboutFixed from '../images/about-fixed.webp';
import aboutStory from '../images/about-story.webp';
import about1 from '../images/about-1.webp';
import about2 from '../images/about-2.webp';
import about3 from '../images/about-3.webp';
import kapil from '../images/kapil.webp';
import iss from '../images/iss.webp';
import ee from '../images/ee.webp';
import tbtb from '../images/tbtb.webp';
import ua from '../images/ua.webp';
import cda from '../images/cda.webp';
import mission from '../images/mission.webp';
import comma from '../images/comma.png';
import location from '../images/location-icon.png';
import Image from 'next/image';

const page = () => {

    const tabs = {
        mission: {
            title: 'Our Mission',
            text: 'To create premium fenestration systems that combine durability, elegance, and energy efficiency. We aim to enhance living spaces through innovation, craftsmanship, and context-aware design.',
            points: [
                'Creating modern spaces with seamless indoor-outdoor flow',
                'Driving innovation in fenestration technology',
                'Setting benchmarks in quality and user experience',
                'Building sustainable and future-ready systems',
            ],
            image: mission,
        },
        vision: {
            title: 'Our Vision',
            text: 'To be the most trusted name in high-performance aluminium fenestration across India, admired for our quality, agility, and design-forward thinking.',
            points: [
                'Leading the future of architectural aluminium',
                'Expanding global design impact',
                'Delivering consistent excellence',
                'Championing sustainable construction',
            ],
            image: mission,
        },
        values: {
            title: 'Our Values',
            text: 'Our values guide everything we do — from design decisions to customer relationships.',
            points: [
                'Precision in execution',
                'Transparency in communication',
                'Partnership in problem-solving',
                'Integrity in every decision',
            ],
            image: mission,
        },
    };


    const specs = [
        { id: 1, img: iss, text: "Intelligent System Selection" },
        { id: 2, img: cda, text: "Collaborative Design Approach" },
        { id: 3, img: ua, text: "Unmatched Aftercare" },
        { id: 4, img: tbtb, text: "Trusted by the Best" },
        { id: 5, img: ee, text: "Economical Engineering" },
    ];

    const projects = [
        { id: 1, img: about1, client: "Client: NICMAR", location: "BALEWADI, PUNE", architect: "NILABH NAGAR" },
        { id: 2, img: about2, client: "Client: JYOTHIKA & SURIYA", location: "ECR, CHENNAI", architect: "LOC DESIGN HOUSE" },
        { id: 3, img: about3, client: "Client: KARAN JOHAR", location: "KHAR", architect: "NAVED PATEL" }
    ]

    const [activeTab, setActiveTab] = useState('mission');
    const data = tabs[activeTab];


    return (
        <main>
            <div className='about-hero text-white pt-40 sm:pt-0'>
                <div className='container sm:pt-44 sm:pb-32'>
                    <h2 className=''>Reimagining <br />Architectural Openings.</h2>
                </div>
            </div>

            <div className='container flex flex-col sm:flex-row-reverse justify-between items-center sm:gap-x-16 mt-7 sm:mt-20 sm:mb-14'>
                <div className='sm:w-7/12'>
                    <p className='uppercase flex items-center gap-x-4 font-bold text-blue'>
                        <span><Image src={blueLine} alt='vector' /></span>
                        Our Story
                    </p>
                    <h2 className='mt-3'>
                        Engineering Excellence <br /> in Every Frame
                    </h2>
                    <p className='leading-7 mt-5'>
                        At IDEL India, we don’t just build openings, we engineer lasting impressions.<br /><br />

                        Born from decades of experience and backed by the Rammaica Group legacy, IDEL is a premium turnkey solution provider in the fenestration space. Founded by Mr. Kapil Jhunjhunwala and supported by Mr. Balram Jhunjhunwala, IDEL brings together sharp technical insight, design sensibility, and project finesse to execute complex architectural visions.<br /><br />

                        With over 25 years of collective expertise, our team specializes in facade and fenestration fabrication in the aluminium segment, delivering cutting-edge systems to some of India’s most prestigious residential and institutional projects.
                    </p>
                </div>
                <div className='sm:w-5/12'>
                    <Image src={aboutStory} alt='Window Image' className='w-full mt-7 sm:mt-0' />
                </div>
            </div>

            <div className="container mt-10 flex flex-col sm:flex-row justify-center items-center sm:justify-around sm:border-t-2 sm:border-[#D2CDCD] py-14">
                {specs.map((item, index) => (
                    <React.Fragment key={item.id}>
                        {index !== 0 && (
                            <div className="">
                                <svg
                                    width="2"
                                    height="100%"
                                    viewBox="0 0 2 100"
                                    preserveAspectRatio="none"
                                    className='relative rotate-90 sm:rotate-0'
                                >
                                    <line
                                        x1="1"
                                        y1="0"
                                        x2="1"
                                        y2="100"
                                        stroke="#D2CDCD"
                                        strokeWidth="2"
                                    />
                                </svg>
                            </div>
                        )}

                        <div className="flex flex-col w-40 sm:w-52 gap-3">
                            <div className="h-20 flex items-center justify-center">
                                <Image
                                    src={item.img}
                                    alt={item.text}
                                    className="w-20 object-contain"
                                />
                            </div>

                            <p className="text-center leading-tight">
                                {item.text}
                            </p>
                        </div>

                    </React.Fragment>
                ))}
            </div>

            <div className="block mt-7 sm:mt-0 sm:sticky top-0 z-20">
                <Image
                    src={aboutFixed}
                    alt="showcasing window design"
                    className="w-full h-80 sm:h-full object-cover"
                    priority
                />
            </div>

            <div className='container relative sm:-mt-85 z-30'>
                <div className="hidden sm:flex justify-between items-center flex-col md:flex-row">
                    <div>
                        <p className="uppercase flex items-center gap-x-4 font-bold text-white">
                            <span>
                                <Image src={whiteLine} alt="vector" />
                            </span>
                            Our Approach
                        </p>
                        <h2 className="mt-3 text-white">Seamless and Reliable<br /> Solutions</h2>
                    </div>

                    <p className="leading-7 mt-4 md:mt-0 text-white">
                        We deliver tailored window and door systems designed<br /> for performance, style, and everyday comfort, all backed<br /> by expert installation and long-term support.
                    </p>
                </div>

                <div className="bg-white w-full -mt-40 sm:mt-16 shadow-xl">

                    {/* TAB HEADERS */}
                    <div className="grid grid-cols-3 border-[#D2DCDC] border-b">
                        {['mission', 'vision', 'values'].map(tab => (
                            <h3
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`text-center text-lg sm:text-2xl py-5 font-semibold cursor-pointer transition-all ${activeTab === tab
                                    ? 'bg-blue text-white'
                                    : 'text-black hover:bg-gray-100'
                                    }`}
                            >
                                {tabs[tab].title}
                            </h3>
                        ))}
                    </div>

                    {/* CONTENT */}
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-x-16 px-4 sm:px-8 sm:py-10">
                        <div className="sm:w-1/2">
                            <p className="leading-7 mt-5">
                                {data.text}
                            </p>

                            <ul className="flex flex-col gap-y-2 mt-4">
                                {data.points.map((point, index) => (
                                    <li key={index}>• {point}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="sm:w-1/2 mt-5 sm:mt-0">
                            <Image
                                src={data.image}
                                alt={data.title}
                                className="w-full h-82 object-cover"
                            />
                        </div>
                    </div>

                </div>

            </div>

            <div className='w-full bg-white relative z-50 pt-7 sm:pt-14'>
                <div className='sm:ml-[calc((100vw-1293px)/2)] max-w-full bg-blue flex flex-col sm:flex-row items-center mt-14'>
                    <Image src={kapil} alt='Kapil Owner of Idel India' className='sm:w-[35%]' />
                    <div className='text-white p-6 sm:p-0 sm:ml-[10%]'>
                        <small className='text-lg'>Meet the Founder</small>
                        <h3 className='my-7 text-3xl hidden sm:block'><span className='block mb-4'><Image src={comma} alt="comma" /></span>We don't just close gaps<br /> in walls. We open new<br /> possibilities in design.</h3>
                        <h3 className='my-7 text-3xl sm:hidden'><span className='block mb-4'><Image src={comma} alt="comma" /></span>We don't just close gaps in walls. We open new possibilities in design.</h3>
                        <h3 className='uppercase text-xl'>Mr. Kapil Jhunjhunwala</h3>
                        <small className='text-sm mt-2'>Founder, IDEL</small>
                        <small className='block pr-10 mt-3 text-sm'>An engineer at heart and a problem-solver by instinct, Mr. Kapil brings a unique perspective to every project. With over a decade of hands-on experience and deep domain knowledge, he has built IDEL into a trusted name — delivering large-scale, precision installations while staying personally involved in key design and execution challenges.
                            His approach is grounded in collaboration, innovation, and uncompromising quality, values that define IDEL’s growing portfolio.
                        </small>
                    </div>
                </div>

                <div className='container mt-7 sm:mt-20'>
                    <p className="uppercase flex items-center gap-x-4 font-bold text-blue mb-2">
                        <span>
                            <Image src={blueLine} alt="vector" />
                        </span>
                        Our Projects
                    </p>
                    <h2 className='mt-2 sm:mt-0'>What We’ve Built Speaks for Itself.</h2>
                    <div className='flex flex-col sm:flex-row justify-between items-center mt-5'>
                        <p className='hidden sm:block'>This curated collection of flagship projects showcases<br /> the diversity and precision we bring to the job from large-format <br />sliding windows and spider facades to cornerless installations and custom finishes.</p>
                        <p className='sm:hidden'>This curated collection of flagship projects showcases the diversity and precision we bring to the job from large-format sliding windows and spider facades to cornerless installations and custom finishes.</p>
                        <button className='w-full sm:w-auto mt-4 sm:mt-0 border-2 border-[#29367D] text-blue py-3 px-10 rounded-lg'>View All Projects</button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-5 gap-x-10 pt-6 pb-20">
                        {projects.map((item) => (
                            <div key={item.id} className="group relative overflow-hidden rounded-lg">
                                <Image src={item.img} alt="projects" className="w-full h-auto block relative transition-transform duration-700 ease-out group-hover:scale-105" />
                                <div className="rounded-lg bg-blue-900/90 text-white py-10 pl-10 absolute bottom-0 inset-x-0 sm:-bottom-full sm:group-hover:bottom-0 sm:transition-all sm:duration-700 sm:ease-out">
                                    <small className="text-2xl font-semibold">{item.client}</small>
                                    <div className="text-lg uppercase tracking-wide my-4 flex items-center gap-x-1">
                                        <Image className="w-6 h-6" alt="location icon" src={location} />
                                        {item.location}
                                    </div>
                                    <small className="text-xl">{item.architect}</small>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </main>
    )
}

export default page
