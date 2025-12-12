import React from 'react';
import facebook from "../images/facebook.png";
import linkedin from "../images/linkedin.png";
import instagram from "../images/instagram.png";
import Image from 'next/image';

const Footer = () => {
    return (
        <section className='footer pt-20 pb-14'>
            <div className='grid grid-cols-4 container text-white'>
                <div>
                    <h3 className='text-5xl'>IDEL India</h3>
                    <p className='mt-7'>25+ years of expertise in facades and fenestration. Skilled in delivering turnkey solutions.</p>
                </div>
                <div className='flex flex-col mx-auto'>
                    <p>Quick Links</p>
                    <ul className='space-y-6 mt-7'>
                        <li>HOME</li>
                        <li>ABOUT US</li>
                        <li>PROJECTS</li>
                        <li>SERVICES</li>
                        <li>CLIENTS</li>
                    </ul>
                </div>
                <div className='flex flex-col ml-10'>
                    <p>Products</p>
                    <ul className='space-y-6 mt-7'>
                        <li>SLEEK SYSTEM</li>
                        <li>GEETA</li>
                        <li>ROTOI</li>
                    </ul>
                </div>
                <div>
                    <p>Contact Us</p>
                    <h3 className='text-3xl mt-7'>+91 9819247835</h3>
                    <p className='mt-7 mb-4'>Location</p>
                    <small className='text-lg'>M/S Indecomal Exports LLP.<br />Ram House 4 - Gaiwadi Industrial Estate, Goregaon West,<br /> Mumbai 400104</small>
                    <p className='mt-6'>Email</p>
                    <p className='mt-2'>info@idelindia.com</p>
                </div>
            </div>
            <div className='border-t border-slate-500 container flex justify-between items-center text-white mt-7 pt-5'>
                <div className='flex items-center space-x-5'>
                  <Image src={facebook} alt="facebook"/>
                  <Image src={instagram} alt="instagram"/>
                  <Image src={linkedin} alt="linkedin"/>
                </div>
                <small>Privacy Policy</small>
                <small>© 2025 idelIndia. All Rights Reserved. Powered By Ministry Of Marketing</small>
            </div>
        </section>
    )
}

export default Footer
