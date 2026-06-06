import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Award, 
  Briefcase, 
  Plane, 
  ArrowRight
} from 'lucide-react';
import { CountryInfo, VisaDetail, VisaCategory } from '../types';

interface VisaCategoryCardsProps {
  country: CountryInfo;
  onOpenDetails: (visa: VisaDetail) => void;
}

export default function VisaCategoryCards({ country, onOpenDetails }: VisaCategoryCardsProps) {
  const [selectedVisa, setSelectedVisa] = useState<VisaDetail | null>(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<VisaCategory | 'ALL'>('ALL');

  // Country-specific landmark images dictionary for localized pages context
  const countryScenicImages: Record<string, Record<VisaCategory, string>> = {
    USA: {
      PERMANENTE: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=800&q=80', // Statue of Liberty NYC
      TEMPORARIO: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80', // Harvard twilight
      VISITANTE: 'https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&w=800&q=80', // Golden Gate Bridge
    },
    PRT: {
      PERMANENTE: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=800&q=80', // Torre de Belém Portugal
      TEMPORARIO: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=800&q=80', // Lisbon Tram warm lights
      VISITANTE: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=800&q=80', // Algarve Portugal
    },
    CAN: {
      PERMANENTE: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=800&q=80', // Toronto skyline night
      TEMPORARIO: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80', // Spectacular Canada Banff Lake Louise
      VISITANTE: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80', // Lake Louise Canada
    },
    AUS: {
      PERMANENTE: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80', // Sydney Opera House
      TEMPORARIO: 'https://images.unsplash.com/photo-1514395462725-fb4566210144?auto=format&fit=crop&w=800&q=80', // Melbourne lights
      VISITANTE: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=800&q=80', // Great Ocean Road sunset Australia
    },
    ESP: {
      PERMANENTE: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
      TEMPORARIO: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=800&q=80',
      VISITANTE: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    }
  };

  // Grouping visas by category
  const categories: { key: VisaCategory; title: string; desc: string; icon: any }[] = [
    {
      key: 'PERMANENTE',
      title: 'Vistos Permanentes',
      desc: 'Caminhos diretos para o Green Card / Residência Permanente autorizada.',
      icon: Award
    },
    {
      key: 'TEMPORARIO',
      title: 'Vistos Temporários',
      desc: 'Autorizações de estadia para trabalhar, treinar ou estudar com prazo determinado.',
      icon: Briefcase
    },
    {
      key: 'VISITANTE',
      title: 'Vistos de Visitante',
      desc: 'Para fins de lazer acadêmico curto, turismo rápido, viagens médicas ou conexões rápidas.',
      icon: Plane
    }
  ];

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'Fácil': return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
      case 'Médio': return 'text-[#f2ca50] bg-[#f2ca50]/10 border-[#f2ca50]/20';
      case 'Difícil': return 'text-orange-400 bg-orange-500/10 border-orange-500/20';
      default: return 'text-red-400 bg-red-500/10 border-red-500/20';
    }
  };

  return (
    <div className="w-full space-y-12 py-8 bg-transparent text-white animate-fadeIn">
      
      {/* Category Selection Filter & Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-zinc-900 pb-6">
        <div>
          <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-[#f2ca50] font-bold">Opções Habilitadas em {country.name}</span>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mt-1 font-display">Opções de Vistos de Imigração</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          <button 
            type="button"
            onClick={() => setActiveCategoryFilter('ALL')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border cursor-pointer ${
              activeCategoryFilter === 'ALL' 
                ? 'bg-[#f2ca50] text-black border-[#f2ca50] font-extrabold' 
                : 'bg-zinc-900/40 border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-800/50'
            }`}
          >
            Ver Todos ({country.visas.length})
          </button>
          {categories.map((cat) => {
            const count = country.visas.filter(v => v.group === cat.key).length;
            if (count === 0) return null;
            return (
              <button 
                type="button"
                key={cat.key}
                onClick={() => setActiveCategoryFilter(cat.key)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border cursor-pointer ${
                  activeCategoryFilter === cat.key 
                    ? 'bg-[#f2ca50] text-black border-[#f2ca50] font-extrabold' 
                    : 'bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:bg-zinc-800/50'
                }`}
              >
                {cat.title.split(' ')[1]} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Main categories column layouts with bento cards styling */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {categories.map((cat) => {
          const visasInCategory = country.visas.filter(v => v.group === cat.key);
          const isCategoryHidden = activeCategoryFilter !== 'ALL' && activeCategoryFilter !== cat.key;
          
          if (visasInCategory.length === 0 || isCategoryHidden) return null;

          const IconComponent = cat.icon;

          return (
            <motion.div 
              key={cat.key}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group flex flex-col h-full bg-zinc-900/30 backdrop-blur-md border border-zinc-800/80 rounded-3xl p-6 hover:bg-zinc-900/60 hover:border-[#f2ca50]/30 transition-all duration-300 shadow-xl relative overflow-hidden bento-glow-zinc"
            >
              {/* Category Showcase Image */}
              <div className="relative h-40 w-full mb-6 rounded-2xl overflow-hidden bg-black border border-zinc-800/80">
                <img 
                  src={countryScenicImages[country.code]?.[cat.key] || 'https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&w=800&q=80'} 
                  alt={cat.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-25 group-hover:scale-105 group-hover:opacity-35 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent"></div>
                
                <div className="absolute top-4 left-4 p-2 bg-zinc-950/90 border border-zinc-800 rounded-xl text-[#f2ca50]">
                  <IconComponent className="w-4.5 h-4.5" />
                </div>

                <div className="absolute bottom-4 left-4">
                  <h3 className="text-base font-bold font-display text-white">{cat.title}</h3>
                </div>
              </div>

              {/* Category description */}
              <p className="text-zinc-400 text-xs mb-6 h-10 overflow-hidden leading-relaxed">
                {cat.desc}
              </p>

              {/* Sub-Visa items list inside this category */}
              <div className="space-y-2.5 flex-grow mb-6">
                {visasInCategory.map((v) => {
                  const isCurrent = selectedVisa?.id === v.id;
                  return (
                    <button
                      type="button"
                      key={v.id}
                      onClick={() => {
                        if (isCurrent) {
                          onOpenDetails(v);
                        } else {
                          setSelectedVisa(v);
                        }
                      }}
                      onDoubleClick={() => {
                        onOpenDetails(v);
                      }}
                      title="Clique uma vez para pré-selecionar, duas vezes para abrir detalhes em nova página"
                      className={`w-full flex items-center justify-between p-3 rounded-2xl text-left transition-all border cursor-pointer ${
                        isCurrent
                          ? 'bg-[#f2ca50]/10 border-[#f2ca50] text-[#f2ca50] font-semibold'
                          : 'bg-zinc-950/40 border-zinc-800/60 hover:bg-zinc-800/40 hover:border-zinc-700/80 text-zinc-200'
                      }`}
                    >
                      <div className="space-y-0.5">
                        <p className="text-xs font-bold leading-tight line-clamp-1 font-display">{v.name}</p>
                        <p className="text-[10px] text-zinc-500 line-clamp-1 font-mono">{v.subtitle}</p>
                      </div>
                      <div className="flex items-center gap-1.5 ml-2 shrink-0">
                        <span className={`text-[9px] px-2 py-0.5 border rounded-full font-bold font-mono uppercase ${getDifficultyColor(v.difficulty)}`}>
                          {v.difficulty}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-50" />
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Quick action helper button */}
              <button 
                type="button"
                onClick={() => {
                  const defaultVisa = visasInCategory[0];
                  onOpenDetails(selectedVisa && selectedVisa.group === cat.key ? selectedVisa : defaultVisa);
                }}
                className="w-full bg-zinc-900 hover:bg-[#f2ca50]/15 border border-zinc-800 hover:border-[#f2ca50]/40 text-zinc-300 hover:text-[#f2ca50] font-bold py-3 rounded-xl text-xs tracking-wider transition-all cursor-pointer font-display"
              >
                Detalhar Caminho
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
