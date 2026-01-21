"use client";

import React, { useState } from "react";
import blueLine from "../images/blue-line.svg";
import Image from "next/image";
import visit from "../images/maps.png";
import call from "../images/call.png";
import mail from "../images/mail.png";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import banner from "../images/contact-banner.webp";

const page = () => {

    const { width, height } = useWindowSize();

    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [modal, setModal] = useState({
        open: false,
        type: "", // "success" | "error"
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const updateField = (name, value) => {
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const closeModal = () => {
        setModal({ open: false, type: "", message: "" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.fullName || !form.email || !form.phone) {
            setModal({
                open: true,
                type: "error",
                message: "Please fill required fields: Name, Email, Phone.",
            });
            return;
        }

        setLoading(true);

        try {
            const body = new FormData();
            body.append("fullName", form.fullName);
            body.append("email", form.email);
            body.append("phone", form.phone);
            body.append("subject", form.subject);
            body.append("message", form.message);
            body.append("submittedAt", new Date().toISOString());

            const res = await fetch(
                "https://script.google.com/macros/s/AKfycbygzKcoJqKjI4-5mm4oEkAo_TKEfcX6ClDshK0uPImzMqnbHTCsgmpMub_uUH2BtpnAOQ/exec",
                {
                    method: "POST",
                    body,
                }
            );

            const data = await res.json();

            if (!data.ok) {
                throw new Error(data.error || "Submission failed");
            }

            setForm({
                fullName: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            });

            setModal({
                open: true,
                type: "success",
                message: "Thanks! Your message has been submitted successfully.",
            });

        } catch (err) {
            setModal({
                open: true,
                type: "error",
                message: err.message || "Something went wrong. Please try again.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <main>

            {modal.open && modal.type === "success" && width > 0 && height > 0 && (
                <Confetti
                    width={width}
                    height={height}
                    numberOfPieces={300}
                    gravity={0.25}
                    recycle={false}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        zIndex: 60,
                    }}
                />
            )}

            {/* MODAL */}
            {modal.open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
                    <div className="bg-blue text-white rounded-xl p-8 w-[90%] max-w-md text-center">
                        <h3 className="text-xl font-semibold mb-4">
                            {modal.type === "success" ? "Success" : "Error"}
                        </h3>

                        <p className="mb-6">{modal.message}</p>

                        <button
                            onClick={closeModal}
                            className="bg-white text-blue px-6 py-2 rounded-lg font-semibold"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

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
                    <h2>Let’s Frame <br />What’s Next, Together.</h2>
                </div>
            </div>

            <div className="bg-sky py-14">
                <p className="uppercase flex gap-x-4 font-bold text-blue items-center justify-center">
                    <span>
                        <Image src={blueLine} alt="vector" />
                    </span>
                    Get In Touch
                </p>

                <h2 className="text-center mt-4">Have Any Questions?</h2>

                <div className="container flex flex-col sm:flex-row mt-14 gap-x-14">
                    <div className="bg-white sm:w-4/12 rounded-2xl">
                        <div className="flex flex-col gap-y-2 sm:border-b-2 border-gray-200 py-8 px-5 sm:px-0 sm:pl-10">
                            <Image src={visit} className="w-12 h-14 mx-auto sm:mx-0" alt="map-icon" />
                            <small className="text-xl sm:text-2xl font-semibold">Registered Office</small>
                            <small className="text-lg">
                                M/s. Indecomal Exports LLP. Ram House 4 - Gaiwadi Industrial Estate,
                                Goregaon West, Mumbai - 400 104
                            </small>
                        </div>

                        <div className="hidden sm:flex flex-col gap-y-2 sm:border-b-2 border-gray-200 py-8 pl-10">
                            <Image src={call} className="w-12 h-12" alt="call-icon" />
                            <small className="text-2xl font-semibold">Call Us</small>
                            <p><a
                                href="tel:+919819247835"
                            >
                                +91 9819247835
                            </a></p>
                        </div>

                        <div className="hidden sm:flex flex-col gap-y-2 py-8 pl-10">
                            <Image src={mail} className="w-14 h-10" alt="mail-icon" />
                            <small className="text-2xl font-semibold">Mail Us</small>
                            <p> <a
                                href="mailto:info@idelindia.com"
                            >
                                info@idelindia.com
                            </a></p>
                        </div>
                    </div>

                    {/* FORM */}
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white sm:w-8/12 rounded-2xl mt-5 sm:mt-0 p-5 sm:p-10"
                    >
                        <label className="text-lg font-semibold">Name</label>
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="contact-form-input"
                            value={form.fullName}
                            onChange={(e) => updateField("fullName", e.target.value)}
                            required
                        />

                        <div className="flex gap-x-3 sm:gap-x-8 mt-4">
                            <div className="w-full">
                                <label className="text-lg font-semibold">Email</label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="contact-form-input"
                                    value={form.email}
                                    onChange={(e) => updateField("email", e.target.value)}
                                    required
                                />
                            </div>

                            <div className="w-full">
                                <label className="text-lg font-semibold">Phone</label>
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="contact-form-input"
                                    value={form.phone}
                                    onChange={(e) => updateField("phone", e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <label className="text-lg font-semibold mt-4 inline-block">Location</label>
                        <input
                            type="text"
                            placeholder="Location"
                            className="contact-form-input"
                            value={form.subject}
                            onChange={(e) => updateField("subject", e.target.value)}
                        />

                        <label className="text-lg font-semibold mt-4 inline-block">Message</label>
                        <textarea
                            placeholder="Let us know about your project"
                            className="contact-form-input h-32"
                            value={form.message}
                            onChange={(e) => updateField("message", e.target.value)}
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-blue rounded-md text-white w-full sm:w-[35%] mt-4 py-4 disabled:opacity-60"
                        >
                            {loading ? "SENDING..." : "SUBMIT MESSAGE"}
                        </button>
                    </form>
                </div>

                <div className="container mt-10">
                    <iframe
                        className="w-full h-96"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3755.5050008719854!2d72.84318814473467!3d19.17146467119438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7b955555555%3A0xebcc25028218126e!2sIDEL%20India!5e0!3m2!1sen!2sin!4v1766252606456!5m2!1sen!2sin"
                    />
                </div>
            </div>
        </main>
    );
};

export default page;
