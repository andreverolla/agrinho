function Projects () {
    const projetos = [
    {
      titulo: "Horta Escolar Sustentável",
      descricao:
        "Implantação de hortas nas escolas rurais, promovendo alimentação saudável, educação ambiental e integração entre alunos e comunidade.",
      imagem: "/img/horta.jpg",
    },
    {
      titulo: "Reaproveitamento de Materiais",
      descricao:
        "Oficinas educativas sobre como reutilizar garrafas, papel e outros resíduos na criação de objetos úteis e criativos.",
      imagem: "/img/reaproveitamento.jpg",
    },
    {
      titulo: "Tecnologia no Campo",
      descricao:
        "Uso de ferramentas digitais para auxiliar na gestão agrícola e monitoramento ambiental, conectando tradição e inovação.",
      imagem: "/img/tecnologia.jpg",
    },
  ];

    return (
        <section id="projects" className="py-20 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-olive-700 mb-12">
                Nossos Projetos
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                {projetos.map((projeto, index) => (
                    <div
                    key={index}
                    className="bg-vanilla border-simple-stroke border rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
                    >
                      <img
                          src={projeto.imagem}
                          alt={projeto.titulo}
                          className="w-full h-48 object-cover"
                      />
                      <div className="p-6 text-left">
                          <h3 className="text-xl font-semibold text-olive-600 mb-2">
                          {projeto.titulo}
                          </h3>
                          <p className="text-contrast">{projeto.descricao}</p>
                      </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}

export default Projects