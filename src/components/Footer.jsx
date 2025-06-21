import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

function Footer () {
    return (
        <footer className="bg-olive-700 w-full">
            <div className="py-14 px-6 max-w-[1280px] max-md:text-center max-md:flex max-md:justify-center max-md:items-center max-md:flex-col mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* Logo ou nome do projeto */}
                <div>
                    <h2 className="text-2xl font-bold mb-2 text-almond">EduSustentável</h2>
                    <p className="text-md tracking-tight text-olive-500">
                        Educação e Sustentabilidade no Campo. Projeto desenvolvido com foco na transformação social e ambiental.
                    </p>
                </div>

                {/* Links rápidos */}
                <div>
                    <h3 className="font-semibold text-2xl mb-3 text-almond">Links</h3>
                    <ul className="space-y-2 text-md text-olive-500">
                        <li><a href="#sobre" className='text-olive-500'>Sobre</a></li>
                        <li><a href="#projetos" className='text-olive-500'>Projetos</a></li>
                        <li><a href="#historias" className='text-olive-500'>Histórias</a></li>
                        <li><a href="#galeria" className='text-olive-500'>Galeria</a></li>
                    </ul>
                </div>

                {/* Contato */}
                <div>
                    <h3 className="font-semibold text-2xl text-almond mb-3">Contato</h3>
                    <ul className="text-md text-olive-500 space-y-2">
                        <li>Email: andre.verolla@escola.pr.gov.br</li>
                        <li>Telefone: (43) 99999-0000</li>
                        <li>Rio Bom - PR</li>
                    </ul>
                </div>

                {/* Redes sociais */}
                <div>
                    <h3 className="font-semibold text-2xl mb-8 text-almond">Siga-nos</h3>
                    <ul className="flex gap-4">
                        <li className='relative group'>
                            <span className='absolute left-1/2 -top-8 -translate-x-1/2 px-2 py-1 text-xs text-white rounded opacity-0 group-hover:opacity-100 group-hover:-top-12 transition-all duration-300 bg-olive-600'>Github</span>
                            <a 
                                href="https://instagram.com/andrejuliani.v"
                                className="relative p-4 rounded-full bg-olive-500 text-olive-700 overflow-hidden flex items-center justify-center group hover:text-white transition-all duration-300"
                                target="_blank"
                                aria-label="instagram"
                                data-social="instagram"
                                title="instagram">
                                <span className="absolute bottom-0 left-0 w-full h-0 group-hover:h-full z-0 bg-olive-600 text-white transition-all duration-300" />
                                <FontAwesomeIcon icon={faInstagram} className="relative z-10 text-2xl" />
                            </a>
                        </li>

                        <li className="relative group">
                            <span className="absolute left-1/2 -top-8 -translate-x-1/2 px-2 py-1 text-xs text-white rounded opacity-0 group-hover:opacity-100 group-hover:-top-12 transition-all duration-300 bg-olive-600">
                                GitHub
                            </span>
                            <a
                                href="https://github.com/andreverolla"
                                className="relative p-4 rounded-full bg-olive-500 text-olive-700 overflow-hidden flex items-center justify-center group hover:text-white transition-all duration-300"
                                target="_blank"
                                aria-label="github"
                                data-social="github"
                                title="github"
                            >
                                <span className="absolute bottom-0 left-0 w-full h-0 group-hover:h-full z-0 bg-olive-600 transition-all duration-300" />
                                <FontAwesomeIcon icon={faGithub} className="relative z-10 text-2xl" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="text-center border-t border-olive-600 text-md text-olive-500 py-10 px-6">
                © {new Date().getFullYear()} EduSustentável. Todos os direitos reservados.
            </div>
        </footer>
    )
}

export default Footer