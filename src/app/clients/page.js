import React from 'react';
import blueLine from "../images/blue-line.svg";
import Image from 'next/image';
import home from '../images/home.png';
import location from '../images/location.webp';

const page = () => {

    const clients = [
        { id: 1, type: "Duplex", name: "Ar. Bhavna Jacob", location: "Malabar Hill, Mumbai" },
        { id: 2, type: "Bungalow", name: "Ar. Manoj Bhandari", location: "Ambala" },
        { id: 3, type: "Bungalow", name: "Ar. Mahek Lalan", location: "Chennai" },
        { id: 4, type: "Residence", name: "Ar. Rumana", location: "Santacruz, Mumbai" },
        { id: 5, type: "Residence", name: "Ar. Amee Vora", location: "Juhu, Mumbai" },
        { id: 6, type: "Bungalow", name: "Ar. Rohit Mankar", location: "Pune" },
        { id: 7, type: "Duplex", name: "Ar. Naved Patel", location: "Bandra, Mumbai" },
        { id: 8, type: "Duplex", name: "Mr. Karan Johar", location: "Bandra, Mumbai" },
        { id: 10, type: "Residence", name: "Ar. Zafar Jhaveri", location: "Khar, Mumbai" },
        { id: 11, type: "Clinic", name: "Ar. Bhavna Jacob", location: "Khar, Mumbai" },
        { id: 12, type: "Building", name: "NICMAR", location: "Balewadi, Pune" },
        { id: 13, type: "Residence", name: "Ar. Zahir Cassum (TPA)", location: "Khar, Mumbai" },
        { id: 14, type: "Building", name: "Ar. Sunil Kenkarey", location: "Bandra, Mumbai" },
        { id: 15, type: "Bungalow", name: "Ar. Soumya Raja", location: "Aamby Valley City" },
        { id: 16, type: "Bungalow", name: "Ar. Bhavya Kenkare", location: "Dombivili" },
        { id: 17, type: "School", name: "Ar. Kulin Dhruva", location: "Ghatkopar, Mumbai" },
        { id: 18, type: "Building", name: "Aum Realtors", location: "Santacruz, Mumbai" },
        { id: 19, type: "Building", name: "Joy Developers", location: "Khar, Mumbai" },
        { id: 20, type: "Residence", name: "Mrs. Radhika", location: "Bandra, Mumbai" },
        { id: 21, type: "Residence", name: "Mr. Bimal Nayyar", location: "Versova, Mumbai" },
        { id: 22, type: "Residence", name: "Mr. Arora", location: "Bandra, Mumbai" },
        { id: 23, type: "Triplex", name: "Ar. Sunil Kenkarey", location: "Khar, Mumbai" },
        { id: 24, type: "Building", name: "Ar. Sunil Kenkarey", location: "Juhu, Mumbai" },
        { id: 25, type: "Triplex", name: "Mr. Gogia", location: "Khar, Mumbai" },
        { id: 26, type: "Building", name: "J.S. Builders", location: "Khar, Mumbai" },
        { id: 27, type: "Residence", name: "Ar. Prachi Desai", location: "Mumbai" },
        { id: 28, type: "Building", name: "Vijay Dwellers", location: "Matunga, Mumbai" },
        { id: 29, type: "Residence", name: "Mr. Sunil Gavaskar", location: "Prabhadevi, Mumbai" },
        { id: 30, type: "Penthouse", name: "Ar. Mayur Doshi", location: "Khar, Mumbai" },
        { id: 31, type: "Residence", name: "Fourth Dimension", location: "Vile Parle, Mumbai" },
        { id: 32, type: "Residence", name: "Mr. Reddy", location: "Bandra, Mumbai" },
        { id: 33, type: "Bungalow", name: "Ground 11 Architects", location: "Pune" },
        { id: 34, type: "Pvt. Building", name: "Mr. Mirchandani", location: "Juhu, Mumbai" },
        { id: 35, type: "Residence", name: "Mr. Bubna", location: "Vile Parle, Mumbai" },
        { id: 36, type: "Residence", name: "Mr. Mody", location: "Santacruz, Mumbai" },
        { id: 37, type: "Residence", name: "Mr. Kukreja", location: "Khar, Mumbai" },
        { id: 38, type: "Penthouse", name: "Mr. Jain", location: "Khar, Mumbai" },
        { id: 39, type: "Residence", name: "Mr. Mehta", location: "Juhu, Mumbai" },
        { id: 40, type: "Amenity Hall", name: "Runwal", location: "Nepeansea Road, Mumbai" }
    ];


    return (
        <main>
            <div className='clients-hero text-white'>
                <div className='container pt-44 pb-32'>
                    <h2>Trusted by Leading  <br />Architects & Developers</h2>
                </div>
            </div>
            <div className='py-14 bg-sky'>
                <p className='uppercase flex gap-x-4 font-bold text-blue items-center justify-center'>
                    <span>
                        <Image src={blueLine} alt='vector' />
                    </span>
                    Our Clients
                </p>
                <h2 className='text-center mt-4'>
                    Trusted Nationwide
                </h2>

                <div className='container grid grid-cols-3 place-items-center gap-6 pt-14'>
                    {clients.map((client) => {
                        return (
                            <div key={client.id} className='bg-white rounded-xl border border-gray-300 flex flex-col justify-center w-96 h-40'>
                                <div className='flex flex-col mx-auto'>
                                    <p className='font-semibold flex items-center gap-x-2 text-blue space-x-4'><span><Image src={home} className='w-5 h-5' alt="home icon" /></span>{client.type}</p>
                                    <p className='my-2'>Client: <span className='font-semibold'>{client.name}</span></p>
                                    <small className='flex items-center text-gray-400 gap-x-2'><span><Image src={location} className='' alt="home icon" /></span>{client.location}</small>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </main>
    )
}

export default page
