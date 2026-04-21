"use client";

import Link from "next/link";
import { useRef, useState, useEffect, useCallback } from "react";

/* ─── Data ─────────────────────────────────────────────────────── */
const treatments = [
  {
    name: "Ácido hialurónico",
    description: "Restaurá volumen y armonía facial con resultados inmediatos y naturales.",
    tags: "LABIOS · OJERAS · PÓMULOS · MENTÓN",
    slug: "juvederm",
    orbColor: "rgba(0,194,168,1)",
    delay: 0,
  },
  {
    name: "Botox",
    description: "Suavizá líneas de expresión sin perder naturalidad. El tratamiento más pedido.",
    tags: "FRENTE · ENTRECEJO · PATAS DE GALLO",
    slug: "botox",
    orbColor: "rgba(52,211,153,1)",
    delay: 0.08,
  },
  {
    name: "Radiesse",
    description: "Contorno y definición duradera con bioestimulación de colágeno.",
    tags: "MANDÍBULA · PÓMULOS · DEFINICIÓN",
    slug: "radiesse",
    orbColor: "rgba(0,194,168,1)",
    delay: 0.16,
  },
  {
    name: "Sculptra",
    description: "Recuperá el volumen perdido de forma progresiva y completamente natural.",
    tags: "ROSTRO · CUELLO · FLACIDEZ",
    slug: "sculptra",
    orbColor: "rgba(110,231,183,1)",
    delay: 0.24,
  },
  {
    name: "HarmonyCa",
    description: "Efecto lifting sin cirugía. Firmeza y redefinición de contorno facial.",
    tags: "FIRMEZA · CONTORNO · LIFTING",
    slug: "harmonyca",
    orbColor: "rgba(0,194,168,1)",
    delay: 0.32,
  },
  {
    name: "Profhilo",
    description: "Hidratación profunda y calidad de piel mejorada desde adentro.",
    tags: "LUMINOSIDAD · HIDRATACIÓN · CALIDAD DE PIEL",
    slug: "profhilo",
    orbColor: "rgba(52,211,153,1)",
    delay: 0.40,
  },
];

/* ─── Orb placeholder ──────────────────────────────────────────── */
function PremiumOrb({ color, spinDelay }: { color: string; spinDelay: number }) {
  const rgb = color.replace("rgba(", "").replace(",1)", "");

  return (
    <div className="relative flex items-center justify-center w-full h-full">

      <div
        className="absolute animate-ambient pointer-events-none"
        style={{
          width: "220px", height: "220px", borderRadius: "50%",
          background: `radial-gradient(circle, rgba(${rgb},0.18) 0%, transparent 70%)`,
          filter: "blur(28px)",
          animationDelay: `${spinDelay}s`,
        }}
      />

      <div
        className="absolute animate-orb-spin pointer-events-none"
        style={{
          width: "116px", height: "116px", borderRadius: "50%",
          border: `1px solid rgba(${rgb},0.1)`,
          borderTopColor: `rgba(${rgb},0.3)`,
          animationDelay: `${spinDelay * 0.5}s`,
        }}
      />

      <div
        className="absolute animate-orb-spin-rev pointer-events-none"
        style={{
          width: "88px", height: "88px", borderRadius: "50%",
          border: `1px dashed rgba(${rgb},0.12)`,
          borderRightColor: `rgba(${rgb},0.25)`,
          animationDelay: `${spinDelay}s`,
        }}
      />

      <div
        className="absolute pointer-events-none"
        style={{
          width: "68px", height: "68px", borderRadius: "50%",
          border: `1px solid rgba(${rgb},0.14)`,
          background: `radial-gradient(circle, rgba(${rgb},0.04) 0%, transparent 70%)`,
        }}
      />

      <div
        className="absolute pointer-events-none"
        style={{
          width: "46px", height: "46px", borderRadius: "50%",
          border: `1px solid rgba(${rgb},0.22)`,
          background: `rgba(${rgb},0.06)`,
        }}
      />

      <div
        className="animate-orb-pulse relative z-10 pointer-events-none"
        style={{
          width: "18px", height: "18px", borderRadius: "50%",
          background: `rgba(${rgb},0.55)`,
          boxShadow: `0 0 14px rgba(${rgb},0.55), 0 0 32px rgba(${rgb},0.22), 0 0 6px rgba(${rgb},0.9)`,
          animationDelay: `${spinDelay * 0.7}s`,
        }}
      />

      {[0, 72, 144, 216, 288].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const r = 54;
        const x = Math.cos(rad) * r;
        const y = Math.sin(rad) * r;
        const opacities = [0.45, 0.25, 0.35, 0.18, 0.3];
        const sizes = [3, 2, 3, 2, 2];
        return (
          <div
            key={i}
            className="absolute pointer-events-none rounded-full animate-float-slow"
            style={{
              width: `${sizes[i]}px`, height: `${sizes[i]}px`,
              left: `calc(50% + ${x}px - ${sizes[i] / 2}px)`,
              top: `calc(50% + ${y}px - ${sizes[i] / 2}px)`,
              background: `rgba(${rgb},${opacities[i]})`,
              boxShadow: `0 0 4px rgba(${rgb},${opacities[i]})`,
              animationDelay: `${i * 0.6 + spinDelay}s`,
            }}
          />
        );
      })}

    </div>
  );
}

