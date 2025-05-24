import React from "react";
import { Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    name: "UVGride",
    description:
      "Una innovadora app móvil que conecta a los estudiantes de UVG para compartir rutas y optimizar la movilidad universitaria.",
    image: "./src/assets/uvgride.webp",
    repo: "https://github.com/Anton17303/Proyecto-UVGride.git",
    tech: ["React Native", "Expo", "Node.js", "Express", "PostgreSQL"]
  },
  {
    id: 2,
    name: "Calculadora",
    description:
      "Calculadora web con diseño minimalista y componentes reutilizables, ideal para prácticas de desarrollo front-end.",
    image: "./src/assets/calculadora.webp",
    repo: "https://github.com/JoseOrdonezB/proyecto-1.git",
    tech: ["React", "JavaScript", "CSS"]
  },
  {
    id: 3,
    name: "Gestión de cursos",
    description:
      "Plataforma moderna y eficiente para la gestión de cursos y estudiantes, con integración de bases de datos.",
    image: "./src/assets/cursos.webp",
    repo: "https://github.com/JoseOrdonezB/proyecto3-db.git",
    tech: ["Python", "PostgreSQL", "Docker", "CSS", "JavaScript"]
  }
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center gap-12 px-4 py-16 pt-24 md:pt-2  text-[#213547]"
    >
      {/* Título animado */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-2"
      >
        <h2 className="text-5xl font-bold">Proyectos</h2>
        <div className="h-1 w-18 bg-[#c22a2a] rounded-full"></div>
      </motion.div>

      {/* Lista de proyectos animada */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col gap-12 w-full max-w-3xl"
      >
        {projects.map(({ id, name, description, image, repo, tech }) => (
          <div
            key={id}
            className="
              bg-[#f9f9f9] rounded-lg overflow-hidden shadow-sm
              hover:shadow-md transition-shadow border border-[#c22a2a]/20
              flex flex-col
            "
          >
            {/* Imagen del proyecto */}
            <div className="w-full h-64 overflow-hidden">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info del proyecto */}
            <div className="p-6 flex flex-col gap-3">
              <h3 className="text-xl font-bold text-[#c22a2a]">{name}</h3>
              <p className="text-sm opacity-80">{description}</p>

              {/* Tecnologías utilizadas */}
              <div className="flex flex-wrap gap-2 mt-2">
                {tech.map((t, index) => (
                  <span
                    key={index}
                    className="text-xs bg-[#c22a2a]/10 text-[#c22a2a] px-2 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Link al repositorio */}
              <a
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[#213547] hover:text-[#c22a2a] transition-colors text-sm mt-2"
              >
                <Github size={16} /> Repositorio
              </a>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;