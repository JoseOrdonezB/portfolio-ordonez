import React from "react";
import { Github, Linkedin, ChevronsDown } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="
        min-h-screen flex flex-col md:flex-row items-center justify-center
        gap-10 px-4 py-10 text-[#213547] relative
      "
    >
      {/* Imagen con animación */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="
          flex-shrink-0 w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden
          border-4 border-[#c22a2a] shadow-lg
        "
      >
        <img
          src="./src/assets/avatar.webp"
          alt="Jose Ordoñez"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Texto e info con animación */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-xl text-center md:text-left space-y-3"
      >
        <p className="text-lg md:text-xl text-[#c22a2a] font-semibold tracking-wide">
          Hola, soy
        </p>
        <h1 className="text-4xl md:text-5xl font-bold">Jose Pablo</h1>
        <h2 className="text-lg md:text-xl text-[#c22a2a] font-bold">
          Frontend Developer
        </h2>
        <p className="text-sm opacity-80">
          Soy estudiante de Ingeniería en Ciencias de la Computación, con una
          gran pasión por el desarrollo web y los videojuegos. Siempre en busca
          de nuevas oportunidades para aprender y seguir mejorando mis
          habilidades.
        </p>

        {/* Enlaces */}
        <div className="flex gap-4 justify-center md:justify-start mt-4">
          <a
            href="https://github.com/JoseOrdonezB"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors text-[#213547] hover:text-[#c22a2a]"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/jose-ordo%C3%B1ez-906242327/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors text-[#213547] hover:text-[#c22a2a]"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </motion.div>

      {/* Señal de scroll con animación */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="absolute bottom-6 flex flex-col items-center text-[#c22a2a] animate-bounce"
      >
        <ChevronsDown size={24} />
        <span className="text-xs font-medium">Scroll para ver más</span>
      </motion.div>
    </section>
  );
};

export default Hero;