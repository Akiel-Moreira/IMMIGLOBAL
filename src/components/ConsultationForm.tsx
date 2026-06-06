import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  Send, 
  Users, 
  CheckCircle, 
  Phone, 
  Mail, 
  FileText, 
  Clock, 
  AlertCircle,
  Sparkles,
  Award,
  Globe
} from 'lucide-react';
import { CountryCode, ConsultationRequest } from '../types';

interface ConsultationFormProps {
  defaultCountry: CountryCode;
  onClose?: () => void;
}

export default function ConsultationForm({ defaultCountry, onClose }: ConsultationFormProps) {
  const [formData, setFormData] = useState<Partial<ConsultationRequest>>({
    name: '',
    email: '',
    phone: '',
    age: 'prime',
    destination: defaultCountry,
    visaOfInterest: 'us_eb2_niw',
    education: 'bachelors',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [protocolCode, setProtocolCode] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate database post and validation
    setTimeout(() => {
      const code = `IMG-${Math.floor(100000 + Math.random() * 900000)}-${formData.destination || 'USA'}`;
      setProtocolCode(code);
      setIsSubmitting(false);
    }, 1200);
  };

  return (
    <div className="w-full bg-zinc-900/30 backdrop-blur-md border border-zinc-800/80 rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden shadow-2xl bento-glow-zinc">
      {/* Top golden decorative ring */}
      <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-[#f2ca50]/5 rounded-full filter blur-[80px] pointer-events-none"></div>

      <AnimatePresence mode="wait">
        {!protocolCode ? (
          /* BOOKING INPUT FORM */
          <motion.div 
            key="booking-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#f2ca50] font-bold block font-mono">Consulte sua elegibilidade legal</span>
              <h3 className="text-2xl font-extrabold font-display text-white flex items-center gap-2">
                <Users className="w-5.5 h-5.5 text-[#f2ca50]" />
                Agendar Consulta de Análise Jurídica
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans">
                Nossa equipe jurídica analisará detalhadamente seu currículo acadêmico e profissional para sugerir os melhores caminhos disponíveis. Preencha seus dados de assessoria primária abaixo:
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Nome Completo */}
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold font-mono">Nome Completo</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full bg-zinc-950/40 border border-zinc-850 focus:border-[#f2ca50] focus:ring-1 focus:ring-[#f2ca50]/40 outline-none rounded-2xl p-3.5 text-xs sm:text-sm text-white transition-all placeholder:text-zinc-650"
                  />
                </div>

                {/* Email corporativo ou pessoal */}
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold font-mono">E-mail para assessoria</label>
                  <input 
                    type="email" 
                    required
                    placeholder="exemplo@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full bg-zinc-950/40 border border-zinc-850 focus:border-[#f2ca50] focus:ring-1 focus:ring-[#f2ca50]/40 outline-none rounded-2xl p-3.5 text-xs sm:text-sm text-white transition-all placeholder:text-zinc-650"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Telefone celular with WhatsApp indicator */}
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold font-mono flex items-center gap-1">
                    <span>Telefone com WhatsApp</span>
                    <span className="text-[9px] text-[#f2ca50] lowercase font-normal">(ddd + número)</span>
                  </label>
                  <div className="relative">
                    <input 
                      type="tel" 
                      required
                      placeholder="(11) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full bg-zinc-950/40 border border-zinc-850 focus:border-[#f2ca50] focus:ring-1 focus:ring-[#f2ca50]/40 outline-none rounded-2xl p-3.5 text-xs sm:text-sm text-white transition-all pl-10 placeholder:text-zinc-650"
                    />
                    <Phone className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                {/* Destination Country selector */}
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold font-mono">Destino de Interesse</label>
                  <select
                    value={formData.destination}
                    onChange={(e) => setFormData(prev => ({ ...prev, destination: e.target.value as CountryCode }))}
                    className="w-full bg-zinc-950 border border-zinc-850 focus:border-[#f2ca50] focus:ring-1 focus:ring-[#f2ca50]/40 outline-none rounded-2xl p-3.5 text-xs sm:text-sm text-white transition-all appearance-none cursor-pointer"
                  >
                    <option value="USA">🇺🇸 Estados Unidos</option>
                    <option value="PRT">🇵🇹 Portugal</option>
                    <option value="AUS">🇦🇺 Austrália</option>
                    <option value="CAN">🇨🇦 Canadá</option>
                    <option value="ESP">🇪🇸 Espanha</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Academic Degree descriptor */}
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold font-mono">Grau de Escolaridade</label>
                  <select
                    value={formData.education}
                    onChange={(e) => setFormData(prev => ({ ...prev, education: e.target.value }))}
                    className="w-full bg-zinc-950 border border-zinc-850 focus:border-[#f2ca50] focus:ring-1 focus:ring-[#f2ca50]/40 outline-none rounded-2xl p-3.5 text-xs sm:text-sm text-white transition-all cursor-pointer"
                  >
                    <option value="phd_doctor">Doutorado / PhD</option>
                    <option value="masters">Mestrado / Pós-graduação</option>
                    <option value="bachelors">Bacharelado / Graduação</option>
                    <option value="high_school">Ensino Médio / Curso Técnico</option>
                  </select>
                </div>

                {/* Visto de interesse general selector */}
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold font-mono">Modalidade Geral</label>
                  <select
                    value={formData.visaOfInterest}
                    onChange={(e) => setFormData(prev => ({ ...prev, visaOfInterest: e.target.value }))}
                    className="w-full bg-zinc-950 border border-zinc-850 focus:border-[#f2ca50] focus:ring-1 focus:ring-[#f2ca50]/40 outline-none rounded-2xl p-3.5 text-xs sm:text-sm text-white transition-all cursor-pointer"
                  >
                    <option value="us_eb2_niw">Residência Permanente / Imigração Profissional</option>
                    <option value="us_h1b">Visto Temporário de Trabalho</option>
                    <option value="us_f1">Estudos Universitários ou Idiomas</option>
                    <option value="us_b1_b2">Turismo Geral / Viagem de Curto Prazo</option>
                    <option value="other">Outros Perfis / Análise Especializada</option>
                  </select>
                </div>
              </div>

              {/* Message Situation Brief Box */}
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold font-mono flex justify-between">
                  <span>Escreva sua Situação Atual ou Dúvida</span>
                  <span className="text-[9px] text-[#f2ca50] font-normal lowercase">(opcional)</span>
                </label>
                <textarea
                  rows={3}
                  placeholder="Exemplo: Sou programador com 6 anos de experiência e bacharel em computação. Quero imigrar pela categoria EB-2 NIW..."
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full bg-zinc-950/40 border border-zinc-850 focus:border-[#f2ca50] focus:ring-1 focus:ring-[#f2ca50]/40 outline-none rounded-2xl p-3.5 text-xs sm:text-sm text-white transition-all resize-none placeholder:text-zinc-650"
                ></textarea>
              </div>

              {/* Action Buttons Submit & Closes */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-3 justify-end">
                {onClose && (
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-zinc-950/40 hover:bg-zinc-800 border border-zinc-850 text-zinc-350 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer font-display"
                  >
                    Fechar
                  </button>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#f2ca50] hover:bg-[#ffe088] disabled:bg-[#f2ca50]/40 text-black font-black rounded-2xl text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-xl shadow-yellow-500/5 active:scale-95 transition-all cursor-pointer font-display"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      <span>Processando perfil...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-black" />
                      <span>Solicitar Agendamento Especializado</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        ) : (
          /* SUCCESS SCREEN RECORD BLOCK */
          <motion.div 
            key="success-receipt"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-6 space-y-6"
          >
            <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-xl">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">Solicitação Processada com Sucesso</span>
              <h3 className="text-2xl font-black text-white font-display pt-2">Análise Prévia Solicitada!</h3>
              <p className="text-zinc-400 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
                Olá, <strong>{formData.name}</strong>. Seus dados de background acadêmico e técnico foram catalogados com sucesso em nossa central de assessoria global de imigração.
              </p>
            </div>

            {/* Simulated Protocol Card */}
            <div className="max-w-md mx-auto bg-zinc-950/60 border border-zinc-850 rounded-2xl p-6 text-left text-xs space-y-4 relative overflow-hidden bento-glow-zinc">
              <div className="absolute top-0 right-0 p-3.5 bg-[#f2ca50]/15 text-[#f2ca50] rounded-bl-xl font-bold text-[9px] uppercase tracking-wider font-mono">
                ImmiGlobal Protocol
              </div>

              <div className="border-b border-zinc-800/60 pb-3">
                <p className="text-zinc-500 text-[10px] uppercase font-bold font-mono">NÚMERO DE PROTOCOLO:</p>
                <p className="font-mono text-white text-base font-black tracking-widest mt-1">{protocolCode}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 pb-3 border-b border-zinc-800/60">
                <div>
                  <p className="text-zinc-500 text-[10px] uppercase font-bold font-mono">PAÍS DE DESTINO:</p>
                  <p className="font-bold text-white mt-1 text-xs">{formData.destination === 'USA' ? '🇺🇸 Estados Unidos' : formData.destination === 'PRT' ? '🇵🇹 Portugal' : formData.destination === 'AUS' ? '🇦🇺 Austrália' : '🌎 Internacional'}</p>
                </div>
                <div>
                  <p className="text-zinc-500 text-[10px] uppercase font-bold font-mono">CANAL DE CONTATO:</p>
                  <p className="font-bold text-zinc-300 mt-1 text-xs">{formData.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-zinc-400 bg-zinc-900/40 border border-zinc-850/60 p-4 rounded-2xl leading-relaxed text-[11px]">
                <Clock className="w-4 h-4 shrink-0 text-[#f2ca50] mt-0.5" />
                <span>
                  Um de nossos assessores de vistos credenciados iniciará uma revisão prévia e entrará em contato via WhatsApp/Celular nas próximas 24 horas úteis. Guarde o protocolo!
                </span>
              </div>
            </div>

            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={() => setProtocolCode(null)}
                className="px-5 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-bold uppercase tracking-widest text-xs rounded-2xl border border-zinc-800 cursor-pointer transition-colors"
              >
                Novo Cadastro
              </button>
              {onClose && (
                <button
                  onClick={onClose}
                  className="px-6 py-3.5 bg-[#f2ca50] text-[#09090b] font-black uppercase tracking-widest rounded-2xl text-xs hover:bg-[#ffe088] transition-all cursor-pointer font-display"
                >
                  Concluir
                </button>
              )}
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
