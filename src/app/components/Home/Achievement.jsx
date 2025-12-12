import React from 'react';
import blueLine from "../../images/blue-line.svg";
import sketch from "../../images/sketch.webp";
import PartnerLogo from "../../images/partner-logo.webp";
import Image from 'next/image';

const Achievement = () => {
    return (
        <section className='relative'>
            <div className='container flex flex-col md:flex-row items-center gap-x-2 pt-20 pb-10'>
                <div className='md:w-1/2'>
                    <p className='uppercase flex gap-x-4 font-bold text-blue'><span><Image src={blueLine} alt='vector' /></span>Our Achievement</p>
                    <h2 className='mt-3'>Proven Excellence in <br />Fenestration & Design</h2>
                    <p className='leading-7 mt-2 mb-7'>We deliver high-quality fenestration solutions backed by decades of industry expertise. Our work reflects precision, innovation, and a commitment to client satisfaction.</p>
                </div>
                <div className='flex max-sm:w-full'>
                    <div className='border-dashed border-r border-[#b1b1b1]'>
                        <div className='p-4'>
                            <h2>15</h2>
                            <p>Years of Industry<br /> Experience</p>
                        </div>
                        <div className='border-dashed border-t border-[#b1b1b1] p-4'>
                            <h2>10+</h2>
                            <p>Leading Architects &<br /> Developers Served</p>
                        </div>
                    </div>
                    <div className=''>
                        <div className='p-4'>
                            <h2>200+</h2>
                            <p>Projects Successfully<br /> Delivered</p>
                        </div>
                        <div className='border-dashed border-t border-[#b1b1b1] p-4'>
                            <h2>18%</h2>
                            <p>Positive Feedback Rate<br /> Across Projects</p>
                        </div>
                    </div>
                </div>
            </div>
            <Image src={sketch} alt='sketch' className='absolute right-0 top-6' />
            <video src='/scene.mp4' autoPlay loop muted playsInline className='w-full h-96 sm:h-[20rem] lg:h-[30rem] xl:h-[35rem] object-cover' />

            <div className='container pt-14 pb-10'>
                <p className='uppercase flex gap-x-4 font-bold text-blue justify-center'><span><Image src={blueLine} alt='vector' /></span>Our Clients</p>
                <h2 className='text-center mt-3'>Trusted by the Best</h2>

                <div className='grid grid-cols-5 gap-x-4 mt-10'>
                    <Image src={PartnerLogo} alt='partners' className=''/>
                    <Image src={PartnerLogo} alt='partners' className=''/>
                    <Image src={PartnerLogo} alt='partners' className=''/>
                    <Image src={PartnerLogo} alt='partners' className=''/>
                    <Image src={PartnerLogo} alt='partners' className=''/>
                </div>
            </div>
        </section>
    )
}

export default Achievement
