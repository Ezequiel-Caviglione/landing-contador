import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { MapPin, Phone, Check } from "lucide-react";

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const submitBtnRef = useRef<HTMLButtonElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-reveal", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 40,
        autoAlpha: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitted) return;

    const btn = submitBtnRef.current;
    if (!btn) return;

    const label = btn.querySelector(".btn-label");
    const check = btn.querySelector(".success-check");

    const tl = gsap.timeline({
      onComplete: () => setIsSubmitted(true),
    });

    tl.to(label, {
      opacity: 0,
      y: -10,
      duration: 0.4,
      ease: "power2.out",
    })
      .to(
        btn,
        {
          width: 70,
          backgroundColor: "#2A5CC0",
          duration: 0.6,
          ease: "expo.inOut",
        },
        "-=0.2"
      )
      .to(
        check,
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "back.out(1.7)",
        },
        "-=0.1"
      );
  };

  return (
    <section id="contact" ref={sectionRef} className="py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 border border-[#0A192F] contact-reveal">
          <div className="bg-[#0A192F] p-6 sm:p-8 md:p-24 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-12 sm:mb-16 font-inter leading-none">
                Consolidemos tu Futuro.
              </h2>
              <div className="space-y-10 sm:space-y-12">
                <div className="flex items-start">
                  <MapPin className="w-8 h-8 text-[#2A5CC0] mr-6 shrink-0" />
                  <div>
                    <span className="uppercase tracking-widest text-[10px] font-bold opacity-40 block mb-2">
                      Oficina Central
                    </span>
                    <p className="text-xl font-medium">
                      240 Finance Plaza, Suite 400
                      <br />
                      New York, NY 10004
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-8 h-8 text-[#2A5CC0] mr-6 shrink-0" />
                  <div>
                    <span className="uppercase tracking-widest text-[10px] font-bold opacity-40 block mb-2">
                      Comunicación Directa
                    </span>
                    <p className="text-xl font-medium">+1 (555) 092 4821</p>
                    <p className="text-lg sm:text-xl font-medium break-all">
                      m.thorne@thorneassociates.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 sm:mt-16 md:mt-24 pt-6 sm:pt-8 md:pt-12 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex space-x-6 text-2xl opacity-60 hover:opacity-100 transition-opacity">
                <span className="cursor-default">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </span>
                <span className="cursor-default">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 italic">
                Respuesta en 24hs
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-8 md:p-24 bg-white">
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 md:space-y-10">
              <div className="relative group">
                <label className="block text-xs uppercase tracking-[0.1em] font-black text-[#0A192F]/80 mb-3">
                  Identificación
                </label>
                <input
                  type="text"
                  placeholder="Nombre o Empresa"
                  required
                    className="w-full py-4 text-lg sm:text-xl border-b border-[#0A192F]/20 focus:border-[#0A192F] outline-none bg-transparent placeholder:text-[#0A192F]/40 font-medium transition-all"
                  />
                </div>

                <div className="relative group">
                  <label className="block text-xs uppercase tracking-[0.1em] font-black text-[#0A192F]/80 mb-3">
                    Alcance Digital
                  </label>
                  <input
                    type="email"
                    placeholder="email@dominio.com"
                    required
                    className="w-full py-4 text-lg sm:text-xl border-b border-[#0A192F]/20 focus:border-[#0A192F] outline-none bg-transparent placeholder:text-[#0A192F]/40 font-medium transition-all"
                />
              </div>

              <div className="relative group">
                <label className="block text-xs uppercase tracking-[0.1em] font-black text-[#0A192F]/80 mb-3">
                  Objetivo
                </label>
                <div className="relative">
                  <select
                    required
                    className="w-full py-4 pr-8 text-lg sm:text-xl border-b border-[#0A192F]/20 focus:border-[#2A5CC0] outline-none bg-transparent appearance-none font-medium transition-colors cursor-pointer text-[#0A192F] truncate"
                  >
                    <option value="" disabled>
                      Seleccionar Tipo de Servicio
                    </option>
                    <option value="tax">Prep. de Impuestos y Estrategia</option>
                    <option value="audit">Auditoría Corporativa y Aseguramiento</option>
                    <option value="consulting">Consultoría de Capital Estratégico</option>
                  </select>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[#0A192F]/40 pointer-events-none">
                    ▼
                  </div>
                </div>
              </div>

              <div className="relative group">
                <label className="block text-xs uppercase tracking-[0.1em] font-black text-[#0A192F]/80 mb-3">
                  Contexto
                </label>
                <textarea
                  rows={3}
                  placeholder="Breve resumen de requisitos..."
                  required
                    className="w-full py-4 text-lg sm:text-xl border-b border-[#0A192F]/20 focus:border-[#0A192F] outline-none bg-transparent resize-none placeholder:text-[#0A192F]/40 font-medium transition-all"
                ></textarea>
              </div>

              <div className="pt-8">
                <button
                  type="submit"
                  ref={submitBtnRef}
                  className="w-full bg-[#0A192F] text-white py-6 text-xl font-bold uppercase tracking-widest sharp hover:bg-[#2A5CC0] transition-all relative overflow-hidden flex items-center justify-center mx-auto"
                >
                  <span className="btn-label">Enviar Consulta</span>
                  <div className="success-check opacity-0 scale-0 absolute flex items-center justify-center">
                    <Check className="w-8 h-8 text-white stroke-[4px]" />
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
