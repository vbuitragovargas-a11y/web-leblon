export default function DoctorImage() {
  return (
    <>
      {/* MOBILE — imagen como fondo */}
      <div className="block md:hidden absolute inset-0 z-[1] overflow-hidden">
        <img
          src="/sin-horizontal-v2.png"
          alt="Dra. Sinziana Iacob"
          className="w-full h-full object-cover object-[30%_20%]"
          style={{
            filter: "brightness(0.75) contrast(1.1)",
          }}
        />
      </div>

      {/* DESKTOP — igual que antes */}
      <div className="hidden md:block absolute inset-0 overflow-hidden">
        <img
          src="/sin-horizontal-v2.png"
          alt="Dra. Sinziana Iacob"
          className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-auto max-w-none object-cover object-[75%_50%] scale-[1.1]"
        />
      </div>

      {/* Overlay oscuro para que el texto se lea */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(6,19,17,0.6) 0%, rgba(6,19,17,0.9) 60%, #061311 100%)",
        }}
      />
    </>
  );
}