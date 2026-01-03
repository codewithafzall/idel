import Image from 'next/image';
import React from 'react';
import whiteLine from "../../images/white-line.svg";
import blueLine from "../../images/blue-line.svg";
import product1 from "../../images/minimal.webp";
import product2 from "../../images/geeta.webp";
import product3 from "../../images/aluk.webp";
import home1 from "../../images/home-1.png";
import home2 from "../../images/home-2.png";

const Products = () => {
    return (
        <section>

            <div className="container bg-blue rounded-xl py-12 px-10 mt-14">
                <p className="uppercase text-white flex-center gap-x-4 font-bold">
                    <span><Image src={whiteLine} alt="vector" /></span> Our Products
                </p>

                <h2 className="text-white text-center mx-auto mt-4 lg:mt-7 sm:w-1/2">
                    Premium Lift & Slide Luxury Door Solutions
                </h2>

                <div className="text-white grid grid-cols-1 sm:grid-cols-3 place-items-center gap-8 mt-8 lg:mt-16">

                    {/* PRODUCT 1 */}
                    <div className="flex flex-col items-center">

                        <div className="group relative overflow-hidden rounded-lg">
                            <Image src={product1} width={430} height={570} alt="Minimal" className="rounded-lg object-cover hover:scale-120 duration-1000" />

                            <div className="absolute inset-8 rounded-lg bg-white flex flex-col items-center justify-center text-center px-6 transform scale-0 origin-center transition-transform duration-800 ease-in-out group-hover:scale-100">
                                <p className="text-black mt-3">Ultra-sleek, minimal aluminium profiles designed for modern, uninterrupted views.</p>
                                <button className="mt-6 bg-transparent text-blue border border-blue font-semibold px-6 py-3 rounded-xl transition">View the Project</button>
                            </div>
                        </div>

                        <p className="text-center mt-5">Minimal (Slimline earlier)</p>
                    </div>

                    {/* PRODUCT 2 */}
                    <div className="flex flex-col items-center">
                        <div className="group relative overflow-hidden rounded-lg">
                            <Image src={product2} width={430} height={570} alt="Geeta Series" className="rounded-lg object-cover group-hover:scale-120 duration-1000" />

                            <div className="absolute inset-8 rounded-lg bg-white flex flex-col items-center justify-center text-center px-6 transform scale-0 origin-center transition-transform duration-800 ease-in-out group-hover:scale-100">
                                <p className="text-black mt-3">Reliable and lightweight aluminium solutions built for long-lasting everyday performance.</p>
                                <button className="mt-6 bg-transparent text-blue border border-blue font-semibold px-6 py-3 rounded-xl transition">View the Project</button>
                            </div>
                        </div>

                        <p className="text-center mt-5">Geeta Series</p>
                    </div>

                    {/* PRODUCT 3 */}
                    <div className="flex flex-col items-center">
                        <div className="group relative overflow-hidden rounded-lg">
                            <Image src={product3} width={430} height={570} alt="Aluk" className="rounded-lg object-cover hover:scale-120 duration-1000" />

                            <div className="absolute inset-8 rounded-lg bg-white flex flex-col items-center justify-center text-center px-6 transform scale-0 origin-center transition-transform duration-800 ease-in-out group-hover:scale-100">
                                <p className="text-black mt-3">High-precision European hardware engineered for smooth, secure, and durable operation.</p>
                                <button className="mt-6 bg-transparent text-blue border border-blue font-semibold px-6 py-3 rounded-xl transition">View the Project</button>
                            </div>
                        </div>

                        <p className="text-center mt-5">Aluk (Rotoi earlier)</p>
                    </div>

                </div>
            </div>


            <div className='container flex justify-between items-end gap-x-24 mt-20 mb-14'>
                <div className='w-8/12'>
                    <p className='uppercase flex items-center gap-x-4 font-bold text-blue'><span><Image src={blueLine} alt='vector' /></span>About Us</p>
                    <h2 className='mt-3'>Crafting High-Performance <br />Aluminium Doors & Windows</h2>
                    <p className='leading-7 mt-2 mb-7'>The company is backed by over 25 years of industry expertise, with deep experience in facade and fenestration fabrication and installation across Western India. At Intelligent Design Lancet, we take on complex fenestration challenges and deliver complete turnkey solutions, including premium doors and windows.</p>
                    <Image src={home1} width={700} height={319} alt='' className='w-full h-75' />
                </div>
                <div className='w-4/12 h-auto'>
                    <Image src={home2} alt='' className='w-full' />
                </div>
            </div>
        </section>
    )
}

export default Products
