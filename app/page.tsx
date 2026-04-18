import Hero            from "@/components/home/Hero";
import Services        from "@/components/home/Services";
import Results         from "@/components/home/Results";
import Differentiators from "@/components/home/Differentiators";
import Doctor          from "@/components/home/Doctor";
import Timeline        from "@/components/home/Timeline";
import FinalCTA        from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    /*
      Base oscura global. Los glows son fixed para que persistan
      en toda la página mientras el usuario hace scroll.
    */
    <div className="relative bg-[#061311] text-white">

      {/* ── Glows de fondo — persisten en toda la página ── */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* Glow superior izquierdo */}
        <div
          className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full opacity-25"
          style={{
            background: "radial-gradient(circle, #0d4a38 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        {/* Glow central */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] opacity-15"
          style={{
            background: "radial-gradient(ellipse, #0a3d2e 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        {/* Glow inferior derecho */}
        <div
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #0d4a38 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <main>
        <Hero />
        <Services />
        <Results />
        <Differentiators />
        <Doctor />
        <Timeline />
        <FinalCTA />
      </main>

    </div>
  );
}
