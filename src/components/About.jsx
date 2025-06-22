import aboutImage from "../images/about-img.svg"
import { BorderButton, ButtonHover } from "../layouts/Buttons"

function About () {
    return (
        <section id="about" className="bg-sand w-full h-full px-8 py-18">
            <div className="mx-auto flex flex-col md:flex-row justify-between items-center gap-10 max-w-[1280px] max-md:justify-center">
                <div className="w-full md:w-1/2">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">Sobre o Projeto</h1>
                    <span className="h-[2px] w-16 rounded-sm bg-olive-600 block mb-4"></span>
                    <p className="text-lg text-contrast mb-4">
                        Nosso projeto tem como objetivo levar conhecimento e práticas sustentáveis às comunidades do campo, unindo educação ambiental e inovação social para promover um futuro mais consciente e equilibrado.
                    </p>
                    <p className="text-lg text-contrast">
                        Através de atividades educativas, uso da tecnologia e valorização da cultura rural, buscamos transformar a realidade dos jovens e agricultores locais, incentivando a preservação do meio ambiente e o desenvolvimento sustentável.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 max-md:gap-10 mt-10">
                        <ButtonHover to="newsletter" title="Inscreva-se" text="Faça parte do projeto" />
                        <BorderButton to="gallery" title="Ver galeria de fotos" text="Ver galeria de fotos" />
                    </div>
                </div>

                <div className="w-full md:w-1/2 mt-16 max-md:mt-12">
                    <img
                        src={aboutImage}
                        alt="Imagem de um coração com elementos da natureza"
                        className="max-w-xl max-md:w-full"
                    />
                </div>
            </div>
        </section>
    )
}

export default About