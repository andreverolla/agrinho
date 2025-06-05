import { useState } from "react";
import Link from "../layouts/Links";
import { LinkButtonHover } from "../layouts/Buttons";
import MenuButton from "../layouts/MenuButton";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 z-50 w-full h-20 bg-transparent">
      <nav className="flex justify-between items-center h-[70px] py-6 px-20 max-lg:px-10 w-full max-w-[1280px]">
        <a href="./" title="AgriTech">
          <h1 className="text-3xl font-semibold max-lg:text-2xl">AgriTech</h1>
        </a>

        {/* Botão de menu: só aparece em telas <768px */}
        <div className="md:hidden">
          <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        {/* Menu de navegação */}
        <ul className="flex gap-6 max-md:fixed max-md:top-0 max-md:left-0 max-md:w-[100vw] max-md:h-[100vh] ">
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
