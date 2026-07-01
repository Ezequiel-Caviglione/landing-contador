import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 40,
        autoAlpha: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".timeline-item", {
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 70%",
        },
        x: -40,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-16 items-start">
          <div className="w-full lg:col-span-5 order-2 lg:order-1 about-item">
            <div className="relative bg-[#0A192F] p-6 sm:p-8 md:p-12 lg:p-16">
              <img
                src="https://images.unsplash.com/photo-1771244702701-6c9edac63255?auto=format&w=1200&q=80&fit=crop"
                alt="Marcus Thorne, CPA"
                width={800}
                height={1000}
                className="w-full grayscale brightness-90 contrast-110 shadow-2xl"
              />
              <div className="hidden sm:block absolute -bottom-8 -right-8 w-48 h-48 bg-[#2A5CC0]/10 -z-10"></div>
            </div>
          </div>

          <div className="w-full lg:col-span-7 order-1 lg:order-2 about-item min-w-0">
            <span className="text-[#2A5CC0] font-bold tracking-[0.3em] uppercase text-xs block mb-6">
              Fundador y Principal
            </span>
            <h2 className="text-5xl sm:text-6xl font-black text-[#0A192F] mb-10 font-inter leading-none">
              Marcus Thorne.
            </h2>
            <p className="text-lg sm:text-xl text-[#0A192F]/60 mb-16 max-w-2xl leading-relaxed font-medium">
              Graduado de la London School of Economics, Marcus ha dedicado dos
              décadas a refinar una filosofía de{" "}
              <span className="text-[#0A192F] border-b-2 border-[#2A5CC0]">
                verdad financiera objetiva
              </span>
              . Nuestra práctica se sostiene en la misión singular de
              proporcionar cimientos fiscales inquebrantables.
            </p>

            <div className="space-y-12 md:space-y-16 relative timeline-container">
              <div className="absolute left-[4px] top-4 bottom-4 w-px bg-[#0A192F]/10"></div>

              <div className="pl-10 md:pl-14 relative timeline-item">
                <div className="absolute left-0 top-2 w-2.5 h-2.5 bg-[#2A5CC0] sharp"></div>
                <span className="text-xs font-black text-[#2A5CC0] uppercase tracking-[0.15em] block mb-2">
                  Formación Académica
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#0A192F] mb-2 font-inter break-words">
                  Maestría en Finanzas, LSE{" "}
                  <span className="text-xs font-normal opacity-40 ml-2">
                    2008
                  </span>
                </h3>
                <p className="text-[#0A192F]/70 font-medium leading-relaxed">
                  Formación académica de primer nivel en sistemas tributarios
                  globales y política macrofiscal.
                </p>
              </div>

              <div className="pl-10 md:pl-14 relative timeline-item">
                <div className="absolute left-0 top-2 w-2.5 h-2.5 bg-[#2A5CC0] sharp"></div>
                <span className="text-xs font-black text-[#2A5CC0] uppercase tracking-[0.15em] block mb-2">
                  Rigor Profesional
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#0A192F] mb-2 font-inter break-words">
                  Certificación Auditor Big Four{" "}
                  <span className="text-xs font-normal opacity-40 ml-2">
                    2012
                  </span>
                </h3>
                <p className="text-[#0A192F]/70 font-medium leading-relaxed">
                  Gestión de auditorías complejas para empresas Fortune 500 y
                  firmas de capital de riesgo.
                </p>
              </div>

              <div className="pl-10 md:pl-14 relative timeline-item">
                <div className="absolute left-0 top-2 w-2.5 h-2.5 bg-[#2A5CC0] sharp"></div>
                <span className="text-xs font-black text-[#2A5CC0] uppercase tracking-[0.15em] block mb-2">
                  Filosofía Boutique
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#0A192F] mb-2 font-inter break-words">
                  Fundación de Thorne & Associates{" "}
                  <span className="text-xs font-normal opacity-40 ml-2">
                    2018
                  </span>
                </h3>
                <p className="text-[#0A192F]/70 font-medium leading-relaxed">
                  Establecimiento de una práctica boutique de alta fidelidad
                  enfocada en la precisión absoluta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
