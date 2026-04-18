"use client";

import { useEffect, useRef, useState } from "react";

const items = [
  {
    year: "2009",
    title: "Médica",
    desc: "Universidad de Medicina y Farmacia Carol Davila, Bucarest (Rumania)",
  },
  {
    year: "2009–2011",
    title: "Cirugía General",
    desc: "Residencia en Hospital SCUB, Bucarest (Rumania)",
  },
  {
    year: "2011–2016",
    title: "Cirugía Plástica y Microcirugía",
    desc: "Especialización en Bucarest (Rumania)",
  },
  {
    year: "2012–2015",
    title: "Formación internacional",
    desc: "Becas en Estados Unidos (Miami, Michigan) y Francia (París)",
  },
  {
    year: "2016–2017",
    title: "Subespecialización",
    desc: "Cirugía plástica y reconstrucción mamaria en Roma (Italia)",
  },
  {
    year: "2017",
    title: "Experiencia en Argentina",
    desc: "Formación en cirugía plástica en Buenos Aires",
  },
  {
    year: "2018–2021",
    title: "Validación y práctica",
    desc: "Auditoría médica + revalidación del título en Argentina",
  },
  {
    year: "2021–2024",
    title: "Especialización avanzada",
    desc: "Cirugía plástica infantil y maxilofacial – Hospital Garrahan",
  },
  {
    year: "2024–2026",
    title: "MBA en Salud",
    desc: "Universidad de San Andrés, Argentina",
  },
];

export default function Timeline() {
  const [lineVisible, setLineVisible]   = useState(false);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const lineRef  = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Observer — activa la línea cuando la sección entra al viewport
    const lineObs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setLineVisible(true); },
      { threshold: 0.05 }
    );
    if (lineRef.current) lineObs.observe(lineRef.current);

    // Observer — cada item aparece al entrar al viewport
    const itemObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.idx);
            setVisibleItems((prev) => new Set([...prev, idx]));
          }
        });
      },
      { threshold: 0.2 }
    );
    itemRefs.current.forEach((ref) => { if (ref) itemObs.observe(ref); });

    return () => {
      lineObs.disconnect();
      itemObs.disconnect();
    };
  }, []);

  return (
    <section className="relative py-16 md:py-20 bg-[#061311] overflow-hidden">

      {/* Glow ambiental animado */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[800px] h-[800px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(0,194,168,0.08) 0%, transparent 70%)",
          animation: "pulse-slow 10s ease-in-out infinite",
        }}
      />

      {/* Glow superior */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[260px] pointer-events-none opacity-30"
        style={{
          background: "radial-gradient(ellipse at top, rgba(0,194,168,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Dots decorativos de fondo — muy sutiles */}
      {[
        { top: "18%", left: "8%"  },
        { top: "42%", left: "92%" },
        { top: "70%", left: "5%"  },
        { top: "85%", left: "88%" },
      ].map((pos, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full pointer-events-none"
          style={{
            top: pos.top, left: pos.left,
            background: "rgba(0,194,168,0.25)",
            boxShadow: "0 0 8px rgba(0,194,168,0.2)",
            animation: `pulse-slow ${7 + i * 1.2}s ease-in-out infinite`,
            animationDelay: `${i * 0.8}s`,
          }}
        />
      ))}

      {/* ── Encabezado ── */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 mb-12 text-center">
        <p className="text-[10px] uppercase tracking-[0.55em] text-white/20 mb-5">
          Trayectoria
        </p>
        <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-center mb-6">
          <span className="block text-white">
            Formación y trayectoria
          </span>
          <span className="block text-[#00c2a8] italic font-medium">
            internacional.
          </span>
        </h2>

        {/* Línea decorativa */}
        <div className="mx-auto mt-5 mb-4 h-[1.5px] w-24 bg-gradient-to-r from-[#00c2a8] to-transparent rounded-full" />

        <p className="text-white/35 text-sm max-w-sm mx-auto leading-relaxed font-light">
          Más de 15 años de formación en Europa, Estados Unidos y Argentina
        </p>
      </div>

      {/* ── Timeline ── */}
      <div ref={lineRef} className="relative z-10 max-w-4xl mx-auto px-6">

        {/* Línea central vertical */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px overflow-hidden"
             style={{ transform: "translateX(-50%)" }}>
          <div
            style={{
              height:          "100%",
              transformOrigin: "top",
              transform:       lineVisible ? "scaleY(1)" : "scaleY(0)",
              transition:      "transform 2.4s cubic-bezier(0.16,1,0.3,1)",
              background:      "linear-gradient(to bottom, transparent 0%, rgba(0,194,168,0.5) 15%, rgba(0,194,168,0.3) 85%, transparent 100%)",
            }}
          />
        </div>

        {/* Items */}
        {items.map((item, i) => {
          const isLeft = i % 2 === 0;
          const show   = visibleItems.has(i);

          return (
            <div
              key={i}
              ref={(el) => { itemRefs.current[i] = el; }}
              data-idx={i}
              className="relative flex items-center"
              style={{ minHeight: "76px", paddingTop: "10px", paddingBottom: "10px" }}
            >
              {/* Dot */}
              <div
                className="absolute left-4 md:left-1/2 z-10"
                style={{ transform: "translateX(-50%)" }}
              >
                <div
                  style={{
                    width:          "10px",
                    height:         "10px",
                    borderRadius:   "50%",
                    background:     "#00c2a8",
                    opacity:        show ? 1 : 0,
                    transform:      show ? "scale(1)" : "scale(0)",
                    transition:     `opacity 0.4s ease ${i * 0.1}s, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s`,
                    boxShadow:      show ? "0 0 18px rgba(0,194,168,0.8), 0 0 4px rgba(0,194,168,1)" : "none",
                  }}
                />
              </div>

              {/* Tarjeta de contenido — wrapper animación */}
              <div
                className={[
                  "ml-10 md:ml-0 group/item cursor-default",
                  "md:w-[calc(50%-36px)]",
                  isLeft
                    ? "md:mr-auto md:pr-10 md:text-right"
                    : "md:ml-auto md:pl-10 md:text-left",
                ].join(" ")}
                style={{
                  opacity:    show ? 1 : 0,
                  transform:  show ? "translateY(0)" : "translateY(18px)",
                  transition: `opacity 0.6s ease ${i * 0.1 + 0.08}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.1 + 0.08}s`,
                }}
              >
                {/* Inner — hover scale + glow */}
                <div className="transition-all duration-300 ease-out group-hover/item:scale-[1.03]"
                     style={{ transformOrigin: isLeft ? "right center" : "left center" }}>

                  {/* Año */}
                  <p
                    className="text-[10px] font-medium tracking-[0.28em] uppercase mb-1.5"
                    style={{ color: "#00c2a8" }}
                  >
                    {item.year}
                  </p>

                  {/* Título */}
                  <h3
                    className="font-light text-white leading-snug mb-1 transition-colors duration-300 group-hover/item:text-[#00c2a8]"
                    style={{ fontSize: "clamp(1rem, 1.4vw, 1.25rem)" }}
                  >
                    {item.title}
                  </h3>

                  {/* Descripción */}
                  <p className="text-white/40 text-[13px] leading-relaxed font-light transition-colors duration-300 group-hover/item:text-white/60">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
