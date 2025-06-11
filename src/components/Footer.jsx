function Footer () {
    return (
        <footer className="bg-[#2E7D32] text-white py-10 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* Logo ou nome do projeto */}
                <div>
                <h2 className="text-2xl font-bold mb-2">EduSustentável</h2>
                <p className="text-sm text-[#C8E6C9]">
                    Educação e Sustentabilidade no Campo. Projeto desenvolvido com foco na transformação social e ambiental.
                </p>
                </div>

                {/* Links rápidos */}
                <div>
                <h3 className="font-semibold mb-3">Links</h3>
                <ul className="space-y-2 text-sm text-[#C8E6C9]">
                    <li><a href="#sobre" className="hover:underline">Sobre</a></li>
                    <li><a href="#projetos" className="hover:underline">Projetos</a></li>
                    <li><a href="#historias" className="hover:underline">Histórias</a></li>
                    <li><a href="#galeria" className="hover:underline">Galeria</a></li>
                </ul>
                </div>

                {/* Contato */}
                <div>
                <h3 className="font-semibold mb-3">Contato</h3>
                <ul className="text-sm text-[#C8E6C9] space-y-2">
                    <li>Email: contato@edusustentavel.org</li>
                    <li>Telefone: (43) 99999-0000</li>
                    <li>Rio Bom - PR</li>
                </ul>
                </div>

                {/* Redes sociais */}
                <div>
                <h3 className="font-semibold mb-3">Siga-nos</h3>
                <div className="flex gap-4">
                    <a href="#" className="hover:text-[#A5D6A7] transition">🌱 Instagram</a>
                    <a href="#" className="hover:text-[#A5D6A7] transition">📘 Facebook</a>
                </div>
                </div>
            </div>

            <div className="text-center text-sm text-[#C8E6C9] mt-10">
                © {new Date().getFullYear()} EduSustentável. Todos os direitos reservados.
            </div>
        </footer>
    )
}

export default Footer