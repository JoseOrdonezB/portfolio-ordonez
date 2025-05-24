import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiPostgresql,
  SiPython
} from "react-icons/si";

const skills = [
  {
    icon: <SiHtml5 size={32} />,
    title: "HTML5 & CSS3",
    description: "Estandar de construcción y diseño para interfaces web modernas y accesibles."
  },
  {
    icon: <SiJavascript size={32} />,
    title: "JavaScript",
    description: "Lenguaje esencial para crear experiencias web interactivas y dinámicas."
  },
  {
    icon: <SiReact size={32} />,
    title: "React",
    description: "Librería para construir interfaces de usuario rápidas y componentes reutilizables."
  },
  {
    icon: <SiTailwindcss size={32} />,
    title: "Tailwind CSS",
    description: "Framework de estilos que permite construir interfaces personalizadas rápidamente."
  },
  {
    icon: <SiPostgresql size={32} />,
    title: "PostgreSQL",
    description: "Base de datos relacional confiable, ideal para aplicaciones con grandes volúmenes de datos."
  },
  {
    icon: <SiPython size={32} />,
    title: "Python",
    description: "Lenguaje de programación versátil y fácil de aprender, popular en ciencia de datos y desarrollo web."
  }
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="
        min-h-screen flex flex-col justify-center items-center
        gap-12 px-4 py-16 text-[#213547]
      "
    >
      {/* Título animado */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-2"
      >
        <h2 className="text-5xl font-bold">Tecnologías</h2>
        <div className="h-1 w-18 bg-[#c22a2a] rounded-full"></div>
      </motion.div>

      {/* Grid de habilidades con animación */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl
        "
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="
              bg-[#f9f9f9] rounded-lg p-6 flex flex-col items-center gap-3
              border border-[#c22a2a]/20 hover:border-[#c22a2a] shadow-sm
              hover:shadow-md transition
            "
          >
            <div className="text-[#c22a2a]">{skill.icon}</div>
            <h3 className="font-semibold text-base">{skill.title}</h3>
            <p className="text-xs opacity-70 text-center">{skill.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;