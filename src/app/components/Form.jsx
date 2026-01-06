import React from 'react';
import FormImage from "../../../src/app/images/form-img.webp";
import Image from 'next/image';

const Form = () => {
    return (
        <section className="group">
            <div className="container flex items-stretch justify-between gap-x-8 py-14">

                {/* IMAGE WRAPPER (prevents size change) */}
                <div className="w-1/2 overflow-hidden rounded-xl">
                    <Image
                        src={FormImage}
                        alt="form image"
                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                    />
                </div>

                {/* FORM */}
                <form className="bg-blue px-10 py-14 rounded-xl w-1/2">
                    <h2 className="text-white">
                        Have Questions? <br /> Get in touch
                    </h2>

                    <div className="space-y-4 mt-5">
                        <input type="text" placeholder="Full Name" className="form-input" />
                        <input type="email" placeholder="Email Address" className="form-input" />
                        <input type="tel" placeholder="Phone Number" className="form-input" />
                        <textarea placeholder="Your Message" className="form-input h-32"></textarea>
                    </div>

                    <button className="bg-[#4B5AAA] rounded-lg uppercase w-full py-3 mt-6 text-white">
                        Send Message
                    </button>
                </form>

            </div>
        </section>
    );
};

export default Form;
