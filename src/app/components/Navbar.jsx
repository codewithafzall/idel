import React from 'react';
import Logo from "../images/logo.png";
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className='relative w-full'>
            <nav className='absolute top-0 left-0 right-0 pt-7 bg-none w-full max-w-7xl mx-auto flex justify-between items-center'>
                <Image src={Logo} alt="IDEL Logo" width={110} height={55} />

                <ul className='list-none gap-x-6 uppercase text-white flex items-center'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Projects</li>
                    <li>Services</li>
                    <li>Products</li>
                    <li>Clients</li>
                    <li className='border-2 border-white rounded-full px-3 py-2 -ml-3'>Contact Us</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
