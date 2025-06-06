import { useState } from "react";
import Link from "../layouts/Links";
import { LinkButtonHover } from "../layouts/Buttons";
import MenuButton from "../layouts/MenuButton";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black">
      <nav className="flex justify-between items-center h-20 py-6 px-20 max-lg:px-10 max-w-[1430px] mx-auto">
        <a href="./" title="AgriTech">
          <h1 className="text-3xl font-semibold max-lg:text-2xl">AgriTech</h1>
        </a>

        {/* Botão de menu: só aparece em telas <768px */}
        <div className="md:hidden">
          <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        {/* Menu de navegação */}
        <ul
          className={`flex flex-col md:flex-row gap-6 absolute md:static top-20 left-0 w-full md:w-auto bg-black md:bg-transparent py-4 md:py-0 px-6 md:px-0 transition-all duration-300 z-40 
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto"}`}
        >
          <Link href="#home" title="Início" text="início" />
          <Link href="#about" title="Sobre" text="sobre" />
          <Link href="#gallery" title="Galeria" text="galeria" />
          <Link href="#projects" title="Projetos" text="projetos" />
          <Link href="#questions" title="Dúvidas?" text="dúvidas?" />
          <LinkButtonHover href="#enrollment" title="Inscreva-se" text="inscreva-se" />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
