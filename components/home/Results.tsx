import Image from "next/image";

// Reemplazá los placeholders con tus imágenes reales en /public/results/
const cells = [
  { id: "a", label: "Bioestimuladores",    badge: "Sin cirugía",              col: "md:col-span-2", row: "",              aspect: "16 / 9", image: "/armonizacion leblon.png", naturalSize: null },
  { id: "b", label: "Armonización facial", badge: "Natural · Progresivo",     col: "",               row: "md:row-span-2", aspect: null,     image: "/carlos-leblon.png",       naturalSize: { w: 700, h: 1400 } },
  { id: "c", label: "Armonización facial", badge: "Natural · Sin excesos",    col: "",               row: "",              aspect: "4 / 3",  image: "/chica-leblon.png",        naturalSize: null },
  { id: "d", label: "Dysport",             badge: "Resultado en 1 sesión",    col: "",               row: "",              aspect: "4 / 3",  image: "/fede-dysport.png",        naturalSize: null },
];

export default function Results() {
  return (
    <section className="px-6 lg:px-12 py-12 lg:py-16 max-w-6xl mx-auto">

      {/* Encabezado */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-[0.45em] text-white/30 mb-4">
            Resultados reales · Sin filtros
          </p>
          <h2
            className="font-thin text-white leading-none tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
          >
            El trabajo
            <br />
            <span className="italic text-emerald-300">habla solo.</span>
          </h2>
        </div>
        <p className="text-[11px] text-white/30 leading-relaxed max-w-[200px] sm:text-right pb-1">
          Armonización facial natural.<br />Cada resultado, único.
        </p>
      </div>

      {/* Grid asimétrico */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cells.map((c) => (
          <div
            key={c.id}
            className={`relative overflow-hidden rounded-2xl
                        bg-white/[0.04] backdrop-blur-xl border border-white/[0.08]
                        group cursor-pointer
                        transition-all duration-500
                        hover:border-white/[0.15] hover:bg-white/[0.06]
                        ${c.col} ${c.row}`}
            style={c.aspect ? { aspectRatio: c.aspect } : undefined}
          >
            {/* Imagen con dimensiones naturales (sin fill) */}
            {c.image && c.naturalSize && (
              <Image
                src={c.image}
                alt={c.label}
                width={c.naturalSize.w}
                height={c.naturalSize.h}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="block w-full h-auto transition-transform duration-500 group-hover:scale-[1.03]"
                draggable={false}
              />
            )}

            {/* Imagen con fill (aspect-ratio fijo) */}
            {c.image && !c.naturalSize && (
              <Image
                src={c.image}
                alt={c.label}
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover object-[50%_20%] transition-transform duration-500 group-hover:scale-[1.03]"
                draggable={false}
              />
            )}

            {/* Gradiente interno */}
            <div className={`absolute inset-0 bg-gradient-to-br ${c.image ? "from-black/30 to-transparent" : "from-emerald-950/40 to-transparent"}`} />

            {/* Badge — siempre visible */}
            <div className="absolute top-3 right-3 z-20 px-2 py-[3px]
                            rounded-sm
                            bg-black/[0.28] backdrop-blur-sm border border-white/[0.07]">
              <span className="text-[7.5px] uppercase tracking-[0.44em] font-light text-white/55">
                {c.badge}
              </span>
            </div>

            {/* Ícono placeholder (solo sin imagen) */}
            {!c.image && (
              <div className="absolute inset-0 flex items-center justify-center
                              opacity-10 group-hover:opacity-5 transition-opacity duration-500">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="white" strokeWidth="0.8"/>
                  <circle cx="8.5" cy="8.5" r="1.5" stroke="white" strokeWidth="0.8"/>
                  <path d="M21 15l-5-5L5 21" stroke="white" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}

            {/* Label — aparece en hover */}
            <div className="absolute bottom-0 left-0 right-0 p-5
                            bg-gradient-to-t from-[#061311]/80 to-transparent
                            translate-y-1 opacity-0
                            group-hover:translate-y-0 group-hover:opacity-100
                            transition-all duration-400">
              <p className="text-[11px] uppercase tracking-[0.3em] text-emerald-300/80">
                {c.label}
              </p>
            </div>

            {/* Borde glow en hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                            transition-opacity duration-500 pointer-events-none"
                 style={{
                   boxShadow: "inset 0 0 30px rgba(52,211,153,0.04)",
                 }}
            />
          </div>
        ))}
      </div>

      {/* Nota de pie */}
      <div className="mt-5 flex items-center justify-between">
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/25">
          Pacientes reales · Sin edición
        </p>
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/25">
          Dra. Sinziana Iacob
        </p>
      </div>

    </section>
  );
}
