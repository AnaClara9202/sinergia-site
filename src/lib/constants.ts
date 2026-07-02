export type PageKey = 'home' | 'pacotes' | 'quem-somos' | 'como-ajudamos' | 'contato';

export const NAV_ITEMS: { key: PageKey; label: string }[] = [
  { key: 'home', label: 'Início' },
  { key: 'pacotes', label: 'Pacotes' },
  { key: 'quem-somos', label: 'Quem Somos' },
  { key: 'como-ajudamos', label: 'Como Ajudamos' },
];

export const KIWIFY = {
  basico: 'https://pay.kiwify.com.br/lPsdTeg',
  taxa240: 'https://pay.kiwify.com.br/z7OeDy8',
  taxa480: 'https://pay.kiwify.com.br/rlXINoo',
  taxa720: 'https://pay.kiwify.com.br/Vk7VTO7',
} as const;

export const CONTACT_EMAIL = 'sinergiacontato.suporte@gmail.com';
export const DASHBOARD_URL = 'https://stock-control-dashboard--aleco4018.replit.app/lots';
