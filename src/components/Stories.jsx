function Stories () {
    const historias = [
        {
        nome: "João da Silva",
        funcao: "Estudante, 17 anos - Rio Bom/PR",
        texto:
            "Participar do projeto da horta na escola me ensinou o valor da terra e como pequenas atitudes podem mudar o futuro do nosso planeta.",
        imagem: "/img/joao.jpg",
        },
        {
        nome: "Dona Maria Oliveira",
        funcao: "Agricultora local",
        texto:
            "Com a ajuda dos alunos e professores, aprendi a aproveitar melhor os recursos da minha propriedade e reduzir o desperdício.",
        imagem: "/img/maria.jpg",
        },
        {
        nome: "Prof. Ricardo Lopes",
        funcao: "Professor de Ciências",
        texto:
            "A sustentabilidade virou um tema vivo dentro da sala de aula. Os alunos se sentem mais engajados e protagonistas do aprendizado.",
        imagem: "/img/ricardo.jpg",
        },
    ];

    return (
        <section id="stories" className="bg-[#FDF6EC] py-20 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#2E7D32] mb-12">
                Histórias que Inspiram
                </h2>

                <div className="grid md:grid-cols-3 gap-10">
                {historias.map((h, index) => (
                    <div
                    key={index}
                    className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition"
                    >
                    <img
                        src={h.imagem}
                        alt={h.nome}
                        className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-[#C8E6C9]"
                    />
                    <p className="text-gray-700 mb-4 italic">"{h.texto}"</p>
                    <h3 className="text-[#33691E] font-semibold">{h.nome}</h3>
                    <span className="text-sm text-gray-500">{h.funcao}</span>
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}

export default Stories