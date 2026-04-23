"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/about" },
  { label: "Servicios", href: "/services" },
  { label: "Contacto", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_1px_24px_rgba(0,0,0,0.08)] py-3"
            : "bg-white py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          <Link href="/" className="group select-none">
            <Image
              src="/Valmaz.png"
              alt="Valmaz Marketing Digital"
              width={120}
              height={60}
              priority
              className="h-[60px] w-auto object-contain"
            />
          </Link>

          {/* Desktop responsive */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ label, href }) => {
              const active = isActive(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`relative px-4 py-2 text-[13px] font-medium tracking-wide transition-colors duration-200 group ${
                      active ? "text-black" : "text-neutral-500 hover:text-black"
                    }`}
                  >
                    {label}
                    <span
                      className={`absolute bottom-1 left-4 right-4 h-[1.5px] bg-black rounded-full transition-transform duration-300 origin-left ${
                        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menú"
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-sm hover:bg-neutral-100 transition-colors"
            >
              <span className={`block w-5 h-[1.5px] bg-black transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
              <span className={`block w-5 h-[1.5px] bg-black transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-[1.5px] bg-black transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile responsive */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col justify-between transition-all duration-500 lg:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-[72px]" />

        <div className="flex-1 flex flex-col justify-center px-8">
          <ul className="space-y-1">
            {navLinks.map(({ label, href }, i) => {
              const active = isActive(href);
              return (
                <li
                  key={href}
                  className="overflow-hidden"
                  style={{ transitionDelay: menuOpen ? `${i * 50}ms` : "0ms" }}
                >
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center justify-between py-4 border-b border-neutral-100 group transition-all duration-500 ${
                      menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    }`}
                  >
                    <span className={`text-3xl font-black tracking-tight group-hover:translate-x-2 transition-transform duration-200 ${
                      active ? "text-black" : "text-neutral-400"
                    }`}>
                      {label}
                    </span>
                    <span className={`transition-colors duration-200 text-2xl ${
                      active ? "text-black" : "text-neutral-300 group-hover:text-black"
                    }`}>→</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}