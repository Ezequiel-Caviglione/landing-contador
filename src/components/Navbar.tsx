import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#services", label: "Servicios" },
  { href: "#about", label: "Firma" },
  { href: "#testimonials", label: "Resultados" },
  { href: "#contact", label: "Contacto", active: true },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#FAFAFA]/90 backdrop-blur-sm border-b border-[#0A192F]/10">
      <div className="container mx-auto px-6 md:px-12 h-20 flex items-center justify-between min-w-0">
        <a href="#" className="flex items-center space-x-2 shrink min-w-0">
          <div className="w-8 h-8 bg-[#0A192F] flex items-center justify-center">
            <span className="text-white font-black text-xl">T</span>
          </div>
          <span className="font-bold text-lg md:text-xl tracking-tighter uppercase font-inter truncate">
            Thorne & Associates
          </span>
        </a>

        <div className="hidden md:flex space-x-12 text-xs font-black uppercase tracking-[0.2em]">
          {NAV_LINKS.map(({ href, label, active }) =>
            active ? (
              <a key={href} href={href} className="text-[#0A192F] border-b-2 border-[#0A192F] py-2">
                {label}
              </a>
            ) : (
              <a key={href} href={href} className="hover:text-[#2A5CC0] transition-all relative group py-2">
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2A5CC0] group-hover:w-full transition-all"></span>
              </a>
            )
          )}
        </div>

        <button
          className="md:hidden p-2 text-[#0A192F]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#FAFAFA]/95 backdrop-blur-md border-b border-[#0A192F]/10">
          <div className="flex flex-col px-6 py-8 space-y-8 text-xs font-black uppercase tracking-[0.2em]">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="hover:text-[#2A5CC0] transition-colors py-2"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
