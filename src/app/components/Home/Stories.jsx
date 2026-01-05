import React from 'react';
import blueLine from "../../images/blue-line.svg";
import Image from 'next/image';
import Story1 from "../../images/story-1.webp";
import Story2 from "../../images/story-2.webp";
import Story3 from "../../images/story-3.webp";
import Story4 from "../../images/story-4.webp";

const Stories = () => {

    const stories = [
        { id: 1, image: Story1, title: "Design Support", text: "Functional, aesthetic, and space-optimised aluminium system design." },
        { id: 2, image: Story2, title: "Site Survey", text: " On-site measurements and environment analysis for optimal fit." },
        { id: 3, image: Story3, title: "Installation", text: "Executed by trained professionals to ensure flawless integration and lasting performance." },
        { id: 4, image: Story4, title: "Tech Consultancy", text: "Product recommendations, compatibility checks & value engineering." },
    ];

    return (
        <section className="bg-sky pt-16 pb-14">
            <div className="container">
                <p className="uppercase flex-center gap-x-4 font-bold text-blue">
                    <span><Image src={blueLine} alt="vector" /></span>Our Services
                </p>
                <h2 className="text-center mt-4">
                    End-to-End Services, <br/>Built Around You
                </h2>
            </div>

            <div className="container grid grid-cols-2 lg:grid-cols-4 place-items-center-safe gap-x-4 gap-y-7 mt-7">
                {stories.map((story) => (
                    <div key={story.id} className="group relative overflow-hidden rounded-xl cursor-pointer">

                        {/* IMAGE */}
                        <Image src={story.image} alt={story.title} className="z-10" />

                        {/* TITLE (NO BG INITIALLY) */}
                        <h3 className="absolute bottom-8 left-4 z-20 text-2xl text-white font-semibold transition-all duration-900 group-hover:bottom-35">
                            {story.title}
                        </h3>

                        {/* HOVER PANEL */}
                        <div className="absolute left-0 right-0 bottom-0 bg-blue px-4 pb-5 pt-24 opacity-0 translate-y-6 transition-all duration-900 group-hover:opacity-100 group-hover:translate-y-0">

                            <small className="text-lg text-white">
                                {story.text}
                            </small>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}

export default Stories;
