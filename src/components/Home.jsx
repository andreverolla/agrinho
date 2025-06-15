import { ButtonHover, BorderButton } from "../layouts/Buttons"

function Home() {
  return (
    <section id="home" className="bg-white-500 min-h-screen w-full px-8 py-16">
      <div className="max-w-[1430px] mx-auto flex flex-row max-md:flex-col justify-between">
        <div className="max-w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-black-800 mb-6 leading-tight">
            Educação e Sustentabilidade no Campo
          </h1>
          <p className="text-lg md:text-xl text-black-700 mb-8 max-w-2xl">
            Promovendo conhecimento, consciência ecológica e inovação para transformar o futuro das comunidades rurais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <ButtonHover to="about" title="Saiba mais" text="saiba mais" />
            <BorderButton to="projects" title="Veja nossos projetos" text="veja nossos projetos" />
          </div>
        </div>
        <div className="max-w-1/2 flex items-center justify-center">
          <img src="" alt="fwefwef" />
        </div>
      </div>
    </section>
  )
}

export default Home