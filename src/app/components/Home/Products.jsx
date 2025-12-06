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

            <div className='max-w-7xl mx-auto bg-blue rounded-xl py-12 px-10 mt-14'>
                <p className='uppercase text-white flex gap-x-4 justify-center font-bold'><span><Image src={whiteLine} alt='vector' /></span> Our Products</p>
                <h2 className='text-white text-center mt-7'>Premium Lift & Slide Luxury <br />Door Solutions</h2>

                <div className='text-white flex justify-center items-center gap-x-8 mt-16'>
                    <div>
                        <Image src={product1} width={430} height={570} alt='Minimal' className='rounded-lg' />
                        <p className='text-center mt-5'>Minimal (Slimline earlier)</p>
                    </div>
                    <div>
                        <Image src={product2} width={430} height={570} alt='Minimal' className='rounded-lg' />
                        <p className='text-center mt-5'>Geeta Series</p>
                    </div>
                    <div>
                        <Image src={product3} width={430} height={570} alt='Minimal' className='rounded-lg' />
                        <p className='text-center mt-5'>Aluk (Rotoi earlier)</p>
                    </div>
                </div>
            </div>

            <div className='max-w-7xl flex mx-auto justify-between items-end gap-x-24 my-14 px-10'>
                <div className='w-8/12'>
                    <p className='uppercase flex gap-x-4 font-bold text-blue'><span><Image src={blueLine} alt='vector' /></span>About Us</p>
                    <h2 className='mt-3'>Crafting High-Performance <br />Aluminium Doors & Windows</h2>
                    <p className='leading-7 mt-2 mb-7'>The company is backed by over 25 years of industry expertise, with deep experience in facade and fenestration fabrication and installation across Western India. At Intelligent Design Lancet, we take on complex fenestration challenges and deliver complete turnkey solutions, including premium doors and windows.</p>
                    <Image src={home1} width={700} height={319} alt='' className='w-full h-[300px]'/>
                </div>
                <div className='w-4/12 h-auto'>
                    <Image src={home2} alt='' className='w-full'/>
                </div>
            </div>
        </section>
    )
}

export default Products
6