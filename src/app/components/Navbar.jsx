"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../images/logo.png";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Clients", href: "/clients" },
  { label: "Contact Us", href: "/contact", isCta: true },
];

function NavLinks({ onNavigate }) {
  return (
    <>
      {NAV_ITEMS.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            onClick={onNavigate}
            className={
              item.isCta
                ? "border-2 border-white rounded-full px-3 py-2 hover:bg-white hover:text-black transition-colors"
                : "hover:opacity-80 transition-opacity"
            }
          >
            {item.label}
          </a>
        </li>
      ))}
    </>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative w-full">
      <nav className="absolute top-0 left-0 right-0 pt-7 w-full">
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Logo */}
          <a href="/" className="shrink-0" onClick={() => setOpen(false)}>
            <Image src={Logo} alt="IDEL Logo" width={110} height={55} priority />
          </a>

          {/* Desktop ( > 850px ) */}
          <ul className="hidden min-[851px]:flex gap-x-6 uppercase text-white items-center">
            <NavLinks onNavigate={() => {}} />
          </ul>

          {/* Hamburger ( <= 850px ) */}
          <button
            type="button"
            className="min-[851px]:hidden inline-flex items-center justify-center p-2 rounded-md text-white"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block w-6 h-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-6 bg-white transition-transform duration-200 ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-2 h-0.5 w-6 bg-white transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-4 h-0.5 w-6 bg-white transition-transform duration-200 ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {/* Mobile Panel ( <= 850px ) */}
        <div className="min-[851px]:hidden">
          {open && (
            <div className="container mx-auto mt-4 px-4 relative z-20">
              <div className="rounded-2xl border border-white/30 bg-black/40 backdrop-blur-md p-4">
                <ul className="uppercase text-white flex flex-col gap-4">
                  <NavLinks onNavigate={() => setOpen(false)} />
                </ul>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
