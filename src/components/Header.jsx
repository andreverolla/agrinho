import Link from "../layouts/Links"
import { LinkButtonHover, LinkButtonHover } from "../layouts/Buttons"

function Header() {
  return (
    <header className="fixed top-0 right-0 z-50 w-full h-20 border-b border-secondary bg-primary-900">
      <nav className="flex justify-between py-6 px-20 tablet:px-12 mobile:px-8">
        <a href="./"><h1 className="text-3xl mobile:text-xl font-bold">Agrinho</h1></a>
        <button className="hidden mobile:block">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className="flex gap-6 items-center mobile:hidden">
          <Link href="#home" title="Início" text="Início" />
          <LinkButtonSimple href="#faq" title="FAQ" text="FAQ" />
          <LinkButtonHover href="#enrollment" title="Inscreva-se" text="Inscreva-se" />
        </ul>
      </nav>
    </header>
  )
}

export default Header