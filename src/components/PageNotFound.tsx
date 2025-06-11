import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <section id="notfound" className="min-h-screen bg-[#FDF6EC] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-7xl font-bold text-[#2E7D32] mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-[#388E3C] mb-4">
        Opa! Página não encontrada.
      </h2>
      <p className="text-gray-600 max-w-md mb-8">
        A página que você está procurando não existe ou foi movida. Verifique o endereço ou volte à página inicial.
      </p>
      <Link
        to="/"
        className="bg-[#4CAF50] hover:bg-[#388E3C] text-white px-6 py-3 rounded-2xl transition"
      >
        Voltar para o Início
      </Link>
    </section>
  );
}

export default PageNotFound
