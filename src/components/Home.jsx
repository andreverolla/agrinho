function Home() {
  return (
    <section id="home" className="bg-[#FDF6EC] min-h-screen flex items-center justify-center px-6 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#2E2E2E] mb-6 leading-tight">
          Educação e Sustentabilidade no Campo
        </h1>
        <p className="text-lg md:text-xl text-[#4A4A4A] mb-8 max-w-2xl mx-auto">
          Promovendo conhecimento, consciência ecológica e inovação para transformar o futuro das comunidades rurais.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projeto"
            className="bg-[#4CAF50] hover:bg-[#43A047] text-white font-medium px-6 py-3 rounded-2xl shadow-md transition duration-300"
          >
            Conheça o Projeto
          </a>
          <a
            href="#sobre"
            className="border border-[#4CAF50] text-[#4CAF50] hover:bg-[#E8F5E9] font-medium px-6 py-3 rounded-2xl transition duration-300"
          >
            Saiba Mais
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home