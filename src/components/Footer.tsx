import Logo from './Logo';
import { NAV_ITEMS, CONTACT_EMAIL, type PageKey } from '../lib/constants';
import { Mail, MapPin } from 'lucide-react';

type FooterProps = {
  onNavigate: (p: PageKey) => void;
};

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Logo variant="white" className="h-9 w-9" />
              <span className="font-heading text-xl font-extrabold">Sinergia</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed max-w-xs">
              Gestão de estoque inteligente para o setor alimentício. Controle de lotes, rastreabilidade, FEFO e inteligência artificial.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4 text-white">Navegação</h4>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.key}>
                  <button
                    onClick={() => onNavigate(item.key)}
                    className="text-sm text-white/70 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigate('contato')}
                  className="text-sm text-white/70 hover:text-primary transition-colors"
                >
                  Fale Conosco
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4 text-white">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-white/70">
                <Mail className="h-4 w-4 mt-0.5 text-primary-light shrink-0" />
                <span>{CONTACT_EMAIL}</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/70">
                <MapPin className="h-4 w-4 mt-0.5 text-primary-light shrink-0" />
                <span>Rio de Janeiro — São Pedro da Aldeia e Região</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/50">© 2026 Sinergia. Todos os direitos reservados.</p>
          <p className="text-xs text-white/50">Gestão de Estoque Inteligente — Rio de Janeiro</p>
        </div>
      </div>
    </footer>
  );
}
