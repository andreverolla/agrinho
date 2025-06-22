import { ButtonHover } from "../layouts/Buttons";

function PageNotFound() {
  return (
    <section id="notfound" className="min-h-screen max-w-[1480px] flex flex-col items-center justify-center text-center px-8">
      <h1 className="text-[9rem] max-md:text-8xl max-lg:text-[8rem] font-bold text-olive-600 mb-4">404</h1>
      <h2 className="text-2xl text-titles md:text-3xl font-semibold text-olive-500 mb-4">
        Opa! Página não encontrada.
      </h2>
      <p className="text-xl max-w-xl max-md:text-base text-contrast mb-8">
        A página que você está procurando não existe ou foi movida. Verifique o endereço ou volte à página inicial.
      </p>
      <span><a href="/" tabIndex={0} role="link" title="Voltar para o site" className="font-titles cursor-pointer py-[18px] px-6 rounded-xl bg-olive-600 text-white font-medium hover:bg-olive-700 transition-colors duration-300">Voltar para o site</a></span>
    </section>
  );
}

export default PageNotFound
