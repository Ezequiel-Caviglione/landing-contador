import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Quote } from "lucide-react";

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-reveal", {
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-32 bg-[#FAFAFA] border-y border-[#0A192F]/5"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-0">
          <div className="col-span-12 lg:col-span-7 border-r border-[#0A192F]/10 pr-0 lg:pr-24 pb-16 lg:pb-0 testimonial-reveal">
            <span className="text-[#2A5CC0] font-bold tracking-[0.3em] uppercase text-xs block mb-8">
              Éxito del Cliente
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-[#0A192F] mb-12 font-inter">
              Proactivos,
              <br />
              No Reactivos.
            </h2>

            <div className="space-y-16 md:space-y-24">
              <div>
              <h4 className="text-2xl font-bold text-[#0A192F] mb-6 font-inter uppercase">
                Cero Margen de Error
              </h4>
              <p className="text-lg text-[#0A192F]/60 leading-relaxed font-medium">
                Creemos que la contabilidad debe ser el componente más
                confiable de la arquitectura de tu negocio. Nuestros sistemas
                están diseñados para eliminar las «sorpresas» que descarrilan
                el impulso comercial.
              </p>
              </div>

              <div>
              <h4 className="text-2xl font-bold text-[#0A192F] mb-6 font-inter uppercase">
                Estrategia Integrada
              </h4>
              <p className="text-lg text-[#0A192F]/60 leading-relaxed font-medium">
                La preparación de impuestos no es una tarea anual; es una
                ventaja táctica durante todo el año. Alineamos tu calendario
                fiscal con tus objetivos de crecimiento para maximizar la
                eficiencia del capital.
              </p>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 flex flex-col justify-center space-y-8 md:space-y-16 pl-0 lg:pl-20 relative testimonial-reveal">
            <div className="p-6 md:p-10 border border-[#0A192F]/20 bg-white relative">
              <div className="hidden lg:block testimonial-connector pointer-events-none"></div>
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#0A192F] flex items-center justify-center">
                <Quote className="text-white w-4 h-4" />
              </div>
              <p className="text-lg font-bold text-[#0A192F] mb-6 italic">
                «La auditoría de Thorne transformó la forma en que nuestro
                directorio ve el riesgo financiero. Su precisión no tiene
                igual en la industria.»
              </p>
              <div className="border-t border-[#0A192F]/10 pt-4">
                <span className="block font-black uppercase tracking-[0.1em] text-xs text-[#0A192F]">
                  David Chen
                </span>
                <span className="text-xs text-[#0A192F]/70 uppercase tracking-widest font-bold">
                  Director Financiero, Lumina Systems
                </span>
              </div>
            </div>

            <div className="p-6 md:p-10 border border-[#0A192F]/20 bg-white relative">
              <div className="hidden lg:block testimonial-connector pointer-events-none"></div>
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#2A5CC0] flex items-center justify-center">
                <Quote className="text-white w-4 h-4" />
              </div>
              <p className="text-lg font-bold text-[#0A192F] mb-6 italic">
                «Desde que nos asociamos con Thorne para la estrategia fiscal,
                hemos optimizado nuestra exposición internacional en un 22%
                anual.»
              </p>
              <div className="border-t border-[#0A192F]/10 pt-4">
                <span className="block font-black uppercase tracking-[0.1em] text-xs text-[#0A192F]">
                  Sarah Jenkins
                </span>
                <span className="text-xs text-[#0A192F]/70 uppercase tracking-widest font-bold">
                  Fundadora, Nexus Logistics
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
