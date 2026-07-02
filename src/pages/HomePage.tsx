import { motion } from 'framer-motion';
import { Shield, CheckCircle, Package, MessageCircle, ArrowRight } from 'lucide-react';
import Reveal from '../components/Reveal';
import DashboardMockup from '../components/DashboardMockup';
import type { PageKey } from '../lib/constants';

type Props = { onNavigate: (p: PageKey) => void };

const STATS = [
  { value: 'FEFO', label: 'Metodologia aplicada' },
  { value: '100%', label: 'Rastreabilidade' },
  { value: 'IA', label: 'Previsão de demanda' },
  { value: 'RJ', label: 'Estado atendido' },
];

export default function HomePage({ onNavigate }: Props) {
  return (
    <div>
      {/* HERO */}
      <section className="relative pt-28 pb-16 bg-gradient-to-b from-white via-[#f8fcff] to-[#eef7fd] dark:from-[#080E18] dark:via-[#0C1522] dark:to-[#101D30]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-pale dark:bg-white/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Shield className="h-4 w-4" /> Gestão Inteligente de Estoque
              </span>
              <h1 className="mt-5 font-heading text-4xl sm:text-5xl font-extrabold leading-tight text-primary-deep dark:text-white">
                Gestão inteligente para <span className="text-gradient">vender mais e se preocupar</span> menos
              </h1>
              <p className="mt-5 text-base text-primary-muted dark:text-primary-pale/70 leading-relaxed max-w-xl">
                Soluções completas para o setor alimentício. Controle de lotes, rastreabilidade, metodologia FEFO e inteligência artificial para reduzir perdas e aumentar a eficiência do seu negócio.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <button onClick={() => onNavigate('pacotes')} className="btn-primary">
                  Ver Pacotes <ArrowRight className="h-4 w-4" />
                </button>
                <button onClick={() => onNavigate('como-ajudamos')} className="btn-ghost">
                  Como Ajudamos
                </button>
              </div>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                <span className="inline-flex items-center gap-1.5 text-sm text-primary-deep dark:text-primary-pale/80">
                  <CheckCircle className="h-4 w-4 text-green-500" /> Teste grátis sem fidelidade
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm text-primary-deep dark:text-primary-pale/80">
                  <CheckCircle className="h-4 w-4 text-green-500" /> Suporte dedicado
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <DashboardMockup />
            </Reveal>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-white dark:bg-[#0C1522] border-y border-primary-pale dark:border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((s, i) => (
              <Reveal key={s.value} delay={i * 0.08}>
                <div className="text-center">
                  <p className="font-heading text-3xl sm:text-4xl font-extrabold text-primary">{s.value}</p>
                  <p className="mt-1 text-sm text-primary-muted dark:text-primary-pale/60">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE O PROJETO */}
      <section className="py-20 bg-offwhite dark:bg-[#080E18]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-muted p-8 sm:p-12">
              <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
              <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-3 text-white">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium">
                    <Package className="h-4 w-4" /> Sobre o Projeto
                  </span>
                  <h2 className="mt-5 font-heading text-3xl sm:text-4xl font-extrabold leading-tight">
                    Gestão de Estoque Inteligente para o Setor Alimentício
                  </h2>
                  <p className="mt-4 text-white/85 leading-relaxed max-w-2xl">
                    Um dashboard completo para controle de lotes, metodologia FEFO, rastreabilidade total, alertas de validade, monitoramento em tempo real e inteligência artificial para previsão de demanda. Tudo pensado para o seu negócio vender mais e desperdiçar menos.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <button onClick={() => onNavigate('pacotes')} className="btn-invert-dark">
                      Ver Planos
                    </button>
                    <button onClick={() => onNavigate('contato')} className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/20 px-6 py-3 font-semibold text-white transition-all duration-[350ms] ease-sinergia hover:bg-white/30">
                      Solicitar Demonstração
                    </button>
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <img
                    src="https://images.pexels.com/photos/6163546/pexels-photo-6163546.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Segurança alimentar"
                    loading="lazy"
                    className="rounded-2xl shadow-2xl w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTATO CTA */}
      <section className="py-20 bg-white dark:bg-[#0C1522]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-pale dark:bg-white/10 px-4 py-1.5 text-sm font-medium text-primary">
              <MessageCircle className="h-4 w-4" /> Contato
            </span>
            <h2 className="mt-5 font-heading text-3xl sm:text-4xl font-extrabold text-primary-deep dark:text-white">
              Pronto para transformar seu estoque?
            </h2>
            <div className="mt-7">
              <button onClick={() => onNavigate('contato')} className="btn-primary">
                Fale Conosco <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
