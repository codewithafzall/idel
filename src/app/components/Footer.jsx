import React from 'react';
import instagram from "../images/instagram.png";
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className='footer mt-7 sm:mt-0 pt-20 pb-14'>
            <div className='grid grid-cols-1 gap-y-7 sm:grid-cols-4 container text-white'>
                <div>
                    <h3 className='text-5xl'>IDEL India</h3>
                    <p className='mt-7'>25+ years of expertise in facades and fenestration. Skilled in delivering turnkey solutions.</p>
                </div>
                <div className='hidden sm:flex flex-col sm:mx-auto'>
                    <p>Quick Links</p>
                    <ul className='space-y-6 mt-7'>
                        <li><a href='/'>HOME</a></li>
                        <li><a href='/about'>ABOUT US</a></li>
                        <li><a href='/projects'>PROJECTS</a></li>
                        <li><a href='/services'>SERVICES</a></li>
                        <li><a href='/clients'>CLIENTS</a></li>
                    </ul>
                </div>
                <div className='hidden sm:flex flex-col sm:ml-10'>
                    <p>Products</p>
                    <ul className='space-y-6 mt-7'>
                        <li><a href='/product#minimal'>MINIMAL SYSTEM</a></li>
                        <li><a href='/product#geeta'>GEETA SERIES</a></li>
                        <li><a href='/product#aluk'>ALUK SERIES</a></li>
                    </ul>
                </div>
                <div className='sm:hidden flex gap-x-16'>
                    <div className='flex flex-col sm:mx-auto'>
                        <p>Quick Links</p>
                        <ul className='space-y-6 mt-7'>
                            <li><a href='/'>HOME</a></li>
                            <li><a href='/about'>ABOUT US</a></li>
                            <li><a href='/projects'>PROJECTS</a></li>
                            <li><a href='/services'>SERVICES</a></li>
                            <li><a href='/clients'>CLIENTS</a></li>
                        </ul>
                    </div>
                    <div className='flex flex-col sm:ml-10'>
                        <p>Products</p>
                        <ul className='space-y-6 mt-7'>
                            <li><a href='/product#minimal'>MINIMAL SYSTEM</a></li>
                            <li><a href='/product#geeta'>GEETA SERIES</a></li>
                            <li><a href='/product#aluk'>ALUK SERIES</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p>Contact Us</p>
                    <h3 className="text-3xl mt-7">
                        <a
                            href="tel:+919819247835"
                        >
                            +91 9819247835
                        </a>
                    </h3>
                    <p className='mt-7 mb-4'>Location</p>
                    <small className='text-lg'>M/s. Indecomal Exports LLP.<br />Ram House Plot no 4 <br /> Gaiwadi Industrial Estate, <br />Goregaon West, Mumbai 400104</small>
                    <p className='mt-6'>Email</p>
                    <p className="mt-2">
                        <a
                            href="mailto:info@idelindia.com"
                        >
                            info@idelindia.com
                        </a>
                    </p>
                </div>
            </div>
            <div className='border-t border-slate-500 container flex justify-between items-center text-white mt-7 pt-5'>
                <div className='flex items-center gap-x-5 mt-3 sm:mt-0'>
                    <a href='https://instagram.com/idelindia/' target='_blank'><Image src={instagram} alt="instagram" /></a>
                </div>
                {/* <small className='block mt-2 sm:mt-0'>Privacy Policy</small> */}
                <small className='block mt-2 sm:mt-0'>© 2026 idelIndia. All Rights Reserved.</small>
            </div>
        </footer>
    )
}

export default Footer
