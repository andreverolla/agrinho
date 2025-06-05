import Link from "../layouts/Links"
import { LinkButtonHover, LinkButtonSimple } from "../layouts/Buttons"

function Header() {
  return (
    <header className="fixed top-0 right-0 z-50 w-full h-20 bg-transparent">
      <nav className="flex justify-between py-6 px-20">
        <a href="./"><h1 className="text-3xl">Agrinho</h1></a>
        <ul className="flex gap-6 items-center">
          <Link href="#home" title="Início" text="Início" />
          <Link href="#about" title="Sobre" text="Sobre" />
          <Link href="#gallery" title="Galeria" text="Galeria" />
          <Link href="#projects" title="Projetos" text="Projetos" />
          <Link href="#community" title="Comunidade" text="Comunidade" />
          <LinkButtonSimple href="#faq" title="FAQ" text="FAQ" />
          <LinkButtonHover href="#enrollment" title="Inscreva-se" text="Inscreva-se" />
        </ul>
      </nav>
    </header>
  )
}

export default Header