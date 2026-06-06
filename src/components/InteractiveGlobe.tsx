import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  Plane, 
  Award, 
  Briefcase, 
  Users, 
  CheckCircle, 
  Newspaper, 
  ArrowRight,
  Globe,
  Compass,
  ArrowUpRight
} from 'lucide-react';
import { CountryCode } from '../types';

interface InteractiveGlobeProps {
  onSelectCountry: (code: CountryCode) => void;
  selectedCountry: CountryCode | null;
}

export default function InteractiveGlobe({ onSelectCountry, selectedCountry }: InteractiveGlobeProps) {
  const [activeHoverPin, setActiveHoverPin] = useState<CountryCode | null>(null);

  const pins = [
    { code: 'USA' as CountryCode, name: 'Estados Unidos', flag: '🇺🇸', x: 210, y: 150, color: '#f2ca50' },
    { code: 'CAN' as CountryCode, name: 'Canadá', flag: '🇨🇦', x: 190, y: 100, color: '#ff4444' },
    { code: 'PRT' as CountryCode, name: 'Portugal', flag: '🇵🇹', x: 475, y: 145, color: '#00ff66' },
    { code: 'AUS' as CountryCode, name: 'Austrália', flag: '🇦🇺', x: 840, y: 335, color: '#3399ff' }
  ];

  // Specific pathways curves starting from Brazil (340, 320)
  const pathways = [
    { code: 'USA', endX: 210, endY: 150, ctrlX: 230, ctrlY: 230, color: '#f2ca50' },
    { code: 'CAN', endX: 190, endY: 100, ctrlX: 200, ctrlY: 190, color: '#ff4444' },
    { code: 'PRT', endX: 475, endY: 145, ctrlX: 410, ctrlY: 210, color: '#00ff66' },
    { code: 'AUS', endX: 840, endY: 335, ctrlX: 590, ctrlY: 420, color: '#3399ff' }
  ];

  // Immigration empirical statistics from Brazil (2018 - 2025)
  const immigrationStats = {
    USA: {
      volume: '450.000',
      period: '2018-2025',
      percentage: '39.8%',
      trend: 'Alta Consecutiva (+14% em 2025)',
      professions: ['Engenharia de Software & TI', 'Engenheiros Civis e Consultores', 'Profissionais de Saúde', 'Pesquisadores de Alta Performance'],
      highlight: 'Aumento recorde de cientistas e tecnólogos brasileiros optando pelo visto EB-2 NIW de interesse nacional sem dependência de patrocinadores corporativos.',
      news: 'USCIS expande processamento premium agilizado para vistos de mérito técnico.'
    },
    PRT: {
      volume: '290.000',
      period: '2018-2025',
      percentage: '25.6%',
      trend: 'Expansão Contínua (Maior Comunidade)',
      professions: ['Nômades Digitais (Desenvolvimento/Design)', 'Profissionais de Reabilitação & Construção', 'Gestores de Marketing & Vendas', 'Engenharia Civil e Tecnologia'],
      highlight: 'O novo formato de vistos facilitados para países da CPLP (Comunidade de Países de Língua Portuguesa) simplificou o envio de candidaturas diretamente pelo consulado.',
      news: 'Regras simplificadas reduzem burocracia para emissão de Cartão de Residência (AIMA).'
    },
    CAN: {
      volume: '110.000',
      period: '2018-2025',
      percentage: '9.7%',
      trend: 'Estável com Foco Qualitativo (Express Entry)',
      professions: ['Programadores Full-Stack e Analistas', 'Enfermeiros Registrados', 'Profissionais Técnicos de Manufatura', 'Engenheiros Hidráulicos'],
      highlight: 'Os sorteios focados por categorias no Express Entry priorizam expressamente especialistas em tecnologia, ciências e medicina fluentes em inglês.',
      news: 'Rodadas direcionadas do Express Entry trazem pontuação reduzida para TI.'
    },
    AUS: {
      volume: '58.000',
      period: '2018-2025',
      percentage: '5.1%',
      trend: 'Crescimento de Especialistas (Subclass 189/190)',
      professions: ['Engenheiros de Infraestrutura & Mineração', 'Carpinteiros / Técnicos Especializados (Trades)', 'Enfermeiros de Emergência', 'Chefs de Cozinha de Alta Gastronomia'],
      highlight: 'A falta sazonal de mão de obra de engenharia civil pesada e cargos setoriais (trades) abriu caminho sólido para patrocínios estaduais independentes.',
      news: 'Austrália eleva teto salarial de patrocínio facilitando vistos qualificados de longo termo.'
    }
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-start select-none bg-black text-white overflow-hidden pb-24">
      
      {/* Dynamic Starry Cyber Atmosphere Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,15,22,0.92)_0%,rgba(0,0,0,1)_95%)]"></div>
        
        {/* Soft grid of cosmic coordinates */}
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(rgba(242,202,80,0.02)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(242,202,80,0.02)_1.5px,transparent_1.5px)] bg-[size:50px_50px]"></div>

        <div className="absolute top-16 left-1/4 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
        <div className="absolute top-1/3 right-1/5 w-[1px] h-[1px] bg-white rounded-full"></div>
        <div className="absolute bottom-1/4 left-10 w-[2px] h-[2px] bg-zinc-700 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-32 w-1.5 h-1.5 bg-[#f2ca50]/25 rounded-full blur-[1px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl px-6 flex flex-col items-center gap-10 text-center pt-8">
        
        {/* Header Branding Panel with Motivation Quote/Title */}
        <div className="space-y-4 max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-yellow-500/5 border border-yellow-500/10 rounded-full text-[#f2ca50] text-[10px] font-mono tracking-wider uppercase font-bold"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            MAPA DE IMIGRAÇÃO GLOBAL INTERATIVO
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight font-display text-white"
          >
            O Mundo Abre Portas <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f2ca50] to-[#ffe28a]/90 drop-shadow-md">
              Para Quem Ousa Explorar
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-zinc-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed font-sans"
          >
            Planeje seu futuro internacional com segurança. Explore as rotas consulares e os passos de imigração. Clique nos países ativos do nosso Mapa Mundial Interativo para detalhar as diretrizes de vistos.
          </motion.p>
        </div>

        {/* Highly Styled Premium World Map Board */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative w-full aspect-[2/1] bg-gradient-to-b from-zinc-950/70 to-zinc-950/90 border border-zinc-900 rounded-3xl p-3 sm:p-5 shadow-2xl overflow-hidden shadow-yellow-500/[0.02]"
        >
          {/* Subtle radar sweep style coordinate grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:5%_10%] pointer-events-none rounded-3xl"></div>
          
          {/* Tech Spec Box */}
          <div className="absolute top-4 left-4 text-[8px] font-mono text-zinc-650 pointer-events-none hidden sm:flex flex-col text-left space-y-1">
            <span>GRID SYSTEM: MERCATOR 2D CYBER PLANE</span>
            <span>SCALE RATIO: 1:1 CYBER GRAPHICS</span>
          </div>

          <div className="absolute bottom-4 left-4 text-[9px] font-mono text-[#f2ca50]/55 pointer-events-none hidden sm:flex items-center gap-2">
            <Globe className="w-3 h-3 text-[#f2ca50]" />
            <span className="bg-zinc-950 px-2 py-0.5 border border-zinc-900 rounded font-bold">MAPA CYBERNETIC MUNDIAL INTERATIVO</span>
          </div>

          {/* SVG Canvas depicting the flat map with continents */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1000 480" 
            className="absolute inset-0 w-full h-full pointer-events-auto select-none z-10"
          >
            {/* Grid Coordinates (Latitude and Longitude technical lines) */}
            <g opacity="0.18">
              <line x1="50" y1="100" x2="950" y2="100" stroke="#f2ca50" strokeWidth="0.5" strokeDasharray="4 6" />
              <line x1="50" y1="200" x2="950" y2="200" stroke="#f2ca50" strokeWidth="0.5" strokeDasharray="4 6" />
              <line x1="50" y1="300" x2="950" y2="300" stroke="#f2ca50" strokeWidth="0.5" strokeDasharray="4 6" />
              <line x1="50" y1="400" x2="950" y2="400" stroke="#f2ca50" strokeWidth="0.5" strokeDasharray="4 6" />
              
              <line x1="200" y1="50" x2="200" y2="430" stroke="#f2ca50" strokeWidth="0.5" strokeDasharray="4 6" />
              <line x1="400" y1="50" x2="400" y2="430" stroke="#f2ca50" strokeWidth="0.5" strokeDasharray="4 6" />
              <line x1="600" y1="50" x2="600" y2="430" stroke="#f2ca50" strokeWidth="0.5" strokeDasharray="4 6" />
              <line x1="800" y1="50" x2="800" y2="430" stroke="#f2ca50" strokeWidth="0.5" strokeDasharray="4 6" />
            </g>

            {/* Continent Outlines in Style of Page (Cyber wireframes with subtle glow and gold borders) */}
            <g>
              {/* North America */}
              <path 
                d="M 60,60 C 120,40 180,30 250,30 C 310,25 290,65 340,65 C 315,90 310,120 260,115 C 230,110 220,135 170,140 C 145,140 150,165 105,170 C 100,165 55,140 50,115 Z" 
                fill="rgba(242, 202, 80, 0.025)" 
                stroke="rgba(242, 202, 80, 0.12)" 
                strokeWidth="1.2" 
                className="transition-all duration-300"
              />
              {/* Greenland */}
              <path 
                d="M 310,15 C 350,15 370,12 380,30 C 350,55 310,40 310,15 Z" 
                fill="rgba(242, 202, 80, 0.025)" 
                stroke="rgba(242, 202, 80, 0.12)" 
                strokeWidth="1.2"
              />
              {/* South America */}
              <path 
                d="M 160,200 C 205,190 250,215 270,250 C 290,280 330,320 290,390 C 265,430 230,450 210,410 C 195,370 160,300 160,200 Z" 
                fill="rgba(242, 202, 80, 0.035)" 
                stroke="rgba(242, 202, 80, 0.16)" 
                strokeWidth="1.2"
              />
              {/* Europe & Africa */}
              <path 
                d="M 400,200 C 450,105 510,80 540,110 C 560,125 530,160 480,180 C 450,190 430,220 440,240 C 460,260 515,225 555,235 C 575,240 590,280 560,330 C 540,365 510,385 480,350 C 460,320 420,290 400,200 Z" 
                fill="rgba(242, 202, 80, 0.022)" 
                stroke="rgba(242, 202, 80, 0.1)" 
                strokeWidth="1.2"
              />
              {/* Asia */}
              <path 
                d="M 540,110 C 600,60 750,50 860,65 C 890,70 920,95 875,135 C 850,155 860,195 805,215 C 750,230 710,180 650,210 C 600,225 560,195 540,110 Z" 
                fill="rgba(242, 202, 80, 0.025)" 
                stroke="rgba(242, 202, 80, 0.12)" 
                strokeWidth="1.2"
              />
              {/* Australia */}
              <path 
                d="M 770,300 C 830,285 875,305 885,340 C 865,370 810,370 770,300 Z" 
                fill="rgba(242, 202, 80, 0.04)" 
                stroke="rgba(242, 202, 80, 0.18)" 
                strokeWidth="1.2"
              />
            </g>

            {/* Trajectories starting from Brazil (x: 215, y: 300) to each destination */}
            {pathways.map((path) => {
              const remainsSelected = selectedCountry === path.code;
              const isHovered = activeHoverPin === path.code || remainsSelected;
              
              // Brazil Flat Coord Node (215, 300)
              const bX = 215;
              const bY = 300;

              return (
                <g key={`route-${path.code}`}>
                  {/* Glowing background guide spline */}
                  <path 
                    d={`M ${bX},${bY} Q ${path.ctrlX},${path.ctrlY} ${path.endX},${path.endY}`}
                    fill="none"
                    stroke={isHovered ? path.color : "rgba(242, 202, 80, 0.18)"}
                    strokeWidth={isHovered ? "2.5" : "1.2"}
                    opacity={isHovered ? "0.9" : "0.5"}
                    className="transition-all duration-300"
                  />
                  
                  {/* Flow dashes animation */}
                  <path 
                    d={`M ${bX},${bY} Q ${path.ctrlX},${path.ctrlY} ${path.endX},${path.endY}`}
                    fill="none"
                    stroke={isHovered ? path.color : "#f2ca50"}
                    strokeWidth={isHovered ? "2.5" : "1.2"}
                    strokeDasharray={isHovered ? "8,6" : "4,14"}
                    strokeDashoffset="100"
                    opacity={isHovered ? "1" : "0.3"}
                    style={{
                      animation: 'dash 5s linear infinite'
                    }}
                  />
                </g>
              );
            })}

            {/* Brazil Hub Pin on Flat Map (x: 215, y: 300) */}
            <g>
              {/* Pulse circle */}
              <circle 
                cx={215} 
                cy={300} 
                r="14" 
                fill="none" 
                stroke="#3b82f6" 
                strokeWidth="1.5" 
                className="animate-pulse" 
                opacity="0.6"
              />
              <circle 
                cx={215} 
                cy={300} 
                r="5" 
                fill="#1d4ed8" 
                stroke="#60a5fa" 
                strokeWidth="1"
              />
              {/* Brazil Small Text Tag */}
              <g transform="translate(215, 318)">
                <rect x="-24" y="-7" width="48" height="13" rx="3" fill="#09090b" opacity="0.85" stroke="#1e3a8a" strokeWidth="0.5" />
                <text x="0" y="2" textAnchor="middle" fill="#60a5fa" fontSize="7.5" fontWeight="bold" fontFamily="monospace">BRASIL</text>
              </g>
            </g>

            {/* Destination Pins on Flat Map */}
            {pins.map((pin) => {
              const remainsSelected = selectedCountry === pin.code;
              const isHovered = activeHoverPin === pin.code || remainsSelected;

              return (
                <g
                  key={`pin-${pin.code}`}
                  className="cursor-pointer pointer-events-auto"
                  onMouseEnter={() => setActiveHoverPin(pin.code)}
                  onMouseLeave={() => setActiveHoverPin(null)}
                  onClick={() => onSelectCountry(pin.code)}
                >
                  {/* Outer Pulsing Rings */}
                  <circle 
                    cx={pin.x} 
                    cy={pin.y} 
                    r={isHovered ? "18" : "13"} 
                    fill="none" 
                    stroke={pin.color} 
                    strokeWidth="1" 
                    className="animate-pulse"
                    style={{ animationDuration: isHovered ? '1.5s' : '3.5s' }}
                  />

                  {/* Pin core circular button */}
                  <circle 
                    cx={pin.x} 
                    cy={pin.y} 
                    r={isHovered ? "10" : "8"} 
                    fill="#09090b" 
                    stroke={isHovered ? "#ffffff" : pin.color} 
                    strokeWidth="1.5"
                    className="transition-all duration-300"
                  />

                  {/* Flag symbol overlay */}
                  <text 
                    x={pin.x} 
                    y={pin.y + (isHovered ? 3 : 2.5)} 
                    textAnchor="middle" 
                    fontSize={isHovered ? "10" : "8"}
                    className="select-none pointer-events-none"
                  >
                    {pin.flag}
                  </text>

                  {/* Float text hover label badge */}
                  <g 
                    transform={`translate(${pin.x}, ${pin.y + (isHovered ? 24 : 20)})`}
                    className="transition-all duration-350"
                  >
                    <rect 
                      x={isHovered ? "-38" : "-30"} 
                      y="-9" 
                      width={isHovered ? "76" : "60"} 
                      height="16" 
                      rx="4" 
                      fill="#09090b" 
                      stroke={isHovered ? pin.color : "rgba(242, 202, 80, 0.25)"} 
                      strokeWidth="1" 
                    />
                    <text 
                      x="0" 
                      y="2" 
                      textAnchor="middle" 
                      fill={isHovered ? "#ffffff" : "#d4d4d8"} 
                      fontSize={isHovered ? "8" : "7"} 
                      fontWeight="black" 
                      fontFamily="sans-serif"
                      className="tracking-wide uppercase"
                    >
                      {pin.name}
                    </text>
                  </g>
                </g>
              );
            })}
          </svg>

          {/* Inline animation dash for the route dashes in browsers */}
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes dash {
              to {
                stroke-dashoffset: -100;
              }
            }
          `}} />
        </motion.div>

        {/* Dynamic Buttons for quick routing */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl mx-auto"
        >
          {pins.map((p) => {
            const isTargeted = selectedCountry === p.code || activeHoverPin === p.code;
            return (
              <button
                key={p.code}
                onClick={() => onSelectCountry(p.code)}
                onMouseEnter={() => setActiveHoverPin(p.code)}
                onMouseLeave={() => setActiveHoverPin(null)}
                className={`flex items-center justify-center gap-2.5 px-4 py-3.5 bg-zinc-950/90 border rounded-2xl text-[11px] font-bold font-mono tracking-wider uppercase transition-all cursor-pointer ${
                  isTargeted
                    ? 'border-[#f2ca50] bg-[#f2ca50]/10 text-[#f2ca50] shadow-xl shadow-yellow-500/5 scale-[1.02]'
                    : 'border-zinc-900 hover:border-zinc-700 hover:bg-zinc-900 text-zinc-300'
                }`}
              >
                <span>{p.flag}</span>
                <span>{p.name}</span>
              </button>
            );
          })}
        </motion.div>

        {/* ========================================================= */}
        {/* STATS & TRENDS REPORT COMPLIANCE PANEL (UNDER DESTINATIONS) */}
        {/* ========================================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="w-full text-left space-y-8 pt-10 border-t border-zinc-900/80 mt-6"
        >
          {/* Section banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-900 pb-5">
            <div>
              <div className="flex items-center gap-2 text-[#f2ca50] font-mono text-[10px] font-bold uppercase tracking-wider">
                <TrendingUp className="w-4 h-4 text-[#f2ca50]" />
                Relatório Demográfico Empírico e Ocupacional
              </div>
              <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight text-white mt-1 font-display">
                Fluxo Migratório Brasileiro do Exterior
              </h2>
              <p className="text-zinc-500 text-xs mt-1">
                Análise histórica consolidada de pessoas que imigraram do Brasil (estimativas de 2018 a 2025) e as profissões mais valorizadas.
              </p>
            </div>

            {/* Quick-view indicator metadata */}
            <div className="flex items-center gap-3 p-3 bg-zinc-950 border border-zinc-900 rounded-2xl text-xs text-zinc-400 font-mono self-start sm:self-auto uppercase">
              <span>Fatos Atuais</span>
              <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"></span>
              <span className="text-[#f2ca50] font-bold">Consulado Ativo</span>
            </div>
          </div>

          {/* Quick Flow volume comparative chart (Pragmatic CSS Bars visual representation) */}
          <div className="bg-zinc-950/60 border border-zinc-900 rounded-3xl p-6 space-y-6">
            <h3 className="text-xs font-bold uppercase text-white font-mono tracking-wider flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#f2ca50]" />
              Volume Comparativo Estimado de Novos Residentes Brasileiros (2018 - 2025)
            </h3>
            
            <div className="space-y-4">
              {/* USA BAR */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-white font-bold flex items-center gap-1.5">
                    🇺🇸 Estados Unidos <span className="text-zinc-500 font-normal">| Principal Destino</span>
                  </span>
                  <span className="text-[#f2ca50] font-bold">~450.000 imigrantes</span>
                </div>
                <div className="w-full h-3 bg-zinc-900 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.1 }}
                    className="h-full bg-gradient-to-r from-yellow-600 to-[#f2ca50] rounded-full"
                  />
                </div>
              </div>

              {/* PORTUGAL BAR */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-white font-bold flex items-center gap-1.5">
                    🇵🇹 Portugal <span className="text-zinc-500 font-normal">| Maior comunidade na Europa</span>
                  </span>
                  <span className="text-[#f2ca50] font-bold">~290.000 imigrantes</span>
                </div>
                <div className="w-full h-3 bg-zinc-900 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '64.4%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-yellow-600 to-[#f2ca50] rounded-full"
                  />
                </div>
              </div>

              {/* CANADA BAR */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-white font-bold flex items-center gap-1.5">
                    🇨🇦 Canadá <span className="text-zinc-500 font-normal">| Crescimento de vistos por competência</span>
                  </span>
                  <span className="text-[#f2ca50] font-bold">~110.000 imigrantes</span>
                </div>
                <div className="w-full h-3 bg-zinc-900 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '24.4%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full bg-gradient-to-r from-yellow-600 to-[#f2ca50] rounded-full"
                  />
                </div>
              </div>

              {/* AUSTRALIA BAR */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-white font-bold flex items-center gap-1.5">
                    🇦🇺 Austrália <span className="text-zinc-500 font-normal">| Foco em vistos qualificados (trades e engenharias)</span>
                  </span>
                  <span className="text-[#f2ca50] font-bold">~58.000 imigrantes</span>
                </div>
                <div className="w-full h-3 bg-zinc-900 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '12.8%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="h-full bg-gradient-to-r from-yellow-600 to-[#f2ca50] rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bento dynamic cards block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(immigrationStats).map(([key, item]) => {
              const countryName = key === 'USA' ? 'Estados Unidos' : key === 'PRT' ? 'Portugal' : key === 'CAN' ? 'Canadá' : 'Austrália';
              const flag = key === 'USA' ? '🇺🇸' : key === 'PRT' ? '🇵🇹' : key === 'CAN' ? '🇨🇦' : '🇦🇺';
              const isSelected = selectedCountry === key || activeHoverPin === key;

              return (
                <div 
                  key={key}
                  onMouseEnter={() => setActiveHoverPin(key as CountryCode)}
                  onMouseLeave={() => setActiveHoverPin(null)}
                  onClick={() => onSelectCountry(key as CountryCode)}
                  className={`group bg-zinc-950/85 border rounded-3xl p-6 space-y-4 hover:bg-zinc-900/20 transition-all duration-300 relative cursor-pointer overflow-hidden ${
                    isSelected ? 'border-[#f2ca50] shadow-lg shadow-yellow-500/[0.02]' : 'border-zinc-900/90'
                  }`}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-yellow-500/5 to-transparent rounded-full pointer-events-none"></div>

                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{flag}</span>
                      <div>
                        <h4 className="font-extrabold text-[#f2ca50] text-sm font-display group-hover:underline">{countryName}</h4>
                        <p className="text-[9px] text-zinc-550 uppercase font-mono tracking-wider font-bold">Estatísticas Operacionais ({item.period})</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-black text-white font-mono">{item.volume}</p>
                      <p className="text-[8px] text-zinc-500 uppercase font-mono tracking-widest font-bold">Total Estimado</p>
                    </div>
                  </div>

                  {/* Highlights trend badge */}
                  <div className="inline-block px-2.5 py-1 bg-yellow-500/5 border border-yellow-500/10 rounded-full text-[9px] text-[#f2ca50] font-mono uppercase font-semibold">
                    📈 Tendência: {item.trend}
                  </div>

                  {/* Most valued Careers */}
                  <div className="space-y-2 pt-2 border-t border-zinc-900">
                    <p className="text-[9px] text-zinc-400 uppercase font-mono tracking-wider font-bold">💼 Profissionais mais valorizados e em alta demanda:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.professions.map((prof, idx) => (
                        <span 
                          key={idx} 
                          className="px-2 py-1 bg-zinc-900 text-zinc-300 text-[10px] font-sans rounded-lg border border-zinc-850 hover:border-zinc-700 transition-colors"
                        >
                          {prof}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Strategic Insight */}
                  <div className="bg-black/55 p-3.5 rounded-xl border border-zinc-900 space-y-1">
                    <p className="text-[8px] text-zinc-400 font-mono uppercase font-bold flex items-center gap-1.5">
                      <CheckCircle className="w-3 h-3 text-[#f2ca50]" />
                      Diretiva de Oportunidade Técnica:
                    </p>
                    <p className="text-[11px] text-zinc-400 leading-relaxed font-sans">
                      {item.highlight}
                    </p>
                  </div>

                  {/* Last News snippet */}
                  <div className="flex items-center gap-2 pt-2 text-[10.5px] text-zinc-500 font-mono">
                    <Newspaper className="w-3.5 h-3.5 text-[#f2ca50] shrink-0" />
                    <span className="line-clamp-1 italic text-zinc-450">{item.news}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Consular News Highlight Carousel ticker */}
          <div className="p-5 bg-zinc-950 border border-zinc-900 rounded-3xl space-y-3.5">
            <h4 className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest font-black flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"></span>
              Painel de Atualidades Consulares Recentes para Candidatos do Brasil:
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans leading-relaxed">
              <div className="p-4 bg-black/40 rounded-2xl border border-zinc-900 space-y-1.5">
                <span className="text-[8px] font-mono text-[#f2ca50] font-black uppercase">🇧🇷 ➔ 🇵🇹 Conectividade Cultural</span>
                <p className="font-bold text-white text-xs leading-snug">Mobilidade CPLP descomplica envio de vistos de estudo/trabalho</p>
                <p className="text-zinc-400 text-[11px]">O governo português atualizou o processo de correspondência para cidadãos da CPLP, dispensando a entrevista consular prévia em vistos normativos de curta estadia.</p>
              </div>

              <div className="p-4 bg-black/40 rounded-2xl border border-zinc-900 space-y-1.5">
                <span className="text-[8px] font-mono text-[#f2ca50] font-black uppercase">🇧🇷 ➔ 🇨🇦 Ajustes Governamentais</span>
                <p className="font-bold text-white text-xs leading-snug">IRCC prioriza profissionais do setor construtivo e de tecnologia</p>
                <p className="text-zinc-400 text-[11px]">O ministério de imigração do Canadá confirmou novas rodadas de seleção (Express Entry) exclusivas para perfis de TI e trades em regime de pontuação mitigada.</p>
              </div>

              <div className="p-4 bg-black/40 rounded-2xl border border-zinc-900 space-y-1.5">
                <span className="text-[8px] font-mono text-[#f2ca50] font-black uppercase">🇧🇷 ➔ 🇺🇸 Prerrogativas de Mérito</span>
                <p className="font-bold text-white text-xs leading-snug">Vistos de habilidades (EB-2 NIW) têm tido alta de aprovações para brasileiros</p>
                <p className="text-zinc-400 text-[11px]">Advogados credenciados em Washington apontam uma alta expressiva na emissão de autorizações de viagens de residência para acadêmicos seniores sob dispensa trabalhista.</p>
              </div>

              <div className="p-4 bg-black/40 rounded-2xl border border-zinc-900 space-y-1.5">
                <span className="text-[8px] font-mono text-[#f2ca50] font-black uppercase">🇧🇷 ➔ 🇦🇺 Skilled Stream Austrália</span>
                <p className="font-bold text-white text-xs leading-snug">Expansão de bolsas e bônus estaduais para engenharia civil</p>
                <p className="text-zinc-400 text-[11px]">O estado de Victoria flexibilizou os limites de idade de patrocínio regional, abrindo cotas para engenharia integrada e técnicos certificados que buscam residência permanente.</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
