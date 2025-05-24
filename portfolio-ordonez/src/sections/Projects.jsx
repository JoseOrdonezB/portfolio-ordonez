import React from "react";
import { Github } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Proyecto 1",
    description: "Descripción breve del proyecto 1.",
    image: "./src/assets/project1.png", // Reemplázalo con la ruta de tu imagen
    repo: "https://github.com/JoseOrdonezB/proyecto-1"
  },
  {
    id: 2,
    name: "Proyecto 2",
    description: "Descripción breve del proyecto 2.",
    image: "./src/assets/project2.png",
    repo: "https://github.com/JoseOrdonezB/proyecto-2"
  },
  {
    id: 3,
    name: "Proyecto 3",
    description: "Descripción breve del proyecto 3.",
    image: "./src/assets/project3.png",
    repo: "https://github.com/JoseOrdonezB/proyecto-3"
  },
  {
    id: 4,
    name: "Proyecto 4",
    description: "Descripción breve del proyecto 4.",
    image: "./src/assets/project4.png",
    repo: "https://github.com/JoseOrdonezB/proyecto-4"
  }
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="
        min-h-screen flex flex-col justify-center items-center
        gap-12 px-4 py-16 bg-white text-[#213547]
      "
    >
      {/* Título */}
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-3xl font-bold">Proyectos</h2>
        <div className="h-1 w-12 bg-[#c22a2a] rounded-full"></div>
      </div>

      {/* Grid de proyectos */}
      <div
        className="
          grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl
        "
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="
              bg-[#f9f9f9] rounded-lg overflow-hidden shadow-sm
              hover:shadow-md transition-shadow border border-[#c22a2a]/20
            "
          >
            <div className="w-full h-48 overflow-hidden">
              {/* Imagen del proyecto */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 flex flex-col gap-2">
              <h3 className="text-lg font-bold">{project.name}</h3>
              <p className="text-sm opacity-80">{project.description}</p>

              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[#213547] hover:text-[#c22a2a] transition-colors text-sm mt-2"
              >
                <Github size={16} /> Repositorio
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;