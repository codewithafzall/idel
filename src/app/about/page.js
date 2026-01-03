import React from 'react';
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

    return (
        <main>
            <div className='about-hero text-white'>
                <div className='container pt-44 pb-32'>
                    <h2>Framing the Future <br />of Infrastructure </h2>
                </div>
            </div>

            <div className='container flex flex-row-reverse justify-between items-center gap-x-16 mt-20 mb-14'>
                <div className='w-7/12'>
                    <p className='uppercase flex items-center gap-x-4 font-bold text-blue'>
                        <span><Image src={blueLine} alt='vector' /></span>
                        Our Story
                    </p>
                    <h2 className='mt-3'>
                        Engineering Excellence <br /> in Every Frame
                    </h2>
                    <p className='leading-7 mt-5'>
                        At IDEL India, we don’t just craft doors and windows. We engineer lasting impressions.<br /><br />

                        Born from decades of experience and backed by the Rammaica Group legacy, IDEL is a premium turnkey solution provider in the fenestration space.  Founded by Mr. Kapil Jhunjhunwala and supported by Mr. Balram Jhunjhunwala, IDEL brings together precision, design sensibility, and deeply technical thinking to execute complex architectural openings<br /><br />

                        With over 25 years of collective expertise, our team specialises in facade and fenestration fabrication and installation in the aluminium segment across India’s most prestigious residential and institutional projects.
                    </p>
                </div>
                <div className='w-5/12'>
                    <Image src={aboutStory} alt='Window Image' className='w-full' />
                </div>
            </div>

            <div className="container flex justify-around border-t-2 border-[#D2CDCD] py-14">
                {specs.map((item, index) => (
                    <React.Fragment key={item.id}>
                        {index !== 0 && (
                            <div className="">
                                <svg
                                    width="2"
                                    height="100%"
                                    viewBox="0 0 2 100"
                                    preserveAspectRatio="none"
                                    className='relative top-'
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

                        <div className="flex flex-col w-52 gap-3">
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

            <div className="sticky top-0 z-20">
                <Image
                    src={aboutFixed}
                    alt="showcasing window design"
                    className="w-full h-full object-cover"
                    priority
                />
            </div>


            <div className='container relative -mt-85 z-30'>
                <div className="flex justify-between items-center flex-col md:flex-row">
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
                        We deliver tailored window and door systems designed for style,<br /> performance, and everyday comfort—backed by expert installation for<br /> complete peace of mind.
                    </p>
                </div>

                <div className='bg-white w-full mt-16 shadow-xl'>
                    <div className='grid grid-cols-3 border-[#D2DCDC] border-b'>
                        <h3 className='text-center text-2xl py-5 font-semibold text-white bg-blue'>Our Mission</h3>
                        <h3 className='text-center text-2xl py-5 font-semibold text-black'>Our Vision</h3>
                        <h3 className='text-center text-2xl py-5 font-semibold text-black'>Values</h3>
                    </div>
                    <div className='flex justify-between items-center gap-x-16 px-8 py-10'>
                        <div className='w-1/2'>
                            <p className='leading-7 mt-5'>
                                Our mission is to offer premium windows and doors that combine durability, style, and energy efficiency. We aim to enhance spaces with innovative designs and reliable craftsmanship.
                            </p>
                            <ul className='flex flex-col gap-y-2 mt-4'>
                                <li>🔹 Creating modern spaces with seamless indoor-outdoor flow</li>
                                <li>🔹 Driving innovation in fenestration technology</li>
                                <li>🔹 Setting benchmarks in quality and user experience</li>
                                <li>🔹 Building sustainable and future-ready systems</li>
                            </ul>
                        </div>
                        <div className='w-1/2'>
                            <Image src={mission} alt='Window Image' className='w-full h-82' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full bg-white relative z-50 pt-14'>
                <div className='ml-[calc((100vw-1293px)/2)] max-w-full bg-blue flex items-center mt-14'>
                    <Image src={kapil} alt='Kapil Owner of Idel India' className='w-[35%]' />
                    <div className='text-white ml-[10%]'>
                        <small className='text-lg'>Meet the Founder</small>
                        <h3 className='my-7 text-3xl'><span className='block mb-4'><Image src={comma} alt="comma" /></span>We don't just close gaps<br /> in walls. We open new<br /> possibilities in design.</h3>
                        <h3 className='uppercase text-xl'>Mr. Kapil Jhunjhunwala</h3>
                        <small className='text-sm mt-2'>Founder, IDEL</small>
                    </div>
                </div>

                <div className='container mt-20'>
                    <h2>Our Amazing Projects</h2>
                    <div className='flex justify-between items-center mt-5'>
                        <p>This collection of past projects highlights the versatility and<br /> precision that we bring to the job. No matter what your vision may<br /> be, we’ll make it happen!</p>
                        <button className='border-2 border-[#29367D] text-blue py-3 px-10 rounded-lg'>View All Projects</button>
                    </div>

                    <div className="grid grid-cols-3 gap-x-10 pt-6 pb-20">
                        {projects.map((item) => (
                            <div key={item.id} className="group relative overflow-hidden rounded-lg">
                                <Image src={item.img} alt="projects" className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-105" />
                                <div className="absolute rounded-lg inset-x-0 -bottom-full bg-blue-900/90 text-white group-hover:bottom-0 transition-all duration-700 ease-out py-10 pl-10">
                                    <small className="text-2xl font-semibold">{item.client}</small>
                                    <div className="text-lg uppercase tracking-wide my-4 flex items-center gap-x-1"><Image className='w-6 h-6' alt='location icon' src={location}/> {item.location}</div>
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
