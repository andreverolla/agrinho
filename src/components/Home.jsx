import { ButtonHover, BorderButton } from "../layouts/Buttons"

function Home() {
  return (
    <section id="home" className="min-h-screen w-full px-8 py-16">
      <div className="max-w-[1248px] mx-auto flex flex-col mt-24">
        <div className="">
          <span className="text-gray-600 bg-black-800 border-[1px] font-titles border-black-600 py-2 px-4 rounded-lg font-medium">- Olá, seja bem vindo! 👋</span>
          <h1 className="text-4xl md:text-5xl font-bold font-titles text-white leading-tight mt-4">
            Educação e Sustentabilidade no Campo
          </h1>
          <p className="text-lg md:text-2xl text-gray-500 my-4">
            Promovendo conhecimento, consciência ecológica e inovação para transformar o futuro das comunidades rurais.
          </p>
          <ButtonHover to="about" title="Saiba mais" text="SAIBA MAIS" />
        </div>
      </div>
    </section>
  )
}

export default Home