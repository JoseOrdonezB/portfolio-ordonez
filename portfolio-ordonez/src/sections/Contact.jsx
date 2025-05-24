import React, { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica
    if (!formData.name || !formData.email || !formData.message) {
      alert("Por favor completa todos los campos.");
      return;
    }

    // Simula "envío" y limpia campos
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      message: ""
    });

    // Quita mensaje de confirmación tras 3 segundos
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      className="
        min-h-screen flex flex-col justify-center items-center gap-12
        px-4 py-16 text-[#213547]
      "
    >
      {/* Título con animación */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-2"
      >
        <h2 className="text-5xl font-bold">Contacto</h2>
        <div className="h-1 w-18 bg-[#c22a2a] rounded-full"></div>
      </motion.div>

      {/* Contenido con animación */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-md w-full flex flex-col gap-6"
      >
        <p className="text-center text-sm opacity-80">
          ¿Tienes alguna pregunta o quieres trabajar conmigo? ¡Déjame un mensaje!
        </p>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
            required
            className="
              bg-white border border-[#c22a2a]/20 rounded-md px-4 py-2
              focus:outline-none focus:border-[#c22a2a] transition-colors
            "
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
            className="
              bg-white border border-[#c22a2a]/20 rounded-md px-4 py-2
              focus:outline-none focus:border-[#c22a2a] transition-colors
            "
          />
          <textarea
            name="message"
            placeholder="Tu mensaje..."
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="
              bg-white border border-[#c22a2a]/20 rounded-md px-4 py-2
              focus:outline-none focus:border-[#c22a2a] resize-none transition-colors
            "
          ></textarea>
          <button
            type="submit"
            className="
              bg-[#c22a2a] text-white rounded-md py-2 font-semibold
              hover:bg-[#c22a2a]/90 transition-colors
            "
          >
            Enviar
          </button>
        </form>

        {/* Mensaje de confirmación */}
        {submitted && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-sm text-[#c22a2a] font-semibold text-center"
          >
            ¡Mensaje no enviado exitosamente :)!
          </motion.p>
        )}

        {/* Otras formas de contacto */}
        <div className="flex flex-col items-center gap-2 mt-4 text-sm">
          <p className="opacity-80">O contáctame a través de:</p>
          <div className="flex gap-4 mt-2">
            <a
              href="https://github.com/JoseOrdonezB"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c22a2a] transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/jose-ordo%C3%B1ez-906242327/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c22a2a] transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;