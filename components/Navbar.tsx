"use client";

import Link from "next/link";

export default function Navbar() {

  return (
    <header
      className="fixed top-0 inset-x-0 z-50
                 bg-[#061311]/70 backdrop-blur-lg border-b border-white/[0.05]
                 transition-all duration-500"
    >
      <div className="relative max-w-6xl mx-auto pl-[20px] pr-[28px] h-16 flex items-center justify-end">

        {/* Logo + nombre — centrado óptico, independiente del CTA */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-4">
          <img
            src="/leblon_logo_clean.png"
            alt="Leblon Clinique"
            className="h-11 lg:h-12 w-auto object-contain translate-x-[2px]"
          />
          <span className="text-white/90 font-light text-xs md:text-sm tracking-[0.3em] uppercase leading-none whitespace-nowrap">
            Leblon Clinique
          </span>
        </Link>


      </div>
    </header>
  );
}
