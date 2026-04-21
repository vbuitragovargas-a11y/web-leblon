"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const WA = "https://wa.me/TODO_WHATSAPP";
const WA_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

/* ── Keyframes ──────────────────────────────────────────────────── */
const KEYFRAMES = `
  @keyframes particleDrift {
    0%   { transform: translateY(0px);   opacity: 0;    }
    18%  { opacity: 0.35; }
    60%  { transform: translateY(-44px); opacity: 0.20; }
    100% { transform: translateY(-80px); opacity: 0;    }
  }
  @keyframes hotspotPulse {
    0%   { transform: translate(-50%, -50%) scale(1);    box-shadow: 0 0 20px rgba(0,194,168,0.6);      opacity: 0.82; }
    50%  { transform: translate(-50%, -50%) scale(1.22); box-shadow: 0 0 30px 6px rgba(0,194,168,0.78); opacity: 1;    }
    100% { transform: translate(-50%, -50%) scale(1);    box-shadow: 0 0 20px rgba(0,194,168,0.6);      opacity: 0.82; }
  }
  @keyframes panelFadeIn {
    from { opacity: 0; transform: translateY(12px) scale(0.985); }
    to   { opacity: 1; transform: translateY(0)    scale(1);     }
  }
  @keyframes itemFadeIn {
    from { opacity: 0; transform: translateY(5px); }
    to   { opacity: 1; transform: translateY(0);   }
  }
  @keyframes dotEnter {
    from { opacity: 0; transform: translate(-50%,-50%) scale(0.2); }
    to   { opacity: 1; transform: translate(-50%,-50%) scale(1);   }
  }
  @keyframes arrowFloat {
    0%, 100% { transform: translateY(0px);  }
    50%       { transform: translateY(4px);  }
  }
  @keyframes hintAppear {
    0%   { opacity: 0; transform: translateY(6px);  }
    12%  { opacity: 1; transform: translateY(0);    }
    78%  { opacity: 1; transform: translateY(0);    }
    100% { opacity: 0; transform: translateY(-4px); }
  }
  @keyframes zoneActivate {
    0%   { transform: translate(-50%, -50%) scale(0.35); opacity: 0.65; }
    100% { transform: translate(-50%, -50%) scale(3.2);  opacity: 0;    }
  }
  @keyframes zoneActivate2 {
    0%   { transform: translate(-50%, -50%) scale(0.35); opacity: 0.40; }
    100% { transform: translate(-50%, -50%) scale(2.6);  opacity: 0;    }
  }
  @keyframes zoneGlowPulse {
    0%, 100% { transform: translate(-50%, -50%) scale(1);    opacity: 0.72; }
    50%       { transform: translate(-50%, -50%) scale(1.12); opacity: 1;   }
  }
`;

