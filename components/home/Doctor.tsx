import DoctorImage from "./DoctorImage";

export default function Doctor() {
  return (
    <section className="relative w-full bg-[#061311] overflow-hidden" style={{ isolation: "isolate" }}>

      {/* Glow ambiental — profundidad sutil detrás de la figura */}
      <div className="absolute inset-0 pointer-events-none animate-glow-breathe"
           style={{ background: "radial-gradient(ellipse at 72% 52%, rgba(20,120,100,1) 0%, rgba(6,19,17,0) 65%)" }} />

      {/* Fade inferior — conecta con la siguiente sección */}
      <div className="absolute inset-x-0 bottom-0 h-28 pointer-events-none z-20"
           style={{ background: "linear-gradient(to bottom, transparent 0%, #061311 100%)" }} />


      {/* ── CONTENIDO ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6
                      flex items-center
                      py-20 md:py-24">

        {/* COLUMNA IZQUIERDA — texto */}
        <div className="flex flex-col gap-6 max-w-[480px]
                        animate-[heroFadeUp_0.8s_cubic-bezier(0.16,1,0.3,1)_0.1s_both]">

          <p className="text-[10px] uppercase tracking-[0.55em] text-white/25">
            La especialista
          </p>

          <div>
            <h2 className="font-light text-white tracking-tight leading-[1.0]"
                style={{ fontSize: "clamp(2.4rem, 3.5vw, 4.4rem)" }}>
              Dra. Sinziana
            </h2>
            <h2 className="font-light italic leading-[1.05]"
                style={{ fontSize: "clamp(2.4rem, 3.5vw, 4.4rem)", color: "#00c2a8" }}>
              Iacob.
            </h2>
          </div>

          <p className="text-[10px] uppercase tracking-[0.45em] text-white/30">
            Médica estética · Cirujana plástica
          </p>

          <div className="h-px w-10 bg-[#00c2a8]/25" />

          <div className="flex flex-col gap-2.5">
            {[
              "+1.500 pacientes tratados en armonización facial",
              "Formación internacional en Europa y Estados Unidos",
              "Especialista en técnicas sin sobrecorrección",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2.5">
                <span className="mt-[5px] w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#00c2a8" }} />
                <p className="text-white/45 text-sm leading-[1.7] font-light">{item}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="flex gap-6 pt-1">
            {[
              { value: "+1500", label: "Pacientes" },
              { value: "98%",   label: "Satisfacción" },
              { value: "+8",    label: "Años" },
            ].map(({ value, label }) => (
              <div key={label} className="border-l border-white/[0.08] pl-4">
                <p className="text-lg font-light" style={{ color: "#00c2a8" }}>{value}</p>
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/25 mt-0.5">{label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-1.5">
            <a
              href="https://wa.me/5491100000000"
              target="_blank"
              rel="noopener noreferrer"
              className="self-start bg-white text-black text-sm font-medium tracking-wide
                         rounded-full px-6 py-2.5
                         transition-all duration-300
                         hover:scale-105 hover:bg-white/90 hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
            >
              Quiero mi evaluación
            </a>
            <p className="text-[10px] tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.2)" }}>
              Turnos limitados · Respuesta en minutos
            </p>
          </div>
        </div>

      </div>

      {/* IMAGEN EDITORIAL */}
      <DoctorImage />

    </section>
  );
}
