import React from 'react';

interface EditorialSectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  number?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const EditorialSectionHeader: React.FC<EditorialSectionHeaderProps> = ({
  label,
  title,
  subtitle,
  number,
  align = 'left',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 select-none ${isCenter ? 'text-center' : 'text-left'} ${className}`}>
      {/* Top Editorial Monochrome Tag */}
      <div className={`flex items-center gap-2.5 mb-3.5 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        {number && (
          <span className="font-mono text-xs font-bold text-ink-black tracking-widest px-2 py-0.5 bg-white border border-ink-black/20 shadow-sm rounded-sm">
            NO. {number}
          </span>
        )}
        <span className="text-[11px] font-mono uppercase tracking-[0.22em] font-bold text-ink-muted">
          {label}
        </span>
      </div>

      {/* Main Headline */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight text-ink-black leading-tight uppercase">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className={`mt-3 text-sm sm:text-base md:text-lg font-serif italic text-ink-muted leading-relaxed max-w-2xl ${
          isCenter ? 'mx-auto' : ''
        }`}>
          {subtitle}
        </p>
      )}

      {/* Hairline Divider */}
      <div className={`mt-5 h-[1px] bg-gradient-to-r from-ink-black/20 via-ink-black/40 to-ink-black/20 ${isCenter ? 'w-32 mx-auto' : 'w-full'}`} />
    </div>
  );
};