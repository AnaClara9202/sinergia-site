import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PacotesPage from './pages/PacotesPage';
import QuemSomosPage from './pages/QuemSomosPage';
import ComoAjudamosPage from './pages/ComoAjudamosPage';
import ContatoPage from './pages/ContatoPage';
import { useDarkMode } from './lib/useDarkMode';
import type { PageKey } from './lib/constants';

export default function App() {
  const [page, setPage] = useState<PageKey>('home');
  const { dark, toggle } = useDarkMode();

  const navigate = useCallback((p: PageKey) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const renderPage = () => {
    switch (page) {
      case 'home': return <HomePage onNavigate={navigate} />;
      case 'pacotes': return <PacotesPage />;
      case 'quem-somos': return <QuemSomosPage />;
      case 'como-ajudamos': return <ComoAjudamosPage />;
      case 'contato': return <ContatoPage />;
      default: return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-offwhite dark:bg-[#080E18]">
      <Header current={page} onNavigate={navigate} dark={dark} onToggleDark={toggle} />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}
