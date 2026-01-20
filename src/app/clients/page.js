"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import blueLine from "../images/blue-line.svg";
import Image from 'next/image';
import home from '../images/home.png'
import Building from '../images/Building.svg';
import Residence from '../images/Residence.svg';
import Clinic from '../images/Clinic.svg';
import Bungalow from '../images/Bungalow.svg';
import Duplex from '../images/Duplex.svg';
import location from '../images/location.webp';
import banner from "../images/clients-banner.webp";

const Page = () => {
    const router = useRouter();

    const clientToProjectMap = {
        "Jyothika & R.S. Suriya": 10,
        "Mr. Karan Johar": 7,
        "Mr. Jain": 8, 
        "ZYJ Developers": 2, 
        "Mr. Pramod Dhanuka": 1, 
        "NICMAR": 5, 
        "Mr. Taswala": 9, 
        "Mr. Patil (Politician)": 4, 
    };

    const clients = [
        { id: 1, type: "Showroom & Residence", name: "Tamannaah Bhatia", location: "Juhu & Versova, Mumbai" },
        { id: 2, type: "Bungalow", name: "Jyothika & R.S. Suriya", location: "ECR, Chennai" },
        { id: 3, type: "Duplex", name: "Mr. Karan Johar", location: "Bandra, Mumbai" },
        { id: 4, type: "Private Building", name: "Mr. Jain", location: "Khar, Mumbai" },
        { id: 5, type: "Residential Buildings", name: "ZYJ Developers", location: "Khar, Mumbai" },
        { id: 6, type: "Residence", name: "Mrs. Tina Ambani", location: "Colaba, Mumbai" },
        { id: 7, type: "Residence", name: "Mr. Dalvi", location: "Kharghar, Navi Mumbai" },
        { id: 8, type: "Bungalow", name: "Mr. Devang Parikh", location: "Ghatkopar, Mumbai" },
        { id: 9, type: "Bungalow", name: "Mr. Gandhi", location: "Karjat" },
        { id: 10, type: "Bungalow", name: "Maddock Films", location: "Santacruz, Mumbai" },
        { id: 11, type: "Residence", name: "Mr. Vidit Jhunjhunwala", location: "Santacruz, Mumbai" },
        { id: 12, type: "Showroom", name: "Tressoro", location: "Colaba, Mumbai" },
        { id: 13, type: "Amenity Floor", name: "Runwal Developers", location: "Nepeansea Road, Mumbai" },
        { id: 14, type: "Residence", name: "Mr. Taswala", location: "Walkeshwar, Mumbai" },
        { id: 15, type: "Residence", name: "Mr. Kapur", location: "Marine Drive, Mumbai" },
        { id: 16, type: "Bungalow", name: "Mr. Pramod Dhanuka", location: "Aamby Valley City, Lonavala" },
        { id: 17, type: "Restaurant", name: "Foo", location: "Powai, Mumbai" },
        { id: 18, type: "Duplex", name: "Mr. Thakker", location: "Worli, Mumbai" },
        { id: 19, type: "Bungalow", name: "AMA Design Solutions", location: "Avadh, Vapi, Gujarat" },
        { id: 20, type: "Duplex", name: "Mr. Bhansali", location: "Lower Parel, Mumbai" },
        { id: 21, type: "Duplex", name: "Mr. Dhairya", location: "Lower Parel, Mumbai" },
        { id: 22, type: "Residence", name: "Mr. Sunil Gavaskar", location: "Prabhadevi, Mumbai" },
        { id: 23, type: "Building", name: "NICMAR", location: "Balewadi, Pune" },
        { id: 24, type: "Duplex", name: "Mr. Niraj Joshi", location: "Lower Parel, Mumbai" },
        { id: 25, type: "Duplex", name: "Mr. Aagam", location: "Lower Parel, Mumbai" },
        { id: 26, type: "Triplex", name: "Mr. Adarsh Hegde", location: "Bandra, Mumbai" },
        { id: 27, type: "Hotel", name: "Mr. Suri", location: "Lonavala & Andheri, Mumbai" },
        { id: 28, type: "Hospital", name: "Kokilaben Dhirubhai Ambani Hospital", location: "Andheri, Mumbai" },
        { id: 29, type: "Bungalow", name: "Mr. Patil (Politician)", location: "Dombivili, Thane" },
        { id: 30, type: "Office", name: "Argus Partners", location: "Nariman Point, Mumbai" },
        { id: 31, type: "Office", name: "Vijay Laxmi Group", location: "Andheri, Mumbai" },
        { id: 32, type: "Building", name: "Joy Developers", location: "Khar, Mumbai" },
        { id: 33, type: "Office", name: "Mr. Jain", location: "Huges Road, Mumbai" },
        { id: 34, type: "Showroom", name: "Indigo Jewellery", location: "Andheri, Mumbai" },
        { id: 35, type: "Residence", name: "Banka Family", location: "Vile Parle, Mumbai" },
        { id: 36, type: "Residence", name: "Mr. Parikh", location: "Malabar Hill, Mumbai" },
        { id: 37, type: "Residence", name: "Mr. Jain", location: "Parel, Mumbai" },
        { id: 38, type: "Bungalow", name: "BD & P Hotels", location: "Bandra, Mumbai" },
        { id: 39, type: "Bungalow", name: "Dr. Shrivastava", location: "Goa" },
        { id: 40, type: "Bungalow", name: "Mr. Abhin Alimchandani", location: "Lonavala" },
        { id: 41, type: "Building", name: "Harshail Builders", location: "Vile Parle, Mumbai" },
        { id: 42, type: "Residence", name: "Mr. Naresh Jain", location: "Tardeo, Mumbai" },
        { id: 43, type: "Bungalow", name: "Ar. Manoj Bhandari", location: "Ambala, Chandigarh" },
        { id: 44, type: "Bungalow", name: "Mrs. Savitri Choudhary", location: "Kashid, Alibaug" },
        { id: 45, type: "Residence", name: "Mr. Sumeer Kumar", location: "Juhu, Mumbai" },
        { id: 46, type: "Residence", name: "Ar. Amee Vora (Fourth Dimension)", location: "Juhu, Mumbai" },
        { id: 47, type: "Penthouse", name: "Mr. Dinesh Jain", location: "Khar, Mumbai" },
        { id: 48, type: "Residence", name: "Mr. Madhusudan Reddy", location: "Bandra, Mumbai" },
        { id: 49, type: "Residence", name: "Mr. Anand Mehta", location: "Malabar Hill, Mumbai" },
        { id: 50, type: "Residence", name: "Ar. Sonal Iyer", location: "Juhu, Mumbai" },
        { id: 51, type: "Residence", name: "Mr. Mody", location: "Santacruz, Mumbai" },
        { id: 52, type: "Bungalow", name: "Mr. Atul Parikh", location: "Ghatkopar, Mumbai" }
    ];

    const typeIcons = { Building, Residence, Clinic, Bungalow, Duplex, };

    const handleClientClick = (clientName) => {
        const projectId = clientToProjectMap[clientName];
        if (projectId) {
            router.push(`/projects#project-${projectId}`);
        }
    };

    return (
        <main>

            <div className="pt-40 sm:pt-0 text-white relative overflow-hidden h-88 sm:h-auto">
                <Image
                    src={banner}
                    alt="Product Hero Background"
                    fill
                    priority
                    className="object-cover"
                    placeholder="blur"
                />

                <div className="container pt-44 pb-32 relative z-10">
                    <h2>Our Work.  <br />Their Trust.</h2>
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

                <div className='container grid grid-cols-1 sm:grid-cols-3 place-items-center gap-3 sm:gap-6 mt-8 sm:mt-14'>
                    {clients.map((client) => {
                        const hasProject = clientToProjectMap[client.name] !== undefined && clientToProjectMap[client.name] !== null;
                        
                        return (
                            <div 
                                key={client.id} 
                                className={`bg-white rounded-xl border border-gray-300 flex flex-col justify-center w-80 sm:w-96 h-40 transition-all duration-300 ${
                                    hasProject 
                                        ? 'cursor-pointer hover:shadow-lg hover:border-blue hover:scale-105' 
                                        : 'cursor-default'
                                }`}
                                onClick={() => handleClientClick(client.name)}
                            >
                                <div className='flex flex-col ml-10 sm:ml-14'>
                                    <p className='font-semibold flex items-center gap-x-2 text-blue space-x-4'>
                                        <span>
                                            <Image src={typeIcons[client.type] || home} className='w-5 h-5' alt="home icon" />
                                        </span>
                                        {client.type}
                                    </p>
                                    <p className='my-2.5'>
                                        Client: <span className='font-semibold'>{client.name}</span>
                                    </p>
                                    <small className='flex items-center text-[16px] text-gray-500 gap-x-2'>
                                        <span>
                                            <Image src={location} className='' alt="home icon" />
                                        </span>
                                        {client.location}
                                    </small>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </main>
    )
}

export default Page