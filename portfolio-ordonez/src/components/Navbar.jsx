import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
        mx-auto px-6 py-4
        ${
          scrolled
            ? "mt-5 max-w-2xl rounded-2xl backdrop-blur-md shadow-md bg-[#b76a6a]/10"
            : "mt-0 max-w-full rounded-none bg-white/40  shadow-sm"
        }
      `}
    >
      <div
        className="
          flex justify-between items-center text-sm font-medium text-[#213547]
        "
      >
        {/* Logo / Nombre */}
        <div className="text-lg font-bold tracking-wide text-[#c22a2a]">
          Jose Pablo
        </div>

        {/* Navegación */}
        <div className="flex gap-6">
          <a
            href="#hero"
            className="transition-colors text-[#213547] hover:text-[#c22a2a]"
          >
            Inicio
          </a>

          <a
            href="#projects"
            className="transition-colors text-[#213547] hover:text-[#c22a2a]"
          >
            Proyectos
          </a>
          <a
            href="#skills"
            className="transition-colors text-[#213547] hover:text-[#c22a2a]"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="transition-colors text-[#213547] hover:text-[#c22a2a]"
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;