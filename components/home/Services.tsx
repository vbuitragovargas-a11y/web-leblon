"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    name: "Ácido hialurónico",
    subtitle: "Volumen y armonía natural",
    tags: "LABIOS · OJERAS · SURCOS · MENTÓN · PÓMULOS",
    image: "/juevederm.png",
    slug: "juvederm",
  },
  {
    name: "Botox",
    subtitle: "Suavizá líneas de expresión",
    tags: "FRENTE · ENTRECEJO · PATAS DE GALLO",
    image: "/botox-2.png",
    slug: "botox",
  },
  {
    name: "Radiesse",
    subtitle: "Contorno y definición duradera",
    tags: "MANDÍBULA · PÓMULOS",
    image: "/radiesse-2.png",
    slug: "radiesse",
  },
  {
    name: "Sculptra",
    subtitle: "Recuperá el volumen perdido",
    tags: "ROSTRO · CUELLO · FLACIDEZ",
    image: "/sculptra-2.png",
    slug: "sculptra",
  },
  {
    name: "HarmonyCa",
    subtitle: "Efecto lifting sin cirugía",
    tags: "FIRMEZA · CONTORNO",
    image: "/harmonyca-2.png",
    slug: "harmonyca",
  },
  {
    name: "Profhilo",
    subtitle: "Piel hidratada y radiante",
    tags: "CALIDAD DE PIEL · LUMINOSIDAD",
    image: "/profhilo-2.png",
    slug: "profhilo",
  },
  {
    name: "Skinvive",
    subtitle: "Piel lisa, sin imperfecciones",
    tags: "POROS · TEXTURA · HIDRATACIÓN",
    image: "/skinvive-2.png",
    slug: "skinvive",
  },
];

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });

  function doScrollBy(amount: number) {
    scrollRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  }

  function onMouseDown(e: React.MouseEvent) {
    if (!scrollRef.current) return;
    setIsDragging(true);
    dragStart.current = {
      x: e.pageX - scrollRef.current.offsetLeft,
      scrollLeft: scrollRef.current.scrollLeft,
    };
  }

  function onMouseMove(e: React.MouseEvent) {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - dragStart.current.x) * 1.2;
    scrollRef.current.scrollLeft = dragStart.current.scrollLeft - walk;
  }

  function stopDrag() {
    setIsDragging(false);
  }

  return (
    <section
      id="tratamientos"
      className="relative bg-[#061a17] py-12 lg:py-16 overflow-hidden"
    >
      {/* Glow ambiental */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 60%, rgba(13,74,56,0.3) 0%, transparent 70%)",
        }}
      />

      {/* Encabezado */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.45em] text-white/30 mb-4">
              Tratamientos
            </p>
            <h2
              className="font-thin text-white leading-none tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
            >
              Lo que hacemos.
            </h2>
          </div>

          <Link
            href="/tratamientos"
            prefetch={false}
            className="text-[12px] uppercase tracking-[0.3em]
                       text-white/30 border-b border-white/10 pb-0.5
                       hover:text-white/60 hover:border-white/30
                       transition-colors duration-300 self-end sm:self-auto"
          >
            Ver todos
          </Link>
        </div>
      </div>

      {/* Carrusel */}
      <div className="relative z-10">
        {/* Fades laterales */}
        <div
          className="absolute left-0 top-0 bottom-0 w-12 md:w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #061a17, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-12 md:w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #061a17, transparent)" }}
        />

        {/* Scroll container */}
        <div
          ref={scrollRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          className={[
            "flex gap-4 overflow-x-auto scroll-smooth",
            "px-6 lg:px-12 pb-2",
            "snap-x snap-mandatory",
            "select-none",
            "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",
            isDragging ? "cursor-grabbing" : "cursor-grab",
          ].join(" ")}
        >
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/tratamientos/${s.slug}`}
              prefetch={false}
              draggable={false}
              className="flex-shrink-0 w-[260px] md:w-[290px]
                         snap-start rounded-2xl overflow-hidden
                         bg-[#0B1F1A] border border-white/[0.08]
                         flex flex-col cursor-pointer
                         transition-all duration-300 ease-out
                         hover:border-white/[0.18] hover:shadow-[0_0_28px_rgba(0,194,168,0.08)]
                         group"
            >
              {/* Imagen */}
              <div className="relative w-full h-[240px] overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.name}
                  fill
                  sizes="(max-width: 768px) 260px, 290px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F1A] via-[#0B1F1A]/20 to-transparent" />
              </div>

              {/* Texto */}
              <div className="px-5 pt-5 pb-6 flex flex-col gap-1.5">
                <h3 className="text-[15px] font-medium text-white leading-snug tracking-[-0.01em]">
                  {s.name}
                </h3>
                <p className="text-[13px] font-light leading-snug" style={{ color: "#9CA3AF" }}>
                  {s.subtitle}
                </p>
                <p className="text-[9.5px] uppercase tracking-[0.32em] mt-2" style={{ color: "rgba(255,255,255,0.22)" }}>
                  {s.tags}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Flechas de navegación */}
      <div className="relative z-10 flex justify-center gap-4 mt-6">
        <button
          onClick={() => doScrollBy(-300)}
          aria-label="Anterior"
          className="w-10 h-10 rounded-full border border-white/20
                     flex items-center justify-center
                     hover:bg-white/10 transition-colors duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M11 6l-6 6 6 6"
              stroke="white" strokeOpacity="0.5" strokeWidth="1.5"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button
          onClick={() => doScrollBy(300)}
          aria-label="Siguiente"
          className="w-10 h-10 rounded-full border border-white/20
                     flex items-center justify-center
                     hover:bg-white/10 transition-colors duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M13 6l6 6-6 6"
              stroke="white" strokeOpacity="0.5" strokeWidth="1.5"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}
