import React from 'react';
import { MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '../../data/siteConfig';

export const WhatsAppButton: React.FC = () => {
  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 left-6 z-30 flex items-center group">
      <a
        href={SITE_CONFIG.socialLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="glossy-dark flex items-center gap-2.5 px-4 py-2.5 rounded-sm transition-all duration-300 hover:scale-105"
        aria-label="Direct dispatch line on WhatsApp"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <MessageSquare className="w-4 h-4 text-emerald-400" />
        <span className="font-mono text-xs uppercase tracking-wider font-bold text-white">
          Dispatch Desk
        </span>
      </a>
    </aside>
  );
};