import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 mt-10 border-t border-white/10">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 text-sm">
        <p className="opacity-80">
          © {new Date().getFullYear()} Jose Ordoñez. Casi todos los derechos reservados.
        </p>

        <div className="flex gap-6">
          <a
            href="https://github.com/JoseOrdonezB"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white hover:text-[#c22a2a] transition-colors"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jose-ordo%C3%B1ez-906242327/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white hover:text-[#c22a2a] transition-colors"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer