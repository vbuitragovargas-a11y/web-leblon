"use client";

export default function Hero() {
  const WA = "https://wa.me/TODO_WHATSAPP";

  return (
    <section className="relative w-full min-h-screen pt-28 pb-16 overflow-hidden bg-[#061311]">

      {/* IMAGEN */}
      <div className="absolute right-0 top-[6%] h-[115%] w-[65%] z-[1] overflow-hidden">
        <img
          src="/Leblon inicio.png"
          alt="Leblon Clinique"
          className="h-full w-full object-cover object-[70%_41%]"
        />
      </div>

      {/* FADE IZQUIERDO */}
      <div className="absolute inset-0 z-[2] pointer-events-none bg-gradient-to-r from-[#061311] via-[#061311]/90 to-transparent" />

      {/* CONTENIDO */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 flex items-center min-h-[80vh]">
        <div className="max-w-2xl lg:max-w-3xl flex flex-col gap-6">

          {/* H1 */}
          <h1
            className="fade-up text-white text-left text-4xl tracking-normal md:text-5xl md:tracking-tight lg:text-6xl leading-[1.05] font-light max-w-4xl"
            style={{ animationDelay: "0.1s" }}
          >
            Botox, ácido hialurónico{" "}
            <span className="whitespace-nowrap">y bioestimuladores</span>
            <br />
            <span className="text-emerald-400 italic">en Buenos Aires.</span>
          </h1>

          {/* Subtítulo + autoridad */}
          <p
            className="fade-up text-[14px] leading-[1.8]"
            style={{ color: "rgba(255,255,255,0.42)", animationDelay: "0.22s", maxWidth: "36ch" }}
          >
            Armonización facial con resultados reales y progresivos.
            <br />
            <span style={{ color: "rgba(255,255,255,0.28)" }}>
              Médicos especialistas en armonización facial.
            </span>
          </p>

          {/* Cinta de servicios */}
          <div
            className="fade-up overflow-hidden relative max-w-[70%]"
            style={{
              animationDelay: "0.32s",
              maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
          >
            <div className="animate-marquee flex whitespace-nowrap w-max">
              {[1, 2].map((n) => (
                <span key={n} className="flex text-[10px] tracking-[0.1em]" style={{ color: "rgba(255,255,255,0.16)" }}>
                  {["Labios", "Rinomodelación", "Ojeras", "Mentón", "Pómulos", "Surcos", "Mandíbula", "Arrugas peribucales", "Arrugas perioculares", "Rejuvenecimiento facial", "Arrugas frente", "Arrugas entrecejo", "Arrugas cuello", "Papada", "Piel apagada", "Líneas finas"].map((s) => (
                    <span key={s} className="flex items-center">
                      <span className="px-2">{s}</span>
                      <span style={{ color: "rgba(255,255,255,0.08)" }}>·</span>
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>

          {/* Checklist */}
          <ul className="flex flex-col gap-1.5">
            {[
              { text: "Resultados naturales",        delay: "0.36s" },
              { text: "Técnicas avanzadas",          delay: "0.42s" },
              { text: "Equipo médico especializado", delay: "0.46s" },
              { text: "Diagnóstico personalizado",   delay: "0.50s" },
              { text: "Productos premium",           delay: "0.54s" },
            ].map(({ text, delay }) => (
              <li key={text} className="fade-up flex items-center gap-2.5" style={{ animationDelay: delay }}>
                <span
                  className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(52,211,153,0.15)" }}
                >
                  <svg width="8" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4l2.5 2.5L9 1" stroke="rgba(52,211,153,0.9)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="text-[13px] font-light" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {text}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="fade-up flex flex-col gap-4" style={{ animationDelay: "0.56s" }}>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-glow self-start inline-flex items-center justify-center gap-2.5
                         px-11 py-[17px] rounded-full
                         bg-white text-[#061311]
                         text-[13.5px] font-semibold tracking-[0.04em]
                         transition-all duration-400
                         hover:bg-emerald-50 hover:scale-[1.03]
                         hover:shadow-[0_8px_40px_rgba(52,211,153,0.5),0_0_0_1px_rgba(52,211,153,0.18)]"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Agendá tu evaluación
            </a>

            <p
              className="text-[10px] tracking-[0.2em]"
              style={{ color: "rgba(255,255,255,0.28)" }}
            >
              Asesoramiento personalizado por WhatsApp · Respuesta en minutos
            </p>
          </div>

        </div>
      </div>

      {/* SEO */}
      <p className="sr-only">
        Tratamientos de Botox, rellenos con ácido hialurónico y bioestimuladores en Buenos Aires.
      </p>

    </section>
  );
}