/* ── treatmentsData ─────────────────────────────────────────────── */
const ZONES: Record<string, { category: string; title: string; items: { name: string; description: string }[] }> = {
  ojos: {
    category: "REGIÓN PERIOCULAR",
    title:    "Ojos",
    items: [
      { name: "Ácido hialurónico",      description: "restaura volumen en ojeras y mejora el aspecto cansado" },
      { name: "Skinboosters / Skinvive", description: "hidratan y mejoran la coloración de la ojera" },
      { name: "Bioestimuladores",        description: "mejoran arrugas perioculares cuando la toxina no es suficiente" },
      { name: "Neuromoduladores",        description: "suavizan patas de gallo y arrugas dinámicas" },
      { name: "Foxy eyes",               description: "eleva la cola de la ceja generando efecto lifting" },
      { name: "Blefaroplastia",          description: "corrige exceso de piel y bolsas en párpados" },
    ],
  },
  cabello: {
  category: "CUERO CABELLUDO",
  title: "Cabello",
  items: [
    {
      name: "Bioestimulación capilar",
      description: "estimula el folículo piloso mejorando densidad y grosor del cabello"
    },
    {
      name: "Exosomas",
      description: "favorecen la regeneración celular y fortalecen el crecimiento capilar"
    },
    {
      name: "PRP",
      description: "utiliza factores de crecimiento para mejorar la calidad y vitalidad del cabello"
    }
  ]
},
  nariz: {
    category: "REGIÓN NASAL",
    title:    "Nariz",
    items: [
      { name: "Ácido hialurónico", description: "corrige dorso y mejora el perfil sin cirugía" },
      { name: "Neuromoduladores",  description: "elevan la punta nasal al sonreír" },
    ],
  },
  orejas: {
    category: "REGIÓN AURICULAR",
    title:    "Orejas",
    items: [
      { name: "Otoplastia",               description: "corrige orejas prominentes y asimetrías" },
      { name: "Reconstrucción de lóbulo", description: "repara lóbulos rasgados o deformados" },
    ],
  },
  labios: {
    category: "LABIOS / SONRISA",
    title:    "Labios",
    items: [
      { name: "Ácido hialurónico", description: "mejora volumen, forma e hidratación" },
      { name: "Neuromoduladores",  description: "corrigen sonrisa gingival" },
      { name: "AH / toxina",       description: "suavizan arrugas peribucales (código de barras)" },
    ],
  },
  pomulos: {
    category: "REGIÓN CIGOMÁTICA",
    title:    "Pómulos",
    items: [
      { name: "Ácido hialurónico", description: "aporta volumen y efecto lifting" },
      { name: "HarmonyCa",         description: "volumen inmediato + bioestimulación de colágeno" },
      { name: "Radiesse",          description: "mejora firmeza y calidad de piel" },
      { name: "Sculptra",          description: "regeneración progresiva con efecto tensor" },
    ],
  },
  mandibula: {
    category: "CONTORNO FACIAL",
    title:    "Mandíbula",
    items: [
      { name: "Ácido hialurónico", description: "define el contorno mandibular" },
      { name: "HarmonyCa",         description: "estructura y estimula colágeno" },
      { name: "Radiesse",          description: "aporta firmeza y efecto tensor" },
    ],
  },
  surcos: {
    category: "SURCOS NASOGENIANOS",
    title:    "Surcos",
    items: [
      { name: "Ácido hialurónico", description: "reposiciona estructura sin sobrecargar el surco" },
      { name: "Sculptra",          description: "genera efecto tensor desde puntos de anclaje" },
    ],
  },
  menton: {
    category: "REGIÓN MENTONIANA",
    title:    "Mentón",
    items: [
      { name: "Ácido hialurónico", description: "define y proyecta el mentón sin cirugía" },
      { name: "Botox",             description: "suaviza el mentón en piel de naranja y relaja el orbicular" },
    ],
  },
  manos: {
    category: "CORPORAL",
    title:    "Manos",
    items: [
      { name: "Ácido hialurónico", description: "restaura volumen y rejuvenece el dorso de la mano" },
      { name: "Bioestimuladores",  description: "mejoran calidad de piel, firmeza y luminosidad" },
    ],
  },
  cuello: {
    category: "REGIÓN CERVICAL",
    title:    "Cuello",
    items: [
      { name: "Neuromoduladores", description: "relajan bandas platismales" },
      { name: "Bioestimuladores", description: "mejoran flacidez y calidad de piel" },
    ],
  },
  frente: {
    category: "EXPRESIÓN",
    title:    "Frente",
    items: [
      { name: "Neuromoduladores", description: "suavizan arrugas dinámicas y previenen su marcación" },
      { name: "Full face",        description: "armoniza la expresión facial de forma global" },
    ],
  },
  escote: {
    category: "CORPORAL",
    title:    "Escote",
    items: [
      { name: "Bioestimuladores",        description: "mejoran flacidez, textura y calidad de piel" },
      { name: "Skinboosters / Skinvive", description: "hidratan en profundidad y mejoran luminosidad" },
      { name: "Exosomas / Mesoterapia",  description: "potencian regeneración y mejoran la función cutánea" },
    ],
  },
  hombros: {
    category: "CORPORAL",
    title:    "Hombros",
    items: [
      { name: "Bioestimuladores", description: "mejoran firmeza y calidad de piel en la zona" },
      { name: "Neuromoduladores", description: "pueden relajar el trapecio en casos indicados" },
    ],
  },
  brazos: {
    category: "CORPORAL",
    title:    "Brazos",
    items: [
      { name: "Bioestimuladores",    description: "reafirman la piel y mejoran la flacidez" },
      { name: "Radiesse / Sculptra", description: "estimulan colágeno y mejoran textura y firmeza" },
    ],
  },
  abdomen: {
    category: "CORPORAL",
    title:    "Abdomen",
    items: [
      { name: "Bioestimuladores",    description: "mejoran flacidez y calidad de piel" },
      { name: "Radiesse / Sculptra", description: "estimulan colágeno y mejoran firmeza" },
      { name: "Tecnología láser",    description: "reduce grasa localizada y mejora contorno corporal" },
    ],
  },
  muslos: {
    category: "CORPORAL",
    title:    "Muslos",
    items: [
      { name: "Bioestimuladores",    description: "mejoran firmeza, textura y calidad de piel" },
      { name: "Radiesse / Sculptra", description: "reafirman la piel de forma progresiva" },
    ],
  },
  flancos: {
    category: "CORPORAL",
    title:    "Flancos",
    items: [
      { name: "Tecnología láser",  description: "reduce adiposidad localizada en la cintura" },
      { name: "Bioestimuladores",  description: "mejoran la calidad de piel cuando hay flacidez asociada" },
    ],
  },
  gluteos: {
    category: "CORPORAL",
    title:    "Glúteos",
    items: [
      { name: "Bioestimuladores",    description: "mejoran volumen, proyección y firmeza sin cirugía" },
      { name: "Sculptra / Radiesse", description: "estimulan colágeno y optimizan el contorno" },
    ],
  },
  entrepierna: {
    category: "CORPORAL",
    title:    "Entrepierna",
    items: [
      { name: "Bioestimuladores",    description: "mejoran flacidez y calidad de piel en la zona interna" },
      { name: "Radiesse / Sculptra", description: "reafirman tejidos en una zona de difícil tratamiento" },
    ],
  },
  cicatrices_mamas: {
    category: "REGENERACIÓN CUTÁNEA",
    title:    "Cicatrices mamas",
    items: [
      { name: "Bioestimuladores",             description: "mejoran la calidad de la piel y estimulan colágeno" },
      { name: "Corticoides intralesionales",  description: "reducen cicatrices queloides e hipertróficas" },
      { name: "Láser",                        description: "mejora textura, color y apariencia de la cicatriz" },
      { name: "Exosomas / PRP",               description: "estimulan regeneración celular y reparación tisular" },
    ],
  },
  rodillas: {
    category: "CORPORAL",
    title:    "Rodillas",
    items: [
      { name: "Bioestimuladores",    description: "mejoran flacidez y calidad de piel en la zona" },
      { name: "Radiesse / Sculptra", description: "estimulan colágeno y mejoran firmeza progresivamente" },
      { name: "Tecnología láser",    description: "mejora textura y apariencia de la piel" },
    ],
  },
  pantorrillas: {
    category: "CORPORAL",
    title:    "Pantorrillas",
    items: [
      { name: "Bioestimuladores",    description: "mejoran calidad de piel y firmeza" },
      { name: "Radiesse / Sculptra", description: "estimulan colágeno y mejoran textura cutánea" },
      { name: "Tecnología láser",    description: "optimiza la apariencia de la piel" },
    ],
  },
};

