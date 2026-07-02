import { Users, Shield, TrendingUp, Brain } from 'lucide-react';
import Reveal from '../components/Reveal';

const STATS = [
  { value: 'FEFO', label: 'Metodologia' },
  { value: 'IA', label: 'Tecnologia' },
  { value: '24/7', label: 'Suporte' },
];

const FEATURES = [
  { icon: Shield, title: 'Conformidade Sanitária', desc: 'Conformidade total com a vigilância sanitária, garantindo padrões e normas do setor alimentício.' },
  { icon: TrendingUp, title: 'Redução de Perdas', desc: 'Controle de lotes e validades com metodologia FEFO para reduzir desperdícios e perdas.' },
  { icon: Brain, title: 'Inteligência Artificial', desc: 'Previsão de demanda e otimização de compras com IA para decisões mais inteligentes.' },
];

export default function QuemSomosPage() {
  return (
    <div className="pt-28 pb-20 bg-offwhite dark:bg-[#080E18] min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <Reveal>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8088494/pexels-photo-8088494.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Equipe de armazém"
                loading="lazy"
                className="rounded-3xl w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-primary-deep/60 to-transparent" />
              <div className="absolute -bottom-6 left-6 right-6 glass-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-muted text-white">
                    <Users className="h-5 w-5" />
                  </div>
                  <h2 className="font-heading text-xl font-extrabold text-primary-deep dark:text-white">Quem Somos</h2>
                </div>
                <p className="text-sm text-primary-muted dark:text-primary-pale/70 leading-relaxed">
                  O grupo Sinergia ajuda pequenos negócios com estocagem e vigilância sanitária. Acreditamos que toda empresa merece ferramentas profissionais.
                </p>
                <p className="mt-2 text-sm text-primary-muted dark:text-primary-pale/70 leading-relaxed">
                  Nossa missão é democratizar a gestão inteligente com tecnologia, IA e acompanhamento presencial.
                </p>
                <div className="mt-5 grid grid-cols-3 gap-2 border-t border-primary-pale dark:border-white/10 pt-4">
                  {STATS.map((s) => (
                    <div key={s.value} className="text-center">
                      <p className="font-heading text-lg font-extrabold text-primary">{s.value}</p>
                      <p className="text-[11px] text-primary-muted dark:text-primary-pale/60">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* RIGHT */}
          <div className="space-y-5">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.1}>
                <div className="group rounded-2xl bg-white dark:bg-[#101D30] border border-primary-pale dark:border-white/10 p-6 transition-all duration-[350ms] ease-sinergia hover:-translate-y-0.5 hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-pale dark:bg-white/10 text-primary transition-all duration-[350ms] ease-sinergia group-hover:bg-primary group-hover:text-white shrink-0">
                      <f.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-primary-deep dark:text-white">{f.title}</h3>
                      <p className="mt-1 text-sm text-primary-muted dark:text-primary-pale/70 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
