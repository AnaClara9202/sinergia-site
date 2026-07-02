import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import Logo from './Logo';
import { NAV_ITEMS, type PageKey } from '../lib/constants';
import { useScrolled } from '../lib/useScrolled';

type HeaderProps = {
  current: PageKey;
  onNavigate: (p: PageKey) => void;
  dark: boolean;
  onToggleDark: () => void;
};

export default function Header({ current, onNavigate, dark, onToggleDark }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrolled(40);

  const go = (p: PageKey) => {
    onNavigate(p);
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-[350ms] ease-sinergia ${
        scrolled
          ? 'bg-white/90 dark:bg-[#0C1522]/90 backdrop-blur-md shadow-sm border-b border-primary-pale dark:border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button onClick={() => go('home')} className="flex items-center gap-2.5 group">
            <Logo variant={scrolled ? (dark ? 'white' : 'blue') : dark ? 'white' : 'blue'} className="h-9 w-9 transition-transform group-hover:scale-105" />
            <span className={`font-heading text-xl font-extrabold ${scrolled ? 'text-primary-deep dark:text-white' : 'text-primary-deep dark:text-white'}`}>Sinergia</span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.key}
                onClick={() => go(item.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-[350ms] ease-sinergia ${
                  current === item.key
                    ? 'text-primary'
                    : 'text-primary-deep dark:text-primary-pale hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onToggleDark}
              aria-label="Alternar tema"
              className="p-2 rounded-lg text-primary-deep dark:text-primary-pale hover:bg-primary-pale dark:hover:bg-white/10 transition-colors"
            >
              {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button onClick={() => go('contato')} className="btn-primary text-sm">
              Fale Conosco
            </button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onToggleDark}
              aria-label="Alternar tema"
              className="p-2 rounded-lg text-primary-deep dark:text-primary-pale hover:bg-primary-pale dark:hover:bg-white/10 transition-colors"
            >
              {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Menu"
              className="p-2 rounded-lg text-primary-deep dark:text-primary-pale hover:bg-primary-pale dark:hover:bg-white/10 transition-colors"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden overflow-hidden bg-white dark:bg-[#0C1522] border-b border-primary-pale dark:border-white/10"
          >
            <nav className="px-4 py-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.key}
                  onClick={() => go(item.key)}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    current === item.key
                      ? 'bg-primary-pale dark:bg-white/10 text-primary'
                      : 'text-primary-deep dark:text-primary-pale hover:bg-primary-pale dark:hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button onClick={() => go('contato')} className="btn-primary mt-2 text-sm">
                Fale Conosco
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
