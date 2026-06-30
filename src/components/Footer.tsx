import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAFAFA] border-t border-[#0A192F]/10 py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-[#0A192F] flex items-center justify-center">
                <span className="text-white font-black text-2xl">T</span>
              </div>
              <span className="font-black text-2xl tracking-tighter uppercase font-inter">
                Thorne & Associates
              </span>
            </div>
            <p className="text-[#0A192F]/60 max-w-sm font-bold uppercase tracking-[0.1em] text-xs leading-relaxed">
              Brindando claridad estructurada en un panorama financiero cada vez
              más volátil. Práctica de CPA Registrada #940122.
            </p>
          </div>

          <div className="space-y-6">
            <h5 className="font-black uppercase tracking-[0.15em] text-xs text-[#0A192F]">
              Soluciones
            </h5>
            <ul className="space-y-3 text-[#0A192F]/70 font-bold uppercase tracking-[0.1em] text-xs">
              <li>
                <a href="#" className="hover:text-[#2A5CC0] transition-colors">
                  Impuestos Corporativos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2A5CC0] transition-colors">
                  Sistemas de Auditoría
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2A5CC0] transition-colors">
                  Evaluación de Riesgos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2A5CC0] transition-colors">
                  Consultoría
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="font-black uppercase tracking-[0.15em] text-xs text-[#0A192F]">
              Ubicaciones
            </h5>
            <ul className="space-y-3 text-[#0A192F]/70 font-bold uppercase tracking-[0.1em] text-xs">
              <li>New York, NY</li>
              <li>Zúrich, CH</li>
              <li>Londres, RU</li>
              <li>Singapore, SG</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-[#0A192F]/10 pt-8 gap-6">
          <span className="text-[#0A192F]/50 font-bold uppercase tracking-[0.2em] text-xs text-center md:text-left">
            &copy; 2024 Thorne & Associates. Estilo Internacional.
          </span>
          <div className="flex items-center space-x-4 text-[#0A192F]/40 text-xs font-black tracking-widest uppercase">
            <span>Ingeniería de Precisión</span>
            <span className="w-2 h-2 bg-[#0A192F]/20"></span>
            <span>Todos los Derechos Reservados</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
