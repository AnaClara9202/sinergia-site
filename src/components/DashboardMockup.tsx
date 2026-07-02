import { motion } from 'framer-motion';

const ITEMS = [
  { name: 'Leite Integral', qty: '105L', expires: '2 dias', status: 'red' },
  { name: 'Queijo Mussarela', qty: '56kg', expires: '8 dias', status: 'yellow' },
  { name: 'Amido de Milho', qty: '116.7kg', expires: '35 dias', status: 'green' },
  { name: 'Recheio Goiaba', qty: '40.4kg', expires: '15 dias', status: 'green' },
  { name: 'Chocolate em Pó', qty: '18kg', expires: '33 dias', status: 'green' },
];

const DOT: Record<string, string> = {
  green: 'bg-green-500',
  yellow: 'bg-yellow-400',
  orange: 'bg-orange-400',
  red: 'bg-red-500',
};

export default function DashboardMockup() {
  return (
    <div className="glass-card overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-primary-pale dark:border-white/10">
        <div>
          <p className="font-heading font-bold text-sm text-primary-deep dark:text-white">Controle de Lotes</p>
          <p className="text-xs text-primary-muted dark:text-primary-pale/60">Metodologia FEFO</p>
        </div>
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
        </div>
      </div>

      <div className="relative">
        <span className="absolute top-3 right-4 z-10 inline-flex items-center rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold text-primary">
          FEFO - First Expired, First Out
        </span>
        <ul className="divide-y divide-primary-pale dark:divide-white/5">
          {ITEMS.map((item, i) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * i, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="flex items-center justify-between px-5 py-3.5"
            >
              <div className="flex items-center gap-3">
                <span className={`h-2.5 w-2.5 rounded-full ${DOT[item.status]}`} />
                <div>
                  <p className="text-sm font-medium text-primary-deep dark:text-white">{item.name}</p>
                  <p className="text-xs text-primary-muted dark:text-primary-pale/60">{item.qty}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-primary-muted dark:text-primary-pale/60">Vence em {item.expires}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
