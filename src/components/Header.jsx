import Link from "../layouts/Links"
import { LinkButtonHover, LinkButtonSimple } from "../layouts/Buttons"

function Header() {
  return (
    <header className="fixed">
      <nav className="">
        <a href="./"><h1 className="">Agrinho</h1></a>
        <ul className="">
          <Link href="#home" title="Início" text="Início" />
          <Link href="#about" title="Sobre" text="Sobre" />
          <Link href="#gallery" title="Galeria" text="Galeria" />
          <Link href="#" title="Início" text="Início" />
          <LinkButtonSimple href="#faq" title="FAQ" text="FAQ" />
          <LinkButtonHover href="#enrollment" title="Inscreva-se" text="Inscreva-se" />
        </ul>
      </nav>
    </header>
  )
}

export default Header