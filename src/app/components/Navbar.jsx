"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "../images/logo.png";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/product" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Clients", href: "/clients" },
  { label: "Contact Us", href: "/contact", isCta: true },
];

function NavLinks({ onNavigate, register, pathname }) {
  return (
    <>
      {NAV_ITEMS.map((item) => {
        const isActiveCta = item.isCta && pathname === item.href;

        return (
          <li
            key={item.href}
            ref={(el) => !item.isCta && register(el, item.href)}
          >
            <a
              href={item.href}
              onClick={onNavigate}
              className={
                item.isCta
                  ? `border-2 rounded-full px-3 py-2 transition-colors ${
                      isActiveCta
                        ? "bg-white text-black border-white"
                        : "border-white text-white hover:bg-white hover:text-black"
                    }`
                  : "hover:opacity-80 transition-opacity"
              }
            >
              {item.label}
            </a>
          </li>
        );
      })}
    </>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lineStyle, setLineStyle] = useState({ width: 0, left: 0 });

  const itemsRef = useRef({});

  const register = (el, href) => {
    if (el) itemsRef.current[href] = el;
  };

  useEffect(() => {
    // Hide underline on Contact page
    if (pathname === "/contact") {
      setLineStyle({ width: 0, left: 0 });
      return;
    }

    const el = itemsRef.current[pathname];
    if (!el) return;

    const link = el.querySelector("a");
    const rect = link.getBoundingClientRect();
    const parentRect = el.parentElement.getBoundingClientRect();

    setLineStyle({
      width: rect.width,
      left: rect.left - parentRect.left,
    });
  }, [pathname]);

  return (
    <header className="relative z-20 w-full">
      <nav className="absolute top-0 left-0 right-0 pt-7 w-full">
        <div className="container mx-auto flex items-center justify-between">

          {/* Logo */}
          <a href="/" className="shrink-0" onClick={() => setOpen(false)}>
            <Image src={Logo} alt="IDEL Logo" width={110} height={55} priority />
          </a>

          {/* Desktop */}
          <div className="relative hidden min-[851px]:block">
            <ul className="flex gap-x-6 uppercase text-white items-center relative">
              <NavLinks
                register={register}
                onNavigate={() => {}}
                pathname={pathname}
              />
            </ul>

            {/* Active underline */}
            <span
              className="absolute bottom-[-6px] h-[2px] bg-white transition-all duration-300 ease-out"
              style={{
                width: `${lineStyle.width}px`,
                transform: `translateX(${lineStyle.left}px)`,
                opacity: lineStyle.width === 0 ? 0 : 1,
              }}
            />
          </div>

          {/* Hamburger */}
          <button
            type="button"
            className="min-[851px]:hidden inline-flex items-center justify-center p-2 rounded-md text-white"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block w-6 h-5">
              <span className={`absolute left-0 top-0 h-0.5 w-6 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`absolute left-0 top-2 h-0.5 w-6 bg-white transition-opacity ${open ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute left-0 top-4 h-0.5 w-6 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>

        {/* Mobile */}
        <div className="min-[851px]:hidden">
          {open && (
            <div className="container mx-auto mt-4 px-4 relative z-20">
              <div className="rounded-2xl border border-white/30 bg-black/40 backdrop-blur-md p-4">
                <ul className="uppercase text-white flex flex-col gap-4">
                  <NavLinks
                    onNavigate={() => setOpen(false)}
                    register={() => {}}
                    pathname={pathname}
                  />
                </ul>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
