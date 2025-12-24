import React from 'react';
import blueLine from "../images/blue-line.svg";
import Image from 'next/image';
import visit from "../images/maps.png";
import call from '../images/call.png';
import mail from '../images/mail.png';

const page = () => {
    return (
        <main>
            <div className='contact-hero text-white'>
                <div className='container pt-44 pb-32'>
                    <h2>Let’s Build Something <br />Exceptional Together</h2>
                </div>
            </div>

            <div className='bg-sky py-14'>
                <p className='uppercase flex gap-x-4 font-bold text-blue items-center justify-center'>
                    <span>
                        <Image src={blueLine} alt='vector' />
                    </span>
                    Get In Touch
                </p>
                <h2 className='text-center mt-4'>
                    Have Any Questions?
                </h2>
                <div className='container flex mt-14 gap-x-14'>
                    <div className='bg-white w-4/12 rounded-2xl'>
                        <div className='flex flex-col gap-y-2 border-b-2 border-gray-200 py-8 pl-10'>
                            <Image src={visit} className='w-12 h-14' alt='map-icon' />
                            <small className='text-2xl font-semibold'>Visit Us</small>
                            <small className='text-lg'>M/s. Indecomal Exports LLP. Ram House 4 - Gaiwadi Industrial Estate, Goregaon West, Mumbai - 400 104</small>
                        </div>
                        <div className='flex flex-col gap-y-2 border-b-2 border-gray-200 py-8 pl-10'>
                            <Image src={call} className='w-12 h-12' alt='map-icon' />
                            <small className='text-2xl font-semibold'>Call Us</small>
                            <p>+91 98192 47835</p>
                        </div>
                        <div className='flex flex-col gap-y-2 py-8 pl-10'>
                            <Image src={mail} className='w-14 h-10' alt='map-icon' />
                            <small className='text-2xl font-semibold'>Mail Us</small>
                            <p>info@idelindia.com</p>
                        </div>
                    </div>
                    <form className='bg-white w-8/12 rounded-2xl p-10'>

                        <label className='text-lg font-semibold'>Name</label>
                        <div className='flex gap-x-8'>
                            <input type='text' placeholder='First Name' className='contact-form-input' />
                            <input type='text' placeholder='Last Name' className='contact-form-input' />
                        </div>
                        <div className='flex gap-x-8 mt-4'>
                            <div className='w-full'>
                                <label className='text-lg font-semibold'>Email</label>
                                <input type='email' placeholder='Your Email' className='contact-form-input' />
                            </div>
                            <div className='w-full'>
                                <label className='text-lg font-semibold'>Phone</label>
                                <input type='tel' placeholder='Phone Number' className='contact-form-input' />
                            </div>
                        </div>

                        <label className='text-lg font-semibold mt-4 inline-block'>Subject</label>
                        <input type='text' placeholder='Last Name' className='contact-form-input' />

                        <label className='text-lg font-semibold mt-4 inline-block'>Message</label>
                        <textarea placeholder='Let us know about your project' className='contact-form-input h-32'></textarea>

                        <button type='submit' className='bg-blue rounded-md text-white w-[35%] mt-4 py-4'>SUBMIT MESSAGE</button>
                    </form>
                </div>
                <div className='container mt-10'>
                <iframe
                className='w-full h-96'
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3755.5050008719854!2d72.84318814473467!3d19.17146467119438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7b955555555%3A0xebcc25028218126e!2sIDEL%20India!5e0!3m2!1sen!2sin!4v1766252606456!5m2!1sen!2sin"></iframe>
                </div>
            </div>
        </main>
    )
}

export default page
