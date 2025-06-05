import Link from "../layouts/Links"
import { LinkButtonHover } from "../layouts/Buttons"

function Header() {
  return (
    <header className="fixed top-0 right-0 z-50 w-full h-20 bg-transparent">
      <nav className="flex justify-between py-6 px-20 lg:px-10">
        <a href="./" title="AgriTech"><h1 className="text-3xl font-semibold">AgriTech</h1></a>
        <ul className="flex gap-5 items-center">
          <Link href="#home" title="Início" text="início" />
          <Link href="#about" title="Sobre" text="sobre" />
          <Link href="#gallery" title="git lGaleria" text="galeria" />
          <Link href="#projects" title="Projetos" text="projetos" />
          <Link href="#questions" title="Dúvidas?" text="dúvidas?" />
          <LinkButtonHover href="#enrollment" title="Inscreva-se" text="inscreva-se" />
        </ul>
      </nav>
    </header>
  )
}

export default Header