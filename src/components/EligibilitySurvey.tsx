import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  HelpCircle, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft, 
  RotateCcw,
  Compass,
  ArrowRight,
  TrendingUp,
  Award,
  AlertCircle
} from 'lucide-react';
import { CountryInfo, VisaDetail, SurveyQuestion } from '../types';
import { surveyQuestionsData } from '../data/visas';

interface EligibilitySurveyProps {
  country: CountryInfo;
  onSelectVisa?: (visa: VisaDetail) => void;
  onBookConsultation: () => void;
}

export default function EligibilitySurvey({ country, onSelectVisa, onBookConsultation }: EligibilitySurveyProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isFinished, setIsFinished] = useState(false);

  // Filter visas for the currently active country code
  const activeCountryVisas = country.visas;

  const currentQuestion = surveyQuestionsData[currentStep];

  const handleSelectOption = (questionId: string, optionValue: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionValue }));
    
    // Auto advance after slight delay for tactile feedback
    if (currentStep < surveyQuestionsData.length - 1) {
      setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, 300);
    } else {
      setTimeout(() => {
        setIsFinished(true);
      }, 400);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsFinished(false);
  };

  // Calculate matching scores for each visa within current country
  const calculateResult = (): { visa: VisaDetail; score: number; reason: string }[] => {
    const results: { visa: VisaDetail; score: number; reason: string }[] = [];

    activeCountryVisas.forEach((visa) => {
      let accumulatedScore = 0;
      let matchesCount = 0;

      // Scan answers and add points based on survey definitions
      surveyQuestionsData.forEach((q) => {
        const selectedValue = answers[q.id];
        const option = q.options.find((opt) => opt.value === selectedValue);
        
        if (option?.points && option.points[visa.id] !== undefined) {
          accumulatedScore += option.points[visa.id];
          matchesCount++;
        }
      });

      // Normalize score out of 100
      const finalPercentage = Math.round(
        matchesCount > 0 ? accumulatedScore / matchesCount : 50
      );

      // Extract details about why this matched
      let reason = 'Seu perfil atende aos critérios essenciais de escolaridade e idade.';
      if (answers.education === 'phd_doctor' || answers.education === 'masters') {
        if (visa.id === 'us_eb2_niw') {
          reason = 'Sua alta titulação acadêmica se encaixa perfeitamente no critério "Advanced Degree" exigido por essa categoria de residência.';
        }
      }
      if (answers.financial === 'investor_savings') {
        if (visa.id === 'us_eb5') {
          reason = 'Você declarou alta liquidez financeira capaz de viabilizar o investimento mínimo exigido por este visto de residência.';
        }
      }
      if (answers.age === 'young') {
        if (visa.id === 'us_f1') {
          reason = 'Sua faixa etária jovem e flexibilidade são ideais para a realização de intercâmbios e progressão acadêmica internacional de longo prazo.';
        }
      }

      results.push({
        visa,
        score: finalPercentage,
        reason
      });
    });

    // Sort by highest score first
    return results.sort((a, b) => b.score - a.score);
  };

  const recommendations = isFinished ? calculateResult() : [];
  const bestMatch = recommendations[0];

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'Fácil': return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
      case 'Médio': return 'text-[#f2ca50] bg-[#f2ca50]/10 border-[#f2ca50]/20';
      case 'Difícil': return 'text-orange-400 bg-orange-500/10 border-orange-500/20';
      default: return 'text-red-400 bg-red-500/10 border-red-500/20';
    }
  };

  return (
    <div className="w-full bg-transparent text-white py-6 relative overflow-hidden">
      
      {/* Form Content */}
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        
        {/* Header summary of survey */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-[10px] font-mono tracking-wider text-[#f2ca50] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#f2ca50]" />
            Simulador de Vistos {country.name}
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight font-display text-white">
            Qual {country.name === 'Estados Unidos' ? 'visto americano' : 'visto'} combina com você?
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Responda 4 perguntas rápidas baseadas no seu perfil profissional e acadêmico e conheça seu grau de compatibilidade e probabilidade de deferimento.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!isFinished ? (
            /* ACTIVE SURVEY STEPS CONTAINER */
            <motion.div 
              key="survey-active"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="bg-zinc-900/30 backdrop-blur-md border border-zinc-800/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative bento-glow-zinc"
            >
              
              {/* Questionnaire progress bar */}
              <div className="flex justify-between items-center text-[10px] font-mono">
                <span className="text-zinc-400 font-bold uppercase tracking-wider">Formulário de Qualificação</span>
                <span className="text-[#f2ca50] font-bold uppercase tracking-wider">
                  Passo {currentStep + 1} de {surveyQuestionsData.length}
                </span>
              </div>
              <div className="w-full h-1 bg-zinc-850 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#f2ca50] transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / surveyQuestionsData.length) * 100}%` }}
                ></div>
              </div>

              {/* Question Text Title */}
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-bold font-display text-white flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#f2ca50]" />
                  {currentQuestion.text}
                </h3>
                <p className="text-zinc-400 text-xs">{currentQuestion.subtitle}</p>
              </div>

              {/* Options selection stack */}
              <div className="grid grid-cols-1 gap-3 pt-2">
                {currentQuestion.options.map((opt) => {
                  const isSelected = answers[currentQuestion.id] === opt.value;
                  return (
                    <button
                      key={opt.value}
                      onClick={() => handleSelectOption(currentQuestion.id, opt.value)}
                      className={`w-full flex items-center justify-between p-4 rounded-2xl border text-xs sm:text-sm tracking-wide transition-all cursor-pointer ${
                        isSelected 
                          ? 'bg-[#f2ca50]/10 border-[#f2ca50] text-[#f2ca50] font-bold shadow-lg shadow-yellow-500/5' 
                          : 'bg-zinc-950/40 border-zinc-850 hover:bg-zinc-800/35 hover:border-zinc-700/80 text-zinc-200'
                      }`}
                    >
                      <span className="font-medium">{opt.label}</span>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ml-4 ${
                        isSelected ? 'border-[#f2ca50] bg-[#f2ca50]' : 'border-zinc-850'
                      }`}>
                        {isSelected && <div className="w-2 h-2 bg-black rounded-full" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Back controls navigation */}
              <div className="flex justify-between items-center pt-4 border-t border-zinc-800/60">
                <button
                  disabled={currentStep === 0}
                  onClick={handleBack}
                  className="flex items-center gap-1.5 text-xs text-zinc-400 font-bold hover:text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer font-display"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Voltar
                </button>
                <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-bold font-mono">ImmiGlobal Analisador</span>
              </div>

            </motion.div>
          ) : (
            /* RESULTS DISPLAY CONTAINER */
            <motion.div 
              key="survey-results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 80, damping: 15 }}
              className="space-y-8"
            >
              
              {/* Large Best Match Card */}
              <div className="bg-zinc-900/30 backdrop-blur-md border border-[#f2ca50]/30 rounded-3xl p-6 sm:p-10 space-y-6 shadow-2xl relative overflow-hidden bento-glow-yellow">
                <div className="absolute top-0 right-0 p-8 w-1/2 h-full opacity-5 pointer-events-none flex justify-end items-center">
                  <Award className="w-56 h-56 text-[#f2ca50]" />
                </div>
                
                {/* Result Pill Badge */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Melhor Recomendação Encontrada
                </span>

                {/* Split profile of best match */}
                {bestMatch ? (
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-2 items-center">
                    
                    {/* Ranked Details */}
                    <div className="md:col-span-8 space-y-4">
                      <div>
                        <p className="text-[9px] uppercase text-zinc-500 tracking-wider font-extrabold font-mono">Caminho Selecionado Legal</p>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display mt-0.5">{bestMatch.visa.name}</h3>
                        <p className="text-[#f2ca50] text-xs italic font-bold">{bestMatch.visa.subtitle}</p>
                      </div>

                      <div className="space-y-2">
                        <p className="text-[10px] uppercase text-[#f2ca50] tracking-widest font-bold flex items-center gap-1 font-mono">
                          <TrendingUp className="w-4.5 h-4.5" />
                          Por que este visto é ideal para você?
                        </p>
                        <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-sans">
                          {bestMatch.reason} {bestMatch.visa.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] text-zinc-400 pt-3 border-t border-zinc-800/60 font-mono">
                        <span className="flex items-center gap-1">
                          <span className="text-zinc-500 uppercase font-extrabold">Espera Tempo:</span>
                          <strong className="text-white">{bestMatch.visa.processingTime}</strong>
                        </span>
                        <span className="text-zinc-700">|</span>
                        <span className="flex items-center gap-1">
                          <span className="text-zinc-500 uppercase font-extrabold">Custo Consular:</span>
                          <strong className="text-emerald-400">{bestMatch.visa.applicationFee}</strong>
                        </span>
                      </div>
                    </div>

                    {/* Compatibility Score Radial Circular Dial */}
                    <div className="md:col-span-4 flex flex-col items-center justify-center p-6 bg-zinc-950/70 rounded-3xl border border-zinc-850 shrink-0">
                      <div className="relative w-28 h-28 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                          {/* Background Circle */}
                          <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.03)" strokeWidth="6" fill="transparent" />
                          {/* Progress Circle Arc */}
                          <circle 
                            cx="50" 
                            cy="50" r="40" 
                            stroke="#f2ca50" 
                            strokeWidth="6" 
                            fill="transparent" 
                            strokeDasharray={251.2}
                            strokeDashoffset={251.2 - (251.2 * bestMatch.score) / 100}
                            strokeLinecap="round"
                            className="transition-all duration-1000 ease-out"
                          />
                        </svg>
                        <div className="absolute flex flex-col items-center justify-center">
                          <span className="text-2xl font-black text-white leading-none font-display">{bestMatch.score}%</span>
                          <span className="text-[8px] uppercase tracking-widest text-[#f2ca50] font-bold mt-1 font-mono">Compatível</span>
                        </div>
                      </div>

                      {/* Difficulty Gauge Badge */}
                      <div className="mt-4 flex flex-col items-center space-y-1">
                        <span className="text-[9px] uppercase text-zinc-500 font-extrabold font-mono">Dificuldade de tirar</span>
                        <span className={`text-[10px] px-3 py-1 font-bold border rounded-full tracking-wider uppercase font-mono ${getDifficultyColor(bestMatch.visa.difficulty)}`}>
                          Visto {bestMatch.visa.difficulty}
                        </span>
                      </div>
                    </div>

                  </div>
                ) : (
                  <p className="text-sm text-zinc-300">Nenhum visto correspondente pôde ser encontrado para o perfil indicado.</p>
                )}

                {/* Dynamic Information Guidance */}
                <div className="pt-6 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="flex gap-3 items-start">
                    <div className="p-2 bg-yellow-500/10 border border-yellow-500/20 text-[#f2ca50] rounded-xl shrink-0 mt-0.5">
                      <Compass className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white uppercase tracking-wider font-display">Refine seu Plano de Imigração</p>
                      <p className="text-[11px] text-zinc-400 leading-relaxed max-w-xl">
                        Navegue diretamente nas diretrizes oficiais dos portais consulares governamentais de cada visto para preencher a documentação com máxima segurança.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Alternative matching pathways lists (Other options in country) */}
              {recommendations.length > 1 && (
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase text-zinc-400 tracking-widest flex items-center gap-1.5 px-1 font-mono">
                    <TrendingUp className="w-4 h-4 text-[#f2ca50]" />
                    Outros Caminhos Viáveis para Comparar:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {recommendations.slice(1).map(({ visa, score }) => (
                      <div 
                        key={visa.id}
                        className="bg-zinc-900/20 border border-zinc-850 p-4.5 rounded-2xl flex items-center justify-between gap-4 hover:border-zinc-700 hover:bg-zinc-950/40 transition-all text-xs"
                      >
                        <div className="space-y-1">
                          <p className="font-bold text-white line-clamp-1 font-display">{visa.name}</p>
                          <div className="flex gap-2 items-center text-[10px] text-zinc-500 font-mono">
                            <span className={getDifficultyColor(visa.difficulty).split(' ')[0]}>Visto {visa.difficulty}</span>
                            <span>•</span>
                            <span>Taxa: {visa.applicationFee}</span>
                          </div>
                        </div>

                        <div className="shrink-0 text-right font-mono">
                          <span className="block font-black text-white text-base leading-none">{score}%</span>
                          <span className="text-[8px] uppercase tracking-wider text-zinc-500">Adequação</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Back actions to restart */}
              <div className="flex justify-center pt-4">
                <button
                  onClick={handleReset}
                  className="flex items-center gap-2 text-xs text-[#f2ca50] font-bold tracking-widest uppercase bg-zinc-900 hover:bg-[#f2ca50]/10 px-6 py-3.5 rounded-2xl border border-zinc-800 hover:border-[#f2ca50]/30 transition-all cursor-pointer font-display shadow-xl shadow-black/20"
                >
                  <RotateCcw className="w-4 h-4" />
                  Reiniciar Questionário
                </button>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
