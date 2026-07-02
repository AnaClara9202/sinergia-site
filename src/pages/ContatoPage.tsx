import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, MessageCircle, CheckCircle, Send } from 'lucide-react';
import Reveal from '../components/Reveal';
import { CONTACT_EMAIL } from '../lib/constants';

export default function ContatoPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="relative pt-28 pb-20 bg-offwhite dark:bg-[#080E18] min-h-screen overflow-hidden">
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT */}
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-pale dark:bg-white/10 px-4 py-1.5 text-sm font-medium text-primary">
              <MessageCircle className="h-4 w-4" /> Contato
            </span>
            <h1 className="mt-5 font-heading text-4xl sm:text-5xl font-extrabold text-primary-deep dark:text-white">
              Fale com nossa equipe
            </h1>
            <p className="mt-4 text-base text-primary-muted dark:text-primary-pale/70 leading-relaxed max-w-md">
              Tem dúvidas sobre nossos pacotes ou quer solicitar uma demonstração? Nossa equipe está pronta para ajudar você a transformar a gestão do seu estoque.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3 rounded-2xl bg-white dark:bg-[#101D30] border border-primary-pale dark:border-white/10 p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-pale dark:bg-white/10 text-primary shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-primary-muted dark:text-primary-pale/60">Email</p>
                  <p className="text-sm font-medium text-primary-deep dark:text-white break-all">{CONTACT_EMAIL}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl bg-white dark:bg-[#101D30] border border-primary-pale dark:border-white/10 p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-pale dark:bg-white/10 text-primary shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-primary-muted dark:text-primary-pale/60">Atendimento</p>
                  <p className="text-sm font-medium text-primary-deep dark:text-white">Rio de Janeiro — São Pedro da Aldeia e Região</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* RIGHT */}
          <Reveal delay={0.1}>
            <div className="glass-card p-8 relative">
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center text-center py-16"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-500">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <h3 className="mt-5 font-heading text-2xl font-extrabold text-primary-deep dark:text-white">Mensagem Enviada!</h3>
                    <p className="mt-2 text-sm text-primary-muted dark:text-primary-pale/70">Entraremos em contato em breve.</p>
                  </motion.div>
                ) : (
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <h2 className="font-heading text-2xl font-extrabold text-primary-deep dark:text-white mb-6">Envie sua mensagem</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-primary-deep dark:text-primary-pale mb-1.5">Nome</label>
                        <input required type="text" className="w-full rounded-xl border border-primary-pale dark:border-white/10 bg-offwhite dark:bg-[#0C1522] px-4 py-2.5 text-sm text-primary-deep dark:text-white focus:outline-none focus:ring-2 focus:ring-primary" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary-deep dark:text-primary-pale mb-1.5">Endereço de Email</label>
                        <input required type="email" className="w-full rounded-xl border border-primary-pale dark:border-white/10 bg-offwhite dark:bg-[#0C1522] px-4 py-2.5 text-sm text-primary-deep dark:text-white focus:outline-none focus:ring-2 focus:ring-primary" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary-deep dark:text-primary-pale mb-1.5">Mensagem</label>
                        <textarea required minLength={10} className="w-full min-h-[140px] rounded-xl border border-primary-pale dark:border-white/10 bg-offwhite dark:bg-[#0C1522] px-4 py-2.5 text-sm text-primary-deep dark:text-white focus:outline-none focus:ring-2 focus:ring-primary resize-y" />
                      </div>
                      <button type="submit" className="btn-primary w-full">
                        Enviar Mensagem <Send className="h-4 w-4" />
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
