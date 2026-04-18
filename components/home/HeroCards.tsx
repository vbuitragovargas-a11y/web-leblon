const items = [
  {
    label: "Enfoque",
    title: "Diagnóstico personalizado",
    description: "Cada tratamiento parte de una evaluación única.",
  },
  {
    label: "Resultado",
    title: "Resultados naturales",
    description: "Sin excesos. Respetando tu esencia.",
  },
  {
    label: "Estándar",
    title: "Productos premium",
    description: "Solo marcas y técnicas de referencia internacional.",
  },
];

export default function HeroCards() {
  return (
    <section className="mt-8 pb-4 px-6 overflow-hidden">
      <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between max-w-5xl mx-auto gap-6 md:gap-0">

        {/* Línea central — solo desktop */}
        <div className="absolute top-[22px] left-[10%] right-[10%] h-px bg-white/10 hidden md:block" />

        {items.map((item) => (
          <div
            key={item.label}
            className="relative flex flex-col items-start md:items-center md:text-center w-full md:w-[200px]
                       hover:scale-105 transition-transform duration-300"
          >
            {/* Nodo */}
            <div
              className="w-3 h-3 rounded-full mb-4 flex-shrink-0"
              style={{
                background: "#7BE0B8",
                boxShadow: "0 0 10px rgba(123,224,184,0.5)",
              }}
            />

            <p className="text-[11px] tracking-[0.2em] text-white/40 mb-2 uppercase">
              {item.label}
            </p>

            <p className="text-white text-base font-light leading-snug">
              {item.title}
            </p>

            <p className="text-white/50 text-sm mt-2 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}
