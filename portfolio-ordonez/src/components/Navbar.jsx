import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
        mx-auto px-6 py-4
        ${scrolled
          ? 'mt-5 max-w-5xl rounded-2xl bg-green-600/80 shadow-lg backdrop-blur-md border border-white/10'
          : 'mt-0 max-w-full rounded-none bg-red-700'
        }`}>
        
      <div className="flex justify-between items-center text-white text-sm font-medium">
        <div className="text-lg font-bold tracking-wide">
          Jose 🐐
        </div>
        
        <div className="flex gap-6">
          <a href="#hero" className="hover:text-lime-300 transition-colors">Inicio</a>
          <a href="#about" className="hover:text-lime-300 transition-colors">Sobre mí</a>
          <a href="#skills" className="hover:text-lime-300 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-lime-300 transition-colors">Proyectos</a>
          <a href="#contact" className="hover:text-lime-300 transition-colors">Contacto</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar