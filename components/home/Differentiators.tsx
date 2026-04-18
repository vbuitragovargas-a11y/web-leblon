const items = [
  { index: "01", title: "Evaluación facial completa antes de tratar"  },
  { index: "02", title: "Resultados progresivos y naturales"          },
  { index: "03", title: "Técnicas avanzadas sin sobrecorrección"      },
  { index: "04", title: "Seguimiento post tratamiento incluido"       },
];

export default function Differentiators() {
  return (
    <section className="px-6 lg:px-12 py-12 lg:py-16 max-w-6xl mx-auto">

      {/* Encabezado */}
      <div className="mb-8">
        <p className="text-[11px] uppercase tracking-[0.45em] text-white/30 mb-4">
          Nuestro estándar
        </p>
        <h2
          className="font-thin text-white leading-none tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
        >
          El estándar que
          <br />
          <span className="italic text-emerald-300">nos distingue.</span>
        </h2>
      </div>

      {/* Glass card contenedor */}
      <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.07] rounded-2xl overflow-hidden">
        {items.map((item, i) => (
          <div
            key={item.index}
            className={`group flex items-center justify-between
                        px-8 py-4 lg:py-6
                        transition-all duration-400
                        hover:bg-white/[0.04]
                        ${i < items.length - 1 ? "border-b border-white/[0.06]" : ""}`}
          >
            <div className="flex items-center gap-6 lg:gap-10">
              <span className="text-[11px] tabular-nums tracking-[0.35em] text-white/20
                               group-hover:text-emerald-400/50 transition-colors duration-400 flex-shrink-0">
                {item.index}
              </span>
              <span
                className="font-light text-white/70 tracking-tight leading-none
                           group-hover:text-white transition-colors duration-400"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.8rem)" }}
              >
                {item.title}
              </span>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
