import { useState } from 'react';
import { motion } from 'framer-motion';

const quizQuestions = [
  {
    question: 'Em que ano Rio Bom foi emancipado politicamente?',
    options: ['1945', '1951', '1964', '1975'],
    answer: '1964',
  },
  {
    question: 'Qual foi o evento climático que devastou os cafezais de Rio Bom em 1975?',
    options: ['Tempestade', 'Geada Negra', 'Seca', 'Inundação'],
    answer: 'Geada Negra',
  },
  {
    question: 'Qual a principal atividade econômica de Rio Bom hoje?',
    options: ['Mineração', 'Turismo', 'Indústria Automobilística', 'Agricultura e Pecuária'],
    answer: 'Agricultura e Pecuária',
  },
  {
    question: 'O que é rotação de culturas na agricultura?',
    options: [
      'Cultivar a mesma planta no mesmo solo todo ano',
      'Intercalar diferentes culturas para manter a fertilidade',
      'Plantar apenas espécies nativas da região',
      'Não usar adubos ou fertilizantes'
    ],
    answer: 'Intercalar diferentes culturas para manter a fertilidade',
  },
  {
    question: 'Qual prática ajuda a conservar o solo e proteger nascentes no campo?',
    options: ['Desmatamento', 'Queima Controlada', 'Plantio Direto', 'Lavoura Contínua'],
    answer: 'Plantio Direto',
  },
  {
    question: 'Como se chama a estratégia de plantar culturas que enriquecem o solo com nitrogênio?',
    options: ['Adubação química', 'Adubação verde', 'Poda verde', 'Cobertura verde'],
    answer: 'Adubação verde',
  },
  {
    question: 'Em agricultura sustentável, o que significa “consórcio de culturas”?',
    options: ['Cultivo de várias safras na mesma época e local', 'Plantio monocultor', 'Uso de plantas geneticamente modificadas', 'Prática de desmatamento'],
    answer: 'Cultivo de várias safras na mesma época e local',
  },
  {
    question: 'Qual cultura é tradicionalmente predominante em Rio Bom antes da Geada Negra?',
    options: ['Cana-de-açúcar', 'Café', 'Milho', 'Soja'],
    answer: 'Café',
  },
  {
    question: 'O que caracteriza a agricultura de subsistência?',
    options: ['Produção apenas para venda em grande escala', 'Produção voltada ao consumo familiar', 'Uso intenso de máquinas', 'Exportação de commodities'],
    answer: 'Produção voltada ao consumo familiar',
  },
  {
    question: 'Qual prática contribui para a redução da erosão do solo?',
    options: ['Arações profundas contínuas', 'Queima da palha', 'Plantio direto', 'Uso intenso de pesticidas'],
    answer: 'Plantio direto',
  },
  {
    question: 'Em educação ambiental, qual é o objetivo principal?',
    options: ['Ensinar apenas teoria em sala de aula', 'Promover a conscientização sobre o meio ambiente', 'Incentivar consumo de produtos industrializados', 'Focar em tecnologia apenas'],
    answer: 'Promover a conscientização sobre o meio ambiente',
  }
];

function Quiz() {
  const [current, setCurrent] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(quizQuestions.length).fill(''));
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (option) => {
    const updated = [...userAnswers];
    updated[current] = option;
    setUserAnswers(updated);
  };

  const handleNext = () => {
    if (!userAnswers[current]) return; // prevent proceeding without answer
    if (current < quizQuestions.length - 1) {
      setCurrent(current + 1);
    } else {
      calculateScore();
    }
  };

  const calculateScore = () => {
    let points = 0;
    userAnswers.forEach((ans, idx) => {
      if (ans === quizQuestions[idx].answer) points += 1;
    });
    setScore(points);
    setShowScore(true);
  };

  const resetQuiz = () => {
    setUserAnswers(Array(quizQuestions.length).fill(''));
    setCurrent(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <section id='quiz' className="h-full w-full bg-almond py-16 px-8 max-md:px-4">
        <h1 className='text-center font-bold text-3xl mb-8'>Faça o nosso quiz</h1>
        <div className="max-w-xl mx-auto p-8 max-md:px-4 rounded-xl bg-simple-stroke">
        {!showScore ? (
            <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
            >
            <h2 className="text-2xl font-medium text-olive-700" aria-live="polite">
                Pergunta {current + 1} de {quizQuestions.length}
            </h2>
            <p className="text-earth text-lg">{quizQuestions[current].question}</p>
            <div className="space-y-2">
                {quizQuestions[current].options.map((opt) => (
                <label
                    key={opt}
                    className={`block p-4 border rounded-lg cursor-pointer outline-none transition 
                    ${userAnswers[current] === opt ? 'bg-olive-500 text-white border-olive-500' : 'bg-vanilla text-contrast border-simple-stroke'}`}
                >
                    <input
                    type="radio"
                    name={`question-${current}`}
                    value={opt}
                    checked={userAnswers[current] === opt}
                    onChange={() => handleAnswer(opt)}
                    className="sr-only"
                    />
                    <span>{opt}</span>
                </label>
                ))}
            </div>
            <button
                onClick={handleNext}
                disabled={!userAnswers[current]}
                className="mt-2 px-6 py-4 cursor-pointer hover:bg-olive-700 bg-olive-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
                {current < quizQuestions.length - 1 ? 'Próxima' : 'Finalizar'}
            </button>
            </motion.div>
        ) : (
            <div className="text-center">
            <h2 className="text-3xl font-titles text-olive-700 mb-4">Seu Score</h2>
            <p className="text-earth text-xl mb-6">
                Você acertou {score} de {quizQuestions.length} perguntas!
            </p>
            <button
                onClick={resetQuiz}
                className="px-6 py-4 cursor-pointer bg-olive-600 hover:bg-olive-700 text-white rounded-lg transition"
            >
                Reiniciar Quiz
            </button>
            </div>
        )}
        </div>
    </section>
  );
}

export default Quiz