/* ══════════════════════════════════════════════════════════════════
 
/* ══════════════════════════════════════════════════════════════════
   DEBUG — coordenadas de prueba (eliminar cuando estén ajustadas)
══════════════════════════════════════════════════════════════════ */
const DEBUG_ZONES = [
  { name: "cabello",   x: 50.5, y: 6.5 },
  { name: "ojos",   x: 55.5, y: 11.4 },
  { name: "surcos",  x: 55, y: 14 },
  { name: "nariz",  x: 50.5, y: 13.5 },
  { name: "labios", x: 50.5, y: 15 },
  { name: "menton", x: 50.5, y: 17 },
  { name: "frente", x: 50.5, y: 9.5 },
  { name: "orejas", x: 39, y: 14 },
  { name: "pomulos", x: 42.5, y: 12.5 },
  { name: "mandibula", x: 41.9, y: 15.8 },
  { name: "cuello", x: 50.5, y: 19 },
  { name: "escote", x: 50.5, y: 22 },
  { name: "hombros", x: 24, y: 23 },
  { name: "brazos", x: 75, y: 30 },
  { name: "cicatrices_mamas", x: 63, y: 33 },
  { name: "abdomen", x: 50.8, y: 40 },
  { name: "flancos", x: 32, y: 42 },
  { name: "gluteos", x: 62, y: 50 },
  { name: "entrepierna", x: 52, y: 56 },
  { name: "manos", x: 15, y: 54 },
  { name: "muslos", x: 35, y: 60 },
  { name: "rodillas", x: 62, y: 71 },
  { name: "pantorrillas", x: 43, y: 80 },

];

/* ══════════════════════════════════════════════════════════════════
   COMPONENTS
══════════════════════════════════════════════════════════════════ */

