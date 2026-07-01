import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MoveRight } from "lucide-react";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".hero-reveal", {
        duration: 1.2,
        y: 60,
        autoAlpha: 0,
        ease: "power4.out",
      }).from(
        ".stagger-item > *",
        {
          duration: 0.8,
          y: 20,
          autoAlpha: 0,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.6"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
    >
      <div className="absolute -bottom-16 right-0 text-[35vw] font-black text-[#0A192F]/[0.02] leading-none pointer-events-none font-inter select-none z-0">
        2024
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-12 gap-0 border border-[#0A192F] hero-reveal bg-white">
          <div className="col-span-12 lg:col-span-7 border-r border-[#0A192F] p-8 lg:p-24 flex flex-col justify-center relative">
            <div className="space-y-10 stagger-item">
              <span className="text-[#2A5CC0] font-bold tracking-[0.2em] uppercase text-sm border-b-2 border-[#2A5CC0]/20 pb-1">
                Contabilidad de Precisión
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-[90px] font-black text-[#0A192F] leading-[0.95] font-inter">
                Claridad en los
                <br />
                Números.
              </h1>
              <p className="text-xl text-[#0A192F]/80 max-w-lg leading-relaxed font-medium">
                Supervisión financiera meticulosa para la empresa moderna.
                Traducimos datos fiscales complejos en claridad estratégica.
              </p>
              <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="#contact"
                  className="bg-[#0A192F] text-white px-8 py-6 text-center font-bold uppercase tracking-[0.15em] sharp hover:bg-[#2A5CC0] transition-colors block"
                >
                  Auditar
                </a>
                <a
                  href="#services"
                  className="flex items-center justify-center font-bold uppercase tracking-[0.15em] text-[#0A192F] hover:text-[#2A5CC0] transition-colors"
                >
                  Ver Soluciones <MoveRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 relative h-[300px] sm:h-[400px] lg:h-auto overflow-hidden bg-[#0A192F]">
            <img
              src="https://images.unsplash.com/photo-1737574821698-862e77f044c1?auto=format&w=1200&q=80&fit=crop"
              alt="Ejecutivo Contable"
              width={1200}
              height={900}
              className="w-full h-full object-cover grayscale contrast-125 opacity-90"
            />
            <div className="absolute inset-0 border border-[#0A192F] z-10 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
