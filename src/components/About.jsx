import cityPicture from "../images/cidade.png"

function About () {
    return (
        <section id="about" className="bg-sand py-20 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
                {/* Imagem ilustrativa */}
                <div className="w-full md:w-1/2">
                <img
                    src={cityPicture}
                    alt="Foto da cidade de Rio Bom"
                    className="rounded-lg"
                />
                </div>

                {/* Texto */}
                <div className="w-full md:w-1/2 text-olive-800">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Sobre o Projeto
                </h2>
                <p className="text-lg text-earth mb-4">
                    Nosso projeto tem como objetivo levar conhecimento e práticas sustentáveis às comunidades do campo, unindo educação ambiental e inovação social para promover um futuro mais consciente e equilibrado.
                </p>
                <p className="text-lg text-earth">
                    Através de atividades educativas, uso da tecnologia e valorização da cultura rural, buscamos transformar a realidade dos jovens e agricultores locais, incentivando a preservação do meio ambiente e o desenvolvimento sustentável.
                </p>
                </div>
            </div>
        </section>
    )
}

export default About