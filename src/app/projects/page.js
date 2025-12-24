import React from 'react';
import blueLine from "../images/blue-line.svg";
import Image from 'next/image';
import ambey from '../images/ambey.webp';
import del from '../images/del-house.webp';
import dhanuka from '../images/dhanuka-bhawan.webp';
import dombivli from '../images/dombivli.webp';
import joy from '../images/joy.webp';
import nicmar from '../images/nicmar.webp';
import penthouse from '../images/penthouse.webp';
import sequoia from '../images/sequoia.webp';
import karjat from '../images/karjat.webp';
import cartier from '../images/cartier.webp';
import celebrity from '../images/celebrity.webp';
import click from '../images/click.png';

const page = () => {

    const projects = [

        { id: 1, image: ambey, text: "Ambey Valley" },
        { id: 2, image: del, text: "Del House" },
        { id: 3, image: dhanuka, text: "Dhanuka Bhawan" },
        { id: 4, image: dombivli, text: "Dombivli Apartment" },
        { id: 5, image: joy, text: "Joy Legend" },
        { id: 6, image: nicmar, text: "Nicmar" },
        { id: 7, image: penthouse, text: "Penthouse at Khar" },
        { id: 8, image: sequoia, text: "Sequoia" },
        { id: 9, image: karjat, text: "Karjat" },
        { id: 10, image: cartier, text: "Cartier" },
        { id: 11, image: celebrity, text: "Celebrity House at Khar" }

    ]

    return (
        <main>
            <div className='project-hero text-white'>
                <div className='container pt-44 pb-32'>
                    <h2>Delivering Excellence <br />Through Every Project</h2>
                </div>
            </div>
            <div className='container py-14'>
                <div>
                    <p className='uppercase flex gap-x-4 font-bold text-blue items-center'>
                        <span>
                            <Image src={blueLine} alt='vector' />
                        </span>
                        Featured Products
                    </p>
                    <h2 className='mt-4'>
                        Explore The Collection <br /> of Our Projects
                    </h2>
                </div>
                <div className='mt-14 grid grid-cols-3 place-content-between gap-7'>
                    {projects.map((item) => {
                        return (
                            <div className="overflow-hidden" key={item.id}>
                                <div className="relative group cursor-pointer">
                                    <Image src={item.image} alt={item.text} className="transition-transform duration-500 group-hover:scale-105" />
                                    <Image src={click} alt="click icon" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"/>
                                </div>
                                <p className="mt-3">{item.text}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}

export default page