/* ── Scroll-zone ambient glow ───────────────────────────────────── */
function ZoneGlow({ top, size, active }: { top: string; size: number; active: boolean }) {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        top, left: "50%", transform: "translateX(-50%)",
        width:  `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,194,168,0.06) 0%, transparent 70%)",
        filter:  "blur(42px)",
        opacity: active ? 1 : 0.05,
        transition: "opacity 0.7s ease",
      }}
    />
  );
}

/* ── Floating particle ──────────────────────────────────────────── */
function Particle({ top, x, delay, dur }: { top: string; x: string; delay: number; dur: number }) {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        top, left: x, width: "2px", height: "2px",
        background: "rgba(0,194,168,0.32)",
        animationName:           "particleDrift",
        animationDuration:       `${dur}s`,
        animationTimingFunction: "ease-in-out",
        animationIterationCount: "infinite",
        animationDelay:          `${delay}s`,
      }}
    />
  );
}





/* ══════════════════════════════════════════════════════════════════
   ZONE HOTSPOT — dot + invisible bridge + card in one hover system
══════════════════════════════════════════════════════════════════ */
function ZoneHotspot({ zone, index }: { zone: { name: string; x: number; y: number }; index: number }) {
  const [isActive, setIsActive] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();

    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  const handleEnter = () => {
    if (timer.current) clearTimeout(timer.current);
    setIsActive(true);
  };
  const handleLeave = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setIsActive(false), 300);
  };

  const zoneData   = ZONES[zone.name];
  const cardOnLeft = zone.x > 50;

  return (
    <>
      {/* Halo — glow difuso detrás del punto */}
      <div
        style={{
          position:      "absolute",
          left:          `${zone.x}%`,
          top:           `${zone.y}%`,
          transform:     "translate(-50%, -50%)",
          width:         "240px",
          height:        "240px",
          borderRadius:  "9999px",
          background:    "radial-gradient(circle, rgba(0,194,168,0.28) 0%, rgba(0,194,168,0.08) 45%, transparent 70%)",
          filter:        "blur(36px)",
          opacity:       isActive ? 1 : 0,
          transition:    "opacity 0.5s ease",
          pointerEvents: "none",
          zIndex:        5,
        }}
      />

      {/* Spot interior — glow nítido en el centro del punto */}
      <div
        style={{
          position:      "absolute",
          left:          `${zone.x}%`,
          top:           `${zone.y}%`,
          width:         "60px",
          height:        "60px",
          borderRadius:  "9999px",
          background:    "radial-gradient(circle, rgba(0,194,168,0.55) 0%, transparent 70%)",
          filter:        "blur(10px)",
          opacity:       isActive ? 1 : 0,
          transition:    "opacity 0.35s ease",
          pointerEvents: "none",
          zIndex:        5,
          animation:     isActive ? "zoneGlowPulse 2s ease-in-out infinite" : "none",
        }}
      />

      {/* Anillo expansivo 1 — se dispara al activar */}
      {isActive && (
        <div
          key={`ring1-${zone.name}-${Date.now()}`}
          style={{
            position:      "absolute",
            left:          `${zone.x}%`,
            top:           `${zone.y}%`,
            width:         "70px",
            height:        "70px",
            borderRadius:  "9999px",
            border:        "1px solid rgba(0,194,168,0.65)",
            pointerEvents: "none",
            zIndex:        6,
            animation:     "zoneActivate 1.1s cubic-bezier(0.16,1,0.3,1) forwards",
          }}
        />
      )}

      {/* Anillo expansivo 2 — levemente retrasado */}
      {isActive && (
        <div
          key={`ring2-${zone.name}-${Date.now()}`}
          style={{
            position:      "absolute",
            left:          `${zone.x}%`,
            top:           `${zone.y}%`,
            width:         "70px",
            height:        "70px",
            borderRadius:  "9999px",
            border:        "1px solid rgba(0,194,168,0.35)",
            pointerEvents: "none",
            zIndex:        6,
            animation:     "zoneActivate2 1.4s cubic-bezier(0.16,1,0.3,1) 0.22s forwards",
          }}
        />
      )}

   {/* Dot */}
<div
  onMouseEnter={handleEnter}
  onMouseLeave={handleLeave}
  style={{
    position: "absolute",
    left: `${zone.x}%`,
    top: `${zone.y}%`,

    transform: isActive
      ? `translate(-50%,-50%) scale(${isMobile ? 1.2 : 1.4})`
      : "translate(-50%,-50%) scale(1)",

    width: isMobile ? "10px" : "16px",
    height: isMobile ? "10px" : "16px",

    borderRadius: "50%",
    background: isActive
      ? "rgba(0,194,168,0.95)"
      : "rgba(0,194,168,0.50)",

    boxShadow: isActive
      ? "0 0 28px 8px rgba(0,194,168,0.72)"
      : "0 0 20px rgba(0,194,168,0.6)",

    cursor: "pointer",
    transition:
      "transform 0.2s ease-in-out, background 0.2s ease-in-out, box-shadow 0.2s ease-in-out",

    animationName: isActive ? "none" : "dotEnter, hotspotPulse",
    animationDuration: "0.5s, 2.4s",
    animationDelay: `${index * 0.04}s, ${0.5 + index * 0.04}s`,
    animationTimingFunction: "cubic-bezier(0.34,1.56,0.64,1), ease-in-out",
    animationIterationCount: "1, infinite",
    animationFillMode: "both, none",

    pointerEvents: "auto",
    zIndex: 7,
  }}
/>

      {isActive && zoneData && (
        <>
          {/* Invisible bridge — full-width strip at dot height fills the gap */}
          <div
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            style={{
              position:      "absolute",
              left:          0,
              right:         0,
              top:           `calc(${zone.y}% - 44px)`,
              height:        "88px",
              pointerEvents: "auto",
              zIndex:        6,
            }}
          />

          {/* Panel — tipografía pura, sin card */}
<div
  style={{
    position: "absolute",

    top: isMobile ? `calc(${zone.y}% + 12px)` : `${zone.y}%`,

    left: isMobile
      ? "5%"
      : (cardOnLeft ? "1%" : "68%"),

    right: isMobile ? "5%" : "auto",  

    transform: isMobile
      ? "none"
      : "translateY(-50%)",

    width: isMobile ? "90vw" : "290px",
    maxWidth: "340px",

    pointerEvents: "auto",
    zIndex: 10,

    background: isMobile ? "rgba(0, 20, 18, 0.75)" : "transparent",
    backdropFilter: isMobile ? "blur(20px)" : "none",
    WebkitBackdropFilter: isMobile ? "blur(20px)" : "none",

    border: isMobile ? "1px solid rgba(0,194,168,0.25)" : "none",
    borderRadius: isMobile ? "16px" : "0px",
    padding: isMobile ? "18px" : "0px",

    boxShadow: isMobile ? "0 20px 60px rgba(0,0,0,0.6)" : "none",

    animation: "panelFadeIn 0.30s cubic-bezier(0.16,1,0.3,1) forwards",
  }}
  onMouseEnter={handleEnter}
  onMouseLeave={handleLeave}
>
            {/* Category */}
            <p style={{
              margin:        "0 0 7px 0",
              fontSize:      "9px",
              letterSpacing: "0.46em",
              textTransform: "uppercase",
              fontWeight:    500,
              color:         "rgba(0,194,168,0.40)",
            }}>
              {zoneData.category}
            </p>

            {/* Title */}
            <h3 style={{
              margin:        "0 0 16px 0",
              fontSize:      "26px",
              fontWeight:    300,
              letterSpacing: "-0.025em",
              lineHeight:    1.0,
              color:         "rgba(255,255,255,0.92)",
            }}>
              {zoneData.title}
            </h3>

            {/* Hairline — fade derecho */}
            <div style={{
              height:       "1px",
              marginBottom: "16px",
              background:   "linear-gradient(to right, rgba(255,255,255,0.09) 0%, transparent 75%)",
            }} />

            {/* Treatment list */}
            {zoneData.items.map((item, i) => (
              <div
                key={i}
                className="group relative rounded-xl px-4 py-3 transition-all duration-300 cursor-pointer hover:bg-black/40 hover:backdrop-blur-md"
                style={{
                  opacity:        0,
                  animation:      "itemFadeIn 0.36s cubic-bezier(0.16,1,0.3,1) forwards",
                  animationDelay: `${0.06 + i * 0.06}s`,
                }}
              >
                <div className="absolute inset-0 rounded-xl bg-black/0 group-hover:bg-black/40 transition-all duration-300 pointer-events-none" />

                <div className="relative z-10">
                  <p className="text-white/80 font-medium text-[13px] tracking-[-0.01em] leading-snug transition-all duration-300 group-hover:text-white">
                    {item.name}
                  </p>
                  <p className="text-white/25 text-[11.5px] font-light mt-1 leading-snug transition-all duration-300 group-hover:text-white/60">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

            {/* CTA */}
            <div style={{
              marginTop:  "20px",
              opacity:     0,
              animation:   "itemFadeIn 0.36s cubic-bezier(0.16,1,0.3,1) forwards",
              animationDelay: `${0.06 + zoneData.items.length * 0.06 + 0.04}s`,
            }}>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display:        "inline-flex",
                  alignItems:     "center",
                  gap:            "7px",
                  padding:        "9px 17px",
                  borderRadius:   "9999px",
                  border:         "1px solid rgba(0,194,168,0.20)",
                  color:          "rgba(0,194,168,0.52)",
                  fontSize:       "10px",
                  fontWeight:     500,
                  letterSpacing:  "0.20em",
                  textTransform:  "uppercase",
                  textDecoration: "none",
                  transition:     "border-color 0.25s ease, color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = "rgba(0,194,168,0.52)";
                  el.style.color       = "rgba(0,194,168,0.90)";
                  el.style.boxShadow   = "0 0 20px rgba(0,194,168,0.12), 0 0 0 1px rgba(0,194,168,0.08) inset";
                  el.style.transform   = "translateY(-1px)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = "rgba(0,194,168,0.20)";
                  el.style.color       = "rgba(0,194,168,0.52)";
                  el.style.boxShadow   = "none";
                  el.style.transform   = "translateY(0)";
                }}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                  <path d={WA_PATH} />
                </svg>
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}

/* ══════════════════════════════════════════════════════════════════
   MOBILE LIST ITEM — tap to expand treatment card
══════════════════════════════════════════════════════════════════ */
function MobileZoneItem({
  zoneKey, isOpen, onToggle,
}: {
  zoneKey: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const zone = ZONES[zoneKey];
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: isOpen ? "rgba(0,194,168,0.08)" : "rgba(255,255,255,0.04)",
        border:     isOpen ? "1px solid rgba(0,194,168,0.22)" : "1px solid rgba(255,255,255,0.07)",
        transition: "background 0.2s ease, border 0.2s ease",
      }}
    >
      {/* Row header — tap to toggle */}
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-left"
        onClick={onToggle}
      >
        <div className="flex items-center gap-3">
          <span
            className="w-[6px] h-[6px] rounded-full flex-shrink-0"
            style={{
              background: isOpen ? "#00c2a8" : "rgba(0,194,168,0.40)",
              boxShadow:  isOpen ? "0 0 8px rgba(0,194,168,0.7)" : "none",
              transition: "all 0.2s ease",
            }}
          />
          <span
            className="text-[12px] font-medium uppercase tracking-[0.24em]"
            style={{ color: isOpen ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.55)" }}
          >
            {zone?.title ?? zoneKey}
          </span>
        </div>
        <span
          className="text-[18px] font-thin transition-transform duration-200"
          style={{
            color:     "rgba(0,194,168,0.6)",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          +
        </span>
      </button>

      {/* Expanded treatment list */}
      {isOpen && (
        <div
          className="px-5 pb-4 space-y-2.5"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div className="pt-3 space-y-2.5">
            {(zone?.items ?? []).map((item, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <span
                  className="w-[3px] h-[3px] rounded-full flex-shrink-0 mt-[7px]"
                  style={{ background: "rgba(0,194,168,0.40)" }}
                />
                <p className="text-[13px] font-light leading-snug">
                  <span className="text-white/78">{item.name}</span>
                  {item.description && <span className="text-white/28"> — {item.description}</span>}
                </p>
              </div>
            ))}
          </div>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-1
                       text-[10px] uppercase tracking-[0.28em]
                       text-emerald-500/50 hover:text-emerald-400
                       transition-colors duration-200"
          >
            Consultar →
          </a>
        </div>
      )}
    </div>
  );
}


/* ── Coverflow Carousel ─────────────────────────────────────────── */
const CAROUSEL_ITEMS = [
  { title: "Botox",              sub: "Neuromoduladores",    img: "/botox-2.png"     },
  { title: "Ácido Hialurónico", sub: "Rellenos faciales",   img: "/juevederm.png"   },
  { title: "Profhilo",           sub: "Bioestimulación",     img: "/profhilo-2.png"  },
  { title: "Radiesse",           sub: "Colágeno y firmeza",  img: "/radiesse-2.png"  },
  { title: "Sculptra",           sub: "Volumen progresivo",  img: "/sculptra-2.png"  },
  { title: "Skinvive",           sub: "Hidratación dérmica", img: "/skinvive-2.png"  },
  { title: "Harmonyca",          sub: "Tratamiento mixto",   img: "/harmonyca-2.png" },
];

function CoverflowCarousel() {
  const [active, setActive] = useState(0);
  const startX = useRef(0);
  const isDragging = useRef(false);
  const count = CAROUSEL_ITEMS.length;

  const prev = () => setActive(i => (i - 1 + count) % count);
  const next = () => setActive(i => (i + 1) % count);

  useEffect(() => {
    const id = setInterval(next, 3800);
    return () => clearInterval(id);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
    isDragging.current = true;
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const dx = e.clientX - startX.current;
    if (dx < -40) next();
    else if (dx > 40) prev();
  };

  const getTransform = (offset: number): React.CSSProperties | null => {
    if (Math.abs(offset) > 1) return null;
    if (offset === 0) return {
      transform: "translateX(0%) scale(1) rotateY(0deg)",
      opacity: 1, zIndex: 3, filter: "none",
      boxShadow: "0 24px 64px rgba(0,0,0,0.55), 0 0 0 1px rgba(0,194,168,0.14)",
    };
    const s = offset > 0 ? 1 : -1;
    return {
      transform: `translateX(${s * 66}%) scale(0.81) rotateY(${-s * 18}deg)`,
      opacity: 0.42, zIndex: 2,
      filter: "blur(0.8px)",
      boxShadow: "0 8px 24px rgba(0,0,0,0.30)",
    };
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <div
        className="relative select-none"
        style={{ width: "220px", height: "300px", perspective: "800px" }}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerLeave={() => { isDragging.current = false; }}
      >
        {CAROUSEL_ITEMS.map((item, i) => {
          const raw    = (i - active + count) % count;
          const offset = raw > count / 2 ? raw - count : raw;
          const style  = getTransform(offset);
          if (!style) return null;

          return (
            <div
              key={i}
              onClick={() => offset !== 0 && setActive(i)}
              style={{
                position: "absolute", inset: 0,
                transition: "transform 0.52s cubic-bezier(0.16,1,0.3,1), opacity 0.52s ease, filter 0.52s ease",
                transformStyle: "preserve-3d",
                cursor: offset !== 0 ? "pointer" : "default",
                borderRadius: "16px",
                overflow: "hidden",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(14px)",
                ...style,
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{ width: "100%", height: "68%", objectFit: "cover", display: "block", opacity: 0.88 }}
              />
              <div style={{ padding: "14px 16px" }}>
                <p style={{
                  fontSize: "8.5px", letterSpacing: "0.38em",
                  textTransform: "uppercase", color: "rgba(0,194,168,0.58)", marginBottom: "6px",
                }}>
                  {item.sub}
                </p>
                <p style={{ fontSize: "15px", fontWeight: 300, color: "rgba(255,255,255,0.88)", lineHeight: 1.2 }}>
                  {item.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dots */}
      <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
        {CAROUSEL_ITEMS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              width: i === active ? "18px" : "5px", height: "5px",
              borderRadius: "9999px",
              background: i === active ? "rgba(0,194,168,0.75)" : "rgba(255,255,255,0.18)",
              border: "none", padding: 0, cursor: "pointer",
              transition: "all 0.35s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════════════════════ */
export default function TratamientosPage() {
  const mapRef = useRef<HTMLDivElement>(null);

  const [scrollZone, setScrollZone] = useState(0);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);

  useEffect(() => {
    let mapTop = 0;
    const measure = () => {
      if (mapRef.current) mapTop = mapRef.current.getBoundingClientRect().top + window.scrollY;
    };
    measure();
    window.addEventListener("resize", measure, { passive: true });

    const onScroll = () => {
      const inMap = window.scrollY - mapTop + window.innerHeight * 0.5;
      if      (inMap < 460)  setScrollZone(0);
      else if (inMap < 820)  setScrollZone(1);
      else if (inMap < 1240) setScrollZone(2);
      else if (inMap < 1580) setScrollZone(3);
      else                   setScrollZone(4);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, []);

  /* SVG defs for body sharpen filter — zero layout impact */
  const svgDefs = (
    <svg width="0" height="0" className="absolute pointer-events-none" aria-hidden="true">
      <defs>
        <filter id="body-sharpen" x="0%" y="0%" width="100%" height="100%"
                colorInterpolationFilters="linearRGB">
          <feConvolveMatrix order="3"
            kernelMatrix="0 -0.28 0  -0.28 2.12 -0.28  0 -0.28 0"
            result="sharp" />
          <feComponentTransfer in="sharp">
            <feFuncR type="linear" slope="1.01" intercept="-0.005" />
            <feFuncG type="linear" slope="1.01" intercept="-0.005" />
            <feFuncB type="linear" slope="1.01" intercept="-0.005" />
          </feComponentTransfer>
        </filter>
      </defs>
    </svg>
  );

  return (
    <div className="relative bg-[#061311] text-white" style={{ overflowX: "hidden" }}>
      <style dangerouslySetInnerHTML={{ __html: KEYFRAMES }} />
      {svgDefs}

      {/* ── Fixed ambient background ── */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full opacity-12"
          style={{ background: "radial-gradient(circle, #0c3f30 0%, transparent 70%)", filter: "blur(100px)" }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full opacity-08"
          style={{ background: "radial-gradient(circle, #0c3f30 0%, transparent 70%)", filter: "blur(90px)" }}
        />
      </div>

      {/* ── Header ── */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-16 pb-6">
        <div className="flex items-center justify-between gap-8">

          {/* Text — left */}
          <div className="flex-1 min-w-0">
            {/* Breadcrumb */}
            <p className="text-[10px] uppercase tracking-[0.5em] text-white/28 mb-5">
              <Link href="/" className="hover:text-white/50 transition-colors duration-300">Inicio</Link>
              <span className="mx-2 text-white/18">/</span>
              <span>Tratamientos</span>
            </p>

            <h1
              className="font-thin text-white leading-none tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
            >
              Tratamientos.
            </h1>
            <p className="mt-4 text-[15px] font-light leading-snug text-white/80 max-w-[44ch]">
              Resultados naturales.<br />
              Sin exageraciones.
            </p>
            <p className="mt-3 text-[13px] font-light leading-relaxed text-white/38 max-w-[44ch]">
              Medicina estética para mejorar volumen,<br />
              firmeza y calidad de piel, con y sin cirugía.
            </p>
            <p className="mt-5 text-[11px] font-light tracking-[0.18em] text-white/28 uppercase">
              <span style={{ display: "inline-block", animation: "arrowFloat 1.8s ease-in-out infinite" }}>↓</span>{" "}Tocá una zona del cuerpo para ver los tratamientos
            </p>
          </div>

          {/* Coverflow — right, desktop only */}
          <div className="hidden lg:flex items-center justify-center flex-shrink-0 pr-10">
            <CoverflowCarousel />
          </div>

        </div>
        <div className="mt-8 border-t border-white/[0.06]" />
      </div>

      {/* ════════════════════════════════════════════════════════
          DESKTOP MAP  (hidden on mobile)
      ════════════════════════════════════════════════════════ */}
      <div className="block -mt-20 md:-mt-58">
        <div ref={mapRef} className="relative">
    

  {/* 🌌 BACKGROUND GLOW */}
  <div className="absolute inset-0 z-0 overflow-hidden">

    <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full blur-[120px]"
         style={{ background: "rgba(0,194,168,0.15)" }} />

    <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-[140px]"
         style={{ background: "rgba(0,194,168,0.12)" }} />

    <div className="absolute top-[70%] left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full blur-[120px]"
         style={{ background: "rgba(0,194,168,0.10)" }} />

  </div>

  {/* 🧊 GLASS */}
  <div className="absolute inset-0 -z-10 backdrop-blur-[20px]"
       style={{
         background: "rgba(255,255,255,0.02)",
         border: "1px solid rgba(255,255,255,0.05)"
       }}
  />

  <div className="relative w-full max-w-none"></div>
          <div className="relative w-full max-w-none">
            <img
              src="/images/prueba-50SF.webp"
              alt="body"
              style={{
                width:          "200%",
                height:         "auto",
                maxWidth:       "none",
                display:        "block",
                transform: "translateX(-25%)",
                imageRendering: "auto",
                opacity:        0.48,
                filter:         "url(#body-sharpen) contrast(1.12) brightness(0.98) saturate(0.60)",
              }}
            />

            <div className="absolute inset-0">

              {/* Hint inicial — aparece 1s después, se desvanece solo */}
              <div style={{
                position: "absolute", top: "4.5%", left: 0, right: 0,
                display: "flex", justifyContent: "center",
                pointerEvents: "none", zIndex: 8,
              }}>
                <div style={{
                  display: "flex", alignItems: "center", gap: "8px",
                  padding: "7px 20px", borderRadius: "100px",
                  background: "rgba(0,194,168,0.09)",
                  border: "1px solid rgba(0,194,168,0.18)",
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "10px", letterSpacing: "0.22em",
                  textTransform: "uppercase", fontWeight: 500,
                  whiteSpace: "nowrap",
                  animation: "hintAppear 5s ease-in-out 1s both",
                }}>
                  <span style={{
                    width: "5px", height: "5px", borderRadius: "50%",
                    background: "rgba(0,194,168,0.70)",
                    boxShadow: "0 0 6px rgba(0,194,168,0.50)",
                    flexShrink: 0,
                  }} />
                  Tocá una zona del cuerpo
                </div>
              </div>

              {/* Hotspots — cada uno gestiona su propio hover + card */}
              {DEBUG_ZONES.map((z, i) => <ZoneHotspot key={z.name} zone={z} index={i} />)}

              {/* Scroll ambient glows */}
              <ZoneGlow top="14%" size={240} active={scrollZone === 0} />
              <ZoneGlow top="25%" size={260} active={scrollZone === 1} />
              <ZoneGlow top="40%" size={300} active={scrollZone === 2} />
              <ZoneGlow top="57%" size={280} active={scrollZone === 3} />
              <ZoneGlow top="77%" size={260} active={scrollZone === 4} />

              {/* Particles */}
              <Particle top="28%" x="49.5%" delay={0}   dur={9}  />
              <Particle top="38%" x="50.5%" delay={2.8} dur={11} />
              <Particle top="47%" x="49.8%" delay={1.4} dur={8}  />
              <Particle top="56%" x="50.2%" delay={4.2} dur={10} />
              <Particle top="66%" x="49.6%" delay={0.7} dur={13} />
              <Particle top="76%" x="50.4%" delay={3.1} dur={9}  />

            </div>
          </div>

        </div>
      </div>

    

      {/* ── CTA final ── */}
      <div className="border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20 flex flex-col items-center text-center gap-6">
          <p className="text-[11px] uppercase tracking-[0.45em] text-white/18">Leblon Clinique</p>
          <h2
            className="font-thin text-white leading-tight tracking-tight"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)" }}
          >
            ¿No sabés qué tratamiento<br />
            <span className="text-emerald-400 italic">es para vos?</span>
          </h2>
          <p className="text-[13px] font-light text-white/28 max-w-[36ch] leading-relaxed">
            Hacemos una evaluación personalizada para recomendarte el protocolo ideal.
          </p>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-10 py-[15px] rounded-full
                       bg-white text-[#061311] text-[13px] font-semibold tracking-[0.04em]
                       hover:bg-emerald-50 hover:scale-[1.03]
                       hover:shadow-[0_8px_40px_rgba(52,211,153,0.38)]
                       transition-all duration-300"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d={WA_PATH} />
            </svg>
            Agendá tu evaluación
          </a>
          <Link
            href="/"
            className="text-[11px] uppercase tracking-[0.3em] text-white/18
                       hover:text-white/36 transition-colors duration-200 border-b border-white/10"
          >
            ← Volver al inicio
          </Link>
        </div>
      </div>

    </div>
  );
}
