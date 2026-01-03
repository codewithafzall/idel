import React from 'react';
import blueLine from "../../images/blue-line.svg";
import Image from 'next/image';
import build from "../../images/build.webp";
import customize from "../../images/customize.webp";
import consult from "../../images/consult.webp";
import support from "../../images/support.webp";

const Process = () => {

    const process = [
        { id: 1, image: consult, title: '1. Consult', desc: 'We understand your requirements and help you choose the right products with expert guidance.' },
        { id: 2, image: customize, title: '2. Customize', desc: 'Tailor-made solutions designed to match your space, style, and technical needs.' },
        { id: 3, image: build, title: '3. Build', desc: 'Precision fabrication with high-quality materials to ensure performance and durability.' },
        { id: 4, image: support, title: '4. Support', desc: 'End-to-end assistance with smooth installation, after-service, and long-term maintenance.' },
    ];

    return (
        <section className="bg-sky pt-14 pb-20">
            <div className="container">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="uppercase flex gap-x-4 font-bold text-blue">
                            <span><Image src={blueLine} alt="vector" /></span>Our Process
                        </p>
                        <h2 className="mt-3">
                            Precision-Driven Process <br />for Every Project
                        </h2>
                    </div>
                    <p className="leading-7 mt-2 mb-7 text-right">
                        Our team helps you make confident decisions by<br />
                        offering clear guidance, expert evaluation, and<br />
                        tailored recommendations for your space.
                    </p>
                </div>

                <div className="grid grid-cols-4 gap-x-5 mt-14">
                    {process.map((item) => (
                        <div
                            key={item.id}
                            className="group relative overflow-hidden rounded-xl cursor-pointer bg-white py-10 px-5 transition-colors duration-500"
                        >

                            {/* BLUE HOVER OVERLAY */}
                            <div className="absolute inset-0 bg-blue transform scale-y-0 origin-top transition-transform duration-800 ease-out group-hover:scale-y-100"></div>

                            {/* CONTENT */}
                            <div className="relative z-10">
                                <Image src={item.image} alt={item.title} className="mx-auto" />

                                <h4 className="text-center text-4xl mt-12 font-semibold text-black transition-colors duration-500 group-hover:text-white">
                                    {item.title}
                                </h4>

                                <small className="text-center inline-block text-lg mt-5 leading-5.5 text-black transition-colors duration-500 group-hover:text-white">
                                    {item.desc}
                                </small>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
