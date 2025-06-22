import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHammer, faHospital, faSeedling, faEgg } from "@fortawesome/free-solid-svg-icons";

function Projects() {
  const projetos = [
    {
      id: 1,
      title: 'Curso de Pulverizadores Agrícolas',
      description: 'Capacitação em operação e manutenção de pulverizadores tratorizados, realizada pela Prefeitura em parceria com SENAR‑PR e FAEP, visando modernização agrícola.',
      icon: <FontAwesomeIcon icon={faHammer} />
    },
    {
      id: 2,
      title: 'Programa Saúde na Escola (PSE)',
      description: 'Palestras e ações nas escolas Monteiro Lobato e Carmela Dutra sobre prevenção a álcool e drogas, promovendo saúde entre alunos de 5 a 11 anos.',
      icon: <FontAwesomeIcon icon={faHospital} />
    },
    {
      id: 3,
      title: 'Incentivo à Agricultura Familiar',
      description: 'Visita de técnicas da Paraná Projetos para mapear potencialidades rurais e turísticas, fortalecendo produtores como o cultivo de banana e derivados. ',
      icon: <FontAwesomeIcon icon={faSeedling} />
    },
    {
      id: 4,
      title: 'Investimento Agroindustrial – Incubatório de Ovos',
      description: 'Projeto da Lar Agroindustrial com R$105,6 mi para construir incubatório de ovos com 75 mi pintinhos/ano, gerando 65 empregos diretos.',
      icon: <FontAwesomeIcon icon={faEgg} />
    }
  ];

  return (
    <section id="projects" className="bg-[url('./images/diagonal-stripes.svg')] py-16 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-titles text-white font-bold text-center mb-12">
          Projetos em Destaque em Rio Bom
        </h2>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-2">
          {projetos.map(proj => (
            <div key={proj.id} className="bg-olive-600 rounded-xl p-6">
              <div className="text-4xl text-olive-500 mb-4">{proj.icon}</div>
              <h3 className="text-xl font-semibold text-vanilla mb-2">{proj.title}</h3>
              <p className="text-olive-500">{proj.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects