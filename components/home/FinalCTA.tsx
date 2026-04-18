"use client";
export default function FinalCTA() {
  const WA = "https://wa.me/TODO_WHATSAPP";

  return (
    <section className="px-6 lg:px-12 pt-8 pb-0 max-w-6xl mx-auto">

      {/* Card de conversión */}
      <div className="relative overflow-hidden rounded-2xl
                      bg-white/[0.05] backdrop-blur-xl border border-white/[0.1]
                      px-8 lg:px-16 py-10 lg:py-14 text-center">

        {/* Glow interno */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-40 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at top, #0d4a38 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Línea dorada superior */}
        <div className="absolute top-0 left-12 right-12 h-px
                        bg-gradient-to-r from-transparent via-yellow-600/30 to-transparent" />

        {/* Contenido */}
        <div className="relative z-10 flex flex-col items-center gap-7">

          <p className="text-[11px] uppercase tracking-[0.5em] text-white/25">
            Leblon Clinique · Buenos Aires
          </p>

          <h2
            className="font-thin text-white leading-[1.0] tracking-tight max-w-3xl"
            style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
          >
            Tu mejor versión
            <br />
            <span className="italic text-emerald-300">
              empieza con una consulta.
            </span>
          </h2>

          <div className="flex flex-col items-center gap-3">

            <div className="flex flex-col sm:flex-row gap-3">
              {/* Principal */}
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5
                           px-9 py-4 rounded-full
                           bg-white text-[#061311]
                           text-[13px] font-medium tracking-wide
                           transition-all duration-500
                           hover:bg-emerald-50 hover:scale-[1.03]
                           hover:shadow-[0_0_60px_rgba(110,231,183,0.25)]"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Hablar por WhatsApp
              </a>

              {/* Secundario */}
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center
                           px-9 py-4 rounded-full
                           bg-white/[0.05] border border-white/[0.1] text-white/50
                           text-[13px] font-medium tracking-wide
                           transition-all duration-500
                           hover:bg-white/[0.09] hover:border-white/[0.18] hover:text-white/80"
              >
                Enviar consulta ahora
              </a>
            </div>

            {/* Urgency */}
            <p className="text-[10px] tracking-[0.25em]" style={{ color: "rgba(255,255,255,0.2)" }}>
              Turnos limitados esta semana · Respuesta en minutos
            </p>

          </div>

        </div>
      </div>

      {/* Footer mínimo */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-8">
        <p className="text-[11px] uppercase tracking-[0.35em] text-white/10">
          Leblon Clinique · Buenos Aires
        </p>
        <p className="text-[11px] uppercase tracking-[0.35em] text-white/10">
          Dra. Sinziana Iacob
        </p>
      </div>

    </section>
  );
}
