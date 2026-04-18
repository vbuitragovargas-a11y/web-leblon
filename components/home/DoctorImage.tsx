export default function DoctorImage() {
  return (
    <>
      {/* ── GLOW LIGHTS — siguen el eje vertical del cuerpo ── */}

      {/* Glow ambiental — solo en la parte baja, lejos de la cara */}
      <div
        className="absolute pointer-events-none z-[1]"
        style={{
          width: "400px",
          height: "300px",
          right: "18%",
          top: "55%",
          borderRadius: "9999px",
          background: "rgba(0, 194, 168, 0.07)",
          filter: "blur(130px)",
          animation: "bgDrift 18s ease-in-out infinite",
          animationDelay: "2s",
        }}
      />

      {/* IMAGEN */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/sin-horizontal-v2.png"
          alt="Dra. Sinziana Iacob"
          className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-auto max-w-none object-cover object-[75%_50%] scale-[1.1]"
          style={{ filter: "brightness(1.05) contrast(1.08) saturate(1.05)" }}
        />
      </div>

      {/* FADE IZQUIERDO — fundido suave, sin línea dura */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background: "linear-gradient(to right, #061311 0%, #061311 28%, rgba(6,19,17,0.75) 42%, rgba(6,19,17,0.35) 55%, rgba(6,19,17,0.08) 68%, transparent 80%)",
        }}
      />


      {/* FADE SUPERIOR */}
      <div className="absolute top-0 left-0 w-full h-40 z-[4] pointer-events-none bg-gradient-to-b from-[#061311] to-transparent" />
    </>
  );
}
