import { TrendingUp, BookOpen, FileSpreadsheet, Cpu, BarChart3, Warehouse, Brain, Shield, Truck } from 'lucide-react';
import Reveal from '../components/Reveal';

const STEPS = [
  { num: '01', icon: BookOpen, title: 'Diagnóstico', desc: 'Análise completa da sua operação atual, identificando gargalos e oportunidades de melhoria.' },
  { num: '02', icon: FileSpreadsheet, title: 'Planejamento', desc: 'Elaboração do plano personalizado com metas claras e cronograma de implementação.' },
  { num: '03', icon: Cpu, title: 'Implementação', desc: 'Configuração do dashboard, treinamento da equipe e início da coleta de dados.' },
  { num: '04', icon: BarChart3, title: 'Monitoramento', desc: 'Acompanhamento contínuo com indicadores, relatórios e ajustes via inteligência artificial.' },
];

const DASHBOARD_FEATURES = [
  'Status por cores (FEFO)',
  'Localização por corredor e prateleira',
  'Alertas automáticos de validade',
  'Relatórios gerenciais',
];

const BENEFITS = [
  { icon: Warehouse, title: 'Organização do Armazém', desc: 'Mapeamento por corredor e prateleira para localização rápida e eficiente.' },
  { icon: BarChart3, title: 'Indicadores de Desempenho', desc: 'Giro de estoque, taxa de perdas e métricas-chave em tempo real.' },
  { icon: Truck, title: 'Gestão de Fornecedores', desc: 'Lead time e performance de fornecedores para compras mais inteligentes.' },
  { icon: Brain, title: 'Previsão de Demanda', desc: 'IA para previsão futura de demanda e otimização do estoque.' },
  { icon: Shield, title: 'Rastreabilidade Completa', desc: 'Do recebimento à expedição, rastreie cada lote com precisão total.' },
  { icon: FileSpreadsheet, title: 'Relatórios Automatizados', desc: 'Relatórios gerenciais gerados automaticamente para decisões rápidas.' },
];

export default function ComoAjudamosPage() {
  return (
    <div className="relative pt-28 pb-20 bg-offwhite dark:bg-[#080E18] min-h-screen overflow-hidden">
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-pale dark:bg-white/10 px-4 py-1.5 text-sm font-medium text-primary">
              <TrendingUp className="h-4 w-4" /> Metodologia
            </span>
            <h1 className="mt-5 font-heading text-4xl sm:text-5xl font-extrabold text-primary-deep dark:text-white">
              Como Ajudamos seu Negócio
            </h1>
            <p className="mt-4 text-base text-primary-muted dark:text-primary-pale/70">
              Nossa metodologia em 4 etapas para transformar a gestão do seu estoque
            </p>
          </div>
        </Reveal>

        {/* STEPS */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.1}>
              <div className="h-full rounded-2xl bg-white dark:bg-[#101D30] border border-primary-pale dark:border-white/10 p-6 transition-all duration-[350ms] ease-sinergia hover:-translate-y-0.5 hover:shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading text-3xl font-extrabold text-primary/30">{s.num}</span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-pale dark:bg-white/10 text-primary">
                    <s.icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="font-heading text-lg font-bold text-primary-deep dark:text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-primary-muted dark:text-primary-pale/70 leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* DASHBOARD SHOWCASE */}
        <Reveal>
          <div className="mt-16 rounded-3xl bg-gradient-to-br from-primary to-primary-muted p-8 sm:p-12 text-white relative overflow-hidden">
            <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="font-heading text-3xl font-extrabold">Dashboard de Controle</h2>
                <p className="mt-3 text-white/85 leading-relaxed">
                  Visibilidade em tempo real de todo o seu estoque. Acompanhe lotes, validades e localização de cada produto com clareza.
                </p>
                <ul className="mt-6 space-y-2.5">
                  {DASHBOARD_FEATURES.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-white">
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Dashboard analytics"
                  loading="lazy"
                  className="rounded-2xl shadow-2xl w-full h-72 object-cover"
                />
                <div className="absolute -bottom-5 left-5 right-5 glass-card p-4">
                  <p className="text-sm font-semibold text-primary-deep dark:text-white">Indicadores em Tempo Real</p>
                  <p className="text-xs text-primary-muted dark:text-primary-pale/60">Monitoramento contínuo via IA</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* BENEFITS */}
        <div className="mt-16">
          <Reveal>
            <h2 className="text-center font-heading text-3xl font-extrabold text-primary-deep dark:text-white mb-10">
              Benefícios Completos
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={(i % 3) * 0.08}>
                <div className="group h-full rounded-2xl bg-white dark:bg-[#101D30] border border-primary-pale dark:border-white/10 p-6 transition-all duration-[350ms] ease-sinergia hover:-translate-y-0.5 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-pale dark:bg-white/10 text-primary transition-all duration-[350ms] ease-sinergia group-hover:bg-primary group-hover:text-white">
                    <b.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-bold text-primary-deep dark:text-white">{b.title}</h3>
                  <p className="mt-1.5 text-sm text-primary-muted dark:text-primary-pale/70 leading-relaxed">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
