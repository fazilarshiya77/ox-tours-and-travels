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
        className="flex items-center gap-2.5 px-3.5 py-2.5 bg-[#1E293B] text-paper-white border-2 border-ink-black shadow-editorial hover:bg-green-800 transition-all duration-300"
        aria-label="Direct dispatch line on WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        <MessageSquare className="w-4 h-4 text-green-400 group-hover:text-paper-white transition-colors" />
        <span className="font-mono text-xs uppercase tracking-wider font-semibold">
          Dispatch Desk
        </span>
      </a>
    </aside>
  );
};
