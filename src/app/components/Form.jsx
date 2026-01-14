"use client";

import { useState } from "react";
import Image from "next/image";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import FormImage from "../../../src/app/images/form-img.webp";

const Form = () => {
  const { width, height } = useWindowSize();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({
    open: false,
    type: "", // "success" | "error"
    message: "",
  });

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
        "https://script.google.com/macros/s/AKfycbyP6DPJymxnKw79xjvpPMOaP1blfANKRmlhBB_fL45J6muKd5tD8SyjL9bBfM6AltCVLA/exec",
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
    <>
      {/* CONFETTI */}
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

      {/* FORM */}
      <section className="group">
        <div className="container flex flex-col sm:flex-row gap-x-8 py-14">
          {/* IMAGE */}
          <div className="sm:w-1/2 overflow-hidden rounded-xl">
            <Image
              src={FormImage}
              alt="form image"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* FORM CONTENT */}
          <form
            onSubmit={handleSubmit}
            className="bg-blue px-4 py-6 sm:px-10 sm:py-14 rounded-xl sm:w-1/2 mt-7 sm:mt-0"
          >
            <h2 className="text-white">
              Have Questions? <br /> Get in touch
            </h2>

            <div className="space-y-4 mt-5">
              <input
                type="text"
                placeholder="Full Name"
                value={form.fullName}
                onChange={(e) => updateField("fullName", e.target.value)}
                className="form-input"
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
                className="form-input"
                required
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                className="form-input"
                required
              />

              <input
                type="text"
                placeholder="Subject"
                value={form.subject}
                onChange={(e) => updateField("subject", e.target.value)}
                className="form-input"
              />

              <textarea
                placeholder="Your Message"
                value={form.message}
                onChange={(e) => updateField("message", e.target.value)}
                className="form-input h-32"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-[#4B5AAA] rounded-lg uppercase w-full py-3 mt-6 text-white disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Form;
