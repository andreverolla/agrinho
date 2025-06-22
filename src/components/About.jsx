import aboutImage from "../images/about-img.jpg"
import { BorderButton, ButtonHover } from "../layouts/Buttons"

function About () {
    return (
        <section id="about" className="bg-sand w-full h-full px-8 py-22">
            <div className="mx-auto max-w-[1280px] flex flex-col lg:flex-row lg:justify-between items-center gap-10">
                <div className="max-lg:w-full w-1/2">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">Sobre o Projeto</h1>
                    <span className="h-[2px] w-16 rounded-sm bg-olive-600 block mb-8"></span>
                    <p className="text-lg text-contrast mb-4">
                        Nosso projeto tem como missão fortalecer os laços entre a comunidade rural e urbana por meio da valorização da história de Rio Bom, da educação ambiental e do uso da tecnologia como ferramenta de transformação social.
                    </p>
                    <p className="text-lg text-contrast mb-4">
                        Partindo do tema “Festejando a conexão campo-cidade”, desenvolvemos este site como um espaço educativo e interativo, onde resgatamos a memória do município, destacamos suas raízes agrícolas e promovemos reflexões sobre sustentabilidade e pertencimento.
                    </p>
                    <p className="text-lg text-contrast">
                        Através da participação de estudantes, do uso de recursos digitais e da produção colaborativa de conteúdo, incentivamos o orgulho local, a preservação do meio ambiente e a construção de um futuro mais justo, consciente e conectado.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 max-lg:gap-10 mt-10">
                        <ButtonHover to="newsletter" title="Inscreva-se" text="Faça parte do projeto" />
                        <BorderButton to="gallery" title="Ver galeria de fotos" text="Ver galeria de fotos" />
                    </div>
                </div>

                <div className="max-lg:w-full w-1/2 mt-16 max-md:mt-12 flex items-center justify-center">
                    <img
                        src={aboutImage}
                        alt="Imagem de um coração com elementos da natureza"
                        className="max-w-[27rem] max-md:w-full rounded-xl border border-simple-stroke"
                    />
                </div>
            </div>
        </section>
    )
}

export default About