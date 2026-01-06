import React from 'react';
import Image from 'next/image';
import blueLine from "../images/blue-line.svg";
import Slimline from '../images/slimline-product.webp';
import SlimlineInfo from '../images/minimal-info.png';
import Geeta from '../images/geeta-product.webp';
import GeetaInfo from '../images/geeta-info.png';
import Aluk from '../images/aluk-product.webp';
import AlukInfo from '../images/aluk-info.png';
import Form from '../components/Form';

const products = [
    {
        id: 1,
        title: 'Minimal Series',
        description: 'Our Minimal Series offers ultra-slim aluminium profiles engineered to maximise visibility and deliver clean, modern aesthetics. Perfect for spaces where design minimalism meets structural performance, combining slim interlocks with robust load-bearing capabilities.',
        productImage: Slimline,
        infoImage: SlimlineInfo,
    },
    {
        id: 2,
        title: 'Geeta Series',
        description: 'The Geeta Series features robust aluminium profiles built for long-lasting performance in both residential and commercial applications. With multiple variants optimised for different use cases, the series offers a perfect balance between strength, efficiency, and versatile design.',
        productImage: Geeta,
        infoImage: GeetaInfo,
    },
    {
        id: 3,
        title: 'Aluk Series',
        description: 'The AluK Series blends global design intelligence with local execution. These systems are ideal for premium residential and commercial applications that demand performance, aesthetics, and reliability. Engineered for structural integrity and seamless operation, this series caters to elevated architectural needs.',
        productImage: Aluk,
        infoImage: AlukInfo,
    },
];

const page = () => {
    return (
        <main>
            {/* Hero */}
            <div className='product-hero text-white'>
                <div className='container pt-44 pb-32'>
                    <h2>Innovative Fenestration <br />Solutions Built to Last</h2>
                </div>
            </div>

            {/* Heading */}
            <div className='container py-16'>
                <p className='uppercase flex gap-x-4 font-bold text-blue justify-center'>
                    <span>
                        <Image src={blueLine} alt='vector' />
                    </span>
                    Our Products
                </p>
                <h2 className='text-center mt-4'>
                    Our Aluminium Window & <br /> Door Systems
                </h2>
            </div>

            {/* Products */}
            {products.map((product) => (
                <div key={product.id}>
                    <div className='bg-sky container relative flex justify-between items-center px-16 pt-16 pb-40 rounded-3xl'>
                        <div className='w-1/2'>
                            <h2 className='!font-thin'>{product.title}</h2>
                            <p className='mt-4'>{product.description}</p>
                            <button className='border-2 text-blue border-[#29367D] bg-transparent rounded-md px-6 py-2 mt-7 font-semibold'>
                                Download Brochure
                            </button>
                        </div>

                        <div className='w-1/2 flex-center'>
                            <Image
                                width={422}
                                height={422}
                                className='aspect-square hover:scale-110 transition-transform duration-700'
                                src={product.productImage}
                                alt={product.title}
                            />
                        </div>

                        <button className='bg-white text-blue font-semibold absolute bottom-20 right-7 shadow-lg px-4 py-2 rounded-md'>
                            View in Space
                        </button>
                    </div>

                    <div className='container relative -top-10'>
                        <Image
                            src={product.infoImage}
                            className='w-full'
                            alt={`${product.title} information`}
                        />
                    </div>
                </div>
            ))}

            <Form/>
        </main>
    );
};

export default page;
