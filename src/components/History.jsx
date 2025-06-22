import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faHouse, faLandmark, faSnowflake, faChartSimple } from '@fortawesome/free-solid-svg-icons';
import HistoryPicture from '/assets/1.jpg';

function History() {
  return (
    <section id="history" className="w-full bg-almond py-16 px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-olive-700 mb-12">
          História de Rio Bom (PR)
        </h1>

        {/* Imagem Histórica */}
        <div className="mb-12">
          <img
            src={HistoryPicture}
            alt="Foto histórica da emancipação de Rio Bom"
            className="rounded-xl mx-auto object-cover max-h-[500px] w-full border border-simple-stroke"
          />
          <p className="text-center text-sm text-contrast mt-2 italic">
            Momento histórico de Rio Bom — registro da emancipação política, década de 1960.
          </p>
        </div>

        {/* Conteúdo */}
        <div className="space-y-12 text-contrast leading-relaxed">
          <div>
            <h2 className="text-2xl font-semibold text-olive-600 flex items-center gap-2">
              <FontAwesomeIcon icon={faLeaf} /> Origem e Colonização (1945)
            </h2>
            <p className="mt-2">
              A história de Rio Bom começa em <strong>1945</strong>, quando a colonizadora homônima desbravou a região,
              abrindo estradas e atraindo migrantes mineiros, paulistas, gaúchos e famílias vindas de Portugal,
              Espanha e Itália.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-olive-600 flex items-center gap-2">
              <FontAwesomeIcon icon={faHouse} /> Primeiros Moradores
            </h2>
            <p className="mt-2">
              Entre os pioneiros estavam as famílias <strong>Pântano</strong>, <strong>Schellworth</strong> e <strong>Andrade</strong>,
              seguidas por <strong>Deziró</strong>, <strong>Rech</strong>, <strong>Almeida</strong> e <strong>Rankel</strong>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-olive-600 flex items-center gap-2">
              <FontAwesomeIcon icon={faLandmark} /> Emancipação Política
            </h2>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>1948: Elevado a Distrito Judiciário de Apucarana</li>
              <li>1951: Criação oficial do município pela Lei Estadual nº 790</li>
              <li>1953–54: Tentativas de mudança da sede para Catugí (hoje Borrazópolis)</li>
              <li>1964 (abril): Lei Estadual nº 4859 confirma Rio Bom como município</li>
              <li>1964 (dezembro): Instalação da administração municipal e emancipação política</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-olive-600 flex items-center gap-2">
              <FontAwesomeIcon icon={faSnowflake} /> A “Geada Negra” de 1975
            </h2>
            <p className="mt-2">
              A forte geada de 1975 destruiu lavouras de café em todo o norte do Paraná. Rio Bom perdeu grande parte
              da sua população — antes com cerca de 12.000 habitantes — que migrou para regiões industrializadas como
              São José dos Campos.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-olive-600 flex items-center gap-2">
              <FontAwesomeIcon icon={faChartSimple} /> Atualidade
            </h2>
            <p className="mt-2">
              Hoje, Rio Bom tem aproximadamente <strong>3.337 habitantes</strong> (dados IBGE). A economia local é
              baseada na agricultura, pecuária e em pequenas indústrias de móveis, vestuário e beneficiamento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default History