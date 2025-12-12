import React from 'react';
import blueLine from "../../images/blue-line.svg";
import Image from 'next/image';
import Story1 from "../../images/story-1.webp";
import Story2 from "../../images/story-2.webp";
import Story3 from "../../images/story-3.webp";
import Story4 from "../../images/story-4.webp";

const Stories = () => {

    const stories = [
        { id: 1, image: Story1, title: "Design Support" },
        { id: 2, image: Story2, title: "Site Survey" },
        { id: 3, image: Story3, title: "Installation" },
        { id: 4, image: Story4, title: "Tech Consultancy" },
    ];

    return (
        <section className='bg-sky pt-16 pb-14'>
            <div className='container'>
                <p className='uppercase flex gap-x-4 font-bold text-blue justify-center'><span><Image src={blueLine} alt='vector' /></span>Our Services</p>
                <h2 className='text-center mt-4'>Creating Engaging Stories <br />That Attract Educate</h2>
            </div>

            <div className='container grid grid-cols-2 lg:grid-cols-4 place-items-center-safe gap-x-4 gap-y-7 mt-7'>
                {stories.map((story) => {
                    return (
                        <div key={story.id} className='relative'>
                            <Image src={story.image} alt={story.title} className='z-10' />
                            <p className='absolute bottom-9 left-4 z-20 !text-2xl text-white font-semibold'>{story.title}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Stories
