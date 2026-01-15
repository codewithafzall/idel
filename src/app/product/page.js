import React from "react";
import Image from "next/image";
import blueLine from "../images/blue-line.svg";
import SC45 from "../images/SC45.png"
import V45 from "../images/V45.png"
import ClearView from "../images/ClearView.png"
import ClearViewLT from "../images/ClearViewLT.png"
import geeta27 from "../images/27mm.png"
import geeta35 from "../images/35mm.png"
import geeta40 from "../images/40mm.png"
import Form from "../components/Form";

const products = [
    {
        id: 1,
        title: "Minimal Systems",
        description: "Our Slimline Systems offer sleek, ultra-slim aluminium profiles that maximize visibility and bring a modern, minimal look to any space. Designed for durability, smooth performance, and elegant aesthetics, they are ideal for premium homes and contemporary architecture.",
        categories: [
            {
                name: "Minimal System - ClearView LT",
                image: ClearViewLT,
                specs: [
                    { label: "Interlock Face Width", value: "15 mm" },
                    { label: "Glass Thickness", value: "8mm -32mm" },
                    { label: "Max. Shutter Height", value: "3.66 Mtrs / 12 Ft." },
                    { label: "Max. Shutter Load", value: "800 kgs" },
                    { label: "Wind Resistance", value: "1.5 KPa" },
                ],
            },
            {
                name: "Minimal System - ClearView",
                image: ClearView,
                reverse: true,
                specs: [
                    { label: "Interlock Face Width", value: "20 mm" },
                    { label: "Glass Thickness", value: "8mm - 50mm" },
                    { label: "Max. Shutter Height", value: "6.0 Mtrs / 20 Ft" },
                    { label: "Max. Shutter Load", value: "1000 kgs" },
                    { label: "Wind Resistance", value: "2.5 KPa" },
                ],
            },
        ],
    },
    {
        id: 2,
        title: "Geeta Series",
        description: "The Geeta Series offers strong, reliable aluminium profiles designed for long-lasting performance in residential and commercial spaces.",
        categories: [
             {
                name: "27mm Slim Geeta Series",
                image: geeta27,
                specs: [
                    { label: "Interlock Face Width", value: "32 mm" },
                    { label: "Glass Thickness", value: "6mm - 18mm" },
                    { label: "Max. Shutter Height", value: "2.1 Mtrs / 7 Ft." },
                    { label: "Max. Shutter Load", value: "80 kgs" },
                    { label: "Wind Resistance", value: "1.0 KPa" },
                ],
            },
            {
                name: "35mm Slim Geeta Series",
                image: geeta35,
                reverse: true,
                specs: [
                    { label: "Interlock Face Width", value: "32 mm" },
                    { label: "Glass Thickness", value: "6mm - 23mm" },
                    { label: "Max. Shutter Height", value: "2.4 Mtrs / 8 Ft." },
                    { label: "Max. Shutter Load", value: "120 kgs" },
                    { label: "Wind Resistance", value: "1.0 KPa" },
                ],
            },
            {
                name: "40mm Geeta Series",
                image: geeta40,
                specs: [
                    { label: "Glass Thickness", value: "6mm - 24mm" },
                    { label: "Max. Shutter Height", value: "2.4 Mtrs / 8 Ft." },
                    { label: "Max. Shutter Load", value: "75 kgs" },
                ],
            }
        ],
    },
    {
        id: 3,
        title: "Aluk Systems",
        description: "Placeholder description for Aluk Systems. Replace this text later.",
        categories: [
            {
                name: "AluK - SC45",
                image: SC45,
                specs: [
                    { label: "Interlock Face Width", value: "33 mm" },
                    { label: "Glass Thickness", value: "6mm, 8mm & 24mm" },
                    { label: "Max. Shutter Height", value: "2.4 Mtrs / 8 Ft." },
                    { label: "Max. Shutter Load", value: "120 kgs" },
                ],
            },
            {
                name: "AluK - 45V",
                image: V45,
                reverse: true,
                specs: [
                    { label: "Glass Thickness", value: "6mm- 24mm" },
                    { label: "Max. Shutter Height", value: "2.4 Mtrs / 8 Ft." },
                    { label: "Max. Shutter Load", value: "70 kgs" },
                ],
            },
        ],
    },
];


const page = () => {
    return (
        <main>
            {/* Hero */}
            <div className="product-hero pt-40 sm:pt-0 text-white">
                <div className="container pt-44 pb-32">
                    <h2>Innovative Fenestration <br /> Solutions Built to Last</h2>
                </div>
            </div>

            {/* Heading */}
            <div className="py-8 sm:py-16">
                <p className="uppercase flex gap-x-4 font-bold text-blue justify-center">
                    <span><Image src={blueLine} alt="vector" /></span>
                    Our Products
                </p>
                <h2 className="text-center mt-4">Our Aluminium Window & <br /> Door Systems</h2>
            </div>

            {/* Products */}
            {products.map((product) => (
                <div key={product.id} className="bg-blue rounded-2xl container mb-20 px-0!">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between py-10 px-6 lg:px-14 text-white gap-6">
                        <h2 className="font-normal!">{product.title}</h2>
                        <p className="lg:w-[45%]">{product.description}</p>
                    </div>

                    <div className="bg-sky rounded-2xl">
                        {product.categories.map((category, index) => (
                            <div key={index} className={`flex flex-col lg:flex-row items-center justify-around py-14 gap-10 ${index === 0 ? "border-b-2 border-[#D8D8D8]" : ""} ${category.reverse ? "lg:flex-row-reverse" : ""}`}>
                                <div className="w-full lg:w-[40%] px-6 lg:px-0">
                                    <h3 className="text-3xl font-semibold">{category.name}</h3>
                                    <div className="flex flex-col gap-y-4 mt-7">
                                        {category.specs.map((spec, i) => (
                                            <div key={i} className={`flex justify-between items-center pb-2 ${i !== category.specs.length - 1 ? "border-b-2 border-[#D8D8D8]" : ""}`}>
                                                <small className="font-semibold text-lg">{spec.label}</small>
                                                <small className="text-lg">{spec.value}</small>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <Image src={category.image} alt={category.name} className="w-72 lg:w-90" />
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            <Form />
        </main>
    );
};

export default page;
