import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Compass, 
  Sparkles, 
  CheckCircle, 
  Info,
  Shield,
  Layers,
  HelpCircle,
  Clock,
  ArrowUpRight,
  ExternalLink,
  ChevronRight,
  DollarSign,
  UserCheck,
  TrendingUp,
  AlertOctagon,
  Award
} from 'lucide-react';
import { CountryCode, CountryInfo, VisaDetail } from './types';
import { countriesData } from './data/visas';
import InteractiveGlobe from './components/InteractiveGlobe';
import VisaCategoryCards from './components/VisaCategoryCards';
import EligibilitySurvey from './components/EligibilitySurvey';

export default function App() {
  const [selectedCountryCode, setSelectedCountryCode] = useState<CountryCode | null>(null);
  const [activeTab, setActiveTab] = useState<'VISAS' | 'SURVEY'>('VISAS');
  const [scrolled, setScrolled] = useState(false);
  const [activeVisaDetail, setActiveVisaDetail] = useState<VisaDetail | null>(null);
  const [showingPermanentVisasOnly, setShowingPermanentVisasOnly] = useState(false);

  // Scroll detection to adjust header design
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeCountry = selectedCountryCode 
    ? countriesData.find(c => c.code === selectedCountryCode) || countriesData[0]
    : null;

  const countryDetailLandmarks: Record<string, { name: string; image: string }> = {
    USA: {
      name: 'Estátua da Liberdade & Horizonte de Manhattan (Nova Iorque)',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=85',
    },
    PRT: {
      name: 'Torre de Belém & Margens do Rio Tejo (Lisboa)',
      image: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1200&q=85',
    },
    CAN: {
      name: 'CN Tower & Skyline de Toronto',
      image: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=1200&q=85',
    },
    AUS: {
      name: 'Ópera de Sydney & Baía de Port Jackson (Sydney)',
      image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=85',
    }
  };

  const countryLandmarksGallery: Partial<Record<CountryCode, { title: string; desc: string; image: string }[]>> = {
    USA: [
      {
        title: 'Estátua da Liberdade & Manhattan',
        desc: 'Símbolo máximo de acolhimento em Nova Iorque.',
        image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=650&q=80'
      },
      {
        title: 'Golden Gate Bridge (São Francisco)',
        desc: 'Uma das pontes suspensas mais famosas do mundo.',
        image: 'https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&w=650&q=80'
      },
      {
        title: 'Grand Canyon National Park',
        desc: 'Uma das maravilhas geológicas naturais do planeta.',
        image: 'https://images.unsplash.com/photo-1615551043360-33de8b5f410c?auto=format&fit=crop&w=650&q=80'
      }
    ],
    CAN: [
      {
        title: 'CN Tower & Skyline de Toronto',
        desc: 'A imponente torre de comunicações e marco canadense.',
        image: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=650&q=80'
      },
      {
        title: 'Banff National Park & Lake Louise',
        desc: 'Lagos de águas azul-turquesa emoldurados por geleiras.',
        image: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&w=650&q=80'
      },
      {
        title: 'Vila Histórica de Old Quebec',
        desc: 'A charmosa arquitetura fortificada francesa em Quebec.',
        image: 'https://images.unsplash.com/photo-1522083165195-342750297f4e?auto=format&fit=crop&w=650&q=80'
      }
    ],
    PRT: [
      {
        title: 'Torre de Belém (Lisboa)',
        desc: 'A histórica fortificação militar do período Manuelino.',
        image: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=650&q=80'
      },
      {
        title: 'Palácio Nacional da Pena (Sintra)',
        desc: 'O ápice do romantismo arquitetônico português.',
        image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=650&q=80'
      },
      {
        title: 'Ribeira & Rio Douro (Porto)',
        desc: 'Casarios tradicionais debruçados sobre as águas.',
        image: 'https://images.unsplash.com/photo-1552423422-40292edd3ca0?auto=format&fit=crop&w=650&q=80'
      }
    ],
    AUS: [
      {
        title: 'Sydney Opera House & Porto',
        desc: 'O monumento arquitetônico contemporâneo mais famoso.',
        image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=650&q=80'
      },
      {
        title: 'Grande Barreira de Corais',
        desc: 'O maior ecossistema marinho vivo e visível do espaço.',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=650&q=80'
      },
      {
        title: 'Twelve Apostles na Great Ocean Road',
        desc: 'Formações rochosas de calcário imponentes no oceano.',
        image: 'https://images.unsplash.com/photo-1524311545625-f7266ad8f430?auto=format&fit=crop&w=650&q=80'
      }
    ]
  };

  const handleSelectCountry = (code: CountryCode) => {
    setSelectedCountryCode(code);
    setActiveTab('VISAS');
    setShowingPermanentVisasOnly(false);
    setActiveVisaDetail(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReturnToGlobe = () => {
    setSelectedCountryCode(null);
    setShowingPermanentVisasOnly(false);
    setActiveVisaDetail(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenVisaDetail = (visa: VisaDetail) => {
    setActiveVisaDetail(visa);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Helper colors for difficulty meter
  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'Fácil': return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
      case 'Médio': return 'text-[#f2ca50] bg-[#f2ca50]/10 border-[#f2ca50]/20';
      case 'Difícil': return 'text-orange-400 bg-orange-500/10 border-orange-500/20';
      default: return 'text-[#f2ca50] bg-yellow-500/10 border-yellow-500/20';
    }
  };

  const getDifficultyScoreColor = (score: number) => {
    if (score < 40) return 'bg-emerald-500';
    if (score < 75) return 'bg-[#f2ca50]';
    return 'bg-red-500';
  };

  // Get all permanent visas from our database to show in specialized "Visto Permanente" page
  const allPermanentVisas = countriesData.flatMap(country => 
    country.visas.filter(visa => visa.group === 'PERMANENTE').map(v => ({
      ...v,
      countryName: country.name,
      countryFlag: country.flag,
      countryCode: country.code
    }))
  );

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-[#f2ca50]/30 selection:text-white relative">
      
      {/* Stars and Galaxy Backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-10 w-[1px] h-[1px] bg-white rounded-full"></div>
        <div className="absolute top-10 right-1/4 w-[2px] h-[2px] bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[1.5px] h-[1.5px] bg-[#f2ca50] rounded-full"></div>
      </div>

      {/* Top Header Navigation Bar */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-xl py-3 border-zinc-900 shadow-xl shadow-black/80' 
          : 'bg-transparent py-5 border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* Logo brand */}
          <button 
            type="button" 
            onClick={handleReturnToGlobe}
            className="flex items-center gap-2 group text-left cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#f2ca50] to-yellow-500 flex items-center justify-center text-black font-black text-xs tracking-tighter group-hover:scale-105 transition-transform shadow-lg shadow-yellow-500/10">
              IG
            </div>
            <div>
              <span className="font-display font-extrabold text-base tracking-tight text-white block">IMMIGLOBAL</span>
              <span className="text-[8px] uppercase tracking-[0.25em] text-[#f2ca50] font-black block leading-none">Imigração</span>
            </div>
          </button>

          {/* Desktop Navigation Paths */}
          <nav className="flex items-center gap-1.5 p-1 bg-zinc-950 border border-zinc-900 rounded-xl text-[10px] font-bold uppercase tracking-wider text-zinc-400">
            <button 
              type="button"
              onClick={handleReturnToGlobe}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                !selectedCountryCode 
                  ? 'bg-zinc-900 text-white shadow' 
                  : 'hover:text-white'
              }`}
            >
              Globo
            </button>

            <div className="w-[1px] h-4 bg-zinc-800 mx-1 hidden sm:block"></div>

            <button 
              type="button"
              onClick={() => handleSelectCountry('USA')}
              className={`px-2.5 py-1.5 rounded-lg transition-all cursor-pointer hidden sm:flex items-center gap-1 ${
                selectedCountryCode === 'USA' ? 'bg-zinc-850 text-white shadow' : 'hover:text-white'
              }`}
            >
              EUA
            </button>
            <button 
              type="button"
              onClick={() => handleSelectCountry('PRT')}
              className={`px-2.5 py-1.5 rounded-lg transition-all cursor-pointer hidden md:flex items-center gap-1 ${
                selectedCountryCode === 'PRT' ? 'bg-zinc-850 text-white shadow' : 'hover:text-white'
              }`}
            >
              Portugal
            </button>
            <button 
              type="button"
              onClick={() => handleSelectCountry('CAN')}
              className={`px-2.5 py-1.5 rounded-lg transition-all cursor-pointer hidden md:flex items-center gap-1 ${
                selectedCountryCode === 'CAN' ? 'bg-zinc-850 text-white shadow' : 'hover:text-white'
              }`}
            >
              Canadá
            </button>
            <button 
              type="button"
              onClick={() => handleSelectCountry('AUS')}
              className={`px-2.5 py-1.5 rounded-lg transition-all cursor-pointer hidden md:flex items-center gap-1 ${
                selectedCountryCode === 'AUS' ? 'bg-zinc-850 text-white shadow' : 'hover:text-white'
              }`}
            >
              Austrália
            </button>
          </nav>
        </div>
      </header>

      {/* Main View Area Container */}
      <main className="relative z-10 pt-20">
        <AnimatePresence mode="wait">
          
          {/* STATE A: ACTIVE SEPARATE VISA DETAIL PAGE */}
          {activeVisaDetail ? (
            <motion.div
              key={`visa-detail-page-${activeVisaDetail.id}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="max-w-5xl mx-auto px-6 py-12 md:py-16 space-y-8 min-h-screen"
            >
              {/* Back navigation */}
              <button
                type="button"
                onClick={() => setActiveVisaDetail(null)}
                className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#f2ca50] uppercase hover:underline cursor-pointer group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                Voltar para Listagem de Vistos
              </button>

              {/* Header Box */}
              <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-yellow-500/5 to-transparent rounded-full pointer-events-none"></div>
                
                <div>
                  <span className="text-[9px] uppercase font-mono tracking-widest text-[#f2ca50] font-extrabold px-3 py-1 bg-yellow-500/10 rounded-full border border-yellow-500/20">
                    Detalhes do Visto Permanente Oficial
                  </span>
                  <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-4 text-white font-display">
                    {activeVisaDetail.name}
                  </h1>
                  <p className="text-zinc-400 italic text-xs sm:text-sm mt-1">{activeVisaDetail.subtitle}</p>
                </div>

                <div className="p-5 bg-black/60 rounded-2xl border border-zinc-900 space-y-2.5">
                  <h4 className="text-[10px] uppercase font-mono font-bold text-[#f2ca50] tracking-wider flex items-center gap-2">
                    <Compass className="w-4 h-4" />
                    Como funciona este visto? (Mapeamento Geral)
                  </h4>
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-sans">
                    {activeVisaDetail.description}
                  </p>
                </div>

                {/* Split grid for requirements & metrics */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4 border-t border-zinc-900">
                  
                  {/* Left Side: Requirements Checklist */}
                  <div className="lg:col-span-8 space-y-5">
                    {/* Detailed operational explanation */}
                    {activeVisaDetail.systemOverview && (
                      <div className="p-5 bg-yellow-500/5 rounded-2xl border border-yellow-500/10 space-y-2.5">
                        <h4 className="text-[10px] uppercase font-mono font-bold text-[#f2ca50] tracking-wider flex items-center gap-2">
                          💡 Como este Sistema de Imigração Funciona:
                        </h4>
                        <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                          {activeVisaDetail.systemOverview}
                        </p>
                      </div>
                    )}

                    <h3 className="text-xs sm:text-sm uppercase font-mono font-bold text-white tracking-widest flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#f2ca50]" />
                      Requisitos de Elegibilidade Necessários:
                    </h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      {activeVisaDetail.requirements.map((req, idx) => (
                        <div key={idx} className="flex gap-2.5 items-start bg-zinc-900/10 border border-zinc-900 p-4 rounded-2xl text-zinc-300">
                          <span className="text-[#f2ca50] font-bold select-none shrink-0 font-mono">✔</span>
                          <span>{req}</span>
                        </div>
                      ))}
                    </div>

                    {/* Required Documents Section */}
                    {activeVisaDetail.requiredDocuments && (
                      <div className="space-y-4 pt-4">
                        <h4 className="text-xs uppercase font-mono font-bold text-[#f2ca50] tracking-widest flex items-center gap-1.5">
                          📋 Documentos Oficiais Obrigatórios Exigidos:
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {activeVisaDetail.requiredDocuments.map((doc, idx) => (
                            <div key={idx} className="flex gap-3 items-center bg-zinc-950 border border-zinc-900 px-4 py-3 rounded-xl text-zinc-300 text-xs leading-relaxed">
                              <span className="text-[#f2ca50] font-mono text-[14px]">▪</span>
                              <span>{doc}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Detailed Fee Structure Section */}
                    {activeVisaDetail.detailedFees && (
                      <div className="space-y-4 pt-4">
                        <h4 className="text-xs uppercase font-mono font-bold text-[#f2ca50] tracking-widest flex items-center gap-1.5">
                          💵 Detalhamento e Discriminação de Custos e Taxas:
                        </h4>
                        <div className="bg-zinc-950 border border-zinc-900 rounded-2xl overflow-hidden divide-y divide-zinc-900 shadow">
                          {activeVisaDetail.detailedFees.map((fee, idx) => (
                            <div key={idx} className="flex justify-between items-center p-4 text-xs">
                              <span className="text-zinc-400 font-sans">{fee.item}</span>
                              <span className="font-mono font-bold text-white bg-zinc-900 border border-zinc-850 px-2 py-0.5 rounded text-[11px]">{fee.cost}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Step guidance */}
                    <div className="space-y-4 pt-4">
                      <h4 className="text-xs uppercase font-mono font-bold text-[#f2ca50] tracking-widest">
                        Passos para Solicitação Oficiais:
                      </h4>
                      <div className="space-y-3">
                        {activeVisaDetail.steps.map((st, idx) => (
                          <div key={idx} className="flex gap-4 p-4 bg-zinc-950 border border-zinc-900 rounded-2xl text-xs leading-relaxed text-zinc-300 hover:border-zinc-800 transition-colors">
                            <div className="flex items-center justify-center w-6 h-6 rounded-xl bg-gradient-to-br from-[#f2ca50] to-yellow-500 text-black font-extrabold shrink-0 shadow font-display">
                              {idx + 1}
                            </div>
                            <div className="space-y-1">
                              <p className="font-bold text-white uppercase text-[10px] tracking-wide font-display">{st.title}</p>
                              <p className="text-zinc-400 text-xs">{st.desc}</p>
                              {st.link && (
                                <a 
                                  href={st.link} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-[#f2ca50] font-bold hover:underline text-[10px] mt-1.5 font-mono uppercase"
                                >
                                  <span>Acessar {st.linkText || 'Portal Governamental'}</span>
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Key Numerical Metrics Cards */}
                  <div className="lg:col-span-4 bg-black border border-zinc-900 p-6 rounded-3xl space-y-6">
                    <div>
                      <h4 className="text-[9px] font-bold uppercase text-zinc-500 tracking-wider font-mono mb-2">Análise de Dificuldade</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-zinc-300">
                          <span>Estimativa:</span>
                          <span className={getDifficultyColor(activeVisaDetail.difficulty).split(' ')[0] + " font-mono"}>
                            {activeVisaDetail.difficulty}
                          </span>
                        </div>
                        <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${getDifficultyScoreColor(activeVisaDetail.difficultyScore)}`} 
                            style={{ width: `${activeVisaDetail.difficultyScore}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 pt-2 border-t border-zinc-900/60">
                      <div className="flex items-center gap-3 text-xs">
                        <div className="w-8 h-8 rounded-lg bg-zinc-950 flex items-center justify-center text-[#f2ca50] border border-zinc-800">
                          <Clock className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-zinc-500 uppercase text-[8px] tracking-widest font-mono">Processamento Típico</p>
                          <p className="font-bold text-white text-xs">{activeVisaDetail.processingTime}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-xs">
                        <div className="w-8 h-8 rounded-lg bg-zinc-950 flex items-center justify-center text-emerald-400 border border-zinc-800">
                          <DollarSign className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-zinc-500 uppercase text-[8px] tracking-widest font-mono">Taxas Consulares Governamentais</p>
                          <p className="font-bold text-white text-xs">{activeVisaDetail.applicationFee}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-xs">
                        <div className="w-8 h-8 rounded-lg bg-zinc-950 flex items-center justify-center text-blue-400 border border-zinc-800">
                          <UserCheck className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-zinc-500 uppercase text-[8px] tracking-widest font-mono">Grupo Etário Ideal</p>
                          <p className="font-bold text-white text-xs">{activeVisaDetail.typicalAgeGroup}</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-col gap-1.5 border-t border-zinc-900 text-xs">
                      <span className="text-[#f2ca50] font-mono uppercase text-[9px] font-bold">Perfil Recomendado:</span>
                      <p className="text-zinc-400 text-[11px] leading-relaxed italic">{activeVisaDetail.idealProfile}</p>
                    </div>

                    <div className="pt-4">
                      <a 
                        href={activeVisaDetail.officialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-[#f2ca50] hover:bg-[#ffe088] text-black font-extrabold py-3.5 rounded-2xl text-xs tracking-wider uppercase transition-all shadow-xl shadow-yellow-500/10 text-center cursor-pointer font-display"
                      >
                        <span>Acessar Portal do Governo</span>
                        <ExternalLink className="w-4 h-4 text-black" />
                      </a>
                    </div>

                    {/* Embaixadas e Representações Consulares Links (User request compliance) */}
                    <div className="pt-5 mt-5 border-t border-zinc-900/80 space-y-3 text-xs leading-relaxed">
                      <p className="font-mono text-[9px] uppercase font-bold text-zinc-500 tracking-wider">🏛️ Embaixadas e Representações Oficiais:</p>
                      <div className="flex flex-col gap-2">
                        {selectedCountryCode === 'PRT' && (
                          <>
                            <a 
                              href="https://www.gov.br/mre/pt-br/embaixada-lisboa" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center justify-between p-3 bg-zinc-950 border border-zinc-900 hover:border-zinc-700 rounded-xl transition-all cursor-pointer font-sans"
                            >
                              <span className="text-zinc-300">Embaixada do Brasil em Lisboa</span>
                              <ExternalLink className="w-3.5 h-3.5 text-[#f2ca50]" />
                            </a>
                            <a 
                              href="https://vistos.mne.gov.pt/pt/" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center justify-between p-3 bg-zinc-950 border border-zinc-900 hover:border-zinc-700 rounded-xl transition-all cursor-pointer font-sans"
                            >
                              <span className="text-zinc-300">Portal Consular de Vistos (MNE)</span>
                              <ExternalLink className="w-3.5 h-3.5 text-[#f2ca50]" />
                            </a>
                          </>
                        )}
                        {selectedCountryCode === 'CAN' && (
                          <>
                            <a 
                              href="https://www.international.gc.ca/country-pays/brazil-bresil/index.aspx?lang=por" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center justify-between p-3 bg-zinc-950 border border-zinc-900 hover:border-zinc-700 rounded-xl transition-all cursor-pointer font-sans"
                            >
                              <span className="text-zinc-300">Embaixada do Canadá no Brasil</span>
                              <ExternalLink className="w-3.5 h-3.5 text-[#f2ca50]" />
                            </a>
                            <a 
                              href="https://www.canada.gov/en/immigration-refugees-citizenship.html" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center justify-between p-3 bg-zinc-950 border border-zinc-900 hover:border-zinc-700 rounded-xl transition-all cursor-pointer font-sans"
                            >
                              <span className="text-zinc-300">Portal Oficial IRCC (Canadá)</span>
                              <ExternalLink className="w-3.5 h-3.5 text-[#f2ca50]" />
                            </a>
                          </>
                        )}
                        {selectedCountryCode === 'AUS' && (
                          <>
                            <a 
                              href="https://brazil.embassy.gov.au" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center justify-between p-3 bg-zinc-950 border border-zinc-900 hover:border-zinc-700 rounded-xl transition-all cursor-pointer font-sans"
                            >
                              <span className="text-zinc-300">Embaixada da Austrália no Brasil</span>
                              <ExternalLink className="w-3.5 h-3.5 text-[#f2ca50]" />
                            </a>
                            <a 
                              href="https://immi.homeaffairs.gov.au" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center justify-between p-3 bg-zinc-950 border border-zinc-900 hover:border-zinc-700 rounded-xl transition-all cursor-pointer font-sans"
                            >
                              <span className="text-zinc-300">Portal Australia Home Affairs</span>
                              <ExternalLink className="w-3.5 h-3.5 text-[#f2ca50]" />
                            </a>
                          </>
                        )}
                        {selectedCountryCode === 'USA' && (
                          <>
                            <a 
                              href="https://br.usembassy.gov/pt/visas-pt/" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center justify-between p-3 bg-zinc-950 border border-zinc-900 hover:border-zinc-700 rounded-xl transition-all cursor-pointer font-sans"
                            >
                              <span className="text-zinc-300">Embaixada Americana no Brasil</span>
                              <ExternalLink className="w-3.5 h-3.5 text-[#f2ca50]" />
                            </a>
                            <a 
                              href="https://www.uscis.gov" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center justify-between p-3 bg-zinc-950 border border-zinc-900 hover:border-zinc-700 rounded-xl transition-all cursor-pointer font-sans"
                            >
                              <span className="text-zinc-300">Portal Oficial de Imigração USCIS</span>
                              <ExternalLink className="w-3.5 h-3.5 text-[#f2ca50]" />
                            </a>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          ) : !selectedCountryCode ? (
            
            /* STATE C: MAIN PAGE WITH GLOBE & GENERAL NAVIGATION */
            <motion.div
              key="globe-home-screen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <InteractiveGlobe 
                onSelectCountry={handleSelectCountry} 
                selectedCountry={selectedCountryCode}
              />
            </motion.div>
          ) : (
            
            /* STATE D: SPECIFIC COUNTRY DASHBOARD HUB */
            <motion.div
              key={`country-hub-${selectedCountryCode}`}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="min-h-screen pb-24"
            >
              {activeCountry && (
                <div className="max-w-6xl mx-auto px-6 space-y-10 pt-6">
                  
                  {/* Back to Home & Showcase banner */}
                  <div className="flex flex-col gap-5">
                    <button 
                      type="button"
                      onClick={handleReturnToGlobe}
                      className="inline-flex items-center gap-1.5 text-[11px] text-[#f2ca50] font-mono font-bold tracking-widest uppercase hover:underline text-left self-start cursor-pointer group"
                    >
                      <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#f2ca50]" />
                      Voltar para o Globo Terrestre
                    </button>

                    {/* Styling as a premium glowing bento banner */}
                    <div className="relative h-60 sm:h-72 w-full rounded-3xl overflow-hidden bg-black border border-zinc-900 shadow-2xl group">
                      <img 
                        src={activeCountry.bannerImage} 
                        alt={activeCountry.name} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover opacity-65 group-hover:scale-105 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-transparent"></div>
                      
                      {/* Banner text info overlay */}
                      <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-5">
                        <div className="space-y-2 max-w-xl">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl drop-shadow">{activeCountry.flag}</span>
                            <span className="text-[10px] uppercase font-mono tracking-widest text-[#f2ca50] font-extrabold px-2.5 py-0.5 bg-yellow-500/10 rounded-full border border-yellow-500/20">
                              {activeCountry.code}
                            </span>
                          </div>
                          <h1 className="text-3xl font-extrabold tracking-tight text-white font-display">
                            {activeCountry.name}
                          </h1>
                          <p className="text-zinc-400 text-xs leading-relaxed">
                            {activeCountry.desc}
                          </p>
                        </div>

                        {/* Navigation pills */}
                        <div className="bg-zinc-950/90 border border-zinc-900 p-3.5 rounded-2xl space-y-2 shrink-0">
                          <p className="text-[8px] text-zinc-500 font-mono font-bold uppercase tracking-widest">Navegar Para Outros</p>
                          <div className="flex gap-1.5">
                            {countriesData.map((co) => (
                              <button
                                type="button"
                                key={co.code}
                                onClick={() => handleSelectCountry(co.code)}
                                className={`px-2.5 py-1.5 rounded-lg text-[10px] font-bold transition-all ${
                                  co.code === selectedCountryCode
                                    ? 'bg-[#f2ca50] text-black shadow font-black'
                                    : 'bg-zinc-900/60 hover:bg-zinc-900 text-zinc-300'
                                }`}
                              >
                                {co.name.substring(0, 3)}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tab state layout selector */}
                  <div className="flex justify-center">
                    <div className="flex p-0.5 bg-zinc-950 border border-zinc-900 rounded-2xl max-w-md w-full sm:w-auto">
                      <button
                        type="button"
                        onClick={() => setActiveTab('VISAS')}
                        className={`flex-1 sm:flex-initial px-6 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
                          activeTab === 'VISAS'
                            ? 'bg-[#f2ca50] text-black shadow-md font-extrabold'
                            : 'text-zinc-400 hover:text-white'
                        }`}
                      >
                        <Layers className="w-4 h-4" />
                        Opções de Vistos
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveTab('SURVEY')}
                        className={`flex-1 sm:flex-initial px-6 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
                          activeTab === 'SURVEY'
                            ? 'bg-[#f2ca50] text-black shadow-md font-extrabold'
                            : 'text-zinc-400 hover:text-white'
                        }`}
                      >
                        <Sparkles className="w-4 h-4" />
                        Simulador de Elegibilidade
                      </button>
                    </div>
                  </div>

                  {/* Tab component contents */}
                  <div className="transition-all duration-300">
                    {activeTab === 'VISAS' ? (
                      <VisaCategoryCards 
                        country={activeCountry} 
                        onOpenDetails={handleOpenVisaDetail}
                      />
                    ) : (
                      <EligibilitySurvey 
                        country={activeCountry} 
                        onBookConsultation={() => handleSelectCountry(activeCountry.code)}
                      />
                    )}
                  </div>

                    {/* FAQ block designed beautifully */}
                    <div className="bg-zinc-950/40 border border-zinc-900 p-6 sm:p-8 rounded-3xl space-y-6">
                      <div className="flex items-center gap-2 border-b border-zinc-900 pb-5">
                        <div className="w-8 h-8 rounded-lg bg-zinc-950 flex items-center justify-center border border-zinc-800">
                          <HelpCircle className="w-4 h-4 text-[#f2ca50]" />
                        </div>
                        <h3 className="text-xs font-bold font-display text-white uppercase tracking-wider">Perguntas Frequentes & Diretivas de Custo</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-zinc-950/30 border border-zinc-900 p-5 rounded-2xl space-y-1.5">
                          <p className="font-bold text-white flex items-center gap-2 text-xs font-display">
                            <span className="text-[#f2ca50] font-mono">01.</span>
                            Como funciona o processo consular e de biometria no Brasil?
                          </p>
                          <p className="text-zinc-400 text-xs leading-relaxed">
                            Para vistos temporários ou permanentes, após a aprovação da petição principal no órgão estrangeiro (USCIS, IRCC, AIMA, Home Affairs), o candidato comparece à Embaixada, consulados ou centros biométricos (como o CASV nos EUA ou VFS Global em Portugal/Canadá) para colher digitais, fotos e realizar as entrevistas de segurança.
                          </p>
                        </div>

                        <div className="bg-zinc-950/30 border border-zinc-900 p-5 rounded-2xl space-y-1.5">
                          <p className="font-bold text-white flex items-center gap-2 text-xs font-display">
                            <span className="text-[#f2ca50] font-mono">02.</span>
                            A ImmiGlobal cobra taxas? Quais as taxas oficiais consulares e acessórias?
                          </p>
                          <p className="text-zinc-400 text-xs leading-relaxed">
                            Não. A ImmiGlobal é um portal 100% gratuito e informativo. O usuário deve planejar os gastos consulares oficiais do governo respectivo, taxas de processamento, tarifas de validação/equivalência de diplomas (como WES para Canadá), taxas de biometrias e exames de proficiência certificada de idioma (IELTS/PTE).
                          </p>
                        </div>

                        <div className="bg-zinc-950/30 border border-zinc-900 p-5 rounded-2xl space-y-1.5">
                          <p className="font-bold text-white flex items-center gap-2 text-xs font-display">
                            <span className="text-[#f2ca50] font-mono">03.</span>
                            Que tipo de documentos preciso providenciar para visto técnico de pontos?
                          </p>
                          <p className="text-zinc-400 text-xs leading-relaxed">
                            Comumente são exigidos laudos de avaliação académica (comprovação de diploma por órgãos oficiais), certidões de antecedentes criminais apostiladas, cartas de recomendação de trabalho detalhando responsabilidades de cargos passados, exames médicos de saúde e extratos bancários que atestem sua autossuficiência econômica.
                          </p>
                        </div>

                        <div className="bg-zinc-950/30 border border-zinc-900 p-5 rounded-2xl space-y-1.5">
                          <p className="font-bold text-white flex items-center gap-2 text-xs font-display">
                            <span className="text-[#f2ca50] font-mono">04.</span>
                            Como funcionam os sistemas "Express Entry" e "Point System"?
                          </p>
                          <p className="text-zinc-400 text-xs leading-relaxed">
                            No Canadá e na Austrália, os processos são geridos por tabelas de pontuação. Diferente de uma loteria comum, os candidatos entram em uma pool unificada de competência onde idade, escolaridade, experiência e proficiência em inglês/francês somam pontos (CRS ou Skilled Grid). Convites (draws) ocorrem quinzenalmente para os líderes do ranking.
                          </p>
                        </div>
                      </div>
                    </div>

                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Modern Compliant Footer without redundant indicators */}
      <footer className="bg-black border-t border-zinc-900 py-16 mt-24">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12 text-xs text-zinc-450 z-10 relative">
          
          <div className="space-y-4 max-w-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-[#f2ca50] flex items-center justify-center text-black font-extrabold text-xs font-display">IG</div>
              <span className="font-extrabold font-display text-white text-base tracking-tight">IMMIGLOBAL</span>
            </div>
            <p className="text-zinc-500 leading-relaxed text-xs">
              Portal informativo e educativo independente sobre imigração e assessoria técnica. Simplificamos vistos internacionais de forma transparente e responsável para expatriados nacionais.
            </p>
            <p className="text-[10px] text-zinc-600 font-mono">
              © 2026 ImmiGlobal. Todos os direitos reservados.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-6">
            <div className="space-y-3">
              <p className="font-bold text-white uppercase tracking-wider text-[9px] font-mono">Links Diretos</p>
              <ul className="space-y-2 text-zinc-450">
                <li><button onClick={() => handleReturnToGlobe()} className="hover:text-white text-left cursor-pointer transition-colors">Voltar ao Início (Mapa)</button></li>
                <li><button onClick={() => handleSelectCountry('USA')} className="hover:text-white text-left cursor-pointer">EUA</button></li>
                <li><button onClick={() => handleSelectCountry('PRT')} className="hover:text-white text-left cursor-pointer">Portugal</button></li>
                <li><button onClick={() => handleSelectCountry('CAN')} className="hover:text-white text-left cursor-pointer">Canadá</button></li>
                <li><button onClick={() => handleSelectCountry('AUS')} className="hover:text-white text-left cursor-pointer">Austrália</button></li>
              </ul>
            </div>

            <div className="space-y-3">
              <p className="font-bold text-white uppercase tracking-wider text-[9px] font-mono">Normas de Conduta</p>
              <ul className="space-y-2 text-zinc-450">
                <li><a href="#" className="hover:text-white transition-colors">Termos Gerais de Uso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Isenção Legal</a></li>
              </ul>
            </div>
          </div>

        </div>

        <div className="max-w-5xl mx-auto px-6 mt-12 pt-8 border-t border-zinc-950 text-[10px] text-zinc-600 leading-normal text-center">
          <strong>Isenção Governamental:</strong> A ImmiGlobal é um portal informativo autônomo e não possui vínculos com repartições federais, embaixadas, governos soberanos ou autarquias de imigração consulares estrangeiras (e.g., USCIS, Home Affairs, MNE). As referências e orientações bibliográficas provêm de sites governamentais oficiais.
        </div>
      </footer>

    </div>
  );
}
