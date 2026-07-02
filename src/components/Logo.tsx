type LogoProps = {
  variant?: 'blue' | 'white';
  className?: string;
};

export default function Logo({ variant = 'blue', className = 'h-10 w-10' }: LogoProps) {
  const main = variant === 'blue' ? '#5BC0EB' : '#FFFFFF';
  const dark = variant === 'blue' ? '#0B3D5B' : '#1A2B3C';
  const light = variant === 'blue' ? '#A8D8EA' : '#E8F4FD';

  return (
    <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Sinergia">
      <defs>
        <linearGradient id="sinergia-box" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={dark} />
          <stop offset="100%" stopColor={variant === 'blue' ? '#1A2B3C' : '#0B3D5B'} />
        </linearGradient>
      </defs>
      {/* box body */}
      <path d="M32 6 L54 18 L54 46 L32 58 L10 46 L10 18 Z" fill="url(#sinergia-box)" stroke={main} strokeWidth="2.5" strokeLinejoin="round" />
      {/* top translucent face */}
      <path d="M32 6 L54 18 L32 30 L10 18 Z" fill={light} fillOpacity="0.35" stroke={main} strokeWidth="1.5" strokeLinejoin="round" />
      {/* tape strip */}
      <path d="M14 20.5 L32 12 L50 20.5 L32 29 Z" fill={main} fillOpacity="0.18" />
      {/* S letter */}
      <path d="M37 36 C37 33.5 35 32.5 32 32.5 C29 32.5 27.5 33.8 27.5 35.5 C27.5 37 29 37.8 32 38.3 C35 38.8 36.5 39.6 36.5 41.3 C36.5 43 34.5 44.2 31.5 44.2 C28.5 44.2 26.5 43 26.5 40.8" stroke={main} strokeWidth="2.4" strokeLinecap="round" fill="none" />
    </svg>
  );
}
