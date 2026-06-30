import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calculator, FileText } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
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
      id="services"
      ref={sectionRef}
      className="py-32 bg-[#FAFAFA] relative border-t border-[#0A192F]/10"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#2A5CC0] font-bold tracking-[0.3em] uppercase text-xs block mb-4">
              Divisiones Funcionales
            </span>
            <h2 className="text-5xl font-black text-[#0A192F] font-inter">
              Diseñado para la Precisión.
            </h2>
          </div>
          <div className="text-[#0A192F]/40 text-sm font-bold uppercase tracking-[0.2em] border-l-2 border-[#0A192F] pl-6 h-fit">
            Fund. 2018
            <br />
            Zúrich / Nueva York
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="service-item bg-[#0A192F] p-6 md:p-10 text-white flex flex-col justify-between h-48 md:h-56 group">
            <span className="text-5xl font-black font-inter">15+</span>
            <span className="uppercase tracking-[0.15em] text-xs font-bold opacity-80">
              Años de Enfoque
            </span>
          </div>
          <div className="service-item border border-[#0A192F] p-6 md:p-10 flex flex-col justify-between h-48 md:h-56 bg-white group">
            <span className="text-5xl font-black font-inter text-[#0A192F]">
              500+
            </span>
            <span className="uppercase tracking-[0.15em] text-xs font-bold text-[#0A192F]/80">
              Auditorías / Año
            </span>
          </div>
          <div className="service-item bg-[#2A5CC0] p-6 md:p-10 text-white flex flex-col justify-between h-48 md:h-56 group">
            <span className="text-5xl font-black font-inter">98.4%</span>
            <span className="uppercase tracking-[0.15em] text-xs font-bold opacity-90">
              Éxito en Apelaciones
            </span>
          </div>
          <div className="service-item border border-[#0A192F] p-6 md:p-10 flex flex-col justify-between h-48 md:h-56 bg-white group">
            <span className="text-5xl font-black font-inter text-[#0A192F]">
              $2.4B
            </span>
            <span className="uppercase tracking-[0.15em] text-xs font-bold text-[#0A192F]/80">
              Portafolio Gestionado
            </span>
          </div>

          <div className="service-item md:col-span-2 border border-[#0A192F] p-8 md:p-16 bg-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity">
              <Calculator className="w-24 h-24 md:w-32 md:h-32" />
            </div>
            <h3 className="text-3xl font-black mb-8 font-inter uppercase tracking-tight">
              Preparación de Impuestos
            </h3>
            <ul className="space-y-6">
              <li className="flex items-center text-[#0A192F]/70 font-medium">
                <span className="w-2 h-2 bg-[#2A5CC0] mr-4"></span> Estructuración
                Corporativa
              </li>
              <li className="flex items-center text-[#0A192F]/70 font-medium">
                <span className="w-2 h-2 bg-[#2A5CC0] mr-4"></span>{" "}
                Optimización Fiscal Internacional
              </li>
              <li className="flex items-center text-[#0A192F]/70 font-medium">
                <span className="w-2 h-2 bg-[#2A5CC0] mr-4"></span> Cumplimiento
                de Portafolios HNW
              </li>
            </ul>
          </div>

          <div className="service-item md:col-span-2 border border-[#0A192F] p-8 md:p-16 bg-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity">
              <FileText className="w-24 h-24 md:w-32 md:h-32" />
            </div>
            <h3 className="text-3xl font-black mb-8 font-inter uppercase tracking-tight">
              Auditoría y Aseguramiento
            </h3>
            <ul className="space-y-6">
              <li className="flex items-center text-[#0A192F]/70 font-medium">
                <span className="w-2 h-2 bg-[#0A192F] mr-4"></span> Descubrimiento
                Financiero Forense
              </li>
              <li className="flex items-center text-[#0A192F]/70 font-medium">
                <span className="w-2 h-2 bg-[#0A192F] mr-4"></span> Revisión de
                Integridad Regulatoria
              </li>
              <li className="flex items-center text-[#0A192F]/70 font-medium">
                <span className="w-2 h-2 bg-[#0A192F] mr-4"></span> Informes de
                Aseguramiento a Inversores
              </li>
            </ul>
          </div>

          <div className="service-item lg:col-span-4 bg-[#0A192F] p-8 md:p-16 text-white flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 group">
            <div className="max-w-3xl">
              <h3 className="text-4xl font-black mb-4 font-inter">
                Consultoría Estratégica
              </h3>
              <p className="text-lg opacity-70 leading-relaxed">
                Modelado financiero avanzado y estrategias de asignación de
                capital a largo plazo diseñadas para empresas tecnológicas de
                alto crecimiento e inversores institucionales.
              </p>
            </div>
            <button className="border border-white/60 text-white px-12 py-5 font-bold uppercase tracking-[0.15em] sharp hover:bg-white hover:text-[#0A192F] transition-all duration-500 whitespace-nowrap">
              Iniciar Estrategia
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
