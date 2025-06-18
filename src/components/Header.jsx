import { useState, useEffect, useRef } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { Link } from "../layouts/Links";
import { BorderButton } from "../layouts/Buttons";
import MenuButton from "../layouts/MenuButton";

/* Navegation links */
const sections = [
  {
    to: "home",
    title: "Início",
    text: "início"
  },
  {
    to: "about",
    title: "Sobre",
    text: "sobre"
  },
  {
    to: "projects",
    title: "Projetos",
    text: "projetos"
  },
  {
    to: "stories",
    title: "Histórias",
    text: "histórias"
  },
  {
    to: "gallery",
    title: "Galeria",
    text: "galeria"
  },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const [activeSection, setActiveSection] = useState("home");
  const linkRefs = useRef({})


  /* Para evitar o scroll quando o menu estiver aberto */
  useEffect(() => {
  if (isOpen) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);


  /* Acessibilidade para fechar o menu com a tecla ESC */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  /* Detecta a largura da tela */
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-almond">
      <nav className="flex justify-between items-center h-20 py-6 px-20 max-lg:px-10 max-md:px-6 max-w-[1430px] mx-auto">
        <a href="/" title="AgriTech" role="link" tabIndex={0}>
          <h1 className="text-3xl font-medium font-titles max-lg:text-2xl">AgriTech</h1>
        </a>

        {/* Botão de menu: só aparece em telas <768px */}
        <div className="md:hidden">
          <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        {/* Menu de navegação com Framer-motion */}
        <AnimatePresence>
          {(isOpen || isDesktop) && (
            <motion.ul
              key="nav-menu"
              id="main-menu"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex flex-col md:flex-row max-md:items-center max-md:justify-center gap-6 max-md:gap-8 absolute md:static top-20 left-0 w-full md:w-auto max-md:h-[calc(100vh-80px)] bg-black-700 py-4 md:py-0 px-6 md:px-0 z-40 
              ${isOpen || isDesktop ? "pointer-events-auto" : "pointer-events-none"}
              `}
            >
              {sections.map((section) => (
                <div key={section.to} ref={(el) => (linkRefs.current[section.to] = el)}>
                    <Link
                      to={section.to}
                      title={section.title}
                      text={section.text}
                      onClick={() => {
                        setIsOpen(false);
                      }}
                      onSetActive={() => setActiveSection(section.to)}
                      className={activeSection === section.to ? "text-olive-800" : "text-contrast"}
                    />
                  </div>
                ))}
                <BorderButton to="newsletter" title="Receba notícias" text="receba notícias" onClick={() => setActiveSection("")} />
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Header