/* ─── Card ─────────────────────────────────────────────────────── */
function TreatmentCard({ t }: { t: (typeof treatments)[number] }) {
  const rgb = t.orbColor.replace("rgba(", "").replace(",1)", "");

  return (
    <div
      className="card-enter group relative flex flex-col rounded-2xl overflow-hidden
                 border border-white/[0.06]
                 transition-all duration-300 ease-out
                 hover:border-emerald-400/[0.26]
                 hover:shadow-[0_0_48px_rgba(0,194,168,0.09),0_0_0_1px_rgba(0,194,168,0.08)]
                 hover:scale-[1.018]"
      style={{
        animationDelay: `${t.delay}s`,
        background: "linear-gradient(160deg, rgba(8,40,28,0.96) 0%, rgba(4,18,14,0.92) 100%)",
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-px z-20"
        style={{ background: `linear-gradient(to right, transparent 10%, rgba(${rgb},0.28) 45%, rgba(${rgb},0.28) 55%, transparent 90%)` }}
      />

      <div className="relative overflow-hidden flex-shrink-0" style={{ height: "200px" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #061311 0%, #020d0b 100%)" }} />
        <div className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 70% 65% at 50% 55%, rgba(${rgb},0.08) 0%, transparent 70%)` }}
        />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 75% 70% at 50% 50%, rgba(${rgb},0.14) 0%, rgba(${rgb},0.04) 55%, transparent 75%)` }}
        />
        <div className="absolute pointer-events-none animate-ambient"
          style={{ width: "180px", height: "180px", top: "10%", left: "calc(50% - 90px)", borderRadius: "50%",
            background: `radial-gradient(circle, rgba(${rgb},0.15) 0%, transparent 70%)`,
            filter: "blur(36px)", animationDelay: `${t.delay}s` }}
        />
        <div className="absolute pointer-events-none"
          style={{ width: "120px", height: "80px", top: "20%", left: "calc(50% - 20px)", borderRadius: "50%",
            background: `radial-gradient(circle, rgba(${rgb},0.1) 0%, transparent 70%)`,
            filter: "blur(24px)", opacity: 0.6 }}
        />
        <div className="absolute inset-0 opacity-[0.022] pointer-events-none"
          style={{ backgroundImage: `linear-gradient(rgba(0,194,168,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,194,168,1) 1px, transparent 1px)`, backgroundSize: "32px 32px" }}
        />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 bottom-0 animate-light-pass"
            style={{ width: "60px", background: `linear-gradient(90deg, transparent 0%, rgba(${rgb},0.05) 50%, transparent 100%)`,
              animationDelay: `${t.delay + 1.5}s`, animationDuration: `${5 + t.delay * 0.4}s` }}
          />
        </div>
        <div className="absolute inset-0 animate-float" style={{ animationDelay: `${t.delay}s` }}>
          <PremiumOrb color={t.orbColor} spinDelay={t.delay} />
        </div>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 42%, rgba(2,13,11,0.7) 100%)" }}
        />
        <div className="absolute top-0 left-0 right-0 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: `linear-gradient(to bottom, rgba(${rgb},0.06) 0%, transparent 100%)` }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-14 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(8,40,28,0.98))" }}
        />
      </div>

      <div className="flex flex-col flex-1 px-6 pt-5 pb-6">
        <h3 className="text-[16px] font-medium text-white leading-snug tracking-[-0.01em] mb-3
                       group-hover:text-emerald-50 transition-colors duration-300">
          {t.name}
        </h3>
        <div className="w-full h-px mb-3" style={{ background: "rgba(255,255,255,0.06)" }} />
        <p className="text-[13px] font-light leading-relaxed mb-4 flex-1" style={{ color: "rgba(255,255,255,0.40)" }}>
          {t.description}
        </p>
        <p className="text-[9px] uppercase tracking-[0.38em] mb-5" style={{ color: "rgba(255,255,255,0.18)" }}>
          {t.tags}
        </p>
        <a href="https://wa.me/TODO_WHATSAPP" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 self-start
                     text-[10.5px] uppercase tracking-[0.24em] font-medium
                     text-emerald-400/45 hover:text-emerald-400 transition-colors duration-200">
          Consultar
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  );
}

/* ─── Mobile carousel ──────────────────────────────────────────── */
function MobileCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActive = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const center = el.scrollLeft + el.clientWidth / 2;
    let closest = 0;
    let minDist = Infinity;
    (Array.from(el.children) as HTMLElement[]).forEach((card, i) => {
      const dist = Math.abs(card.offsetLeft + card.offsetWidth / 2 - center);
      if (dist < minDist) { minDist = dist; closest = i; }
    });
    setActiveIndex(closest);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateActive, { passive: true });
    updateActive();
    return () => el.removeEventListener("scroll", updateActive);
  }, [updateActive]);

  /* card width = 66vw → side cards peek ~17vw each */
  const CARD_W = "66vw";
  const SIDE_PAD = "calc((100vw - 66vw) / 2)";

  return (
    <div className="relative md:hidden">

      {/* Edge fades — stronger for coverflow depth */}
      <div className="pointer-events-none absolute left-0 inset-y-0 w-16 z-20
                      bg-gradient-to-r from-[#061311] via-[#061311]/70 to-transparent" />
      <div className="pointer-events-none absolute right-0 inset-y-0 w-16 z-20
                      bg-gradient-to-l from-[#061311] via-[#061311]/70 to-transparent" />

      {/* Scroll track */}
      <div
        ref={scrollRef}
        className="flex items-center overflow-x-auto snap-x snap-mandatory gap-6 pb-4"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          paddingLeft: SIDE_PAD,
          paddingRight: SIDE_PAD,
        }}
      >
        {treatments.map((t, i) => {
          const isActive = i === activeIndex;
          return (
            <div
              key={t.slug}
              className="flex-shrink-0 snap-center transition-all duration-300 ease-out"
              style={{
                width: CARD_W,
                transform: isActive ? "scale(1)" : "scale(0.88)",
                opacity: isActive ? 1 : 0.45,
                filter: isActive ? "none" : "blur(1px)",
                zIndex: isActive ? 10 : 0,
              }}
            >
              <TreatmentCard t={t} />
            </div>
          );
        })}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-1.5 mt-3">
        {treatments.map((_, i) => (
          <div
            key={i}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === activeIndex ? "18px" : "5px",
              height: "5px",
              background: i === activeIndex ? "rgba(52,211,153,0.85)" : "rgba(255,255,255,0.15)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Section ──────────────────────────────────────────────────── */
export default function TreatmentsShowcase() {
  return (
    <section
      id="tratamientos"
      className="relative bg-[#061311] py-20 lg:py-28 overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% 55%, rgba(13,74,56,0.22) 0%, transparent 70%)" }}
      />

      {/* Header */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 mb-14">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.45em] text-white/28 mb-4 font-light">
              Tratamientos
            </p>
            <h2 className="font-thin text-white leading-none tracking-tight"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)" }}>
              Lo que hacemos.
            </h2>
            <p className="mt-3 text-[13px] font-light text-white/35 max-w-[40ch] leading-relaxed">
              Cada procedimiento es diseñado para tu anatomía. Sin excesos, sin plantillas.
            </p>
          </div>
          <Link
            href="/tratamientos"
            prefetch={false}
            className="self-end sm:self-auto text-[11px] uppercase tracking-[0.32em]
                       text-white/28 border-b border-white/10 pb-0.5
                       hover:text-white/55 hover:border-white/25
                       transition-colors duration-300 whitespace-nowrap"
          >
            Ver todos los tratamientos
          </Link>
        </div>
      </div>

      {/* Mobile carousel */}
      <div className="relative z-10">
        <MobileCarousel />
      </div>

      {/* Desktop grid */}
      <div className="relative z-10 hidden md:block max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 gap-5">
          {treatments.map((t) => (
            <TreatmentCard key={t.slug} t={t} />
          ))}
        </div>
      </div>

    </section>
  );
}
