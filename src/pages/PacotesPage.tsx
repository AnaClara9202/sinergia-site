import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, CheckCircle, Truck, X, ArrowRight } from 'lucide-react';
import Reveal from '../components/Reveal';
import { CITIES, type City } from '../lib/cities';
import { KIWIFY } from '../lib/constants';

const BASICO_FEATURES = [
  'Guia Prático Digital de Implementação',
  'Dashboard de Acompanhamento de Entradas e Saídas',
  'Planilha de Gestão de Estoque',
  'Manual de Boas Práticas',
  'Alertas de Estoque Mínimo',
];

const ESTRATEGICO_FEATURES = [
  'Todos os recursos do Pacote Básico',
  'Assistente de IA para Gestão de Estoque',
  'Vistoria Presencial (até 3 semanas)',
  'Análise da Planta do Armazém',
  'Indicadores Gerenciais Avançados',
  'Orçamento Personalizado de Transporte',
];

const TAXA_URL: Record<number, string> = {
  240: KIWIFY.taxa240,
  480: KIWIFY.taxa480,
  720: KIWIFY.taxa720,
};

export default function PacotesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  return (
    <div className="pt-28 pb-20 bg-offwhite dark:bg-[#080E18] min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-pale dark:bg-white/10 px-4 py-1.5 text-sm font-medium text-primary">
              Nossos Pacotes
            </span>
            <h1 className="mt-5 font-heading text-4xl sm:text-5xl font-extrabold text-primary-deep dark:text-white">
              Escolha o plano ideal para você
            </h1>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* BÁSICO */}
          <Reveal>
            <div className="h-full rounded-3xl bg-white dark:bg-[#101D30] border border-primary-pale dark:border-white/10 p-8 flex flex-col">
              <span className="inline-flex w-fit items-center rounded-full bg-primary-pale dark:bg-white/10 px-3 py-1 text-xs font-semibold text-primary-muted dark:text-primary-pale">
                Essencial
              </span>
              <h2 className="mt-4 font-heading text-2xl font-extrabold text-primary-deep dark:text-white">Pacote Básico</h2>
              <p className="mt-2 text-sm text-primary-muted dark:text-primary-pale/70">
                Indicado para microempresas e pequenos negócios que estão começando.
              </p>
              <p className="mt-5 font-heading text-4xl font-extrabold text-primary-deep dark:text-white">
                R$ 410<span className="text-base font-medium text-primary-muted">/mês</span>
              </p>
              <ul className="mt-6 space-y-3 flex-1">
                {BASICO_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-primary-deep dark:text-primary-pale/80">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href={KIWIFY.basico} target="_blank" rel="noopener noreferrer" className="btn-primary mt-7 w-full">
                Contratar Agora <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          {/* ESTRATÉGICO */}
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl bg-gradient-to-br from-primary to-primary-muted p-8 flex flex-col text-white relative overflow-hidden">
              <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white text-primary px-3 py-1 text-xs font-bold">
                    <Star className="h-3 w-3 fill-primary" /> Mais Popular
                  </span>
                  <span className="inline-flex w-fit items-center rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
                    Completo
                  </span>
                </div>
                <h2 className="mt-4 font-heading text-2xl font-extrabold">Pacote Estratégico</h2>
                <p className="mt-2 text-sm text-white/85">
                  Indicado para pequenas e médias empresas. Inclui todos os recursos do Básico, além de IA e vistoria presencial.
                </p>
                <p className="mt-5 font-heading text-4xl font-extrabold">
                  ~R$ 1.775<span className="text-base font-medium text-white/70">/mês</span>
                </p>
                <ul className="mt-6 space-y-3 flex-1">
                  {ESTRATEGICO_FEATURES.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-white">
                      <CheckCircle className="h-4 w-4 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button onClick={() => setModalOpen(true)} className="mt-7 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-primary transition-all duration-[350ms] ease-sinergia hover:bg-primary hover:text-white">
                  Solicitar Orçamento <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg rounded-3xl bg-white dark:bg-[#101D30] p-7 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-heading text-xl font-extrabold text-primary-deep dark:text-white">Orçamento de Viagem</h3>
                <button onClick={() => setModalOpen(false)} className="p-1.5 rounded-lg text-primary-muted hover:bg-primary-pale dark:hover:bg-white/10">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-primary-deep dark:text-primary-pale mb-1.5">Nome da Empresa</label>
                  <input type="text" placeholder="Sua empresa" className="w-full rounded-xl border border-primary-pale dark:border-white/10 bg-offwhite dark:bg-[#0C1522] px-4 py-2.5 text-sm text-primary-deep dark:text-white focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-deep dark:text-primary-pale mb-1.5">Estado</label>
                  <select disabled className="w-full rounded-xl border border-primary-pale dark:border-white/10 bg-offwhite dark:bg-[#0C1522] px-4 py-2.5 text-sm text-primary-deep dark:text-white focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Rio de Janeiro (RJ)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-deep dark:text-primary-pale mb-1.5">Cidade</label>
                  <select
                    value={selectedCity?.name ?? ''}
                    onChange={(e) => setSelectedCity(CITIES.find((c) => c.name === e.target.value) ?? null)}
                    className="w-full rounded-xl border border-primary-pale dark:border-white/10 bg-offwhite dark:bg-[#0C1522] px-4 py-2.5 text-sm text-primary-deep dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Selecione sua cidade</option>
                    {CITIES.map((c) => (
                      <option key={c.name} value={c.name}>{c.name}</option>
                    ))}
                  </select>
                </div>

                <AnimatePresence>
                  {selectedCity && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="flex items-center gap-3 rounded-2xl bg-primary-pale dark:bg-white/5 p-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white shrink-0">
                          <Truck className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs text-primary-muted dark:text-primary-pale/60">Taxa de Deslocamento</p>
                          <p className="font-heading text-2xl font-extrabold text-primary">R$ {selectedCity.taxa}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <a
                  href={selectedCity ? TAXA_URL[selectedCity.taxa] : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-primary w-full ${!selectedCity ? 'pointer-events-none opacity-50' : ''}`}
                >
                  Solicitar Orçamento <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
